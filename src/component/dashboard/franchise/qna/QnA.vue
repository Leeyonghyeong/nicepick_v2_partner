<template>
  <section>
    <article>
      <div class="top-title">고객문의</div>

      <div class="flex">
        <div class="qna-list">
          <div class="top">
            <div class="category-box">
              <div class="category select">
                <img
                  src="../../../../assets/dashboard/qna/all.png"
                  alt="전체"
                />
                <div>전체</div>
              </div>
              <div class="category">
                <div class="default">13</div>
                <div>안읽음</div>
              </div>
            </div>
            <div class="search">
              <input type="text" placeholder="브랜드 검색 " />
            </div>
          </div>
          <div class="list">
            <!-- <div class="ment">새로운 문의 내역이 없습니다.</div> -->

            <div class="no-read">
              <div class="talk">
                <div class="padding">
                  <div class="profile">
                    <img
                      src="../../../../assets/dashboard/qna/profille.png"
                      alt=""
                    />
                  </div>
                  <div class="name-main">
                    <div class="name">홍길동</div>
                    <div class="main">
                      안녕하세요. 창업문의 드리려고 합니다. 강남역이나 논현역
                      근처에 오픈 가능할까요?
                    </div>
                  </div>
                  <div class="time-count">
                    <div class="time">오전 11:59</div>
                    <div class="count">1</div>
                  </div>
                </div>
              </div>
              <div class="talk">
                <div class="padding">
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
                    <div class="time">2월 1일</div>
                    <div class="count">100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="getDevice === 'pc'" class="qna">
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

          <div class="chat-history">
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
                <div class="left">
                  <div class="chat">
                    <div>안녕하세요. 창업문의 드리려고 합니다.</div>
                    <div>강남역이나 논현역 근처에 오픈 가능할까요?</div>
                  </div>
                  <div class="time">오전 11:41</div>
                </div>
                <div class="right">
                  <div class="chat">
                    <div>
                      어서오세요. '브랜드2'입니다.<br />궁금한 내용이 있으시면
                      메세지를 남겨주세요.
                    </div>
                  </div>
                  <div class="time">오전 11:40</div>
                </div>
              </div>
            </div>
            <div class="input">
              <div>
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

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
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
          .category {
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
          .select {
            color: $fontMain;
            font-weight: $medi;
            border-right: 1px solid $sectionLine;
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
                .name {
                  padding-bottom: 5px;
                  font-size: 14px;
                  font-weight: $medi;
                  color: $fontMain;
                }
                .main {
                  width: 223px;
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
          }
        }
      }
    }

    .qna {
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
        padding: 22px 16px 0;
        .user-btn {
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
              cursor: default;
            }
          }
          img {
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
        }
        .main {
          padding-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
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
            display: flex;
            .left {
              width: 100%;
            }
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
