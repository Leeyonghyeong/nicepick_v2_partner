<template>
  <section>
    <article class="modal">
      <div class="modal-overlay">
        <div class="modal-box">
          <div class="title-close">
            <div
              class="back"
              v-if="getDevice === 'mobile'"
              @click="$emit('showBrandChange')"
            >
              <img src="../../../../assets/login/arrow_lt.png" alt="뒤로" />
            </div>
            <div class="title">브랜드 전환</div>
            <div
              class="close"
              v-if="getDevice !== 'mobile'"
              @click="$emit('showBrandChange')"
            >
              <img src="../../../../assets/login/close.png" alt="닫기" />
            </div>
          </div>

          <div class="brand-list">
            <div class="box select">
              <img
                src="../../../../assets/dashboard/modal/brand_1.png"
                alt=""
              />
              <div class="brand-info">
                백종원의 원조쌈밥집
                <img
                  src="../../../../assets/dashboard/premium.png"
                  alt="프리미엄"
                />
              </div>
            </div>
            <div class="box">
              <img
                src="../../../../assets/dashboard/modal/brand_2.png"
                alt=""
              />
              <div class="brand-info">미정국수0410</div>
            </div>
            <div class="box">
              <img
                src="../../../../assets/dashboard/modal/brand_3.png"
                alt=""
              />
              <div class="brand-info">백철판0410</div>
            </div>
            <div class="box">
              <img
                src="../../../../assets/dashboard/modal/brand_4.png"
                alt=""
              />
              <div class="brand-info">
                한신포차
                <img
                  src="../../../../assets/dashboard/premium.png"
                  alt="프리미엄"
                />
              </div>
            </div>
            <div class="box">
              <img
                src="../../../../assets/dashboard/modal/brand_5.png"
                alt=""
              />
              <div class="brand-info">새마을식당</div>
            </div>
            <div class="box">
              <img
                src="../../../../assets/dashboard/modal/brand_6.png"
                alt=""
              />
              <div class="brand-info">역전우동0410</div>
            </div>
            <div class="box">
              <img
                src="../../../../assets/dashboard/modal/brand_7.png"
                alt=""
              />
              <div class="brand-info">홍콩반점0410</div>
            </div>
            <div class="box">
              <img
                src="../../../../assets/dashboard/modal/brand_8.png"
                alt=""
              />
              <div class="brand-info">빽다방</div>
            </div>
          </div>

          <div class="apply" @click="$emit('showBrandChange')">
            <button>확인</button>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import { useWindowStore } from '../../../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

defineEmits<{
  (e: 'showBrandChange'): void
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
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(25, 25, 25, 0.5);

  .modal {
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
        width: 438px;
        padding: 30px;
        box-sizing: border-box;
        background-color: white;
        border-radius: 10px;
        position: relative;
        .title-close {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-bottom: 20px;

          .title {
            font-size: 18px;
            font-weight: $medi;
            color: $fontMain;
          }
          .close {
            position: absolute;
            right: 30px;
            img {
              width: 30px;
              height: 30px;
              cursor: pointer;
            }
          }
        }

        .brand-list {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          .box {
            width: 48.6%;
            box-sizing: border-box;
            height: 111px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid $inputLine;
            border-radius: 10px;
            gap: 9px;
            cursor: pointer;
            img {
              width: 134px;
              height: 53px;
            }
            .brand-info {
              display: flex;
              align-items: center;
              font-size: 14px;
              color: $fontSub;
              gap: 6px;
              img {
                width: 20px;
                height: 20px;
              }
            }
          }
          .box:hover,
          .select {
            border: 1px solid $mainColor;
            .brand-info {
              color: $mainColor;
            }
          }
        }

        .apply {
          padding-top: 30px;
          button {
            width: 100%;
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

@include mobile {
  section {
    .modal {
      .modal-overlay {
        .modal-box {
          width: 100%;
          height: 100%;
          padding: 0;
          .title-close {
            padding: 15px 0 15px 24px;
            justify-content: flex-start;
            gap: 6px;
            border-bottom: 1px solid $sectionLine;
            .back {
              img {
                cursor: pointer;
              }
            }
            .title {
              font-size: 16px;
            }
            .back {
              img {
                width: 30px;
                height: 30px;
              }
            }
          }

          .brand-list {
            padding: 30px 24px;
            justify-content: center;
            .box {
              width: 47%;
              height: 111px;
              padding: 15px 13px;
              img {
                width: 100%;
                height: 100%;
              }
              .brand-info {
                font-size: 13px;
              }
            }
          }

          .apply {
            width: 100%;
            padding: 0;
            position: absolute;
            bottom: 0;
            button {
              border-radius: 0;
              height: 58px;
            }
          }
        }
      }
    }
  }
}
</style>
