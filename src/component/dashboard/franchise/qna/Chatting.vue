<template>
  <article>
    <div class="history">
      <div class="box" style="display: none">
        <img src="../../../../assets/dashboard/qna/qna.png" alt="" />
        <div class="history-empty">
          <div class="empty-bold">대화 내역이 없습니다.</div>
          <div class="empty-sub">
            브랜드를 찾아보고 지금 창업 문의를 시작해보세요!
          </div>
        </div>
      </div>

      <div class="box">
        <div class="qna">
          <div class="user-btn">
            <div class="user">
              <img
                v-if="getDevice !== 'pc'"
                class="back"
                src="../../../../assets/login/arrow_lt.png"
                alt="뒤로"
              />
              <img
                class="profile"
                v-if="getDevice !== 'mobile'"
                src="../../../../assets/dashboard/qna/profile.png"
                alt=""
              />
              김철수
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
          <div class="main">
            <div class="date">2022. 11. 30 수요일</div>
            <div class="left-right">
              <div class="right">
                <div class="balloon">
                  <div class="chat">
                    <div>
                      어서오세요. '브랜드1'입니다. 궁금한 내용이 있으시면
                      메세지를 남겨주세요.
                    </div>
                  </div>
                  <div class="time">오전 11:40</div>
                </div>
              </div>
              <div class="left">
                <div class="balloon">
                  <div class="chat">
                    <div>
                      안녕하세요. 창업문의 드리려고 합니다. 강남역이나 신사역에
                      오픈가능한가요?
                    </div>
                  </div>
                  <div class="time">오전 11:41</div>
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
                <input type="file" name="file" id="file" />
              </div>
              <input type="text" placeholder="메세지를 입력하세요" />
            </div>
            <img
              class="send"
              src="../../../../assets/dashboard/qna/send.png"
              alt="보내기"
            />
          </div>
        </div>
      </div>
    </div>
    <ExitChat v-if="showModal" @showExit="showExit" />
  </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useWindowStore } from '../../../../store/window'
import ExitChat from '../../../common/modal/dashboard/franchise/ExitChat.vue'
const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const showBtn = ref<boolean>(false)

const showModal = ref<boolean>(false)
const showExit = () => {
  showModal.value = !showModal.value
}
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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 200px;
        height: 200px;
      }
      .history-empty {
        text-align: center;
        .empty-bold {
          padding: 10px 0;
          color: $fontMain;
        }
        .empty-sub {
          font-size: 14px;
          color: $fontSub;
        }
      }
    }
    .qna {
      width: 100%;
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
        }
      }
      .main {
        padding: 30px 16px 0;
        height: 516px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        .date {
          width: 120px;
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
          .balloon {
            display: flex;
            align-items: flex-end;
            gap: 10px;
            .chat {
              display: flex;
              flex-direction: column;
              gap: 12px;
              div {
                padding: 10px;
                line-height: 22px;
              }
            }
            .time {
              font-size: 11px;
              color: $fontSub;
            }
          }
          .left {
            width: 100%;
            .balloon {
              width: 100%;
              .chat {
                width: 45%;
                div {
                  color: $fontMain;
                  background-color: white;
                  border: 1px solid $sectionLine;
                  border-radius: 10px;
                  border-top-left-radius: 0;
                }
              }
            }
          }
          .right {
            width: 100%;
            .balloon {
              width: 100%;
              flex-direction: row-reverse;
              .chat {
                width: 45%;
                div {
                  color: white;
                  background-color: #50648d;
                  border-radius: 10px;
                  border-top-right-radius: 0;
                }
              }
            }
          }
        }
      }
      .input {
        width: 100%;
        height: 49px;
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

@include tablet {
  article {
    padding: 0;
    .history {
      .box {
        width: 100%;
        border: none;
        box-shadow: 0;
        border-radius: 0;
      }
      .qna {
        height: 100%;
        .user-btn {
          .exit {
            top: 60px;
            right: 23px;
          }
        }
        .main {
          height: 100%;
          background-color: #f6f9ff;
          .left-right {
            .left {
              .balloon {
                .chat {
                  width: 55%;
                }
              }
            }
            .right {
              .balloon {
                .chat {
                  width: 55%;
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

@include mobile {
  article {
    padding: 0;
    .history {
      .box {
        width: 100%;
        border: none;
        box-shadow: 0;
        border-radius: 0;
      }
      .qna {
        height: 100%;
        .user-btn {
          .exit {
            top: 49px;
            right: 24px;
          }
        }
        .main {
          height: 100%;
          background-color: #f6f9ff;
          .left-right {
            .left {
              .balloon {
                .chat {
                  width: 55%;
                }
              }
            }
            .right {
              .balloon {
                .chat {
                  width: 55%;
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
</style>
