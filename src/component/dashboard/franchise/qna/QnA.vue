<template>
  <section>
    <article>
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
                    <div class="main">
                      안녕하세요. 창업문의 드리려고 합니다.
                    </div>
                  </div>
                </div>
                <div class="time-chat-count">
                  <div class="time">어제</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="history">
          <div v-if="selectBtn === '전체'" class="box">
            <img src="../../../../assets/dashboard/qna/qna.png" alt="" />
            <div class="history-empty">
              <div class="empty-bold">대화 내역이 없습니다.</div>
              <div class="empty-sub">
                브랜드를 찾아보고 지금 창업 문의를 시작해보세요!
              </div>
            </div>
          </div>

          <div v-if="selectBtn === '안읽음'" class="box">
            <div class="qna">
              <div class="user-btn">
                <div class="user">
                  <img
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
                <button v-if="showBtn" class="exit">채팅방 나가기</button>
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
                          안녕하세요. 창업문의 드리려고 합니다. 강남역이나
                          신사역에 오픈가능한가요?
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
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectBtn = ref<string>('전체')
const showBtn = ref<boolean>(false)
const selectChat = ref<string>('3')
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 160px 76px;
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
          .user {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            font-weight: $medi;
            color: $fontMain;
            img {
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
                  width: 40%;
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
                  width: 40%;
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
}

@include tablet {
  article {
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

      .history {
        display: none;
      }
    }
  }
}

@include mobile {
  article {
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
            .chatting {
              background-color: white;
            }
          }
        }
      }

      .history {
        display: none;
      }
    }
  }
}
</style>
