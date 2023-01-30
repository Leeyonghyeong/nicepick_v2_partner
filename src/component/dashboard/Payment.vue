<template>
  <section>
    <article>
      <div class="top-title">
        <img
          v-if="getDevice === 'mobile'"
          src="../../assets/login/arrow_lt.png"
          alt="이전"
        />
        신청/결제
      </div>

      <div class="flex">
        <div class="item-section">
          <div class="box">
            <div class="title">상품 정보</div>
            <div class="item">
              <div class="name-delete">
                <div class="item-name">
                  <div class="name">
                    <div class="bold">
                      프리미엄 멤버십
                      <img
                        src="../../assets/dashboard/premium.png"
                        alt="프리미엄"
                      />
                    </div>
                    <div class="sub">
                      해시태그 + 페이지 상위 노출 + 다이렉트 고객 매칭
                    </div>
                  </div>
                </div>
                <img
                  class="x"
                  src="../../assets/dashboard/cart_delete.png"
                  alt="삭제"
                />
              </div>
              <div class="option-cost">
                <div class="cost">
                  <div class="bold">88,000원</div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="name-delete">
                <div class="item-name">
                  <div class="name">
                    <div class="bold">추천브랜드 2 (60일)</div>
                    <div class="sub">
                      브랜드 상세페이지 하단 브랜드 리스트 노출
                    </div>
                  </div>
                </div>
                <img
                  class="x"
                  src="../../assets/dashboard/cart_delete.png"
                  alt="삭제"
                />
              </div>
              <div class="option-cost">
                <div class="cost">
                  <div class="bold">990,000원</div>
                  <div class="sub">1,100,000원</div>
                </div>
              </div>
            </div>
          </div>

          <div class="pay">
            <div class="box">
              <div class="name">결제수단</div>
              <div class="pay-button">
                <button class="color">
                  <i class="fa-regular fa-credit-card"></i>
                  <div class="pay-name">신용카드</div>
                </button>
                <button>
                  <i class="fa-regular fa-money-bill-1"></i>
                  <div class="pay-name">계좌이체</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="select-item">
          <div class="box">
            <div class="title">선택 상품 내역</div>
            <div class="padding">
              <div class="select-cost">
                <div class="name">상품 신청 금액</div>
                <div class="cost">1,188,000원</div>
              </div>
              <div class="discount-cost">
                <div class="name">할인 금액</div>
                <div class="cost">-110,000원</div>
              </div>
            </div>
            <div class="total">
              <div class="name">총 합계</div>
              <div class="total-cost"><span>1,078,000</span>원</div>
            </div>
          </div>

          <div class="check-box">
            <div class="box">
              <div class="check-list border">
                <div class="name">전체 동의</div>
                <div class="check">
                  <input type="checkbox" id="check1" />
                  <label for="check1"></label>
                </div>
              </div>
              <div class="gap">
                <div class="check-list">
                  <div class="name sub">
                    주문 상품, 이용기간, 금액 등 확인 및 결제 동의
                  </div>
                  <div class="check">
                    <input type="checkbox" id="check2" />
                    <label for="check2"></label>
                  </div>
                </div>
                <div class="check-list">
                  <div class="name sub link">환불 정책 동의</div>
                  <div class="check">
                    <input type="checkbox" id="check3" />
                    <label for="check3"></label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button class="application"><span>1,078,000원</span> 결제하기</button>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 24px 60px 24px;
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
  .flex {
    .item-section {
      .box {
        width: 100%;
        height: 100%;
        padding: 30px;
        box-sizing: border-box;
        background-color: white;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
        border-radius: 10px;

        .title {
          font-size: 18px;
          font-weight: $medi;
          color: $fontMain;
          border-bottom: 1px solid $sectionLine;
          padding-bottom: 20px;
        }

        .item {
          padding: 30px 0 44px 0;
          border-bottom: 1px solid $sectionLine;
          .name-delete {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            img {
              width: 20px;
              height: 20px;
              cursor: pointer;
            }
            .item-name {
              display: flex;
              align-items: flex-start;
              gap: 10px;
              .name {
                .bold {
                  font-weight: $medi;
                  color: $fontMain;
                  padding-bottom: 10px;
                  display: flex;
                  align-items: center;
                  gap: 6px;
                }
                .sub {
                  font-size: 12px;
                  color: $fontSub;
                }
              }
            }
          }
          .option-cost {
            padding: 52px 0 0 30px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .option {
              width: 130px;
              height: 40px;
              border: 1px solid $inputLine;
              border-radius: 5px;
              background-color: white;
              font-size: 14px;
              font-family: Pretendard;
              font-weight: $reg;
              color: $fontSub;
              cursor: pointer;
            }
            .cost {
              text-align: right;
              .bold {
                font-size: 18px;
                color: $fontMain;
                font-weight: $medi;
              }
              .sub {
                font-size: 12px;
                color: $fontSub;
                text-decoration: line-through;
                font-weight: $reg;
                padding-top: 10px;
              }
            }
          }
        }
      }

      .pay {
        padding-top: 20px;
        .box {
          .name {
            font-size: 18px;
            font-weight: $medi;
            color: $fontMain;
          }
          .pay-button {
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            button {
              height: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 6px;
              background-color: white;
              border-radius: 10px;
              border: none;
              border: 1px solid $inputLine;
              color: $fontSub;
              font-family: Pretendard;
              font-size: 16px;
              font-weight: $reg;
              cursor: pointer;
              i {
                font-size: 19px;
              }
            }
            .color {
              border: 1px solid $mainColor;
              color: $mainColor;
            }
          }
        }
      }
    }

    .select-item {
      margin-top: 20px;
      .box {
        padding: 30px;
        box-sizing: border-box;
        background-color: white;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        .title {
          font-size: 18px;
          font-weight: $medi;
          color: $fontMain;
          border-bottom: 1px solid $sectionLine;
          padding-bottom: 18px;
        }
        .padding {
          padding: 30px 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-bottom: 1px solid $sectionLine;
          .select-cost,
          .discount-cost {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: $fontMain;
          }
          .discount-cost {
            .cost {
              color: $subColor;
            }
          }
        }
        .total {
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          .name {
            color: $fontMain;
          }
          .total-cost {
            font-size: 18px;
            color: $mainColor;
            span {
              font-weight: $semi;
            }
          }
        }
      }
      .check-box {
        padding-top: 20px;
        .box {
          .check-list {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: $fontSub;
            input[type='checkbox'] {
              display: none;
            }
            input[type='checkbox'] + label {
              display: inline-block;
              width: 20px;
              height: 20px;
              box-sizing: border-box;
              border: 1px solid $inputLine;
              border-radius: 3px;
              position: relative;
              cursor: pointer;
            }
            input[id='check1']:checked + label::after,
            input[id='check2']:checked + label::after,
            input[id='check3']:checked + label::after {
              content: '';
              background-image: url(../../assets/dashboard/check.png);
              background-repeat: no-repeat;
              background-position: 5px;
              width: 20px;
              height: 20px;
              box-sizing: border-box;
              position: absolute;
              border: 1px solid $mainColor;
              border-radius: 3px;
              top: -1px;
              left: -1px;
              cursor: pointer;
            }
          }
          .border {
            border-bottom: 1px solid $sectionLine;
            padding-bottom: 15px;
            margin-bottom: 15px;
          }
          .gap {
            display: flex;
            flex-direction: column;
            gap: 10px;
            .sub {
              font-size: 12px;
            }
            .link {
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
      }
    }

    .application {
      margin-top: 20px;
      width: 100%;
      height: 50px;
      border: none;
      border-radius: 10px;
      background-color: $mainColor;
      color: white;
      font-size: 16px;
      font-family: Pretendard;
      font-weight: $reg;
      cursor: pointer;
      span {
        font-weight: $semi;
      }
    }
  }

  .ment {
    margin-top: 20px;
    font-size: 14px;
    color: $fontSub;
    line-height: 24px;
    span {
      color: $subColor;
    }
  }
}

@include mobile {
  article {
    padding: 0;

    .top-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      position: absolute;
      top: 15px;
      left: 24px;
      padding: 0;
      img {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }

    .flex {
      .item-section {
        .box {
          padding: 0 24px;
          border-radius: 0;
          box-shadow: none;

          .title {
            background-color: white;
            padding: 30px 0 20px 0;
            font-size: 16px;
          }
          .item {
            background-color: white;
            padding: 30px 0 35px 0;
          }
        }

        .pay {
          padding-top: 10px;
          .box {
            padding: 30px 24px;
            .name {
              font-size: 16px;
            }
          }
        }
      }

      .select-item {
        margin-top: 10px;
        .box {
          border-radius: 0;
          box-shadow: none;
        }
      }

      .check-box {
        padding-top: 10px;
        margin-bottom: 60px;
      }

      .application {
        margin: 0;
        border-radius: 0;
        height: 58px;
        position: absolute;
        bottom: 0;
        position: fixed;
      }
    }

    .ment {
      margin: 0;
      padding: 20px 24px 88px 24px;
      font-size: 12px;
    }
  }
}

@include pc {
  article {
    padding: 50px 0px 0px 160px;
    box-sizing: border-box;
    width: 100%;

    .flex {
      display: flex;
      gap: 30px;
      .item-section {
        .box {
          width: 880px;
          height: auto;
          .item {
            padding: 34px 0;
            display: flex;
            justify-content: space-between;
            position: relative;
            .name-delete {
              .x {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(-50%, -50%);
              }
              .item-name {
                gap: 20px;
                align-items: center;
              }
            }
            .option-cost {
              width: 315px;
              padding: 0;
              margin-right: 71px;
            }
          }
        }

        .pay {
          .box {
            padding: 30px 30px 43px;
            .pay-button {
              flex-direction: row;
              justify-content: space-between;
              gap: 20px;
              button {
                width: 100%;
              }
            }
          }
        }
      }

      .select-item {
        margin: 0;
        .box {
          width: 360px;
        }

        .check-box {
          .box {
            .check {
              height: 22px;
            }
          }
        }
      }
    }
  }
}
</style>
