<template>
  <section v-if="getDevice !== 'mobile'">
    <div class="side-bar">
      <article class="info">
        <div class="info-box">
          <img
            src="../../../../assets/realtor/중개소-프로필.png"
            alt="프로필이미지"
          />
          <div class="realtor-name">창업픽부동산중개사무소</div>
          <div class="email">changuppick@gmail.com</div>
        </div>
      </article>

      <article class="category">
        <div class="category-box">
          <RouterLink to="/realtor/dashboard" class="none">
            <div
              class="box"
              :class="{ select: selectMenu === 'dashboard' }"
              @click="selectMenu = 'dashboard'"
            >
              <img
                v-if="selectMenu === 'dashboard'"
                src="../../../../assets/dashboard/dash_select.png"
                alt="대시보드선택"
              />
              <img
                v-if="selectMenu !== 'dashboard'"
                src="../../../../assets/dashboard/dash.png"
                alt="대시보드"
              />
              <div>대시보드</div>
            </div>
          </RouterLink>

          <RouterLink to="/realtor/realtor" class="none">
            <div
              class="box"
              :class="{ select: selectMenu === 'realtor' }"
              @click="selectMenu = 'realtor'"
            >
              <img
                v-if="selectMenu === 'realtor'"
                src="../../../../assets/realtor/중개소_선택.png"
                alt="중개소선택"
              />
              <img
                v-if="selectMenu !== 'realtor'"
                src="../../../../assets/realtor/중개소.png"
                alt="중개소"
              />
              <div>중개소</div>
            </div>
          </RouterLink>

          <RouterLink to="/realtor/ad" class="none">
            <div
              class="box"
              :class="{ select: selectMenu === 'ad' }"
              @click="selectMenu = 'ad'"
            >
              <img
                v-if="selectMenu === 'ad'"
                src="../../../../assets/dashboard/ad_select.png"
                alt="광고상품선택"
              />
              <img
                v-if="selectMenu !== 'ad'"
                src="../../../../assets/dashboard/ad.png"
                alt="광고상품"
              />
              <div>광고 상품</div>
            </div>
          </RouterLink>

          <RouterLink to="/realtor/mymenu/myinfo" class="none">
            <div
              class="box"
              :class="{ select: selectMenu === 'mymenu' }"
              @click="selectMenu = 'mymenu'"
            >
              <img
                v-if="selectMenu === 'mymenu'"
                src="../../../../assets/dashboard/my_select.png"
                alt="마이메뉴선택"
              />
              <img
                v-if="selectMenu !== 'mymenu'"
                src="../../../../assets/dashboard/my.png"
                alt="마이메뉴"
              />
              <div>마이메뉴</div>
            </div>
          </RouterLink>
        </div>
      </article>

      <BrandChange v-if="showModal" @showBrandChange="showBrandChange" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useWindowStore } from '../../../../store/window'
import BrandChange from '../../modal/dashboard/BrandChange.vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const showModal = ref<boolean>(false)
const showBrandChange = () => {
  showModal.value = !showModal.value
}

const selectMenu = ref<string>('dashboard')
</script>

<style lang="scss" scoped>
@import '@/scss/main';

section {
  .none {
    text-decoration: none;
  }
  .side-bar {
    width: 330px;
    height: calc(100vh - 60px);
    background-color: #2b333e;
    padding: 0 30px;
    box-sizing: border-box;
    position: sticky;
    top: 60px;

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
          width: 52px;
          height: 52px;
          padding-bottom: 16px;
        }

        .brand {
          padding-top: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          img {
            width: 20px;
            height: 20px;
          }
        }
        .email {
          padding-top: 6px;
          font-size: 12px;
        }
      }

      .transform {
        width: 100%;
        height: 50px;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        background-color: $mainColor;
        border: none;
        border-radius: 10px;
        color: white;
        font-family: Pretendard;
        cursor: pointer;
        img {
          width: 14px;
          height: 14px;
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
