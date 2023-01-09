<template>
  <article>
    <div class="box">
      <RouterLink to="/">
        <div class="logo">
          <img
            class="nicepick"
            src="../../assets/header/logo.png"
            alt="창업픽 로고"
          />
          <img
            class="partner"
            src="../../assets/header/partner.png"
            alt="파트너 로고"
          />
        </div>
      </RouterLink>

      <div v-if="getDevice !== 'mobile'" class="login-homebtn">
        <div>파트너 가입/로그인</div>
        <button>창업픽 홈</button>
      </div>

      <div v-if="getDevice === 'mobile'" class="login-homebtn-mobile">
        <img
          class="login"
          src="../../assets/header/login_mobile.png"
          alt="모바일 로그인"
        />
        <div class="home">
          <img
            src="../../assets/header/home_mobile.png"
            alt="모바일 창업픽 홈"
          />
          <div>창업픽 홈</div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  font-family: $pre;
  height: 60px;
  display: flex;
  border-bottom: 1px solid $sectionLine;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 2;

  .box {
    @include pc-container();
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      display: flex;
      align-items: baseline;
      gap: 7px;
      cursor: pointer;

      .nicepick {
        width: 83px;
        height: 20px;
      }
      .partner {
        width: 61px;
        height: 8px;
      }
    }

    .login-homebtn {
      display: flex;
      align-items: center;
      gap: 24px;
      font-size: 13px;

      div {
        color: $fontMainColor;
        cursor: pointer;
      }

      button {
        font-family: $pre;
        font-size: 13px;
        color: $fontSubColor;
        background-color: white;
        border: 1px solid $sectionLine;
        border-radius: 50px;
        padding: 10px 20px;
        cursor: pointer;
      }
    }
  }
}

@include tablet {
  article {
    @include tablet-container();
  }
}

@include mobile {
  article {
    @include mobile-container();

    .login-homebtn-mobile {
      display: flex;
      align-items: center;
      gap: 16px;

      .login {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }

      .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.44px;
        cursor: pointer;

        img {
          width: 14px;
          height: 11px;
        }

        div {
          font-size: 8px;
        }
      }
    }
  }
}
</style>
