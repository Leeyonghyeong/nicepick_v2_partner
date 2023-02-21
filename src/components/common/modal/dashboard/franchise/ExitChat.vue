<template>
  <section>
    <article>
      <div class="modal-overlay">
        <div class="modal-box">
          <div class="name">채팅방 나가기</div>
          <div class="ment">
            현재 채팅방의 대화가 모두 삭제됩니다.<br />
            채팅방을 나가시겠습니까?
          </div>

          <div class="btn">
            <button class="ok">확인</button>
            <button class="close" @click="$emit('showExit')">취소</button>
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
        padding: 41px 44px 42px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 10px;
        position: relative;

        .title {
          color: $fontMain;
          font-weight: $medi;
        }
        .ment {
          padding-top: 10px;
          text-align: center;
          line-height: 24px;
          color: $fontSub;
          font-size: 14px;
        }

        .btn {
          padding-top: 20px;
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
          .ok {
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
          padding: 46px 57px 47px 56px;
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
