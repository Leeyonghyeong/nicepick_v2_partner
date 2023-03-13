<template>
  <section>
    <article class="modal">
      <div class="modal-overlay">
        <div class="modal-box">
          <div class="padding-box">
            <div class="close" @click="$emit('closePremiumModal')">
              <img src="../../../../../assets/login/close.png" alt="닫기" />
            </div>

            <div class="title">
              <span>프리미엄 멤버십 회원 전용</span>
              서비스입니다.
            </div>

            <div class="show">
              <button @click="$router.push('/franchise/ad')">
                프리미엄 멤버십 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'

defineEmits<{
  (e: 'closePremiumModal'): void
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
  width: 100%;
  height: 100vh;
  background-color: rgba(25, 25, 25, 0.5);
  z-index: 3;

  .modal {
    width: 100%;
    height: 100%;
    .modal-overlay {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .modal-box {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 378px;
        height: 200px;
        background-color: #f3f3f3;
        border-radius: 10px;
        padding: 61px 0 40px;
        box-sizing: border-box;

        position: absolute;
        position: relative;

        .padding-box {
          display: flex;
          flex-direction: column;
          align-items: center;

          .close {
            padding-bottom: 20px;
            position: absolute;
            right: 10px;
            top: 10px;
            img {
              width: 30px;
              height: 30px;
              cursor: pointer;
            }
          }

          .title {
            font-weight: $reg;
            padding-bottom: 30px;
            span {
              color: $subColor;
              font-weight: $medi;
            }
          }

          .show {
            button {
              width: 290px;
              height: 50px;

              border-radius: 10px;
              border: none;
              background-color: $mainColor;
              color: white;
              font-family: Pretendard;
              font-size: 16px;
              font-weight: $reg;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}

@include mobile {
  section {
    .modal {
      .modal-overlay {
        padding: 0 24px;
        box-sizing: border-box;
        .modal-box {
          width: 100%;
          .padding-box {
            .show {
              width: 100%;
              button {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
