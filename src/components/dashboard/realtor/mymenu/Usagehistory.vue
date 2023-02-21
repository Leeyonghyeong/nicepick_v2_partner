<template>
  <section>
    <article>
      <div class="top-title">마이메뉴</div>

      <div class="category">
        <RouterLink to="/realtor/mymenu/myinfo" class="none">
          <div class="category-name">내 정보관리</div>
        </RouterLink>
        <div class="category-name select">이용내역</div>
      </div>

      <div class="date-state">
        <div class="date">
          <div class="date-gap">
            <input type="date" value="" />
            <span>-</span>
            <input type="date" value="" />
          </div>
          <button>조회</button>
        </div>
      </div>

      <!-- <div class="history">
        <div class="ment">이용 내역이 없습니다.</div>
      </div> -->

      <div class="item">
        <div :class="{ style: plus === 'show' }" class="ing-item plus">
          <div class="padding">
            <div class="title">
              <div>구매완료 <span class="ing">· 이용중</span></div>
              <div class="pay">2023.01.22 결제(계좌이체)</div>
            </div>
            <div class="info-item">
              <div class="info">
                <div class="item-title">상권 지역플러스+ (30일)</div>
                <div class="period">이용기간 : 2023.01.01 ~</div>
              </div>
              <div class="cost">
                <div class="text-right">
                  <div class="cost-title">
                    <span class="bold">297,000</span> 원
                  </div>
                  <div class="vat">VAT 포함</div>
                </div>
                <button>기간연장</button>
              </div>
            </div>
          </div>
          <div v-if="plus !== 'show'" @click="plus = 'show'" class="more">
            <img
              src="../../../../assets/dashboard/arrow_more.png"
              alt="더보기"
            />
          </div>
        </div>

        <div v-if="plus === 'show'" class="more-section">
          <div class="content">
            <div class="place">
              <div class="title">기본 노출 지역</div>
              <div class="place-box">서울 강남구 역삼동</div>
            </div>
            <div class="add-place">
              <div class="title">
                추가 노출 지역 (3/3)
                <span class="red">
                  * 추가노출지역은 추가 후 변경이 불가하오니 이용에 참고하시기
                  바랍니다.
                </span>
              </div>
              <div class="add-list">
                <div class="add">
                  <div class="add-box">
                    시·도
                    <img
                      src="../../../../assets/dashboard/arrow_more.png"
                      alt=""
                    />
                  </div>
                  <div class="add-box">
                    시·군·구
                    <img
                      src="../../../../assets/dashboard/arrow_more.png"
                      alt=""
                    />
                  </div>
                  <div class="add-box">
                    동
                    <img
                      src="../../../../assets/dashboard/arrow_more.png"
                      alt=""
                    />
                  </div>
                  <button class="add-btn">
                    <img src="../../../../assets/dashboard/add.png" alt="" />
                    추가
                  </button>
                </div>
                <div class="list">
                  <div class="list-box">
                    <div class="name">서울 강남구 대치동</div>
                    <div class="sub">잔여기간: 30일</div>
                  </div>
                  <div class="list-box">
                    <div class="name">서울 강남구 삼성동</div>
                    <div class="sub">잔여기간: 15일</div>
                  </div>
                  <div class="list-box">
                    <div class="name">서울 강남구 청담동</div>
                    <div class="sub">
                      잔여기간: <span class="blue">3일</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div @click="plus = 'hide'" class="close">
            <img src="../../../../assets/login/arrow_up.png" alt="닫기" />
          </div>
        </div>

        <div class="complete-item">
          <div class="padding">
            <div class="title">
              <div>구매완료 · 이용완료</div>
              <div class="pay">2023.01.01 결제(삼성카드)</div>
            </div>
            <div class="info-item">
              <div class="info">
                <div class="item-title">추천 중개사 (30일)</div>
                <div class="period">
                  이용기간 : 2023.01.01 ~ 02.01
                  <span class="alarm">광고기간이 7일 남았습니다.</span>
                </div>
              </div>
              <div class="cost">
                <div class="text-right">
                  <div class="cost-title">
                    <span class="bold">11,000</span> 원
                  </div>
                  <div class="vat">VAT 포함</div>
                </div>
                <button>기간연장</button>
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

