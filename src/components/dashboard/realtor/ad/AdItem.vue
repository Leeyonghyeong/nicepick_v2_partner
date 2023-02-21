<template>
  <section>
    <article>
      <div class="top-title">광고 상품</div>

      <div class="content-gap">
        <div class="box-gap">
          <div>
            <div :class="{ boxstyle: showPlus }" class="box">
              <div class="name-sub">
                <div class="name">상권 지역플러스+ (30일)</div>
                <div class="sub">상권지도 주변 지역 추가 노출</div>
              </div>
              <div class="flex">
                <div class="cost-vat flex">
                  <div class="cost"><span class="red">99,000</span> 원</div>
                  <div class="vat">VAT 포함</div>
                </div>
                <div class="btn">
                  <button class="detail-btn" @click="showPlus = !showPlus">
                    상세보기
                    <img
                      v-if="!showPlus"
                      src="../../../../assets/dashboard/arrow_more.png"
                      alt="down"
                    />
                    <img
                      v-if="showPlus"
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
            <div class="more-box" v-if="showPlus">
              <div class="menu-detail">
                <div class="detail plus">
                  <img
                    v-if="getDevice === 'pc'"
                    class="first"
                    src="../../../../assets/realtor/ad/지역플러스pc.png"
                    alt="지역플러스"
                  />
                  <img
                    v-if="getDevice !== 'pc'"
                    class="first"
                    src="../../../../assets/realtor/ad/지역플러스.png"
                    alt="지역플러스"
                  />
                </div>
              </div>
              <div class="ment">
                · 기본 내 지역 + 주변지역까지 노출이 가능한 추가상품입니다.<br />
                · 사용자가 검색한 지역에 따라 랜덤으로 노출 될 수 있습니다.
              </div>
            </div>
          </div>

          <div>
            <div :class="{ boxstyle: showRecommend }" class="box">
              <div class="name-sub">
                <div class="name">추천 중개사 (30일)</div>
                <div class="sub">추천중개사 목록 상위 노출</div>
              </div>
              <div class="flex">
                <div class="cost-vat flex">
                  <div class="cost"><span class="red">11,000</span> 원</div>
                  <div class="vat">VAT 포함</div>
                </div>
                <div class="btn">
                  <button
                    class="detail-btn"
                    @click="showRecommend = !showRecommend"
                  >
                    상세보기
                    <img
                      v-if="!showRecommend"
                      src="../../../../assets/dashboard/arrow_more.png"
                      alt="down"
                    />
                    <img
                      v-if="showRecommend"
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
            <div class="more-box" v-if="showRecommend">
              <div class="menu-detail">
                <div class="detail recommend">
                  <img
                    v-if="getDevice === 'pc'"
                    src="../../../../assets/realtor/ad/추천중개사pc.png"
                    alt="추천중개사"
                  />
                  <img
                    v-if="getDevice === 'tablet'"
                    src="../../../../assets/realtor/ad/추천중개사tab.png"
                    alt="추천중개사"
                  />
                  <img
                    v-if="getDevice === 'mobile'"
                    src="../../../../assets/realtor/ad/추천중개사mob.png"
                    alt="추천중개사"
                  />
                </div>
                <div class="ment">
                  · 상권정보 브랜드리스트 검색시 중개사 리스트 상단 영역에
                  노출됩니다.<br />
                  · 사용자가 검색한 지역에 따라 랜덤으로 노출 될 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="caution">
          <div class="title">
            <div class="name">중개소 광고상품 유의사항</div>
            <div class="link">자주 묻는 질문 ></div>
          </div>
          <div class="main">
            · 현재 공인중개사무실을 운영 또는 소속된 공인중개사만 가입이
            가능합니다.<br />
            · 공인중개사무실이 위치한 한 곳의 지역은 기본 노출지역으로 무료로
            제공되며 지역 추가시 추가 비용일 발생됩니다.<br />
            · 모든 서비스 가격에는 부가세 및 결제수수료가 포함되어있습니다.<br />
            · 고객과 공인중개사간의 거래에 관하여 당사는 일체 관여하지 않음을
            알려드립니다.<br />
            · 서비스 이용시 도움이 필요하시면 당사 고객센터(070-8287-2281)로
            영업시간내 문의 부탁드립니다.
          </div>
        </div>
      </div>

      <AddCart v-if="showModal" @showAddCart="showAddCart" />
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../../store/window'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import AddCart from '../../../common/modal/dashboard/AddCart.vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const showModal = ref<boolean>(false)
const showAddCart = () => {
  showModal.value = !showModal.value
}

