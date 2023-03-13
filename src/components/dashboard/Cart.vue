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

      <div v-if="cartProduct.length === 0" class="empty">
        <div class="box">
          <div class="ment">장바구니에 추가한 상품이 없습니다.</div>
          <button @click="$router.push('/franchise/ad')">
            광고상품 보러가기
          </button>
        </div>
      </div>

      <div v-else class="flex">
        <div class="item-section">
          <div class="box">
            <div class="select-delete">
              <div class="select">
                <input
                  v-model="isAllCheck"
                  type="checkbox"
                  id="allCheck"
                  @change="allCheckProduct"
                />
                <label for="allCheck"></label>
                <div class="name">전체 선택</div>
              </div>
              <button class="delete" @click="selectDeleteCart">
                선택 삭제
              </button>
            </div>

            <div
              class="item"
              v-for="(item, index) in cartProduct"
              :key="item.id"
            >
              <div class="name-delete">
                <div class="item-name">
                  <input
                    v-model="checkProduct"
                    type="checkbox"
                    :id="`product${index}`"
                    :value="item"
                    @change="checkProductValidate"
                  />
                  <label :for="`product${index}`"></label>
                  <div class="name">
                    <div class="bold">
                      {{ item.payProduct.productName }}
                      {{
                        item.payProduct.payType === 'NORMAL'
                          ? `(${item.term}일)`
                          : ''
                      }}
                      <img
                        v-if="item.payProduct.payType === 'RECURRING'"
                        src="../../assets/dashboard/premium.png"
                        alt="프리미엄"
                      />
                    </div>
                    <div class="sub">{{ item.payProduct.productNoti }}</div>
                  </div>
                </div>
                <img
                  class="x"
                  src="../../assets/dashboard/cart_delete.png"
                  alt="삭제"
                  @click="deleteCart(item.id)"
                />
              </div>
              <div
                class="option-cost"
                v-if="item.payProduct.payType !== 'RECURRING'"
              >
                <button class="option" @click="changeOptionItem(item)">
                  옵션 변경
                </button>
                <div class="cost">
                  <div class="bold">{{ item.price.toLocaleString() }}원</div>
                  <div v-if="item.sale > 0" class="sub">
                    {{ calcOriginPrice(item.price, item.sale) }}원
                  </div>
                </div>
              </div>
              <div v-else class="option-cost no-option">
                <div class="cost">
                  <div class="bold">
                    {{ item.payProduct.payType === 'RECURRING' ? '월 ' : '' }}
                    {{ item.price.toLocaleString() }}원
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="item">
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
              <div class="option-cost no-option">
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
            <div class="item">
              <div class="name-delete">
                <div class="item-name">
                  <input type="checkbox" id="check5" />
                  <label for="check5"></label>
                  <div class="name">
                    <div class="bold">상권 지역플러스+ (30일)</div>
                    <div class="sub">상권지도 주변 지역 추가 노출</div>
                  </div>
                </div>
                <img
                  class="x"
                  src="../../assets/dashboard/cart_delete.png"
                  alt="삭제"
                />
              </div>
              <div class="option-cost">
                <div class="btn">
                  <img
                    @click="countDown"
                    src="../../assets/dashboard/minus.png"
                    alt="마이너스"
                  />
                  <input type="number" :value="countItem" />
                  <img
                    @click="countUp"
                    src="../../assets/dashboard/plus.png"
                    alt="플러스"
                  />
                </div>
                <div class="cost">
                  <div class="bold">99,000원</div>
                </div>
              </div>
            </div> -->
          </div>
        </div>

        <div class="select-item">
          <div class="box">
            <div class="title">선택 상품 내역</div>

            <div class="padding">
              <div class="select-cost">
                <div class="name">선택 상품 금액</div>
                <div class="cost">
                  {{
                    calcTotalPrice(
                      checkProduct.map((e) => {
                        return parseInt(
                          calcOriginPrice(e.price, e.sale).replace(/,/g, '')
                        )
                      })
                    )
                  }}원
                </div>
              </div>
              <div class="discount-cost">
                <div class="name">할인 금액</div>
                <div class="cost">
                  -{{
                    calcTotalPrice(
                      checkProduct.map((e) => {
                        return (
                          parseInt(
                            calcOriginPrice(e.price, e.sale).replace(/,/g, '')
                          ) - e.price
                        )
                      })
                    )
                  }}원
                </div>
              </div>
            </div>

            <div class="total">
              <div class="name">총 합계</div>
              <div class="total-cost">
                <span>{{
                  calcTotalPrice(
                    checkProduct.map((e) => {
                      return e.price
                    })
                  )
                }}</span
                >원
              </div>
            </div>
          </div>

          <button class="application" @click="submit">
            <span>{{ checkProduct.length }}개</span> 상품 신청하기
          </button>
        </div>
      </div>

      <div class="ment">
        · 장바구니 상품은 <span>최대 30일간 저장</span>됩니다.<br />
        · 가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.
      </div>
    </article>

    <CartOption
      v-if="isShowCartOptionModal && changeOptionProduct"
      :productItem="changeOptionProduct"
      @showCartOption="showCartOption"
      @getCartProduct="getCartProduct"
    />
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'
import CartOption from '../common/modal/dashboard/CartOption.vue'
import api from '../../config/axios.config'
import { PayTermPrice } from '../../types/product'
import { useUserStore } from '../../store/user'
import { CommonResponse, PayTermPriceResponse } from '../../types/response'
import { calcOriginPrice, calcTotalPrice } from '../../functions/product'
import { toastAlert } from '../../functions/alert'
import { useProductStore } from '../../store/product'
import { useRouter } from 'vue-router'

