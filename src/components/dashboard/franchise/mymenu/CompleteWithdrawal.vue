<template>
  <section>
    <article>
      <img src="../../../../assets/dashboard/bye.png" alt="bye" />

      <div class="title">파트너 회원 탈퇴 완료</div>
      <div class="sub">
        탈퇴사유는 보다 나은 서비스를 위해<br />
        소중한 정보로 활용하겠습니다.<br />
        창업픽을 이용해주셔서 감사합니다.
      </div>

      <button>홈으로</button>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding-top: 240px;
  text-align: center;

  img {
    width: 328px;
    height: 107px;
    padding-bottom: 48px;
  }

  .title {
    font-size: 20px;
    font-weight: $medi;
    color: $fontMain;
    padding-bottom: 26px;
  }
  .sub {
    font-size: 15px;
    color: $fontSub;
    line-height: 24px;
    padding-bottom: 50px;
  }

  button {
    width: 378px;
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

@include mobile {
  article {
    width: 100%;
    padding: 170px 24px 0 24px;
    box-sizing: border-box;

    img {
      width: 100%;
      height: 100%;
      padding-bottom: 50px;
    }

    .title {
      font-size: 18px;
      padding-bottom: 29px;
    }
    .sub {
      font-size: 13px;
    }

    button {
      width: 100%;
      font-size: 14px;
    }
  }
}
</style>
