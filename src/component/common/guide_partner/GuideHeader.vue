<template>
  <article>
    <div class="header">
      <div class="left">
        <img
          v-if="getDevice !== 'pc'"
          @click="showHammenu"
          class="hammenu"
          src="../../../assets/guide_partner/ham.png"
          alt="ham"
        />
        <RouterLink to="/" v-if="getDevice !== 'mobile'">
          <div class="logo">
            <img
              class="nicepick"
              src="../../../assets/header/logo.png"
              alt="창업픽 로고"
            />
          </div>
        </RouterLink>
      </div>

      <div v-if="getDevice === 'mobile'" class="middle">
        {{ selectCategory }}
      </div>

      <div class="right">
        <div v-if="getDevice !== 'mobile'" class="login-homebtn">
          <RouterLink to="/login" class="login">
            <button class="login">파트너 가입 / 로그인</button>
          </RouterLink>
          <button>창업픽 홈</button>
        </div>

        <RouterLink to="/">
          <div v-if="getDevice === 'mobile'" class="close">
            <img src="../../../assets/guide_partner/x.png" alt="창닫기" />
          </div>
        </RouterLink>
      </div>
    </div>

    <GuideCategory v-if="showModal" @showHammenu="showHammenu" />
  </article>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../store/window'
import { storeToRefs } from 'pinia'
import GuideCategory from './GuideCategory.vue'
import { ref } from 'vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const showModal = ref<boolean>(false)
const showHammenu = () => {
  showModal.value = !showModal.value
}

const selectCategory = ref<string>('test')
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
    .left {
      display: flex;
      align-items: center;
      gap: 8px;
      .hammenu {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
      .logo {
        display: flex;
        align-items: flex-start;
        gap: 4px;
        cursor: pointer;

        .nicepick {
          width: 133px;
        }
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

    .close {
      img {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>
