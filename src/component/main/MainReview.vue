<template>
  <section id="main-review">
    <div class="padding-box">
      <div class="title">
        <div class="title-padding">
          여기가 그렇게 창업 맛집이라며? 창업픽으로 가보자고~
        </div>
        <div class="title-bold">후기로 인증하는 창업PICK</div>
      </div>

      <div class="review-auto">
        <div class="auto">
          <img src="../../assets/main/review_1.png" alt="리뷰" />
          <img src="../../assets/main/review_2.png" alt="리뷰" />
          <img src="../../assets/main/review_3.png" alt="리뷰" />
          <img src="../../assets/main/review_4.png" alt="리뷰" />
          <img src="../../assets/main/review_5.png" alt="리뷰" />
          <img src="../../assets/main/review_1.png" alt="리뷰" />
          <img src="../../assets/main/review_2.png" alt="리뷰" />
          <img src="../../assets/main/review_3.png" alt="리뷰" />
          <img src="../../assets/main/review_4.png" alt="리뷰" />
          <img src="../../assets/main/review_5.png" alt="리뷰" />
        </div>

        <div class="auto-2">
          <img src="../../assets/main/review_1.png" alt="리뷰" />
          <img src="../../assets/main/review_2.png" alt="리뷰" />
          <img src="../../assets/main/review_3.png" alt="리뷰" />
          <img src="../../assets/main/review_4.png" alt="리뷰" />
          <img src="../../assets/main/review_5.png" alt="리뷰" />
          <img src="../../assets/main/review_1.png" alt="리뷰" />
          <img src="../../assets/main/review_2.png" alt="리뷰" />
          <img src="../../assets/main/review_3.png" alt="리뷰" />
          <img src="../../assets/main/review_4.png" alt="리뷰" />
          <img src="../../assets/main/review_5.png" alt="리뷰" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';

#main-review {
  background-color: $backColor;
  height: 800px;

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

    .review-auto {
      width: 100%;
      position: relative;
      overflow-x: hidden;
      .auto {
        display: flex;
        gap: 30px;
        animation: translate_left 30s linear infinite;
        img {
          width: 378px;
        }
      }

      .auto-2 {
        display: flex;
        flex-direction: row-reverse;
        gap: 30px;
        animation: translate_right 30s linear infinite;
        padding-top: 40px;
        img {
          width: 378px;
        }
      }
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

      .review-auto {
        div {
          img {
            width: 378px;
          }
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

@keyframes translate_left {
  100% {
    transform: translateX(-2000px);
  }
}

@keyframes translate_right {
  100% {
    transform: translateX(2000px);
  }
}
</style>
