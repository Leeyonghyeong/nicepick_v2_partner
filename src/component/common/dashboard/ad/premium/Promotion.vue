<template>
  <section>
    <article>
      <div class="promotion">
        <div class="detail-contents">
          <div v-if="getDevice === 'tablet'" class="detail">
            <div class="flex">
              <img
                class="first"
                src="../../../../../assets/dashboard/ad/premium/promotion/tab.png"
                alt=""
              />
              <img
                class="second"
                src="../../../../../assets/dashboard/ad/premium/promotion/tab_2.png"
                alt=""
              />
            </div>
            <img
              class="third"
              src="../../../../../assets/dashboard/ad/premium/promotion/tab_3.png"
              alt=""
            />
          </div>
          <div v-if="getDevice === 'pc'" class="detail">
            <div class="flex">
              <img
                class="first"
                src="../../../../../assets/dashboard/ad/premium/promotion/pc.png"
                alt=""
              />
              <img
                class="second"
                src="../../../../../assets/dashboard/ad/premium/promotion/pc_2.png"
                alt=""
              />
            </div>
            <img
              class="third"
              src="../../../../../assets/dashboard/ad/premium/promotion/pc_3.png"
              alt=""
            />
          </div>
          <div v-if="getDevice === 'mobile'" class="detail">
            <div class="flex">
              <img
                class="first"
                src="../../../../../assets/dashboard/ad/premium/promotion/mob.png"
                alt=""
              />
              <img
                class="second"
                src="../../../../../assets/dashboard/ad/premium/promotion/mob_2.png"
                alt=""
              />
            </div>
            <img
              class="third"
              src="../../../../../assets/dashboard/ad/premium/promotion/mob_3.png"
              alt=""
            />
          </div>
        </div>
        <div class="ment">
          · 프로모션 페이지 리스트와 브랜드 상세페이지에 노출됩니다.<br />
          · 프로모션 아이콘과 프로모션 작성 내용으로 표시됩니다.
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
      .flex {
        width: 100%;
        padding: 0 19px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        gap: 20px;
        .first {
          width: 140px;
          height: 350px;
        }
        .second {
          width: 140px;
          height: 350px;
        }
      }
      .third {
        width: 408px;
        height: 325px;
      }
    }
  }
  .ment {
    padding-top: 30px;
    font-size: 14px;
    color: $fontSub;
    line-height: 24px;
  }
}

@include mobile {
  article {
    .detail-contents {
      .detail {
        gap: 50px;
        .flex {
          display: flex;
          .first {
            width: 48%;
            height: 100%;
          }
          .second {
            width: 48%;
            height: 100%;
          }
        }
        .third {
          width: 75%;
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
        padding: 25px 0 0;
        flex-direction: row;
        align-items: flex-start;
        gap: 0px;
        .flex {
          width: 45%;
          justify-content: center;
          align-items: center;
          gap: 20px;
          .first {
            width: 140px;
            height: 187px;
          }
          .second {
            width: 140px;
            height: 350px;
          }
        }
        .third {
          width: 546px;
          height: 372px;
        }
      }
    }
  }
}
</style>
