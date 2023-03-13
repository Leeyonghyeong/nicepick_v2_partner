<template>
  <article>
    <div class="history">
      <div v-if="!chatUser || !route.query.id" class="box"></div>

      <div v-else class="box">
        <div class="qna">
          <div class="user-btn">
            <div class="user">
              <img
                v-if="getDevice !== 'pc'"
                class="back"
                src="../../../../assets/login/arrow_lt.png"
                alt="뒤로"
                @click="close"
              />
              <img
                class="profile"
                v-if="getDevice !== 'mobile' && chatUser.userImg"
                :src="chatUser.userImg"
                :alt="chatUser.userName"
              />
              <img
                class="profile"
                v-else-if="getDevice !== 'mobile' && !chatUser.userImg"
                src="../../../../assets/dashboard/qna/profile.png"
                :alt="chatUser.userImg"
              />
              {{ chatUser.userName }}
            </div>
            <img
              @click="showBtn = !showBtn"
              class="ect"
              src="../../../../assets/dashboard/qna/btn.png"
              alt="더보기"
            />
            <button v-if="showBtn" class="exit" @click="showExit">
              채팅방 나가기
            </button>
          </div>
          <div class="chat-message-list">
            <div ref="chatListDiv" class="chat-message-body">
              <div
                class="chat-item"
                v-for="(item, index) in chatMessageList"
                :key="item.id"
              >
                <div
                  v-if="
                    compareDate(
                      item.createAt,
                      chatMessageList[index === 0 ? index : index - 1].createAt,
                      index
                    )
                  "
                  class="date"
                >
                  {{ chatDateString(item.createAt) }}
                </div>
                <div class="left-right">
                  <div
                    :class="{
                      right: item.senderId !== chatUser.id,
                      left: item.senderId === chatUser.id,
                      margin:
                        (index !== chatMessageList.length - 1 &&
                          item.senderId !==
                            chatMessageList[index + 1].senderId) ||
                        index === chatMessageList.length - 1,
                    }"
                  >
                    <div class="balloon">
                      <div
                        v-if="item.type === 'text'"
                        class="chat"
                        id="message"
                      >
                        <div>
                          {{ item.message }}
                        </div>
                      </div>
                      <div
                        v-else-if="item.type === 'image'"
                        class="chat"
                        id="message"
                      >
                        <div>
                          <a :href="item.message" target="_blank">
                            <img
                              :src="item.message"
                              :alt="item.fileOriginName"
                            />
                          </a>
                        </div>
                      </div>
                      <div
                        v-else
                        class="chat file-download"
                        id="message"
                        @click="fileDownLoad(item.fileOriginName, item.message)"
                      >
                        <div>
                          {{ item.fileOriginName }}
                        </div>
                      </div>
                      <div
                        v-if="
                          (index !== chatMessageList.length - 1 &&
                            item.senderId !==
                              chatMessageList[index + 1].senderId) ||
                          index === chatMessageList.length - 1
                        "
                        class="time"
                      >
                        {{ convertDate(item.createAt) }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="input">
            <div class="flex">
              <div class="add">
                <label for="file">
                  <img
                    src="../../../../assets/dashboard/qna/add.png"
                    alt="사진첨부"
                  />
                </label>
                <input type="file" id="file" @change="sendFile" />
              </div>
              <input
                v-model="message"
                type="text"
                placeholder="메세지를 입력하세요"
                @keypress.enter="sendMessage"
              />
            </div>
            <img
              class="send"
              src="../../../../assets/dashboard/qna/send.png"
              alt="보내기"
              @click="sendMessage"
            />
          </div>
        </div>
      </div>
    </div>
    <ExitChat v-if="showModal" @showExit="showExit" />
  </article>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useWindowStore } from '../../../../store/window'
import ExitChat from '../../../common/modal/dashboard/franchise/ExitChat.vue'
import { Socket } from 'socket.io-client'
import { User } from '../../../../types/user'
import { useRoute, useRouter } from 'vue-router'
import { ChatMessage } from '../../../../types/chat'
import { useUserStore } from '../../../../store/user'
import api from '../../../../config/axios.config'
import {
  ChatMessagesResponse,
  CommonResponse,
} from '../../../../types/response'
import {
  convertDate,
  compareDate,
  chatDateString,
  fileDownLoad,
} from '../../../../functions/chat'
import { toastAlert } from '../../../../functions/alert'

const props = defineProps<{
  socket: Socket
  chatUser: User | undefined
}>()

