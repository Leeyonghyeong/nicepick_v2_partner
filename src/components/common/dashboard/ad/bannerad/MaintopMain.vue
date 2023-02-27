<template>
  <section>
    <article>
      <div class="maintop-main">
        <div class="detail-contents">
          <div v-if="getDevice === 'tablet'" class="detail">
            <img
              class="first"
              src="../../../../../assets/dashboard/ad/main-top/tab.png"
              alt=""
            />
            <img
              class="second"
              src="../../../../../assets/dashboard/ad/main-top/tab_2.png"
              alt=""
            />
          </div>
          <div v-if="getDevice === 'pc'" class="detail">
            <img
              class="first"
              src="../../../../../assets/dashboard/ad/main-top/pc.png"
              alt=""
            />
            <img
              class="second"
              src="../../../../../assets/dashboard/ad/main-top/pc_2.png"
              alt=""
            />
          </div>
          <div v-if="getDevice === 'mobile'" class="detail">
            <img
              class="first"
              src="../../../../../assets/dashboard/ad/main-top/mob.png"
              alt=""
            />
            <img
              class="second"
              src="../../../../../assets/dashboard/ad/main-top/mob_2.png"
              alt=""
            />
          </div>
        </div>
        <div class="ment">
          · 브랜드 상세페이지 하단 영역에 추천 브랜드로 노출됩니다.<br />
          · 사용자 또는 브랜드 업종에 따라 랜덤으로 노출됩니다.
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  .detail-contents {
    .detail {
      padding: 25px 0 0;
      background-color: white;
      border-radius: 10px;
      border: 1px solid $iconLine;
      border-top: none;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;
      .first {
        width: 140px;
        height: 350px;
      }
      .second {
        width: 408px;
        height: 325px;
      }
    }
  }
  .ment {
    padding: 30px 0;
    font-size: 14px;
    color: $fontSub;
    line-height: 24px;
  }
}

@include mobile {
  article {
    .detail-contents {
      .detail {
        padding: 25px 40px 0;
        gap: 45px;
        .first {
          width: 55%;
          height: 100%;
        }
        .second {
          width: 100%;
          height: 100%;
        }
      }
    }
    .ment {
      padding-top: 20px;
      font-size: 13px;
    }
  }
}

@include pc {
  article {
    .detail-contents {
      .detail {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        gap: 200px;
        .second {
          width: 546px;
          height: 372px;
        }
      }
    }
  }
}
</style>
