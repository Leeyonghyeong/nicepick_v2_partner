<template>
  <section>
    <article>
      <div class="modal-overlay">
        <div class="modal-box">
          <div class="ment">
            장바구니에 담았습니다.<br />
            장바구니로 이동하시겠습니까?
          </div>

          <div class="btn">
            <button class="cart">
              <RouterLink to="/cart" class="none">장바구니 이동 </RouterLink>
            </button>

            <button class="close" @click="$emit('showAddCart')">
              상품 계속 보기
            </button>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'

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
  width: 100%;
  height: 100vh;
  background-color: rgba(25, 25, 25, 0.5);

  .none {
    text-decoration: none;
    color: inherit;
  }

  article {
    width: 100%;
    height: 100%;
    .modal-overlay {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      .modal-box {
        padding: 60px 44px 42px 44px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        background-color: white;
        border-radius: 10px;
        position: relative;

        .ment {
          text-align: center;
          color: $fontMain;
          line-height: 24px;
        }

        .btn {
          display: flex;
          gap: 10px;
          button {
            width: 140px;
            height: 50px;
            border-radius: 10px;
            border: none;
            font-family: Pretendard;
            font-size: 16px;
            font-weight: $reg;
            cursor: pointer;
          }
          .cart {
            background-color: $mainColor;
            color: white;
          }
          .close {
            background-color: white;
            border: 1px solid $mainColor;
            color: $mainColor;
          }
        }
      }
    }
  }
}

@include mobile {
  section {
    article {
      .modal-overlay {
        padding: 0 24px;
        box-sizing: border-box;
        .modal-box {
          width: 100%;
          padding: 62px 56px 50px 56px;
          .btn {
            width: 100%;
            justify-content: space-between;
            button {
              width: 100%;
              height: 40px;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
