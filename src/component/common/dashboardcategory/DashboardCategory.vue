<template>
  <section v-if="getDevice !== 'mobile'">
    <div class="side-bar">
      <article class="info">
        <div class="info-box">
          <img src="../../../assets/dashboard/icecream.png" alt="아이스크림" />

          <div class="brand">**아이스크림</div>
          <div class="email">icecream@gmail.com</div>
        </div>
      </article>

      <article class="category">
        <div class="category-box">
          <div class="box">
            <img src="../../../assets/dashboard/dash.png" alt="대시보드" />
            <div>대시보드</div>
          </div>

          <div class="box select">
            <img
              src="../../../assets/dashboard/brand_select.png"
              alt="브랜드"
            />
            <div>브랜드</div>
          </div>

          <div class="box">
            <img src="../../../assets/dashboard/ad.png" alt="광고상품" />
            <div>광고 상품</div>
          </div>

          <div class="box">
            <img src="../../../assets/dashboard/qna.png" alt="고객문의" />
            <div>고객문의</div>
          </div>

          <div class="box">
            <img src="../../../assets/dashboard/my.png" alt="마이메뉴" />
            <div>마이메뉴</div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

section {
  .side-bar {
    width: 330px;
    height: 1020px;
    background-color: #2b333e;
    padding: 0 30px;
    box-sizing: border-box;

    .info {
      color: white;
      display: flex;
      justify-content: center;
      text-align: center;

      padding: 50px 0 30px 0;

      .info-box {
        width: 100%;
        padding-bottom: 30px;
        border-bottom: 1px solid $fontSub;
        img {
          width: 129px;
          height: 52px;
        }

        .brand {
          padding-top: 16px;
        }
        .email {
          padding-top: 6px;
          font-size: 12px;
        }
      }
    }

    .category {
      .category-box {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .box {
          height: 50px;
          display: flex;
          align-items: center;
          gap: 10px;

          color: $fontSub;
          cursor: pointer;

          img {
            padding-left: 10px;
            width: 30px;
            height: 30px;
          }
        }

        .select {
          background-color: #4a5057;
          border-radius: 10px;
          div {
            color: white;
          }
        }
      }
    }
  }
}

@include tablet {
  section {
    .side-bar {
      width: 216px;
    }
  }
}
</style>
