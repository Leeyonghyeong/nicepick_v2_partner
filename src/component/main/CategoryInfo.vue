<template>
  <section id="category-info">
    <div class="title">
      <div class="select">프랜차이즈 브랜드</div>
      <div>공인중개사</div>
      <div>협력 파트너</div>
    </div>

    <div class="info">
      <div class="info-slide">
        <Swiper
          :modules="[Navigation]"
          :slides-per-view="1"
          :loop="true"
          :loop-additional-slides="1"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true,
          }"
          :navigation="{
            prevEl: '.custom-button-prev',
            nextEl: '.custom-button-next',
          }"
        >
          <div v-if="getDevice !== 'mobile'" class="custom-button-prev">
            <img src="../../assets/main/btn_prev.png" alt="이전" />
          </div>
          <div v-if="getDevice !== 'mobile'" class="custom-button-next">
            <img src="../../assets/main/btn_next.png" alt="다음" />
          </div>

          <div class="swiper-pagination"></div>

          <SwiperSlide class="box">
            <img src="../../assets/main/franchise.png" alt="프랜차이즈" />
            <div class="box-title">
              <div class="bold">브랜드 광고 효과</div>
              <div>
                자영업 창업 전문 플랫폼 창업픽을 찾는<br />
                수많은 예비창업자들에게<br />
                귀사의 브랜드를 효과적으로 홍보해 보세요!
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide class="box">
            <img src="../../assets/main/franchise.png" alt="프랜차이즈" />
            <div class="box-title">
              <div class="bold">마케팅 효과 up 비용 down</div>
              <div>
                예비 창업자를 타겟으로 하는 창업픽 광고를 통해<br />
                기존 타사 마케팅 대비 비용은 다운! 효과는 업!<br />
                직접 경험해 보세요.
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide class="box">
            <img src="../../assets/main/franchise.png" alt="프랜차이즈" />
            <div class="box-title">
              <div class="bold">편리한 고객 상담</div>
              <div>
                창업픽의 실시간 채널을 통해<br />
                예비창업자와 1:1 소통이 가능합니다.<br />
                브랜드 관리자로 가입하시면 바로 이용이 가능합니다.
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide class="box">
            <img src="../../assets/main/franchise.png" alt="프랜차이즈" />
            <div class="box-title">
              <div class="bold">가맹점 증가</div>
              <div>
                당신의 멋진 아이템을 창업픽을 통해 홍보해보세요.<br />
                가맹점 증가는 자연스럽게 이뤄질 것입니다.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

#category-info {
  .title {
    display: flex;
    justify-content: center;
    gap: 60px;
    font-size: 20px;
    color: $inputLine;

    div {
      cursor: pointer;
    }

    .select {
      color: $mainColor;
      font-weight: $semi;
      border-bottom: 3px solid $mainColor;
      padding-bottom: 10px;
    }
  }

  .info {
    padding-top: 138px;

    .info-slide {
      .custom-button-prev,
      .custom-button-next {
        position: absolute;
        width: 50px;
        height: 50px;
        z-index: 3;
        cursor: pointer;

        img {
          width: 50px;
          height: 50px;
        }

        &.custom-button-prev {
          top: 75px;
          left: 220px;
        }

        &.custom-button-next {
          top: 75px;
          right: 220px;
        }
      }

      .box {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 145px;

        img {
          width: 306px;
          height: 277px;
        }
        .box-title {
          display: flex;
          flex-direction: column;
          gap: 20px;
          font-size: 18px;
          color: $fontSub;
          line-height: 30px;

          .bold {
            font-size: 40px;
            color: $fontMain;
            font-weight: $semi;
          }
        }
      }
    }
  }
}

@include tablet {
  #category-info {
    .info {
      padding-top: 168px;

      .info-slide {
        .custom-button-prev,
        .custom-button-next {
          &.custom-button-prev {
            left: 44px;
          }

          &.custom-button-next {
            right: 44px;
          }
        }

        .box {
          gap: 24px;

          img {
            width: 240px;
            height: 217px;
          }

          .box-title {
            font-size: 15px;
            line-height: 24px;

            .bold {
              font-size: 30px;
            }
          }
        }
      }
    }
  }
}

@include mobile {
  #category-info {
    .title {
      @include mobile-container();
      font-size: 16px;
      gap: 30px;
    }

    .info {
      padding-top: 50px;

      .info-slide {
        .box {
          flex-direction: column;
          gap: 50px;
          text-align: center;
          .box-title {
            font-size: 15px;
            line-height: 24px;
            .bold {
              font-size: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