const emits = defineEmits<{
  (e: 'close'): void
  (e: 'getNoReadCount'): void
  (e: 'getRoomList'): void
}>()

const route = useRoute()
const router = useRouter()

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)
const userStore = useUserStore()
const { currentBrand } = storeToRefs(userStore)

const roomId = ref<string>('')
const chatMessageList = ref<ChatMessage[]>([])
const message = ref<string>('')

const page = ref<number>(1)

const chatListDiv = ref<HTMLDivElement | null>(null)

const getRoomId = async () => {
  if (currentBrand.value && props.chatUser) {
    const { data } = await api.get(
      `/chat/${currentBrand.value.id}/${props.chatUser.id}`
    )

    if (data.success) {
      if (data.roomId !== null) {
        roomId.value = data.roomId
        getChatMessageList()
      }
    }
  }
}

const getChatMessageList = async () => {
  if (roomId.value) {
    const { data } = await api.get<ChatMessagesResponse>(
      `/chat/message/${roomId.value}/${page.value}/COMPANY`
    )

    if (data.success) {
      chatMessageList.value = data.chatMessage.reverse()

      emits('getNoReadCount')
      emits('getRoomList')

      setTimeout(() => {
        chatBottom()
      }, 100)
    }
  }
}

const sendFile = async (e: Event) => {
  if (currentBrand.value) {
    const { id: userId } = route.query
    const input: HTMLInputElement = e.target as HTMLInputElement
    const files = input.files

    if (files && files.length > 0) {
      const formData = new FormData()

      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i])
      }

      formData.append('senderId', currentBrand.value.id)
      formData.append('chatRoomId', roomId.value)
      formData.append('isBrandRead', 'true')

      const addChatFile = await api.post('/chat/file', formData)

      if (addChatFile.data.success) {
        getChatMessageList()

        setTimeout(() => {
          chatBottom()
        }, 100)

        props.socket.emit('message', {
          receiverId: userId,
        })
      } else {
        toastAlert({
          text: addChatFile.data.errorMessage,
          type: 'warning',
        })
      }
    }
  }
}

const sendMessage = async () => {
  if (currentBrand.value) {
    const { id: userId } = route.query

    if (!message.value) {
      return
    }

    const { data: chatMessage } = await api.post<CommonResponse>(
      '/chat/message',
      {
        message: message.value,
        senderId: currentBrand.value.id,
        type: 'text',
        chatRoomId: roomId.value,
        isBrandread: true,
      }
    )

    if (chatMessage.success) {
      getChatMessageList()

      setTimeout(() => {
        chatBottom()
      }, 100)

      props.socket.emit('message', {
        receiverId: userId,
      })
    } else {
      toastAlert({
        text: chatMessage.errorMessage,
        type: 'warning',
      })
    }

    message.value = ''
  }
}

const chatBottom = () => {
  if (chatListDiv.value) {
    const height = chatListDiv.value.scrollHeight
    chatListDiv.value.scrollTo({ top: height })
  }
}

const close = () => {
  emits('close')

  setTimeout(() => {
    router.replace('/franchise/qna')
  }, 100)
}

props.socket.on('received', () => {
  getRoomId()
  getChatMessageList()
})

// 채팅방 나가기 관련
const showBtn = ref<boolean>(false)

const showModal = ref<boolean>(false)
const showExit = () => {
  showModal.value = !showModal.value
}
// 채팅방 나가기 관련

watch(
  () => route.query.id,
  () => {
    if (route.path === '/franchise/qna') {
      if (route.query.id) {
        chatMessageList.value = []
        getRoomId()
        getChatMessageList()
      }
    }
  }
)

onMounted(() => {
  if (getDevice.value !== 'pc') {
    getRoomId()
    getChatMessageList()
    document.body.setAttribute('style', 'overflow: hidden;')
    window.addEventListener('popstate', close)
  }
})

