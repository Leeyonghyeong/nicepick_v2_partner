<template>
  <section v-if="selectPayProductCategory">
    <article>
      <div class="padding">
        <div class="top-title">광고 상품</div>

        <div class="top-category">
          <div
            v-for="item in payProductCategory.sort((a, b) =>
              a.categoryName > b.categoryName ? -1 : 0
            )"
            :key="item.id"
            class="category-item"
            :class="{ active: selectPayProductCategory.id === item.id }"
            @click="clickCategoryHandler(item)"
          >
            {{ item.categoryName }}
          </div>
        </div>

        <div class="content-gap">
          <!-- <div class="brand-ad content">
            <div class="box-gap">
              <div class="product-item">
                <div :class="{ boxstyle: showHopeful }" class="box">
                  <div class="name-sub">
                    <div class="name">
                      유망브랜드 ({{ periodSelect }})
                      <img
                        @click="showPeriodList"
                        src="../../../../assets/dashboard/arrow_down_black.png"
                        alt="down_black"
                      />
                    </div>
                    <div class="sub">홈 유망 브랜드 리스트 노출</div>
                  </div>
                  <div class="flex">
                    <div class="cost-vat flex">
                      <div class="cost">
                        <span class="red">550,000</span> 원
                      </div>
                      <div class="vat">VAT 포함</div>
                    </div>
                    <div class="btn">
                      <button
                        class="detail"
                        @click="showHopeful = !showHopeful"
                      >
                        상세보기
                        <img
                          v-if="!showHopeful"
                          src="../../../../assets/dashboard/arrow_more.png"
                          alt="down"
                        />
                        <img
                          v-if="showHopeful"
                          src="../../../../assets/dashboard/arrow_close.png"
                          alt="up"
                        />
                      </button>
                      <button class="cart">
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                      <button class="apply">신청하기</button>
                    </div>
                  </div>
                </div>
                <PeriodList
                  v-if="selectPeriod"
                  @showPeriodList="showPeriodList"
                />
                <div class="more-box" v-if="showHopeful">
                  <div class="menu-detail">
                    <div v-if="getDevice === 'tablet'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/hopeful/tab.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/hopeful/tab_2.png"
                        alt=""
                      />
                    </div>
                    <div v-if="getDevice === 'pc'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/hopeful/pc.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/hopeful/pc_2.png"
                        alt=""
                      />
                    </div>
                    <div v-if="getDevice === 'mobile'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/hopeful/mob.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/hopeful/mob_2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="ment">
                    · 홈 메인페이지 유망브랜드 리스트 영역에 노출됩니다.<br />
                    · 사용자에 따라 랜덤으로 브랜드가 노출됩니다.
                  </div>
                </div>
              </div>

              <div>
                <div :class="{ boxstyle: showHotclip }" class="box">
                  <div class="name-sub">
                    <div class="name">
                      브랜드 핫클립 (30일)
                      <img
                        src="../../../../assets/dashboard/arrow_down_black.png"
                        alt="down_black"
                      />
                    </div>
                    <div class="sub">홈 영상콘텐츠 노출</div>
                  </div>
                  <div class="flex">
                    <div class="cost-vat flex">
                      <div class="cost">
                        <span class="red">550,000</span> 원
                      </div>
                      <div class="vat">VAT 포함</div>
                    </div>
                    <div class="btn">
                      <button
                        class="detail"
                        @click="showHotclip = !showHotclip"
                      >
                        상세보기
                        <img
                          v-if="!showHotclip"
                          src="../../../../assets/dashboard/arrow_more.png"
                          alt="down"
                        />
                        <img
                          v-if="showHotclip"
                          src="../../../../assets/dashboard/arrow_close.png"
                          alt="up"
                        />
                      </button>
                      <button class="cart">
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                      <button class="apply">신청하기</button>
                    </div>
                  </div>
                </div>
                <div class="more-box" v-if="showHotclip">
                  <div class="menu-detail">
                    <div v-if="getDevice === 'tablet'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/hotclip/tab.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/hotclip/tab_2.png"
                        alt=""
                      />
                    </div>
                    <div v-if="getDevice === 'pc'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/hotclip/pc.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/hotclip/pc_2.png"
                        alt=""
                      />
                    </div>
                    <div v-if="getDevice === 'mobile'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/hotclip/mob.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/hotclip/mob_2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="ment">
                    · 홈 메인 브랜드 핫클립 영역에 영상컨텐츠와 리스트로
                    노출됩니다.<br />
                    · 브랜드 핫클립은 사용자에 따라 랜덤으로 노출됩니다.
                  </div>
                </div>
              </div>

              <div>
                <div :class="{ boxstyle: showFirstRecommend }" class="box">
                  <div class="name-sub">
                    <div class="name">
                      추천 브랜드 1 (30일)
                      <img
                        src="../../../../assets/dashboard/arrow_down_black.png"
                        alt="down_black"
                      />
                    </div>
                    <div class="sub">검색 및 업종 리스트 상단 로고 노출</div>
                  </div>
                  <div class="flex">
                    <div class="cost-vat flex">
                      <div class="cost">
                        <span class="red">330,000</span> 원
                      </div>
                      <div class="vat">VAT 포함</div>
                    </div>
                    <div class="btn">
                      <button
                        class="detail"
                        @click="showFirstRecommend = !showFirstRecommend"
                      >
                        상세보기
                        <img
                          v-if="!showFirstRecommend"
                          src="../../../../assets/dashboard/arrow_more.png"
                          alt="down"
                        />
                        <img
                          v-if="showFirstRecommend"
                          src="../../../../assets/dashboard/arrow_close.png"
                          alt="up"
                        />
                      </button>
                      <button class="cart">
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                      <button class="apply">신청하기</button>
                    </div>
                  </div>
                </div>
                <div class="more-box" v-if="showFirstRecommend">
                  <div class="menu-detail">
                    <div class="menu">
                      <div
                        :class="{
                          select: detailFirstRecommend === 'brandcategorylist',
                        }"
                        @click="detailFirstRecommend = 'brandcategorylist'"
                      >
                        업종 리스트
                      </div>
                      <div
                        :class="{ select: detailFirstRecommend === 'search' }"
                        @click="detailFirstRecommend = 'search'"
                      >
                        검색
                      </div>
                    </div>

                    <BrandCategoryList
                      v-if="detailFirstRecommend === 'brandcategorylist'"
                    />
                    <Search v-if="detailFirstRecommend === 'search'" />
                  </div>
                </div>
              </div>

              <div>
                <div :class="{ boxstyle: showSecondRecommend }" class="box">
                  <div class="name-sub">
                    <div class="name">
                      추천 브랜드 2 (30일)
                      <img
                        src="../../../../assets/dashboard/arrow_down_black.png"
                        alt="down_black"
                      />
                    </div>
                    <div class="sub">
                      브랜드 상세페이지 하단 브랜드 리스트 노출
                    </div>
                  </div>
                  <div class="flex">
                    <div class="cost-vat flex">
                      <div class="cost">
                        <span class="original">1,100,000원</span>
                        <span class="red">330,000</span> 원
                      </div>
                      <div class="vat">
                        <span class="discount">
                          <img
                            src="../../../../assets/dashboard/arrow_down.png"
                            alt="down_blue"
                          />
                          10% 할인 ·
                        </span>
                        VAT 포함
                      </div>
                    </div>
                    <div class="btn">
                      <button
                        class="detail"
                        @click="showSecondRecommend = !showSecondRecommend"
                      >
                        상세보기
                        <img
                          v-if="!showSecondRecommend"
                          src="../../../../assets/dashboard/arrow_more.png"
                          alt="down"
                        />
                        <img
                          v-if="showSecondRecommend"
                          src="../../../../assets/dashboard/arrow_close.png"
                          alt="up"
                        />
                      </button>
                      <button class="cart">
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                      <button class="apply">신청하기</button>
                    </div>
                  </div>
                </div>
                <div class="more-box" v-if="showSecondRecommend">
                  <div class="menu-detail">
                    <div v-if="getDevice === 'tablet'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/recommend-2/tab.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/recommend-2/tab_2.png"
                        alt=""
                      />
                    </div>
                    <div v-if="getDevice === 'pc'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/recommend-2/pc.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/recommend-2/pc_2.png"
                        alt=""
                      />
                    </div>
                    <div v-if="getDevice === 'mobile'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/recommend-2/mob.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/recommend-2/mob_2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="ment">
                    · 브랜드 상세페이지 하단 영역에 추천 브랜드로 노출됩니다.<br />
                    · 사용자 또는 브랜드 업종에 따라 랜덤으로 노출됩니다.
                  </div>
                </div>
              </div>
            </div>
            <div class="guide">
              <div class="guide-title">
                브랜드 광고 유의사항
                <span class="blue">자주 묻는 질문 ></span>
              </div>
              <div class="guide-ment">
                · 내용은 아직 없습니다. 그냥 틀만 이렇게 해주세요.<br />
                · 내용은 아직 없습니다. 그냥 틀만 이렇게 해주세요.<br />
                · 내용은 아직 없습니다. 그냥 틀만 이렇게 해주세요.<br />
                · 내용은 아직 없습니다. 그냥 틀만 이렇게 해주세요.<br />
                · 내용은 아직 없습니다. 그냥 틀만 이렇게 해주세요.<br />
              </div>
            </div>
          </div> -->

          <div class="product-content content">
            <div class="box-gap">
              <div
                class="product-item"
                v-for="(item, index) in payProduct"
                :key="item.id"
              >
                <div class="box">
                  <div class="name-sub">
                    <div class="name">
                      {{ item.productName }}
                      {{
                        item.payTermPrice.length > 1
                          ? `(${selectPayTermPrice[index].term}일)`
                          : ''
                      }}
                      <img
                        v-if="item.payTermPrice.length > 1"
                        src="../../../../assets/dashboard/arrow_down_black.png"
                        alt="down_black"
                        @click="isShowTermPriceModal(index)"
                      />
                      <img
                        v-if="item.payType === 'RECURRING'"
                        src="../../../../assets/dashboard/premium.png"
                        alt="프리미엄"
                      />
                    </div>
                    <div class="sub">{{ item.productNoti }}</div>
                  </div>
                  <div class="flex">
                    <div class="cost-vat flex">
                      <div class="cost" v-if="item.payType === 'NORMAL'">
                        <span
                          v-if="selectPayTermPrice[index].sale > 0"
                          class="original"
                          >{{
                            calcOriginPrice(
                              selectPayTermPrice[index].price,
                              selectPayTermPrice[index].sale
                            )
                          }}원</span
                        >
                        <span class="red">{{
                          selectPayTermPrice[index].price.toLocaleString()
                        }}</span>
                        원
                      </div>
                      <div v-else>
                        <div class="cost">
                          <div class="ballon">
                            <i class="fa-solid fa-gem"></i>
                            지금 신청하면 1개월 무료
                          </div>
                          <span class="medi"
                            >월
                            <span class="red">{{
                              selectPayTermPrice[index].price.toLocaleString()
                            }}</span></span
                          >
                          원
                        </div>
                      </div>
                      <div class="vat">
                        <span
                          class="discount"
                          v-if="selectPayTermPrice[index].sale > 0"
                        >
                          <img
                            src="../../../../assets/dashboard/arrow_down.png"
                            alt="down_blue"
                          />
                          {{ selectPayTermPrice[index].sale }}% 할인 ·
                        </span>
                        VAT 포함
                      </div>
                    </div>
                    <div class="btn">
                      <button
                        class="detail"
                        @click="
                          isShowProductTab[index] = !isShowProductTab[index]
                        "
                      >
                        상세보기
                        <img
                          v-if="!isShowProductTab[index]"
                          src="../../../../assets/dashboard/arrow_more.png"
                          alt="down"
                        />
                        <img
                          v-else
                          src="../../../../assets/dashboard/arrow_close.png"
                          alt="up"
                        />
                      </button>
                      <button
                        class="cart"
                        :class="{
                          addcart: cartProduct.find(
                            (e) => e.payProductId === item.id
                          ),
                        }"
                        @click="addCart(item.id, selectPayTermPrice[index].id)"
                      >
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                      <button
                        class="apply"
                        @click="movePay(selectPayTermPrice[index], item)"
                      >
                        신청하기
                      </button>
                    </div>
                  </div>
                </div>
                <div class="more-box" v-if="isShowProductTab[index]">
                  <div class="menu-detail">
                    <div class="menu">
                      <div
                        v-for="tabMenu of item.payProductTab"
                        :key="tabMenu.id"
                        :class="{
                          select: selectProductTab[index].id === tabMenu.id,
                        }"
                        @click="changeProductTab(tabMenu, index)"
                      >
                        {{ tabMenu.tabName }}
                      </div>
                    </div>

                    <ProductTab :payProductTab="selectProductTab[index]" />
                  </div>
                </div>
                <PeriodList
                  v-if="isShowSelectTermPriceModal[index]"
                  :payTermPrice="item.payTermPrice"
                  :currentTermPrice="selectPayTermPrice[index]"
                  :index="index"
                  @changeTermPrice="changeTermPrice"
                />
              </div>
            </div>
            <div class="guide" v-if="selectPayProductCategory.notice">
              <div class="guide-title">
                {{ selectPayProductCategory.categoryName }} 유의사항
                <span class="blue">자주 묻는 질문 ></span>
              </div>
              <div
                class="guide-ment"
                v-html="
                  selectPayProductCategory.notice.replace(
                    /(?:\r\n|\r|\n)/g,
                    '<br />'
                  )
                "
              ></div>
            </div>
          </div>
          <!-- -->
        </div>
      </div>
      <div class="premium-free">
        <img
          v-if="getDevice === 'pc'"
          src="../../../../assets/dashboard/pc_banner.png"
          alt="eventbanner"
        />
        <img
          v-if="getDevice === 'tablet'"
          src="../../../../assets/dashboard/tab_banner.png"
          alt="eventbanner"
        />
        <img
          v-if="getDevice === 'mobile'"
          src="../../../../assets/dashboard/mobile_banner.png"
          alt="eventbanner"
        />
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../../store/window'
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'

