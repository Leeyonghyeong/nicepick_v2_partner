<template>
  <section id="guide">
    <div class="title">더 궁금하신 점 있으신가요?</div>
    <div class="btn-box">
      <div class="box">
        <i class="fa-solid fa-user-plus"></i>
        <div class="flex">
          <div>PARTNER SIGN-UP GUIDE</div>
          <div class="box-title">파트너 가입 가이드</div>
        </div>
      </div>

      <div class="box">
        <i class="fa-solid fa-circle-info"></i>
        <div class="flex">
          <div>SERVICE GUIDE</div>
          <div class="box-title">서비스 이용 가이드</div>
        </div>
      </div>

      <div class="box">
        <i class="fa-solid fa-gift"></i>
        <div class="flex">
          <div>ADVERTISING GUIDE</div>
          <div class="box-title">광고 상품 안내</div>
        </div>
      </div>

      <div class="box">
        <i class="fa-solid fa-clipboard-question"></i>
        <div class="flex">
          <div>FAQ</div>
          <div class="box-title">자주 묻는 질문</div>
        </div>
      </div>
    </div>
  </section>

  <section id="start">
    <div class="title">창업픽, 지금 시작하세요!</div>
    <RouterLink to="join">
      <button>파트너 가입하기</button>
    </RouterLink>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';

#guide {
  background-color: $mainColor;
  height: 619px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;

  .title {
    font-size: 32px;
    color: white;
    font-weight: $semi;
  }

  .btn-box {
    display: flex;
    gap: 30px;

    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: white;
      width: 276px;
      height: 200px;
      border-radius: 10px;
      cursor: pointer;

      i {
        font-size: 40px;
        color: $mainColor;
        padding-bottom: 20px;
      }

      .flex {
        text-align: center;

        div {
          font-size: 12px;
          color: $fontSub;
        }

        .box-title {
          padding-top: 6px;
          font-size: 18px;
          font-weight: $medi;
          color: $fontMain;
        }
      }
    }
  }
}

#start {
  padding: 150px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  .title {
    font-size: 32px !important;
    color: $fontMain;
    font-weight: $semi;
  }

  button {
    width: 204px;
    height: 60px;
    background-color: $mainColor;
    font-size: 20px !important;
    font-weight: $medi;
    font-family: $pre;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
}

@include tablet {
  #guide {
    height: 842px;

    .btn-box {
      justify-content: center;
      width: 100%;
      padding: 0 44px;
      box-sizing: border-box;
      flex-wrap: wrap;
      gap: 24px;
      .box {
        width: 48%;
      }
    }
  }
}

@include mobile {
  #guide {
    @include mobile-container();
    height: 780px;
    gap: 50px;

    .title {
      font-size: 20px;
    }

    .btn-box {
      width: 100%;
      flex-direction: column;
      gap: 8px;

      .box {
        width: 100%;
        height: 120px;
        flex-direction: row;
        gap: 15px;
        justify-content: left;
        padding-left: 40px;
        box-sizing: border-box;

        i {
          padding: 0;
        }

        .flex {
          text-align: left;
          .box-title {
            font-size: 16px;
          }
        }
      }
    }
  }
  #start {
    padding: 100px 0;
    gap: 40px;
    .title {
      font-size: 26px !important;
    }
    button {
      height: 50px;
      font-size: 16px !important;
    }
  }
}
</style>
