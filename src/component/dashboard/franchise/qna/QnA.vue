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
                :class="{ select: selectBtn === '전체' }"
                @click="selectBtn = '전체'"
              >
                <img
                  v-if="selectBtn === '안읽음'"
                  src="../../../../assets/dashboard/qna/all.png"
                  alt="전체"
                />
                <img
                  v-if="selectBtn === '전체'"
                  src="../../../../assets/dashboard/qna/all_select.png"
                  alt="전체선택"
                />
                <div class="name">전체</div>
              </div>
              <div
                class="btn read"
                :class="{ select: selectBtn === '안읽음' }"
                @click="selectBtn = '안읽음'"
              >
                <div class="count">13</div>
                <div class="name">안읽음</div>
              </div>
            </div>
            <div class="top-search">
              <div class="search-box">
                <img
                  src="../../../../assets/dashboard/qna/search.png"
                  alt="검색"
                />
                <input type="text" placeholder="브랜드 검색" />
              </div>
            </div>
          </div>
          <div v-if="selectBtn === '전체'" class="empty">
            새로운 문의 내역이 없습니다.
          </div>
          <div v-if="selectBtn === '안읽음'" class="chat-list">
            <div class="box">
              <div class="user">
                <img
                  src="../../../../assets/dashboard/qna/profile.png"
                  alt="프로필"
                />
                <div class="name-main">
                  <div class="name">홍길동</div>
                  <div class="main">
                    안녕하세요. 창업문의 드리려고 합니다. 강남역이나 논현역
                    근처에 오픈 가능할까요?
                  </div>
                </div>
              </div>
              <div class="time-chat-count">
                <div class="time">오전 11:59</div>
                <div class="chat-count">3</div>
              </div>
            </div>
            <div class="box">
              <div class="user">
                <img
                  src="../../../../assets/dashboard/qna/profile.png"
                  alt="프로필"
                />
                <div class="name-main">
                  <div class="name">고길동</div>
                  <div class="main">
                    안녕하세요. 창업문의 드리려고 합니다. 강남역이나 논현역
                    근처에 오픈 가능할까요?
                  </div>
                </div>
              </div>
              <div class="time-chat-count">
                <div class="time">10월30일</div>
                <div class="chat-count">10</div>
              </div>
            </div>
            <div :class="{ chatting: selectChat === '3' }" class="box">
              <div class="user">
                <img
                  src="../../../../assets/dashboard/qna/profile.png"
                  alt="프로필"
                />
                <div class="name-main">
                  <div class="name">김철수</div>
                  <div class="main">안녕하세요. 창업문의 드리려고 합니다.</div>
                </div>
              </div>
              <div class="time-chat-count">
                <div class="time">어제</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Chatting v-if="getDevice === 'pc'" />
    </div>
  </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useWindowStore } from '../../../../store/window'
import Chatting from '../../franchise/qna/Chatting.vue'
const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const selectBtn = ref<string>('전체')
const selectChat = ref<string>('3')
</script>

<style lang="scss" scoped>
@import '@/scss/main';

.qna {
  padding: 50px 0 76px 160px;

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
                width: 40px;
                height: 40px;
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
