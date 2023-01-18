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
            <div class="ment">새로운 문의 내역이 없습니다.</div>
          </div>
        </div>

        <div v-if="getDevice === 'pc'" class="qna">
          <div class="padding-box">
            <img
              src="../../../../assets/dashboard/qna/qna.png"
              alt="대화내역"
            />
            <div class="bold">대화 내역이 없습니다.</div>
            <div class="sub">
              브랜드를 찾아보고 지금 바로 창업 문의를 시작해보세요!
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
      .padding-box {
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