onUnmounted(() => {
  if (getDevice.value !== 'pc') {
    document.body.removeAttribute('style')
    window.removeEventListener('popstate', close)
  }
})
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  .history {
    .box {
      background-color: #f6f9ff;
      border: 1px solid #e2e7f1;
      width: 880px;
      height: 648px;
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);

      .qna {
        width: 100%;
        display: flex;
        flex-direction: column;

        .user-btn {
          padding: 0 16px;
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e7eefc;
          position: relative;
          .user {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14p x;
            font-weight: $medi;
            color: $fontMain;
            .back {
              width: 24px;
              height: 24px;
              cursor: pointer;
            }
            .profile {
              width: 40px;
              height: 40px;
              border-radius: 50%;
            }
          }
          .ect {
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
          .exit {
            position: absolute;
            top: 63px;
            right: 0;
            width: 109px;
            height: 49px;
            background-color: white;
            border: 1px solid $iconLine;
            border-radius: 5px;
            font-family: $pre;
            font-size: 14px;
            color: $fontMain;
            box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
            cursor: pointer;
            z-index: 1;
          }
        }
        .chat-message-list {
          .chat-message-body {
            padding: 0 16px;
            height: 516px;
            box-sizing: border-box;
            overflow-y: auto;
            -ms-overflow-style: none;
            scrollbar-width: none;
            position: relative;

            &::-webkit-scrollbar {
              display: none;
            }

            .chat-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              .date {
                padding: 3px 14px 4px 15px;
                margin: 30px 0;
                height: 20px;
                background-color: #e7eefc;
                color: #50648d;
                border-radius: 50px;
                font-size: 11px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .left-right {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 30px;
                font-size: 14px;

                .left,
                .right {
                  width: 100%;
                  margin-bottom: 12px;
                  .balloon {
                    width: 100%;
                    display: flex;
                    align-items: flex-end;
                    gap: 10px;
                    .chat {
                      max-width: 45%;
                      color: $fontMain;

                      div {
                        background-color: white;
                        border: 1px solid $sectionLine;
                        padding: 10px;
                        line-height: 22px;
                        border-radius: 10px;

                        img {
                          max-width: 100%;
                        }
                      }

                      &.file-download {
                        text-decoration: underline;
                        cursor: pointer;
                      }
                    }

                    .time {
                      font-size: 11px;
                      color: $fontSub;
                    }
                  }

                  &.left {
                    .balloon {
                      .chat {
                        div {
                          border-top-left-radius: 0;
                        }
                      }
                    }
                  }
                  &.right {
                    margin-bottom: 12px;
                    .balloon {
                      flex-direction: row-reverse;
                      .chat {
                        max-width: 45%;
                        color: white;

                        div {
                          background-color: #50648d;
                          border-top-right-radius: 0;
                        }
                      }
                    }
                  }

                  &.margin {
                    margin-bottom: 30px;
                  }
                }
              }
            }
          }
        }
        .input {
          width: 100%;
          min-height: 50px;
          padding: 0 16px;
          box-sizing: border-box;
          background-color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 50px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;

          .flex {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 15px;
            .add {
              img {
                width: 20px;
                height: 20px;
                cursor: pointer;
              }
            }
            input {
              width: 100%;
              font-family: Pretendard;
              font-size: 16px;
              font-weight: $reg;
              border: none;
            }
            input::placeholder {
              color: $inputLine;
            }
          }
          .send {
            width: 30px;
            height: 30px;
            cursor: pointer;
          }
          #file {
            display: none;
          }
        }
      }
    }
  }
}

@include tablet {
  article {
    position: fixed;
    top: 60px;
    left: 216px;
    height: calc(100vh - 60px);
    width: calc(100% - 216px);
    .history {
      height: 100%;
      .box {
        width: 100%;
        height: 100%;
        border: none;
        box-shadow: 0;
        border-radius: 0;

        .qna {
          height: 100%;
          .user-btn {
            min-height: 80px;
            .exit {
              top: 60px;
              right: 23px;
            }
          }
          .chat-message-list {
            background-color: #f6f9ff;
            .chat-message-body {
              height: calc(100vh - 190px);
              .left-right {
                .left,
                .right {
                  .balloon {
                    .chat {
                      max-width: 55%;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@include mobile {
  article {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    height: 100vh;
    width: 100%;

    .history {
      height: 100%;
      .box {
        width: 100%;
        height: 100%;
        border: none;
        box-shadow: 0;
        border-radius: 0;
        .qna {
          height: 100%;
          .user-btn {
            height: 60px;
            background-color: #fff;
            .exit {
              top: 49px;
              right: 24px;
            }
          }
          .chat-message-list {
            background-color: #f6f9ff;
            .chat-message-body {
              height: calc(100vh - 110px);
              .left-right {
                .left,
                .right {
                  .balloon {
                    .chat {
                      max-width: 55%;
                    }
                  }
                }
              }
            }
          }
          .input {
            border-radius: 0;
          }
        }
      }
    }
  }
}
</style>