import ProductTab from '../../../common/dashboard/product/ProductTab.vue'
import PeriodList from '../../../common/dashboard/PeriodList.vue'

import {
  PayCategory,
  PayProduct,
  PayProductTab,
  PayTermPrice,
} from '../../../../types/product'
import {
  CommonResponse,
  PayCategoryResponse,
  PayTermPriceResponse,
} from '../../../../types/response'
import { calcOriginPrice } from '../../../../functions/product'
import api from '../../../../config/axios.config'
import { confirmAlert, toastAlert } from '../../../../functions/alert'
import { useUserStore } from '../../../../store/user'
import { useAlarmStore } from '../../../../store/alarm'
import { useRouter } from 'vue-router'
import { useProductStore } from '../../../../store/product'

const router = useRouter()

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)
const userStore = useUserStore()
const { currentBrand } = storeToRefs(userStore)
const alarmStore = useAlarmStore()
const { cartCount } = storeToRefs(alarmStore)
const productStore = useProductStore()
const { payProductItems } = storeToRefs(productStore)

const payProductCategory = ref<PayCategory[]>([])
const selectPayProductCategory = ref<PayCategory>()

const payProduct = ref<PayProduct[]>([])

const selectPayTermPrice = ref<PayTermPrice[]>([])
const isShowSelectTermPriceModal = ref<boolean[]>([])

