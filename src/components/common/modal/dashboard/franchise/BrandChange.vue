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
              <img src="../../../../../assets/login/arrow_lt.png" alt="뒤로" />
            </div>
            <div class="title">브랜드 전환</div>
            <div
              class="close"
              v-if="getDevice !== 'mobile'"
              @click="$emit('showBrandChange')"
            >
              <img src="../../../../../assets/login/close.png" alt="닫기" />
            </div>
          </div>

          <div class="brand-list">
            <div
              v-for="item in brand"
              :key="item.id"
              :class="{ select: item.id === currentBrand?.id }"
              class="box"
              @click="changeBrand(item)"
            >
              <img
                v-if="item.brandLogoImg"
                :src="item.brandLogoImg"
                :alt="item.brandName"
              />
              <img
                v-else
                :src="
                  loadCategoryImg(
                    category,
                    item.largeCategoryName,
                    item.smallCategoryName
                  )
                "
                :alt="item.brandName"
              />
              <div class="brand-info">
                {{ item.brandName }}
                <img
                  v-if="item.isPremium"
                  src="../../../../../assets/dashboard/premium.png"
                  alt="프리미엄"
                />
              </div>
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
import { useWindowStore } from '../../../../../store/window'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../../../../../store/user'
import { useCategoryStore } from '../../../../../store/category'
import { loadCategoryImg } from '../../../../../functions/common'
import { Brand } from '../../../../../types/brand'

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)
const userStore = useUserStore()
const { brand, currentBrand } = storeToRefs(userStore)
const categoryStore = useCategoryStore()
const { category } = storeToRefs(categoryStore)

defineEmits<{
  (e: 'showBrandChange'): void
}>()

const changeBrand = (brand: Brand) => {
  currentBrand.value = brand
}

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
  z-index: 4;
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
