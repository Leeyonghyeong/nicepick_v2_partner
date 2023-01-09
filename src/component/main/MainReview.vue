<template>
  <section id="main-review">
    <div class="padding-box">
      <div class="title">
        <div class="title-padding">여기가 그렇게 창업 맛집이라며?</div>
        <div class="title-bold">후기로 인증하는 창업PICK</div>
      </div>

      <div class="review-flex">
        <div v-for="index in 5" :key="index" class="review-box">
          <div class="user-info">
            <img
              class="user-image"
              src="../../assets/main/user_blue.png"
              alt="유저-파랑"
            />
            <div class="user">
              <div class="user-title">이런 창업은 처음이야</div>
              <div class="user-name">**커피 사장님</div>
            </div>
          </div>

          <div class="review">
            창업은 처음이라 하나도 모르고 시작했는데 창업픽 통해서 브랜드 연결
            받았어요! 하나부터 열까지 꼼꼼하게 알려주셔서 창업할 수 있었어요.
            감사합니다!
          </div>
        </div>
      </div>

      <div class="review-flex-2">
        <div v-for="index in 6" :key="index" class="review-box">
          <div class="user-info">
            <img
              class="user-image"
              src="../../assets/main/user_blue.png"
              alt="유저-파랑"
            />
            <div class="user">
              <div class="user-title">이런 창업은 처음이야</div>
              <div class="user-name">**커피 사장님</div>
            </div>
          </div>

          <div class="review">
            창업은 처음이라 하나도 모르고 시작했는데 창업픽 통해서 브랜드 연결
            받았어요! 하나부터 열까지 꼼꼼하게 알려주셔서 창업할 수 있었어요.
            감사합니다!
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';

section {
  font-family: $pre;
}

#main-review {
  background-color: $subBack;
  height: 800px;
  margin-bottom: 80px;

  .padding-box {
    padding: 100px 0 148px 0;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $fontMainColor;
      padding-bottom: 80px;

      .title-padding {
        font-size: 20px;
        padding-bottom: 10px;
      }

      .title-bold {
        font-size: 32px;
        font-weight: $semi;
      }
    }

    .review-flex,
    .review-flex-2 {
      display: flex;
      gap: 30px;
      width: 150%;
      position: absolute;

      .review-box {
        background-color: white;
        border-radius: 10px;
        width: 318px;
        height: 120px;
        padding: 30px;
        color: $fontMainColor;

        .user-info {
          display: flex;
          align-items: center;
          gap: 10px;

          .user-image {
            width: 40px;
            height: 40px;
          }

          .user {
            .user-title {
              font-size: 12px;
              color: $fontSubColor;
              padding-bottom: 4px;
            }
          }
        }

        .review {
          padding-top: 20px;
          line-height: 20px;
          font-size: 14px;
        }
      }
    }

    .review-flex {
      position: relative;
      left: -45px;
    }

    .review-flex-2 {
      margin-top: 40px;
      left: -248px;
    }
  }
}
</style>
