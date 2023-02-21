<template>
  <article>
    <div class="header">
      <RouterLink to="/">
        <div class="logo">
          <img
            class="nicepick"
            src="../../assets/header/logo.png"
            alt="창업픽 로고"
          />
        </div>
      </RouterLink>

      <div v-if="getDevice !== 'mobile'" class="login-homebtn">
        <RouterLink to="/login" class="login">
          <button class="login">파트너 가입 / 로그인</button>
        </RouterLink>
        <button @click="deviceMoveUrl(getDevice, 'https://nicepick.co.kr')">
          창업픽 홈
        </button>
      </div>

      <div
        v-if="getDevice === 'mobile'"
        class="login-homebtn-mobile"
        @click="deviceMoveUrl(getDevice, 'https://nicepick.co.kr')"
      >
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
import { deviceMoveUrl } from '../../functions/common'

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)
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

  .header {
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
        width: 133px;
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
