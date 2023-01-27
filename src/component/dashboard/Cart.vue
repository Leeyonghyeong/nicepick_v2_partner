<template>
  <section>
    <article>
      <div class="top-title">
        <img
          v-if="getDevice === 'mobile'"
          src="../../assets/login/arrow_lt.png"
          alt="이전"
        />
        장바구니
      </div>

      <!-- <div class="empty">
        <div class="box">
          <div class="ment">장바구니에 추가한 상품이 없습니다.</div>
          <button>광고상품 보러가기</button>
        </div>
      </div> -->

      <div class="flex">
        <div class="item-section">
          <div class="box">
            <div class="select-delete">
              <div class="select">
                <input type="checkbox" id="check1" />
                <label for="check1"></label>
                <div class="name">전체 선택</div>
              </div>
              <button class="delete">선택 삭제</button>
            </div>

            <div class="item">
              <div class="name-delete">
                <div class="item-name">
                  <input type="checkbox" id="check2" />
                  <label for="check2"></label>
                  <div class="name">
                    <div class="bold">브랜드 핫클립 (30일)</div>
                    <div class="sub">홈 영상컨텐츠 노출</div>
                  </div>
                </div>
                <img
                  class="x"
                  src="../../assets/dashboard/cart_delete.png"
                  alt="삭제"
                />
              </div>
              <div class="option-cost">
                <button class="option" @click="showCartOption">
                  옵션 변경
                </button>
                <div class="cost">
                  <div class="bold">550,000원</div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="name-delete">
                <div class="item-name">
                  <input type="checkbox" id="check3" />
                  <label for="check3"></label>
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
                  <input type="checkbox" id="check4" />
                  <label for="check4"></label>
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
                <button class="option" @click="showCartOption">
                  옵션 변경
                </button>
                <div class="cost">
                  <div class="bold">990,000원</div>
                  <div class="sub">1,100,000원</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="select-item">
          <div class="box">
            <div class="title">선택 상품 내역</div>

            <div class="padding">
              <div class="select-cost">
                <div class="name">선택 상품 금액</div>
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

          <button class="application"><span>2개</span> 상품 신청하기</button>
        </div>
      </div>

      <div class="ment">
        · 장바구니 상품은 <span>최대 30일간 저장</span>됩니다.<br />
        · 가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.
      </div>
    </article>

    <CartOption v-if="showModal" @showCartOption="showCartOption" />
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'
import CartOption from '../common/modal/dashboard/CartOption.vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const showModal = ref<boolean>(false)
const showCartOption = () => {
  showModal.value = !showModal.value
}
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

  .empty {
    width: 100%;
    height: 616px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      .ment {
        margin: 0;
      }
      button {
        margin-top: 30px;
        width: 300px;
        height: 50px;
        background-color: $mainColor;
        border: none;
        border-radius: 10px;
        color: white;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: $reg;
        cursor: pointer;
      }
    }
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

        input[type='checkbox'] {
          display: none;
        }
        input[type='checkbox'] + label {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 1px solid $inputLine;
          border-radius: 3px;
          position: relative;
          cursor: pointer;
        }
        input[id='check1']:checked + label::after,
        input[id='check2']:checked + label::after,
        input[id='check3']:checked + label::after,
        input[id='check4']:checked + label::after {
          content: '';
          background-image: url(../../assets/dashboard/check.png);
          background-repeat: no-repeat;
          background-position: 5px;
          width: 20px;
          height: 20px;
          position: absolute;
          border: 1px solid $mainColor;
          border-radius: 3px;
          top: -1px;
          left: -1px;
          cursor: pointer;
        }

        .select-delete {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid $sectionLine;
          padding-bottom: 20px;
          .select {
            display: flex;
            align-items: center;
            gap: 15px;
            .name {
              font-size: 14px;
              color: $fontSub;
            }
          }
          .delete {
            width: 72px;
            height: 33px;
            border: none;
            border-radius: 5px;
            color: $fontSub;
            font-family: Pretendard;
            font-size: 14px;
            cursor: pointer;
          }
        }

        .item {
          padding: 30px 0;
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
            padding: 42px 0 0 30px;
            display: flex;
            align-items: center;
            position: relative;
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
              position: absolute;
              right: 0;
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
      img {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }

    .empty {
      height: 100%;
      border-radius: 0;
      box-shadow: none;
      .box {
        padding: 0 24px;
        width: 100%;
        padding-top: 100px;
        .ment {
          padding: 0;
        }
        button {
          width: 100%;
          font-size: 14px;
        }
      }
    }

    .flex {
      .item-section {
        .box {
          padding: 0;
          border-radius: 0;
          box-shadow: none;
          background-color: transparent;
          .select-delete {
            background-color: white;
            padding: 20px 24px;
            margin-bottom: 10px;
            border-bottom: none;
            .select {
              gap: 10px;
              .name {
                font-size: 12px;
              }
            }
            .delete {
              width: 65px;
              height: 30px;
              font-size: 12px;
            }
          }
          .item {
            background-color: white;
            padding: 30px 24px 35px 24px;
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

    .empty {
      width: 1270px;
    }

    .flex {
      display: flex;
      gap: 30px;
      .item-section {
        .box {
          width: 880px;
          height: 100%;
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
      }

      .select-item {
        margin: 0;
        .box {
          width: 360px;
          height: 256px;
        }
      }
    }
  }
}
</style>
