<template>
  <section v-if="getDevice === 'mobile'">
    <div class="box">
      <div class="home-close">
        <button class="home">창업픽 홈</button>
        <div class="close" @click="$emit('showHammenuModal')">
          <img src="../../../../assets/login/close.png" alt="닫기" />
        </div>
      </div>

      <div class="info-button">
        <div class="info">
          <img
            src="../../../../assets/realtor/중개소-프로필.png"
            alt="프로필"
          />
          <div class="name-contact">
            <div class="name">창업픽부동산중개사무소</div>
            <div class="contact">changuppick@gmail.com</div>
          </div>
        </div>

        <div class="button">
          <div class="btn">
            <i class="fa-solid fa-bullhorn"></i>
            <div class="name">공지사항</div>
          </div>
          <RouterLink to="/cart" class="none">
            <div class="btn">
              <i class="fa-solid fa-cart-plus"></i>
              <div class="name">장바구니</div>
            </div>
          </RouterLink>
        </div>

        <div class="logout">로그아웃</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import { useWindowStore } from '../../../../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

defineEmits<{
  (e: 'showHammenuModal'): void
}>()

onMounted(() => {
  document.body.setAttribute('style', 'overflow: hidden;')
})

onUnmounted(() => {
  document.body.removeAttribute('style')
})
</script>

<style lang="scss" scoped>
@import '@/scss/main';

section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;

  .none {
    text-decoration: none;
    color: $fontMain;
  }

  .box {
    width: 100%;
    height: 100%;
    background: #fff;
    .home-close {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 24px;
      border-bottom: 1px solid $sectionLine;

      .home {
        width: 69px;
        height: 36px;
        background-color: white;
        border: 1px solid #1569ff;
        border-radius: 5px;
        font-size: 13px;
        font-family: Pretendard;
        color: #1569ff;
        cursor: pointer;
      }
      .close {
        img {
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
      }
    }

    .info-button {
      display: flex;
      flex-direction: column;
      gap: 30px;
      .info {
        padding: 30px 24px 0;
        display: flex;
        align-items: center;
        gap: 10px;
        img {
          width: 52px;
          height: 52px;
        }
        .name-contact {
          width: 100%;
          color: $fontMain;
          .name {
            font-weight: $semi;
          }
          .contact {
            padding-top: 6px;
            font-size: 12px;
          }
        }
      }

      .button {
        .btn {
          padding: 21px 0 21px 25px;
          display: flex;
          align-items: center;
          gap: 14px;
          border-bottom: 1px solid $sectionLine;
          cursor: pointer;
        }
      }

      .logout {
        width: 100%;
        padding: 20px 0;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        border-top: 1px solid $sectionLine;
        font-size: 14px;
        color: $fontSub;
        cursor: pointer;
      }
    }
  }
}
</style>