const selectProductTab = ref<PayProductTab[]>([])
const isShowProductTab = ref<boolean[]>([])

const cartProduct = ref<PayTermPrice[]>([])

const getProductCategory = async () => {
  const { data } = await api.get<PayCategoryResponse>('/product')

  if (data.success) {
    payProductCategory.value = data.payCategory
      .filter((e) => e.page === 0)
      .sort((a, b) => (a.categoryName > b.categoryName ? -1 : 0))

    clickCategoryHandler(payProductCategory.value[0])
  }
}

const getCartProduct = async () => {
  if (currentBrand.value) {
    const { data } = await api.get<PayTermPriceResponse>(
      `/pay/cart/${currentBrand.value.id}`
    )

    if (data.success) {
      cartProduct.value = data.payTermPrice
    }
  }
}

const clickCategoryHandler = (item: PayCategory) => {
  selectPayTermPrice.value = []
  isShowSelectTermPriceModal.value = []
  selectProductTab.value = []
  isShowProductTab.value = []

  selectPayProductCategory.value = item
  payProduct.value = selectPayProductCategory.value.payProduct

  payProduct.value.forEach((e) => {
    e.payTermPrice.sort((a, b) => (a.term < b.term ? -1 : 0))
    selectPayTermPrice.value.push(e.payTermPrice[0])
    isShowSelectTermPriceModal.value.push(false)

    e.payProductTab.sort((a, b) => (a.tabName < b.tabName ? -1 : 0))
    selectProductTab.value.push(e.payProductTab[0])
    isShowProductTab.value.push(false)
  })
}

