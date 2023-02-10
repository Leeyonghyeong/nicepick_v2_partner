<template>
  <section>
    <article>
      <div class="top-title">고객문의</div>

      <div class="flex">
        <div class="qna-list">
          <div class="top">
            <div class="category-box">
              <div
                class="all"
                :class="{ select: selectMenu === '전체' }"
                @click="selectMenu = '전체'"
              >
                <img
                  v-if="selectMenu !== '전체'"
                  src="../../../../assets/dashboard/qna/all.png"
                  alt="전체"
                />
                <img
                  v-if="selectMenu === '전체'"
                  src="../../../../assets/dashboard/qna/all_select.png"
                  alt="전체"
                />
                <div class="name">전체</div>
              </div>
              <div
                :class="{ select: selectMenu === '안읽음' }"
                @click="selectMenu = '안읽음'"
              >
                <div class="default">13</div>
                <div class="name">안읽음</div>
              </div>
            </div>
            <div class="search">
              <input type="text" placeholder="브랜드 검색 " />
            </div>
          </div>
          <div class="list">
            <!-- <div class="ment">새로운 문의 내역이 없습니다.</div> -->

            <div class="no-read">
              <div class="talk" @click="selectUser = '1'">
                <div
                  class="padding"
                  :class="{ chatselect: selectUser === '1' }"
                >
                  <div class="profile">
                    <img
                      src="../../../../assets/dashboard/qna/profille.png"
                      alt=""
                    />
                  </div>
                  <div class="name-main">
                    <div class="name">홍길동</div>
                    <div class="main">
                      강남역이나 논현역 근처에 오픈하고 싶은데 괜찮을까요?
                    </div>
                  </div>
                  <div class="time-count">
                    <div class="time">오전 11:41</div>
                    <div class="count">1</div>
                  </div>
                </div>
              </div>
              <div class="talk" @click="selectUser = '2'">
                <div
                  class="padding"
                  :class="{ chatselect: selectUser === '2' }"
                >
                  <div class="profile">
                    <img
                      src="../../../../assets/dashboard/qna/profille.png"
                      alt=""
                    />
                  </div>
                  <div class="name-main">
                    <div class="name">김철수</div>
                    <div class="main">
                      강남역이나 논현역 근처에 오픈 가능할까요?
                    </div>
                  </div>
                  <div class="time-count">
                    <div class="time">2월 6일</div>
                    <div class="count">100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="qna">
          <!-- <div class="no-history">
            <img
              src="../../../../assets/dashboard/qna/qna.png"
              alt="대화내역"
            />
            <div class="bold">대화 내역이 없습니다.</div>
            <div class="sub">
              브랜드를 찾아보고 지금 바로 창업 문의를 시작해보세요!
            </div>
          </div> -->

          <div class="chat-history" v-if="selectUser === '1'">
            <div class="user-btn">
              <div class="user">
                <img
                  src="../../../../assets/dashboard/qna/profille.png"
                  alt=""
                />
                홍길동
              </div>
              <img
                @click="showBtn = !showBtn"
                src="../../../../assets/dashboard/qna/btn.png"
                alt="더보기"
              />
              <button v-if="showBtn" class="exit">채팅방 나가기</button>
            </div>
            <div class="main">
              <div class="date">오늘</div>
              <div class="left-right">
                <div class="right">
                  <div class="box">
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
                  <div class="box">
                    <div class="chat">
                      <div>
                        강남역이나 논현역 근처에 오픈하고 싶은데 괜찮을까요?
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
          <div class="chat-history" v-if="selectUser === '2'">
            <div class="user-btn">
              <div class="user">
                <img
                  src="../../../../assets/dashboard/qna/profille.png"
                  alt=""
                />
                김철수
              </div>
              <img
                src="../../../../assets/dashboard/qna/btn.png"
                alt="더보기"
              />
            </div>
            <div class="main">
              <div class="date">2023.02.06 월요일</div>
              <div class="left-right">
                <div class="right">
                  <div class="box">
                    <div class="chat">
                      <div>
                        어서오세요. '브랜드2'입니다. 궁금한 내용이 있으시면
                        메세지를 남겨주세요.
                      </div>
                    </div>
                    <div class="time">오전 11:40</div>
                  </div>
                </div>
                <div class="left">
                  <div class="box">
                    <div class="chat">
                      <div>안녕하세요. 창업문의 드리려고 합니다.</div>
                      <div>강남역이나 논현역 근처에 오픈 가능할까요?</div>
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
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../../store/window'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const selectMenu = ref<string>('전체')
const selectUser = ref<string>()
const showBtn = ref<boolean>(false)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 0px 80px 160px;
  .top-title {
    font-size: 20px;
    color: $fontMain;
    font-weight: $medi;
    padding-bottom: 50px;
  }

  .flex {
    display: flex;
    gap: 30px;
    .qna-list {
      width: 360px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      .top {
        height: 160px;
        padding: 26px 15px 20px 15px;
        box-sizing: border-box;
        background-color: white;
        border-bottom: 1px solid $sectionLine;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        .category-box {
          display: flex;
          justify-content: space-around;
          align-items: center;
          div {
            width: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            font-size: 14px;
            color: $fontSub;
            cursor: pointer;
            img {
              width: 18px;
              height: 18px;
            }
          }
          .all {
            border-right: 1px solid $sectionLine;
          }
          .select {
            font-weight: $medi;
            .name {
              color: $fontMain;
            }
            .default {
              color: $mainColor;
            }
          }
        }
        .search {
          padding-top: 26px;
          input {
            width: 100%;
            height: 50px;
            padding-left: 57px;
            box-sizing: border-box;

            border: none;
            border-radius: 10px;
            background-color: #fafafa;

            background-image: url(../../../../assets/dashboard/qna/search.png);
            background-repeat: no-repeat;
            background-size: 30px;
            background-position: 17px;
          }
          input::placeholder {
            font-size: 16px;
            font-weight: $reg;
            font-family: Pretendard;
            color: $inputLine;
          }
        }
      }
      .list {
        height: 488px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        background-color: white;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        .ment {
          padding-top: 100px;
          font-size: 14px;
          font-weight: $reg;
          color: $fontSub;
        }

        .no-read {
          width: 100%;
          .talk {
            width: 100%;
            .padding {
              height: 80px;
              display: flex;
              align-items: center;
              gap: 10px;
              padding: 0 16px;
              cursor: pointer;
              .profile {
                img {
                  width: 40px;
                  height: 40px;
                }
              }
              .name-main {
                width: 68%;
                .name {
                  padding-bottom: 5px;
                  font-size: 14px;
                  font-weight: $medi;
                  color: $fontMain;
                }
                .main {
                  font-size: 12px;
                  color: $fontSub;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
              .time-count {
                width: 100%;
                font-size: 10px;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                .time {
                  padding-bottom: 5px;
                  color: $fontSub;
                }
                .count {
                  background-color: $subColor;
                  color: white;
                  padding: 1px 4px 2px 4px;
                  border-radius: 50px;
                }
              }
            }
            .padding:hover {
              background-color: #fbfcff;
            }
            .chatselect {
              background-color: #f6f9ff;
            }
          }
        }
      }
    }

    .qna {
      position: relative;
      width: 880px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f6f9ff;
      border: 1px solid #e2e7f1;
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      font-weight: $reg;
      .no-history {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        img {
          width: 200px;
          height: 200px;
        }
        .bold {
          color: $fontMain;
        }
        .sub {
          font-size: 14px;
          color: $fontSub;
        }
      }
      .chat-history {
        width: 100%;
        .user-btn {
          width: 100%;
          position: absolute;
          top: 0;
          box-sizing: border-box;
          padding: 22px 16px 20px;
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
              cursor: default;
            }
          }
          img {
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
          height: 516px;
          box-sizing: border-box;
          padding-top: 50px;
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
            width: 882px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            font-size: 14px;
            .box {
              padding: 0 16px;
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
              .box {
                .chat {
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
              .box {
                flex-direction: row-reverse;
                .chat {
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
          position: absolute;
          bottom: 0;
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
    padding: 50px 24px 60px 24px;
    .flex {
      .qna-list {
        width: 100%;
      }
      .qna {
        display: none;
      }
    }
  }
}

@include mobile {
  article {
    padding: 0;

    .top-title {
      padding: 0;
      font-size: 16px;
      position: absolute;
      top: 23px;
      left: 24px;
    }

    .flex {
      .qna-list {
        width: 100%;
        box-shadow: none;
        .top {
          height: 130px;
          border-radius: 0;
          padding: 10px 23px 20px 24px;

          .category-box {
            .category {
              flex-direction: row;
              justify-content: center;
              gap: 10px;
              height: 40px;
            }
          }
          .search {
            padding-top: 10px;
          }
        }
        .list {
          .ment {
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>
