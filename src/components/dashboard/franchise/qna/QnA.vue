<template>
  <article class="qna">
    <div class="top-title">고객문의</div>

    <div class="list-history">
      <div class="list">
        <div class="box">
          <div class="top">
            <div class="top-btn">
              <div
                class="btn"
                :class="{ select: listType === 0 }"
                @click="getFindRoomList(0)"
              >
                <img
                  v-if="listType === 1"
                  src="../../../../assets/dashboard/qna/all.png"
                  alt="전체"
                />
                <img
                  v-else
                  src="../../../../assets/dashboard/qna/all_select.png"
                  alt="전체선택"
                />
                <div class="name">전체</div>
              </div>
              <div
                class="btn read"
                :class="{ select: listType === 1 }"
                @click="getFindRoomList(1)"
              >
                <div class="count">{{ noReadCount }}</div>
                <div class="name">안읽음</div>
              </div>
            </div>
            <div class="top-search">
              <div class="search-box">
                <img
                  src="../../../../assets/dashboard/qna/search.png"
                  alt="검색"
                />
                <input
                  v-model="searchKeyword"
                  type="text"
                  placeholder="브랜드 검색"
                  @input="getFindRoomList(listType)"
                />
              </div>
            </div>
          </div>
          <div
            v-if="
              (listType === 0 && chatRoomList.length === 0) ||
              (listType === 1 && chatNoReadRoomList.length === 0) ||
              (searchKeyword !== '' && findRoomList.length === 0)
            "
            class="empty"
          >
            새로운 문의 내역이 없습니다.
          </div>
          <div v-else class="chat-list">
            <div
              v-for="item in listType === 0 && searchKeyword === ''
                ? chatRoomList
                : listType === 0 && searchKeyword !== ''
                ? findRoomList
                : listType === 1 && searchKeyword === ''
                ? chatNoReadRoomList
                : findRoomList"
              :key="item.id"
              class="box room-item"
              :class="{ active: $route.query.id === item.user.id }"
              @click="changeChatRoom(item.user)"
            >
              <div class="user">
                <img
                  v-if="item.user.userImg"
                  :src="item.user.userImg"
                  :alt="item.user.userName"
                />
                <img
                  v-else
                  src="../../../../assets/dashboard/qna/profile.png"
                  :alt="item.user.userName"
                />
                <div class="name-main">
                  <div class="name">{{ item.user.userName }}</div>
                  <div class="main">
                    {{ item.lastChatMessage }}
                  </div>
                </div>
              </div>
              <div class="time-chat-count">
                <div class="time">{{ calcDate(item.updateAt) }}</div>
                <div class="chat-count" v-if="item.newMessageCount > 0">
                  {{ item.newMessageCount }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Chatting
        v-if="getDevice === 'pc'"
        :socket="socket"
        :chat-user="chatUser"
        @close="closeMessageComponent"
        @get-no-read-count="getNoReadCount"
        @get-room-list="getRoomList"
      />
    </div>
    <Chatting
      v-if="getDevice !== 'pc' && isShowMessageComponent && chatUser"
      :socket="socket"
      :chat-user="chatUser"
      @close="closeMessageComponent"
      @get-no-read-count="getNoReadCount"
      @get-room-list="getRoomList"
    />
  </article>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useWindowStore } from '../../../../store/window'
import { io } from 'socket.io-client'
import Chatting from '../../franchise/qna/Chatting.vue'
import { useUserStore } from '../../../../store/user'
import { User } from '../../../../types/user'
import { ChatRoom } from '../../../../types/chat'
import { ChatRoomsResponse, CountResponse } from '../../../../types/response'
import api from '../../../../config/axios.config'
import { calcDate } from '../../../../functions/chat'
import { toastAlert } from '../../../../functions/alert'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)
const userStore = useUserStore()
const { currentBrand } = storeToRefs(userStore)

const chatUser = ref<User>()

const chatRoomList = ref<ChatRoom[]>([])
const chatNoReadRoomList = ref<ChatRoom[]>([])
const findRoomList = ref<ChatRoom[]>([])
const noReadCount = ref<number>(0)

const listType = ref<number>(0)
const searchKeyword = ref<string>('')

const isShowMessageComponent = ref<boolean>(false)

const socket = io('ws://localhost:3001')

socket.on('connect', () => {
  socket.emit('add_socket', {
    userType: 'COMPANY',
    typeId: currentBrand.value?.id,
  })
})

socket.on('received', () => {
  chatInit()
})

const getRoomList = async () => {
  if (currentBrand.value) {
    const { data } = await api.get<ChatRoomsResponse>(
      `/chat/room/list/${currentBrand.value.id}`
    )

    if (data.success) {
      chatRoomList.value = data.chatRoom

      for (const room of chatRoomList.value) {
        const { data: messageCount } = await api.get<CountResponse>(
          `/chat/new/message/${room.id}/COMPANY`
        )

        if (messageCount.success) {
          room.newMessageCount = messageCount.count
        } else {
          room.newMessageCount = 0
        }
      }

      chatNoReadRoomList.value = chatRoomList.value.filter(
        (e) => e.newMessageCount > 0
      )
    }
  }
}

