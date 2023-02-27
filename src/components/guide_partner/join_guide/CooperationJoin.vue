<template>
  <section>
    <article>
      <div class="box">
        <img src="../../../assets/login/hourglass.png" alt="모래시계" />
        <div class="title">
          협력 파트너 회원가입은 <span>준비중</span>입니다.
        </div>
        <div class="sub">
          보다 나은 서비스를 위하여 준비중에 있습니다.<br />
          빠른 시일내에 준비하여 찾아뵙겠습니다.
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  width: 814px;
  height: 820px;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    img {
      width: 60px;
      height: 60px;
    }
    .title {
      font-size: 24px;
      span {
        font-weight: $bold;
      }
    }
    .sub {
      font-size: 16px;
      color: $fontSub;
      line-height: 24px;
      text-align: center;
    }
  }
}

@include tablet {
  article {
    height: 100%;
    .box {
      padding: 296px 0;
    }
  }
}

@include mobile {
  article {
    width: 100%;
    height: 100%;
    .box {
      padding: 120px 0;
      .title {
        font-size: 18px;
      }
      .sub {
        font-size: 13px;
      }
    }
  }
}
</style>
