<template>
  <section>
    <article>
      <div class="header">
        <div v-if="getDevice !== 'mobile'" class="logo">
          <img src="../../assets/header/logo.png" alt="로고" />
        </div>

        <div v-if="getDevice === 'mobile'" class="title">브랜드</div>

        <div v-if="getDevice !== 'mobile'" class="logout-homebtn">
          <div class="logout">로그아웃</div>
          <button>창업픽 홈</button>
        </div>

        <div v-if="getDevice === 'mobile'" class="hammenu">
          <img src="../../assets/dashboard/ham.png" alt="햄버거메뉴" />
        </div>
      </div>
    </article>
  </section>
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
  padding: 12px 30px;
  border-bottom: 1px solid $sectionLine;
  background-color: white;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      img {
        width: 133px;
        height: 20px;
      }
    }

    .logout-homebtn {
      display: flex;
      align-items: center;
      gap: 24px;

      .logout {
        font-size: 13px;
        color: $fontMain;
        cursor: pointer;
      }

      button {
        border-radius: 50px;
        border: 1px solid $sectionLine;
        background-color: white;
        padding: 10px 20px;
        font-size: 13px;
        font-family: Pretendard;
        color: $fontSub;
        cursor: pointer;
      }
    }
  }
}

@include mobile {
  article {
    padding: 15px 23px 15px 24px;

    .header {
      .title {
        color: $fontMain;
      }

      .hammenu {
        img {
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