const getNoReadCount = async () => {
  if (currentBrand.value) {
    const { data } = await api.get(
      `/chat/read/count/${currentBrand.value.id}/COMPANY`
    )

    if (data.success) {
      noReadCount.value = data.count.count
    } else {
      toastAlert({
        text: data.errorMessage,
        type: 'warning',
      })
    }
  }
}

const getFindRoomList = (type: number) => {
  listType.value = type
  if (listType.value === 0) {
    findRoomList.value = chatRoomList.value.filter((e) =>
      e.user.userName.toLowerCase().includes(searchKeyword.value.toLowerCase())
    )
  } else {
    findRoomList.value = chatNoReadRoomList.value.filter((e) =>
      e.user.userName.toLowerCase().includes(searchKeyword.value.toLowerCase())
    )
  }
}

const changeChatRoom = (user: User) => {
  chatUser.value = user
  isShowMessageComponent.value = true
  router.push(`/franchise/qna?id=${user.id}`)
}

const closeMessageComponent = () => {
  isShowMessageComponent.value = false
}

const chatInit = () => {
  const { id: userId } = route.query

  if (!userId) {
    router.push('/franchise/qna')
    isShowMessageComponent.value = false
  }

  getRoomList()
  getNoReadCount()
}

watch(
  () => route.query.id,
  () => {
    if (route.path === '/franchise/qna') {
      chatInit()
    }
  }
)

onMounted(() => {
  chatInit()
})

onUnmounted(() => {
  socket.disconnect()
})
</script>

<style lang="scss" scoped>
@import '@/scss/main';

.qna {
  padding: 50px 0 76px 160px;
  width: auto !important;

  .none {
    text-decoration: none;
    color: inherit;
  }

  .top-title {
    font-size: 20px;
    font-weight: $medi;
    color: $fontMain;
    padding-bottom: 50px;
  }

  .list-history {
    display: flex;
    gap: 30px;

    .list {
      display: flex;
      gap: 30px;
      .box {
        background-color: white;
        width: 360px;
        height: 648px;
        border-radius: 10px;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
        .top {
          padding: 15px 15px 20px;
          border-bottom: 1px solid $sectionLine;
          display: flex;
          flex-direction: column;
          gap: 15px;
          .top-btn {
            height: 60px;
            display: flex;
            .btn {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 3px;
              font-size: 14px;
              color: $fontSub;
              cursor: pointer;
              img {
                width: 18px;
                height: 18px;
              }
            }
            .read {
              box-shadow: 1px 0 0 0 $sectionLine inset;
            }
            .select {
              font-weight: $medi;
              color: $fontMain;
              .count {
                color: $mainColor;
              }
            }
          }
          .top-search {
            background-color: #fafafa;
            height: 50px;
            border-radius: 10px;
            padding: 10px 17px;
            box-sizing: border-box;
            .search-box {
              display: flex;
              gap: 10px;
              img {
                width: 30px;
                height: 30px;
                cursor: pointer;
              }
              input {
                background-color: transparent;
                border: none;
                font-size: 16px;
                font-family: $pre;
              }
              input::placeholder {
                color: $inputLine;
              }
            }
          }
        }
        .empty {
          text-align: center;
          padding-top: 100px;
          font-size: 14px;
          color: $fontSub;
        }
        .chat-list {
          .box {
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding: 20px 15px;
            box-sizing: border-box;
            border-radius: 0;
            box-shadow: none;
            cursor: pointer;
            .user {
              display: flex;
              align-items: center;
              gap: 10px;
              img {
                display: blodk;
                width: 40px;
                height: 40px;
                border-radius: 50%;
              }
              .name-main {
                width: 223px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                .name {
                  font-size: 14px;
                  color: $fontMain;
                  font-weight: $medi;
                }
                .main {
                  font-size: 12px;
                  color: $fontSub;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
            }
            .time-chat-count {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              gap: 8px;
              .time {
                font-size: 10px;
                color: $fontSub;
              }
              .chat-count {
                background-color: $subColor;
                padding: 1px 4px 2px 4px;
                font-size: 10px;
                color: white;
                border-radius: 50px;
              }
            }
          }
          .box:hover {
            background-color: #fbfcff;
          }

          .box.active {
            background-color: #f6f9ff;
          }
          .chatting {
            background-color: #f6f9ff;
          }
        }
      }
    }
  }
}

@include tablet {
  .qna {
    padding: 50px 24px 60px;
    .list-history {
      .list {
        width: 100%;
        .box {
          width: 100%;
          .chat-list {
            .chatting {
              background-color: white;
            }
          }
        }
      }
    }
  }
}

@include mobile {
  .qna {
    padding: 0;
    .top-title {
      position: absolute;
      top: 23px;
      left: 24px;
      font-size: 16px;
      padding: 0;
    }

    .list-history {
      .list {
        width: 100%;
        .box {
          width: 100%;
          height: 100%;
          border-radius: 0;
          box-shadow: none;
          .top {
            padding: 10px 24px 20px;
            gap: 10px;
            .top-btn {
              height: 40px;
              .btn {
                flex-direction: row;
                gap: 10px;
              }
            }
          }
          .chat-list {
            .box {
              padding: 20px 24px;
            }
            .chatting {
              background-color: white;
            }
          }
        }
      }
    }
  }
}
</style>