const isShowTermPriceModal = (index: number) => {
  isShowSelectTermPriceModal.value = isShowSelectTermPriceModal.value.map(
    (e, i) => {
      if (i === index) {
        e = !e
      } else {
        e = false
      }

      return e
    }
  )
}

const changeTermPrice = (item: PayTermPrice, index: number) => {
  selectPayTermPrice.value[index] = item
  isShowSelectTermPriceModal.value[index] = false
}

const changeProductTab = (item: PayProductTab, index: number) => {
  selectProductTab.value[index] = item
}

const addCart = async (payProductId: string, payTermPriceId: string) => {
  if (currentBrand.value) {
    const { data: checkCart } = await api.get(
      `pay/cart/${currentBrand.value.id}/${payProductId}`
    )

    if (checkCart.success) {
      if (checkCart.isExist) {
        toastAlert({
          text: '같은 상품은 장바구니에 하나만 담을 수 있습니다',
        })
        return
      }
    } else {
      toastAlert({
        text: checkCart.data.errorMessage,
        type: 'warning',
      })
      return
    }

    const { data } = await api.post<CommonResponse>('/pay/cart', {
      brandId: currentBrand.value.id,
      payTermPriceId,
      payProductId,
    })

    if (data.success) {
      await getCartProduct()

      cartCount.value = cartProduct.value.length

      const alert = await confirmAlert({
        html: '장바구니에 담았습니다<br />장바구니로 이동하시겠습니까?',
        isCancelButton: true,
        cancelButtonText: '상품 계속 보기',
        confirmButtonText: '장바구니 이동',
      })

      if (alert.isConfirmed) {
        router.push('/cart')
      }
    } else {
      toastAlert({ text: data.errorMessage, type: 'warning' })
    }
  }
}