const plus = ref<string>()
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 160px 76px;
  box-sizing: border-box;
  width: 100%;

  .none {
    text-decoration: none;
    color: inherit;
  }

  .top-title {
    font-size: 20px;
    font-weight: $medi;
    color: $fontMain;
    padding-bottom: 65px;
  }

  .category {
    display: flex;
    gap: 30px;
    color: $fontSub;
    border-bottom: 1px solid $iconLine;
    .category-name {
      cursor: pointer;
    }
    .select {
      color: $mainColor;
      font-weight: $semi;
      border-bottom: 2px solid $mainColor;
      padding-bottom: 14px;
    }
  }

  .date-state {
    width: 1270px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .date {
      padding-top: 30px;
      display: flex;
      .date-gap {
        display: flex;
        align-items: center;
        gap: 5px;
        input {
          width: 152px;
          height: 40px;
          padding: 0 16px;
          box-sizing: border-box;
          border: none;
          border-radius: 50px;
          font-family: Pretendard;
        }
      }
      button {
        width: 152px;
        height: 40px;
        margin-left: 24px;
        border: none;
        border-radius: 50px;
        background-color: $mainColor;
        color: white;
        font-family: Pretendard;
        font-size: 14px;
        font-weight: $reg;
        cursor: pointer;
      }
    }
    .state {
      display: flex;
      gap: 20px;
      label {
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
        input {
          margin: 0;
          cursor: pointer;
        }
        input[type='radio'] {
          appearance: none;
          border: 1px solid $inputLine;
          border-radius: 50%;
          width: 16px;
          height: 16px;
        }
        input[type='radio']:checked {
          background-image: url(../../../../assets/dashboard/checked.png);
          background-repeat: no-repeat;
          background-size: 8px;
          background-position: center;
        }
        .name {
          font-size: 14px;
          color: $fontMain;
        }
      }
    }
  }

  .history {
    margin-top: 30px;
    background-color: white;
    width: 1270px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    font-size: 14px;
    color: $fontSub;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item {
    width: 1270px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
    .ing-item,
    .complete-item {
      padding: 30px;
      box-sizing: border-box;
      background-color: white;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      z-index: 1;
      .title {
        padding-bottom: 10px;
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        border-bottom: 1px solid $sectionLine;
        font-size: 18px;
        color: $inputLine;
        font-weight: $medi;
        .ing {
          color: $mainColor;
        }
        .pay {
          font-size: 14px;
          color: $fontSub;
          font-weight: $reg;
        }
      }
      .info-item {
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        .info {
          .item-title {
            font-size: 18px;
            color: $fontMain;
            display: flex;
            align-items: center;
            gap: 6px;
            img {
              width: 20px;
              height: 20px;
            }
          }
          .period {
            padding-top: 13px;
            font-size: 14px;
            color: $fontSub;
            .alarm {
              padding-left: 10px;
              color: $subColor;
              font-size: 12px;
              font-weight: $medi;
            }
          }
        }
        .cost {
          display: flex;
          gap: 30px;
          .text-right {
            .cost-title {
              font-size: 18px;
              color: $fontMain;
              .sub {
                font-size: 15px;
                color: $fontSub;
                text-decoration: line-through;
                padding-right: 10px;
              }
              .bold {
                font-weight: $medi;
              }
            }
            .vat {
              padding-top: 12px;
              font-size: 12px;
              color: $fontSub;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              gap: 3px;
              .discount {
                color: $mainColor;
                display: flex;
                align-items: center;
                img {
                  width: 14px;
                  height: 14px;
                }
              }
            }
          }
          button {
            width: 114px;
            background-color: white;
            border: 1px solid $mainColor;
            border-radius: 10px;
            font-size: 16px;
            font-family: Pretendard;
            color: $mainColor;
            cursor: pointer;
          }
          .disabled {
            background-color: $iconLine;
            border: none;
            color: $inputLine;
            cursor: default;
          }
        }
      }
    }
    .style {
      box-shadow: 0 0 0 1px $mainColor inset;
    }
    .plus {
      padding: 0;
      .padding {
        padding: 30px;
      }
      .more {
        width: 100%;
        display: flex;
        justify-content: center;
        border-top: 1px solid $sectionLine;
        padding: 10px 0;
        cursor: pointer;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }

    .more-section {
      margin-top: -30px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      .content {
        padding: 80px 30px 30px;
        color: $fontMain;
        display: flex;
        flex-direction: column;
        gap: 30px;
        .red {
          color: $subColor;
        }
        .blue {
          color: $mainColor;
        }
        .place {
          .place-box {
            height: 50px;
            margin-top: 10px;
            padding-left: 16px;
            box-sizing: border-box;
            background-color: $sectionLine;
            border: 1px solid $iconLine;
            border-radius: 10px;
            color: $fontSub;
            display: flex;
            align-items: center;
          }
        }
      }
      .close {
        cursor: pointer;
      }
      .add-place {
        .title {
          display: flex;
          align-items: flex-end;
          .red {
            padding-left: 10px;
            font-size: 13px;
          }
        }
        .add-list {
          display: flex;
          gap: 30px;
          padding-top: 20px;
          .add {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            .add-box {
              width: 200px;
              height: 50px;
              padding: 0 16px;
              box-sizing: border-box;
              border: 1px solid $sectionLine;
              border-radius: 10px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              color: $fontSub;
              cursor: pointer;
              img {
                width: 20px;
                height: 20px;
              }
            }
            .add-btn {
              width: 89px;
              height: 40px;
              border-radius: 50px;
              border: none;
              background-color: #fafafa;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 4px;
              font-size: 14px;
              font-family: $pre;
              color: $mainColor;
              cursor: pointer;
              img {
                width: 20px;
                height: 20px;
              }
            }
          }
          .list {
            border-left: 1px solid $iconLine;
            padding: 10px 30px;
            display: flex;
            gap: 10px;
            .list-box {
              width: 182px;
              height: 100px;
              border-radius: 10px;
              background-color: #fafafa;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 10px;
              .name {
                font-weight: $medi;
              }
              .sub {
                color: $fontSub;
              }
            }
          }
        }
      }
      .close {
        width: 100%;
        display: flex;
        justify-content: center;
        border-top: 1px solid $sectionLine;
        padding: 10px 0;
        img {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }
    }
  }
}

@include tablet {
  article {
    padding: 50px 24px 60px 24px;

    .date-state {
      width: 100%;
      flex-direction: column;
      .date {
        width: 100%;
        .date-gap {
          input {
            width: 100%;
          }
        }
      }
      .state {
        padding-top: 30px;
      }
    }

    .history {
      width: 100%;
    }

    .item {
      width: 100%;
      .ing-item,
      .complete-item {
        .info-item {
          flex-direction: column;
          gap: 30px;

          .cost {
            justify-content: flex-end;
            flex-direction: column;
            .text-right {
              .cost-title {
                display: flex;
                justify-content: flex-end;
                gap: 5px;
              }
            }
            button {
              width: 100%;
              height: 50px;
            }
          }
        }
      }
      .more-section {
        .add-place {
          .title {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            .red {
              padding-left: 0;
            }
          }
          .add-list {
            flex-direction: column;
            .add {
              .add-box {
                width: 100%;
              }
            }
            .list {
              border-left: none;
              border-top: 1px solid $iconLine;
              padding: 30px 0;
              flex-wrap: wrap;
              .list-box {
                width: 48.8%;
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
    padding: 0 0 59px 0;
    .top-title {
      position: absolute;
      top: 23px;
      left: 24px;
      font-size: 16px;
      padding: 0;
    }

    .category {
      background-color: white;
      justify-content: space-around;
      padding: 16px 24px 0 24px;
      border-bottom: 1px solid $iconLine;
      font-size: 14px;
    }

    .date-state {
      width: 100%;
      flex-direction: column;
      .date {
        width: 100%;
        padding: 30px 24px;
        box-sizing: border-box;
        background-color: white;
        flex-direction: column;
        .date-gap {
          width: 100%;
          justify-content: center;
          input {
            width: 100%;
            background-color: #fafafa;
          }
        }
        button {
          width: 100%;
          margin: 20px 0 0 0;
        }
      }
      .state {
        padding: 30px 24px 20px 24px;
      }
    }

    .history {
      width: 100%;
      height: 479px;
      padding: 0 24px 0 24px;
      box-sizing: border-box;
      margin-top: 10px;
      box-shadow: none;
      border-radius: 0;
      align-items: flex-start;

      display: none;
      .ment {
        padding-top: 100px;
      }
    }

    .item {
      width: 100%;
      margin-top: 10px;
      gap: 10px;
      .ing-item,
      .complete-item {
        border-radius: 0;
        box-shadow: none;
        .title {
          font-size: 16px;
          .pay {
            font-size: 12px;
          }
        }
        .info-item {
          flex-direction: column;
          gap: 40px;
          .info {
            .item-title {
              font-size: 16px;
            }
            .period {
              padding-top: 10.5px;
              display: flex;
              flex-direction: column;
              font-size: 13px;
              gap: 0;
              .alarm {
                padding: 10px 0 0 0;
                font-size: 11px;
              }
            }
          }
          .cost {
            justify-content: flex-end;
            flex-direction: column;
            .text-right {
              .cost-title {
                font-size: 16px;
                display: flex;
                justify-content: flex-end;
                gap: 5px;
              }
              .vat {
                font-size: 10px;
              }
            }
            button {
              width: 100%;
              height: 50px;
              font-size: 14px;
            }
          }
        }
      }
      .more-section {
        margin-top: -10px;
        border-top: 1px solid $sectionLine;
        border-radius: 0;
        box-shadow: none;
        .content {
          padding: 30px 24px 60px;
        }
        .add-place {
          .title {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            .red {
              padding-left: 0;
              font-size: 12px;
            }
          }
          .add-list {
            flex-direction: column;
            .add {
              .add-box {
                width: 100%;
              }
            }
            .list {
              border-left: none;
              border-top: 1px solid $iconLine;
              padding: 30px 0 0;
              flex-wrap: wrap;
              .list-box {
                width: 48%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
