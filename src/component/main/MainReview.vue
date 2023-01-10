<template>
  <section id="main-review">
    <div class="padding-box">
      <div class="title">
        <div class="title-padding">여기가 그렇게 창업 맛집이라며?</div>
        <div class="title-bold">후기로 인증하는 창업PICK</div>
      </div>

      <div class="review-auto">
        <Swiper
          :modules="[Navigation]"
          :slides-per-view="1"
          :loop="true"
          :loop-additional-slides="1"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
        >
          <SwiperSlide>
            <img src="../../assets/main/review.png" alt="리뷰" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="review-auto-2">
        <Swiper
          :modules="[Navigation]"
          :slides-per-view="1"
          :loop="true"
          :loop-additional-slides="1"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
        >
          <SwiperSlide>
            <img src="../../assets/main/review.png" alt="리뷰" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/css/autoplay'
</script>

<style lang="scss" scoped>
@import '@/scss/main';

#main-review {
  background-color: $backColor;
  height: 800px;
  margin-bottom: 150px;

  .padding-box {
    padding: 100px 0 148px 0;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $fontMain;
      padding-bottom: 80px;

      .title-padding {
        font-size: 20px;
        padding-bottom: 15px;
      }

      .title-bold {
        font-size: 32px;
        font-weight: $semi;
      }
    }

    .review-auto,
    .review-auto-2 {
      img {
        width: 2010px;
      }
    }

    .review-auto-2 {
      padding-top: 40px;
    }
  }
}

@include tablet {
  #main-review {
    .padding-box {
      .title {
        .title-padding {
          padding-bottom: 10px;
        }
      }
    }
  }
}

@include mobile {
  #main-review {
    height: 600px;
    .padding-box {
      padding: 60px 0 100px 0;
      .title {
        padding-bottom: 50px;
        .title-padding {
          font-size: 15px;
          padding-bottom: 10px;
        }

        .title-bold {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
