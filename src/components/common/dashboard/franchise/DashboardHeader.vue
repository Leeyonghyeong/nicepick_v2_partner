<template>
  <article>
    <div class="header">
      <div v-if="getDevice !== 'mobile'" class="logo">
        <img src="../../../../assets/header/logo.png" alt="로고" />
      </div>
      <div v-else class="title">대시보드</div>

      <div v-if="getDevice !== 'mobile'" class="logout-homebtn">
        <div class="notice">
          <i class="fa-solid fa-bullhorn"></i>
        </div>
        <RouterLink to="/cart" class="none">
          <div class="cart">
            <i class="fa-solid fa-cart-plus"></i>
            <div class="count">3</div>
          </div>
        </RouterLink>
        <div class="border"></div>
        <div class="logout" @click="logout">로그아웃</div>
        <button>창업픽 홈</button>
      </div>

      <div v-if="getDevice === 'mobile'" class="logout-homebtn">
        <div class="ham" @click="showHammenuModal">
          <img src="../../../../assets/dashboard/ham.png" alt="" />
        </div>
      </div>
    </div>

    <Hammenu v-if="showModal" @showHammenuModal="showHammenuModal" />
  </article>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../../store/window'
import { storeToRefs } from 'pinia'
import Hammenu from '../../modal/dashboard/franchise/Hammenu.vue'
import { ref } from 'vue'
import { useUserStore } from '../../../../store/user'
import { useRouter } from 'vue-router'

const router = useRouter()

const windowStore = useWindowStore()
const userStore = useUserStore()
const { getDevice } = storeToRefs(windowStore)
const { user, brandId } = storeToRefs(userStore)

const showModal = ref<boolean>(false)
const showHammenuModal = () => {
  showModal.value = !showModal.value
}

const logout = () => {
  localStorage.removeItem('accessToken')
  user.value = undefined
  brandId.value = undefined

  router.replace('/')
}
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  height: 60px;
  box-sizing: border-box;
  padding: 12px 30px;
  border-bottom: 1px solid $sectionLine;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 3;

  .none {
    text-decoration: none;
    color: $fontMain;
  }

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

      .notice {
        i {
          cursor: pointer;
        }
      }

      .cart {
        display: flex;
        position: relative;
        i {
          cursor: pointer;
        }
        .count {
          background-color: $subColor;
          width: 15px;
          height: 15px;
          border-radius: 50px;
          color: white;
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          right: -11px;
          top: -8px;
        }
      }

      .border {
        height: 16px;
        border: 1px solid $iconLine;
      }

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
      display: flex;
      justify-content: space-between;
      .title {
        color: $fontMain;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
      }

      .ham {
        display: flex;
        align-items: center;
        gap: 16px;

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
