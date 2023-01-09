<template>
  <section id="main-first">
    <div class="title">
      <div class="title-padding">성공적인 사업파트너,</div>
      <div><span>창업픽</span>과 함께 하세요!</div>
    </div>

    <div class="hand">
      <img src="../../assets/main/hand.png" alt="악수" />
    </div>

    <div class="value">
      <div class="box">
        <div class="value-title">영업중인 프랜차이즈</div>
        <div class="value-number">11,000+</div>
      </div>

      <div class="box">
        <div class="value-title">창업픽 앱 다운로드</div>
        <div class="value-number">10,000+</div>
      </div>

      <div class="box">
        <div class="value-title">월 방문자 수</div>
        <div class="value-number">50,000+</div>
      </div>

      <div class="box">
        <div class="value-title">재방문율</div>
        <div class="value-number">30%+</div>
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

#main-first {
  margin: 30px 0 80px 0;

  .title {
    font-size: 34px;
    font-weight: $semi;
    color: $fontMainColor;
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translate(-50%, 0%);

    div {
      display: flex;
      justify-content: center;
      span {
        color: $subColor;
      }
    }

    .title-padding {
      padding-bottom: 20px;
    }
  }

  .hand {
    padding-bottom: 80px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .value {
    display: flex;
    justify-content: center;
    gap: 30px;
    text-align: center;

    .box {
      width: 276px;
      height: 150px;
      border: 1px solid $sectionLine;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);

      .value-title {
        font-size: 16px;
        color: $fontSubColor;
        padding-bottom: 4px;
      }

      .value-number {
        font-size: 36px;
        color: $subColor;
        font-weight: $bold;
      }
    }
  }
}
</style>
