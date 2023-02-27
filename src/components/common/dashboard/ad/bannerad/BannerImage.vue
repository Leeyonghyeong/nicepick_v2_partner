<template>
  <section>
    <article>
      <div class="banner-image">
        <div class="detail-contents">
          <div v-if="getDevice === 'tablet'" class="detail">
            <div class="box">
              <div class="name">PC <span class="sub">(2388x400)</span></div>
              <img
                class="first"
                src="../../../../../assets/dashboard/ad/main-top/banner/tab.png"
                alt=""
              />
            </div>
            <div class="box">
              <div class="name">TAB <span class="sub">(1360x300)</span></div>
              <img
                class="second"
                src="../../../../../assets/dashboard/ad/main-top/banner/tab_2.png"
                alt=""
              />
            </div>
            <div class="box">
              <div class="name">MOBILE <span class="sub">(656x200)</span></div>
              <img
                class="third"
                src="../../../../../assets/dashboard/ad/main-top/banner/tab_3.png"
                alt=""
              />
            </div>
          </div>
          <div v-if="getDevice === 'pc'" class="detail">
            <div class="box">
              <div class="name">PC <span class="sub">(2388x400)</span></div>
              <img
                class="first"
                src="../../../../../assets/dashboard/ad/main-top/banner/pc.png"
                alt=""
              />
            </div>
            <div class="flex">
              <div class="box">
                <div class="name">TAB <span class="sub">(1360x300)</span></div>
                <img
                  class="second"
                  src="../../../../../assets/dashboard/ad/main-top/banner/pc_2.png"
                  alt=""
                />
              </div>
              <div class="box">
                <div class="name">
                  MOBILE <span class="sub">(656x200)</span>
                </div>
                <img
                  class="third"
                  src="../../../../../assets/dashboard/ad/main-top/banner/pc_3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div v-if="getDevice === 'mobile'" class="detail">
            <div class="box">
              <div class="name">PC <span class="sub">(2388x400)</span></div>
              <img
                class="first"
                src="../../../../../assets/dashboard/ad/main-top/banner/mob.png"
                alt=""
              />
            </div>
            <div class="box">
              <div class="name">TAB <span class="sub">(1360x300)</span></div>
              <img
                class="second"
                src="../../../../../assets/dashboard/ad/main-top/banner/mob_2.png"
                alt=""
              />
            </div>
            <div class="box">
              <div class="name">MOBILE <span class="sub">(656x200)</span></div>
              <img
                class="third"
                src="../../../../../assets/dashboard/ad/main-top/banner/mob_3.png"
                alt=""
              />
            </div>
          </div>
          <div class="ment">
            · 보고있는 이미지는 메인TOP 배너 예시입니다.<br />
            · 이미지는 각 사이즈에 맞춰 제작 및 등록하여 주시기 바랍니다.
          </div>
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
      padding: 54px 27px;
      background-color: white;
      border-radius: 10px;
      border: 1px solid $iconLine;
      border-top: none;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
      .first,
      .second {
        width: 100%;
      }

      .third {
        width: 80%;
      }
      .name {
        font-size: 14px;
        color: $fontMain;
        padding-bottom: 10px;
        .sub {
          font-size: 12px;
          color: $fontSub;
        }
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
        padding: 30px 11px;
        gap: 30px;
        .third {
          width: 100%;
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
        padding: 38.5px 195px;
        .flex {
          display: flex;
          align-items: flex-start;
          gap: 37px;
          .third {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