const router = useRouter()

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)
const userStore = useUserStore()
const { currentBrand } = storeToRefs(userStore)
const productStore = useProductStore()
const { payProductItems } = storeToRefs(productStore)

const cartProduct = ref<PayTermPrice[]>([])

const isAllCheck = ref<boolean>(false)
const checkProduct = ref<PayTermPrice[]>([])

const isShowCartOptionModal = ref<boolean>(false)
const changeOptionProduct = ref<PayTermPrice>()

const getCartProduct = async () => {
  if (currentBrand.value) {
    const { data } = await api.get<PayTermPriceResponse>(
      `/pay/cart/${currentBrand.value.id}`
    )

    if (data.success) {
      cartProduct.value = data.payTermPrice

      cartProduct.value.sort((a, b) =>
        a.payProductName < b.payProductName ? -1 : 0
      )

      checkProduct.value = checkProduct.value.filter((e) =>
        cartProduct.value.map((v) => v.id).includes(e.id)
      )
    }
  }
}

const allCheckProduct = () => {
  if (isAllCheck.value) {
    const findIndex = cartProduct.value.findIndex(
      (e) => e.payProduct.payType === 'RECURRING'
    )

    if (findIndex > -1) {
      toastAlert({
        text: '일반결제 상품은 정기결제 상품과 함께 신청할 수 없습니다',
        type: 'warning',
      })

      isAllCheck.value = false
    } else {
      checkProduct.value = cartProduct.value
    }
  } else {
    checkProduct.value = []
  }
}

const checkProductValidate = () => {
  if (checkProduct.value.length > 1) {
    const findIndex = checkProduct.value.findIndex(
      (e) => e.payProduct.payType === 'RECURRING'
    )

    if (findIndex > -1) {
      toastAlert({
        text: '일반결제 상품은 정기결제 상품과 함께 신청할 수 없습니다',
        type: 'warning',
      })

      checkProduct.value.splice(checkProduct.value.length - 1, 1)
    }
  }

  if (checkProduct.value.length === cartProduct.value.length) {
    isAllCheck.value = true
  } else {
    isAllCheck.value = false
  }
}

const changeOptionItem = (item: PayTermPrice) => {
  changeOptionProduct.value = item
  isShowCartOptionModal.value = true
}

const showCartOption = () => {
  isShowCartOptionModal.value = !isShowCartOptionModal.value
}

const deleteCart = async (payTermPriceId: string) => {
  if (currentBrand.value) {
    const { data } = await api.delete<CommonResponse>('/pay/cart', {
      data: {
        payTermPriceId,
        brandId: currentBrand.value.id,
      },
    })

    if (data.success) {
      toastAlert({
        text: '상품이 삭제 되었습니다',
        type: 'success',
        position: 'top',
      })

      await getCartProduct()
    }
  }
}

const selectDeleteCart = async () => {
  for (const item of checkProduct.value) {
    await deleteCart(item.id)
  }
}

const submit = () => {
  if (checkProduct.value.length === 0) {
    toastAlert({
      text: '결제 할 상품을 선택해 주세요',
      type: 'warning',
    })
  } else {
    payProductItems.value = checkProduct.value
    router.push('/payment')
  }
}

onMounted(async () => {
  await getCartProduct()
})
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
          box-sizing: border-box;
          border: 1px solid $inputLine;
          border-radius: 3px;
          position: relative;
          cursor: pointer;
        }
        input[type='checkbox']:checked + label::after {
          content: '';
          background-image: url(../../assets/dashboard/check.png);
          background-repeat: no-repeat;
          background-position: 4px;
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
            justify-content: space-between;
            align-items: center;
            .option {
              width: 126px;
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
            .btn {
              display: flex;
              align-items: center;
              gap: 5px;
              img {
                width: 20px;
                height: 20px;
                cursor: pointer;
              }
              input {
                width: 70px;
                height: 40px;
                border-radius: 5px;
                border: 1px solid $inputLine;
                font-family: $pre;
                font-size: 13px;
                color: $fontSub;
                text-align: center;
              }
              input::-webkit-inner-spin-button {
                appearance: none;
                -moz-appearance: none;
                -webkit-appearance: none;
              }
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
          .no-option {
            justify-content: flex-end;
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
          .title {
            font-size: 16px;
          }
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
    padding: 50px 0 60px 160px;
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
