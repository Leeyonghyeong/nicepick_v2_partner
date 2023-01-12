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
        <router-link to="/login" class="login">
          <button class="login">파트너 가입 / 로그인</button>
        </router-link>
        <button>창업픽 홈</button>
      </div>

      <div v-if="getDevice === 'mobile'" class="login-homebtn-mobile">
        <router-link to="/login" class="login">
          <img
            class="login"
            src="../../assets/header/login_mobile.png"
            alt="모바일 로그인"
          />
        </router-link>
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
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
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
      align-items: flex-start;
      gap: 4px;
      cursor: pointer;

      .nicepick {
        width: 83px;
        height: 20px;
      }
      .partner {
        width: 46px;
        height: 13.53px;
      }
    }

    .login-homebtn {
      display: flex;
      align-items: center;
      gap: 24px;
      font-size: 13px;

      button {
        font-family: $pre;
        font-size: 13px;
        color: $fontSub;
        background-color: white;
        border: 1px solid $sectionLine;
        border-radius: 50px;
        padding: 10px 20px;
        cursor: pointer;
      }

      .login {
        button {
          background-color: $mainColor;
          border: none;
          color: white;
        }
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
