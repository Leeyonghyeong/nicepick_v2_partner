<template>
  <section>
    <article>
      <div class="franchise" v-if="getDevice === 'mobile'">
        <div class="box">
          <RouterLink to="/franchise/dashboard" class="none">
            <div class="button" @click="selectMenu = 'dashboard'">
              <img
                v-if="selectMenu === 'dashboard'"
                src="../../../../assets/dashboard/menubar/dash_select.png"
                alt="대시보드선택"
              />
              <img
                v-if="selectMenu !== 'dashboard'"
                src="../../../../assets/dashboard/menubar/dash.png"
                alt="대시보드"
              />
              <div class="name" :class="{ select: selectMenu === 'dashboard' }">
                대시보드
              </div>
            </div>
          </RouterLink>

          <RouterLink to="/franchise/brand/management" class="none">
            <div class="button" @click="selectMenu = 'brand'">
              <img
                v-if="selectMenu === 'brand'"
                src="../../../../assets/dashboard/menubar/brand_select.png"
                alt="브랜드선택"
              />
              <img
                v-if="selectMenu !== 'brand'"
                src="../../../../assets/dashboard/menubar/brand.png"
                alt="브랜드"
              />
              <div class="name" :class="{ select: selectMenu === 'brand' }">
                브랜드
              </div>
            </div>
          </RouterLink>

          <RouterLink to="/franchise/ad" class="none">
            <div class="button" @click="selectMenu = 'ad'">
              <img
                v-if="selectMenu === 'ad'"
                src="../../../../assets/dashboard/menubar/ad_select.png"
                alt="광고상품선택"
              />
              <img
                v-if="selectMenu !== 'ad'"
                src="../../../../assets/dashboard/menubar/ad.png"
                alt="광고상품"
              />
              <div class="name" :class="{ select: selectMenu === 'ad' }">
                광고상품
              </div>
            </div>
          </RouterLink>

          <RouterLink to="/franchise/qna" class="none">
            <div class="button" @click="selectMenu = 'qna'">
              <img
                v-if="selectMenu === 'qna'"
                src="../../../../assets/dashboard/menubar/qna_select.png"
                alt="고객문의선택"
              />
              <img
                v-if="selectMenu !== 'qna'"
                src="../../../../assets/dashboard/menubar/qna.png"
                alt="고객문의"
              />
              <div class="name" :class="{ select: selectMenu === 'qna' }">
                고객문의
              </div>
            </div>
          </RouterLink>

          <RouterLink to="/franchise/mymenu/myinfo" class="none">
            <div class="button" @click="selectMenu = 'mymenu'">
              <img
                v-if="selectMenu === 'mymenu'"
                src="../../../../assets/dashboard/menubar/my_select.png"
                alt="마이메뉴선택"
              />
              <img
                v-if="selectMenu !== 'mymenu'"
                src="../../../../assets/dashboard/menubar/my.png"
                alt="마이메뉴"
              />
              <div class="name" :class="{ select: selectMenu === 'mymenu' }">
                마이메뉴
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../../store/window'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const selectMenu = ref<string>('brand')
</script>

<style lang="scss" scoped>
@import '@/scss/main';

.franchise {
  width: 100%;
  position: absolute;
  position: fixed;
  bottom: 0;
  z-index: 2;

  .select {
    color: $mainColor;
  }

  .none {
    text-decoration: none;
    color: inherit;
  }
  .box {
    height: 58px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-top: 1px solid #f5f5f5;
    .button {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      font-size: 12px;
      color: $fontMain;
      cursor: pointer;
      img {
        width: 22px;
        height: 22px;
      }
    }
  }
}
</style>
