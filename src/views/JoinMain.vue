<template>
  <article>
    <section id="logo">
      <RouterLink to="/" class="none">
        <div v-if="getDevice !== 'mobile'" class="title">
          <img class="logo" src="../assets/header/logo.png" alt="로고" />
          <img
            class="partner"
            src="../assets/header/partner.png"
            alt="파트너"
          />
        </div>

        <div v-if="getDevice === 'mobile'" class="title">
          <img src="../assets/login/arrow_lt.png" alt="이전" />
          <div>로그인</div>
        </div>
      </RouterLink>
    </section>

    <section id="title">
      <div>파트너 회원가입</div>
      <div class="sub">
        창업픽 파트너가 되어 다양한 광고효과를 경험해 보세요!
      </div>
    </section>

    <section id="category">
      <div class="box fc">
        <i class="fa-regular fa-building"></i>
        <div>프랜차이즈 브랜드</div>
      </div>

      <div class="box rt">
        <i class="fa-solid fa-people-roof"></i>
        <div>공인중개사</div>
      </div>

      <div class="box cp">
        <i class="fa-regular fa-building"></i>
        <div>협력파트너</div>
      </div>

      <div></div>
    </section>
  </article>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 100px 0 375px 0;
  text-align: center;

  #logo {
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
    .title {
      display: flex;
      align-items: baseline;
      gap: 13.54px;

      .logo {
        width: 160.5px;
        height: 38px;
      }

      .partner {
        width: 117.96px;
        height: 15.2px;
      }
    }
  }

  #title {
    div {
      font-weight: $medi;
      border-bottom: 1px solid $sectionLine;
      padding-bottom: 20px;
    }

    .sub {
      font-size: 14px;
      color: $fontSub;
      padding-top: 30px;
    }
  }
}
</style>