const movePay = (item: PayTermPrice, payProduct: PayProduct) => {
  item.payProduct = payProduct
  payProductItems.value = []
  payProductItems.value.push(item)
  router.push('/payment')
}

onMounted(async () => {
  await getProductCategory()
  await getCartProduct()
})
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  .padding {
    padding: 50px 24px 0 24px;
    .top-title {
      font-size: 20px;
      font-weight: $medi;
      color: $fontMain;
      padding-bottom: 65px;
    }

    .top-category {
      display: flex;
      gap: 30px;
      color: $fontSub;
      border-bottom: 1px solid $iconLine;
      .category-item {
        padding-bottom: 16px;
        cursor: pointer;

        &.active {
          color: $mainColor;
          font-weight: $semi;
          border-bottom: 2px solid $mainColor;
        }
      }
    }

    .content-gap {
      padding-top: 30px;
      display: flex;
      flex-direction: column;
      gap: 60px;
      .content {
        .title {
          font-size: 18px;
          color: $fontMain;
          padding-bottom: 20px;
        }
        .box-gap {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .box {
          position: relative;
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 50px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
          .name-sub {
            .name {
              display: flex;
              align-items: center;
              gap: 6px;
              font-size: 18px;
              color: $fontMain;
              font-weight: $medi;
              img {
                width: 20px;
                height: 20px;
                cursor: pointer;
              }
            }
            .sub {
              padding-top: 10px;
              font-size: 14px;
              color: $fontSub;
            }
          }
          .flex {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .cost-vat {
              display: flex;
              gap: 12px;
              .ballon {
                padding: 12px;
                position: relative;
                display: flex;
                align-items: center;
                gap: 6px;
                background: white;
                border-radius: 10px;
                border: 1px solid $iconLine;
                font-size: 11px;
                color: $fontSub;
                filter: drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.05));
                animation: motion 0.8s linear 0s infinite alternate;
                i {
                  font-size: 16px;
                  color: #9dccf6;
                }
              }
              .ballon:after {
                content: '';
                width: 0;
                position: absolute;
                top: 40%;
                right: -5px;
                z-index: 1;
                border: 5px solid transparent;
                border-left-color: white;
                border-right: 0;
              }
              .ballon:before {
                content: '';
                width: 0;
                position: absolute;
                top: 40%;
                right: -6px;
                z-index: 0;
                border-width: 0 16px 20px 17.5px;
                border: 5px solid transparent;
                border-left-color: $iconLine;
                border-right: 0;
              }

              .cost {
                display: flex;
                align-items: center;
                font-size: 18px;
                color: $fontMain;
              }
              .medi {
                font-weight: $medi;
              }
              .original {
                padding-right: 10px;
                font-size: 15px;
                color: $fontSub;
                text-decoration: line-through;
              }
              .red {
                color: $subColor;
              }
              .vat {
                display: flex;
                gap: 2px;
                font-size: 12px;
                color: $fontSub;
                .discount {
                  display: flex;
                  color: $mainColor;
                  img {
                    width: 14px;
                    height: 14px;
                  }
                }
              }
            }
            .btn {
              padding-top: 20px;
              width: 100%;
              height: 50px;
              display: flex;
              gap: 10px;
              .detail,
              .cart {
                border-radius: 10px;
                border: 1px solid $iconLine;
                background-color: white;
                font-family: Pretendard;
                font-size: 16px;
                font-weight: $reg;
                color: $fontSub;
                cursor: pointer;
              }
              .addcart {
                border: 1px solid $subColor;
                color: $subColor;
              }
              .detail {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                img {
                  width: 20px;
                  height: 20px;
                }
              }
              .cart {
                width: 25%;
              }
              .apply {
                width: 100%;
                border-radius: 10px;
                border: none;
                background-color: $mainColor;
                font-family: Pretendard;
                font-size: 16px;
                font-weight: $reg;
                color: white;
                cursor: pointer;
              }
            }
          }
        }

        .more-box {
          margin-top: -20px;
          padding: 0 30px;
          background-color: #fafafa;
          border: 1px solid $iconLine;
          border-radius: 10px;
          .menu-detail {
            padding-top: 50px;
            .menu {
              display: flex;
              justify-content: space-around;
              div {
                width: 100%;
                height: 42px;
                background-color: $sectionLine;
                display: flex;
                justify-content: center;
                align-items: center;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                border: 1px solid $iconLine;
                border-bottom: none;
                font-size: 15px;
                color: $fontSub;
                cursor: pointer;
              }
              .select {
                background-color: white;
                color: $mainColor;
              }
            }
            .detail {
              padding: 25px 0 0;
              background-color: white;
              border-radius: 10px;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 50px;
              .first {
                width: 140px;
                height: 350px;
              }
              .second {
                width: 408px;
                height: 325px;
              }
            }
          }
        }
        .ment {
          padding: 30px 0;
          font-size: 14px;
          color: $fontSub;
          line-height: 24px;
        }
      }
      .premium-service {
        .box {
          .name-sub {
            .name {
              img {
                cursor: default;
              }
            }
          }
          .flex {
            .cost-vat {
              gap: 0;
            }
          }
        }

        .premium-more {
          .menu-detail {
            padding-bottom: 30px;
            .detail {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
            }
          }
          .ment {
            padding-bottom: 30px;
          }
        }
      }
      .guide {
        padding-top: 30px;
        margin-top: 30px;
        border-top: 1px solid #ebebeb;
        .guide-title {
          padding-bottom: 10px;
          font-weight: $medi;
          color: $fontMain;
          .blue {
            padding-left: 10px;
            font-size: 12px;
            color: $mainColor;
            font-weight: $reg;
            cursor: pointer;
          }
        }
        .guide-ment {
          font-size: 14px;
          color: $fontSub;
          line-height: 24px;
        }
      }
    }
  }
  .premium-free {
    padding-top: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@include mobile {
  article {
    padding: 0 0 58px 0;
    .padding {
      padding: 0;
      .top-title {
        display: flex;
        align-items: center;
        gap: 8px;
        position: absolute;
        top: 20px;
        left: 24px;
        font-size: 16px;
        padding: 0;
      }

      .top-category {
        background-color: white;
        justify-content: space-around;
        padding: 16px 24px 0 24px;
        border-bottom: 1px solid $iconLine;
        font-size: 14px;
        div {
          width: 100%;
          text-align: center;
        }
      }

      .content-gap {
        padding: 0;
        gap: 10px;
        .content {
          background-color: white;
          border: none;
          .box-gap {
            gap: 0;
          }
          .title {
            padding: 0 0 20px 24px;
            font-size: 14px;
          }
          .box {
            padding: 30px 24px;
            border-radius: 0;
            box-shadow: none;
            border-top: 1px solid $sectionLine;
            .name-sub {
              .name {
                font-size: 16px;
              }
              .sub {
                font-size: 11px;
              }
            }
            .flex {
              .cost-vat {
                .cost {
                  font-size: 16px;
                }
                .vat {
                  font-size: 10px;
                }
              }
              .btn {
                .detail,
                .apply {
                  font-size: 14px;
                }
                .cart {
                  width: 40%;
                }
              }
            }
          }

          .more-box {
            margin-top: 0;
            border-radius: 0;
            padding: 0 24px;
            border: none;
            .menu-detail {
              padding: 30px 0 0;
              .menu {
                div {
                  font-size: 13px;
                }
              }
              .detail {
                padding: 25px 40px 0;
                gap: 45px;
                .first {
                  width: 55%;
                  height: 100%;
                }
                .second {
                  width: 100%;
                  height: 100%;
                }
              }
            }
            .ment {
              padding: 20px 0 30px;
              font-size: 13px;
            }
          }
        }
        .guide {
          background-color: #f2f4f7;
          padding: 30px 24px;
          margin-top: 0;
          border-top: none;
          .guide-title {
            font-size: 14px;
            .blue {
              font-size: 11px;
            }
          }
          .guide-ment {
            font-size: 13px;
          }
        }
        .premium-service {
          padding: 0;
          border: none;
          .premium-more {
            .ment {
              padding-bottom: 20px;
            }
          }
        }
      }
    }
    .premium-free {
      padding-top: 0;
    }
  }
}

@include pc {
  article {
    padding: 0;

    .padding {
      padding: 50px 160px 0;
      .content-gap {
        gap: 80px;
        .content {
          .box {
            width: 1270px;
            box-sizing: border-box;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .name-sub {
              width: 100%;
            }
            .flex {
              width: 100%;
              flex-direction: row;
              align-items: center;
              gap: 30px;
              .cost-vat {
                width: 60%;
                flex-direction: column;
                align-items: flex-end;
                .cost {
                  position: relative;
                  .ballon {
                    width: 160px;
                    padding: 12px 0;
                    justify-content: center;
                    position: absolute;
                    top: -60px;
                    left: -30px;
                    animation: motion-pc 0.8s linear 0s infinite alternate;
                  }
                  .ballon:after {
                    top: 98%;
                    right: 50%;
                    transform: translate(50%, 0%);
                    border-top: 7px solid white;
                    border-left: 7px solid transparent;
                    border-right: 7px solid transparent;
                    border-bottom: 0px solid transparent;
                  }
                  .ballon:before {
                    top: 100%;
                    right: 50%;
                    transform: translate(50%, 0%);
                    border-top: 7px solid $iconLine;
                    border-left: 7px solid transparent;
                    border-right: 7px solid transparent;
                    border-bottom: 0px solid transparent;
                  }
                }
              }

              .btn {
                width: 100%;
                padding: 0;
                .cart {
                  width: 40%;
                }
              }
            }
          }

          .more-box {
            width: 1270px;
            box-sizing: border-box;
            .menu-detail {
              .detail {
                flex-direction: row;
                justify-content: center;
                align-items: flex-start;
                gap: 200px;
                .second {
                  width: 546px;
                  height: 372px;
                }
              }
            }
          }
        }

        .premium-service {
          .box {
            .flex {
              .cost-vat {
                gap: 12px;
              }
            }
          }
        }
      }
    }
    .premium-free {
      padding-top: 80px;
      img {
        width: 100%;
      }
    }
  }
}

@keyframes motion-pc {
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: 8px;
  }
}

@keyframes motion {
  0% {
    margin-right: 10px;
  }
  100% {
    margin-right: 18px;
  }
}
</style>
