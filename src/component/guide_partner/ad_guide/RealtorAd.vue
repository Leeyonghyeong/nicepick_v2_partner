<template>
  <section>
    <article>
      <div class="ad">
        <div v-if="getDevice !== 'mobile'" class="top-title">
          공인중개사 파트너 광고 상품
        </div>

        <div class="ad-section">
          <div class="content">
            <div :class="{ style: showPlus === true }" class="box">
              <div class="left">
                <div class="name">상권 지역플러스+</div>
                <div class="sub">상권지도 주변 지역 추가 노출</div>
              </div>
              <button @click="showPlus = !showPlus" class="detail-btn">
                상세보기
                <img
                  v-if="showPlus === false"
                  src="../../../assets/guide_partner/btn_open.png"
                  alt="열기"
                />
                <img
                  v-if="showPlus === true"
                  src="../../../assets/guide_partner/btn_close.png"
                  alt="닫기"
                />
              </button>
            </div>
            <div v-if="showPlus" class="detail">
              <div class="detail-box">
                <div class="img-sub">
                  <div class="img-section no-category">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/realtor/플러스tab.png"
                      alt="플러스"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/realtor/플러스mob.png"
                      alt="플러스"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/realtor/플러스pc.png"
                      alt="플러스"
                    />
                  </div>
                  <div class="sub">
                    · 기본 내 지역 + 주변지역까지 노출이 가능한
                    추가상품입니다.<br />
                    · 사용자가 검색한 지역에 따라 랜덤으로 노출 될 수 있습니다.
                  </div>
                </div>
              </div>
            </div>

            <div :class="{ style: showRecommend === true }" class="box">
              <div class="left">
                <div class="name">추천 중개사</div>
                <div class="sub">홈 메인 영상컨텐츠 노출</div>
              </div>
              <button
                @click="showRecommend = !showRecommend"
                class="detail-btn"
              >
                상세보기
                <img
                  v-if="showRecommend === false"
                  src="../../../assets/guide_partner/btn_open.png"
                  alt="열기"
                />
                <img
                  v-if="showRecommend === true"
                  src="../../../assets/guide_partner/btn_close.png"
                  alt="닫기"
                />
              </button>
            </div>
            <div v-if="showRecommend" class="detail">
              <div class="detail-box">
                <div class="img-sub">
                  <div class="img-section no-category">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/realtor/추천tab.png"
                      alt="추천"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/realtor/추천mob.png"
                      alt="추천"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/realtor/추천pc.png"
                      alt="추천"
                    />
                  </div>
                  <div class="sub">
                    · 상권정보 브랜드리스트 검색시 중개사 리스트 상단 영역에
                    노출됩니다.<br />
                    · [상권분석 지역플러스+]를 함께 이용하면 추가한 지역의
                    상단에 노출이 됩니다.<br />
                    · 사용자가 검색한 지역에 따라 랜덤으로 노출 될 수 있습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../store/window'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const showPlus = ref<boolean>(false)