const showPlus = ref<boolean>(false)
const showRecommend = ref<boolean>(false)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 24px 0 24px;
  .top-title {
    font-size: 20px;
    font-weight: $medi;
    color: $fontMain;
  }

  .content-gap {
    padding: 50px 0 60px;
    display: flex;
    flex-direction: column;
    gap: 60px;
    .box-gap {
      display: flex;
      flex-direction: column;
      gap: 30px;

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
            .cost {
              display: flex;
              align-items: center;
              font-size: 18px;
              color: $fontMain;
              .red {
                color: $subColor;
              }
            }
            .vat {
              display: flex;
              gap: 2px;
              font-size: 12px;
              color: $fontSub;
            }
          }
          .btn {
            padding-top: 20px;
            width: 100%;
            height: 50px;
            display: flex;
            gap: 10px;
            .detail-btn,
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
            .detail-btn {
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

      .boxstyle {
        box-shadow: 0 0 0 1px $mainColor inset;
      }

      .more-box {
        margin-top: -30px;
        padding: 80px 30px 50px 30px;
        background-color: #fafafa;
        border: 1px solid $iconLine;
        border-radius: 10px;
        .menu-detail {
          .menu {
            display: flex;
            justify-content: space-around;
          }
          .detail {
            background-color: white;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 50px;
            img {
              width: 100%;
            }
          }
        }
        .ment {
          padding-top: 30px;
          font-size: 14px;
          color: $fontSub;
          line-height: 24px;
        }
      }
    }
    .caution {
      .title {
        color: $fontMain;
        font-weight: $medi;
        display: flex;
        align-items: flex-end;
        gap: 10px;
        .link {
          color: $mainColor;
          font-size: 12px;
          cursor: pointer;
        }
      }
      .main {
        padding-top: 15px;
        line-height: 24px;
        color: $fontSub;
        font-size: 14px;
      }
    }
  }
}

@include mobile {
  article {
    padding: 0 0 58px;
    padding-bottom: 30%;
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

    .content-gap {
      padding: 0;
      gap: 30px;
      .box-gap {
        gap: 10px;
        .box {
          padding: 30px 24px;
          border-radius: 0;
          box-shadow: none;
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
        .boxstyle {
          box-shadow: none;
          border-bottom: 1px solid $mainColor;
        }

        .more-box {
          margin-top: 0;
          border-radius: 0;
          padding: 30px 24px;
          .menu-detail {
            .detail {
              padding: 0;
              gap: 0;
              margin-bottom: 20px;
            }
          }
          .ment {
            padding: 0;
            font-size: 13px;
          }
        }
      }
      .caution {
        padding: 0 24px 30px 24px;
        .title {
          font-size: 14px;
          .link {
            font-size: 11px;
          }
        }
        .main {
          font-size: 13px;
        }
      }
    }
  }
}

@include pc {
  article {
    padding: 50px 160px 0;
    padding-bottom: 5%;

    .content-gap {
      gap: 30px;
      .box-gap {
        .box {
          width: 1270px;
          box-sizing: border-box;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .name-sub {
            width: 100%;
            .sub {
              padding-top: 12px;
            }
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
              gap: 98px;
            }
          }
        }
      }
      .caution {
        border-top: 1px solid $iconLine;
        padding-top: 30px;
      }
    }
  }
}
</style>
