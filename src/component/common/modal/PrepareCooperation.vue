<template>
  <section>
    <article class="modal" @click="$emit('showPrepareModal')">
      <div class="modal-overlay">
        <div class="modal-box vibration">
          <div class="padding-box">
            <img
              class="hour"
              src="../../../assets/login/hourglass.png"
              alt="모래시계"
            />
            <div class="title">
              협력파트너 회원가입은 <span>준비중</span>입니다.
            </div>
            <div class="sub">
              보다 나은 서비스를 위하여 준비중에 있습니다.<br />
              빠른 시일내에 준비하여 찾아뵙겠습니다.
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
  (e: 'showPrepareModal'): void
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
  padding: 0 !important;

  .modal {
    .modal-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(25, 25, 25, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;

      .modal-box {
        background-color: white;
        width: 438px;
        height: 342px;
        border-radius: 10px;
        padding: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        .padding-box {
          .hour {
            width: 60px;
            height: 60px;
          }

          .title {
            font-size: 24px;

            span {
              font-weight: $bold;
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
        .modal-box {
          width: 100%;
          margin: 0 24px;
          .padding-box {
            .border-bottom {
              .search {
                input {
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}

.vibration {
  animation: vibration 0.1s;
}

@keyframes vibration {
  from {
    transform: rotate(3deg);
  }
  to {
    transform: rotate(-3deg);
  }
}
</style>