const showRecommend = ref<boolean>(false)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 44px 80px;
  .top-title {
    font-size: 24px;
    color: $fontMain;
    font-weight: $semi;
    border-bottom: 2px solid $fontMain;
    padding-bottom: 20px;
    margin-bottom: 50px;
  }

  .ad-section {
    display: flex;
    flex-direction: column;
    gap: 80px;
    .content {
      display: flex;
      flex-direction: column;
      gap: 30px;
      .title {
        font-size: 18px;
        color: $fontMain;
      }
      .box {
        background-color: white;
        display: flex;
        justify-content: space-between;
        padding: 30px;
        border-radius: 10px;
        border: 1px solid $iconLine;
        z-index: 1;
        .left {
          .name {
            font-size: 18px;
            color: $fontMain;
            font-weight: $medi;
            display: flex;
            align-items: center;
            gap: 6px;
            padding-bottom: 12px;
            img {
              width: 20px;
              height: 20px;
            }
          }
          .sub {
            font-size: 14px;
            color: $fontSub;
          }
        }
        .detail-btn {
          padding: 15px 16px;
          height: 50px;
          border-radius: 10px;
          border: 1px solid $iconLine;
          background-color: white;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 16px;
          color: $fontSub;
          font-family: $pre;
          cursor: pointer;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
      .style {
        border: 1px solid $mainColor;
      }
      .detail {
        margin-top: -40px;
        background-color: #fafafa;
        padding: 60px 30px 50px;
        border-radius: 10px;
        .detail-category {
          display: flex;
          justify-content: space-around;
          div {
            width: 100%;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $sectionLine;
            border: 1px solid $iconLine;
            border-bottom: none;
            box-sizing: border-box;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            font-size: 15px;
            color: $fontSub;
            cursor: pointer;
          }
          .select {
            background-color: white;
            color: $mainColor;
          }
        }
        .detail-box {
          .img-sub {
            .img-section {
              background-color: white;
              border: 1px solid $iconLine;
              border-top: none;
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px;
              img {
                width: 100%;
              }
            }
            .no-category {
              border-top: 1px solid $iconLine;
              border-radius: 10px;
            }
            .match {
              padding: 148px 0;
              display: flex;
              justify-content: center;
              align-items: center;
              i {
                font-size: 60px;
                color: $fontMain;
              }
              .icon {
                text-align: center;
                .name {
                  font-size: 14px;
                  color: $fontMain;
                }
              }
              .ready {
                .name {
                  padding-top: 18px;
                }
              }
              .arrow {
                font-size: 30px;
                padding: 0 47px 0 60px;
                color: $subColor;
              }
              .company {
                i {
                  color: $mainColor;
                }
                .name {
                  padding-top: 10px;
                }
              }
            }
            .sub {
              font-size: 14px;
              color: $fontSub;
              line-height: 24px;
              padding-top: 30px;
            }
          }
        }
        .notice {
          font-size: 14px;
          line-height: 24px;
          color: $fontSub;
          border-top: 1px solid $sectionLine;
          padding-top: 30px;
          margin-top: 30px;
          .name {
            color: $fontMain;
            font-weight: $medi;
            padding-bottom: 10px;
            .blue {
              font-size: 12px;
              color: $mainColor;
              padding-left: 10px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}

@include mobile {
  article {
    padding: 0 0 10px 0;
    background-color: $iconLine;
    .ad {
      .ad-section {
        gap: 10px;
        .content {
          gap: 10px;
          .padding {
            padding: 30px 24px 0;
            background-color: white;
            margin-bottom: -10px;
            .title {
              padding-bottom: 20px;
              font-size: 16px;
              border-bottom: 1px solid $sectionLine;
            }
          }
          .box {
            flex-direction: column;
            gap: 30px;
            border-radius: 0;
            border: none;
            .left {
              .name {
                font-size: 16px;
                padding-bottom: 8px;
              }
              .sub {
                font-size: 11px;
              }
            }
            .detail-btn {
              justify-content: center;
              font-size: 14px;
            }
          }
          .style {
            border-bottom: 1px solid $mainColor;
          }
          .detail {
            margin-top: -10px;
            padding: 30px 24px;
            border-radius: 0;
            .detail-category {
              div {
                font-size: 13px;
              }
            }
            .detail-box {
              .match {
                padding: 111px 0;
                i {
                  font-size: 40px;
                }
                .icon {
                  .name {
                    font-size: 12px;
                  }
                }
                .arrow {
                  padding: 0 27px 0 49px;
                }
              }
              .sub {
                font-size: 13px;
                padding-top: 20px;
              }
            }
            .notice {
              font-size: 13px;
              .blue {
                font-size: 11px;
              }
            }
          }
        }
      }
    }
  }
}

@include pc {
  article {
    padding: 50px 0 80px 50px;
    width: 814px;
  }
}
</style>
