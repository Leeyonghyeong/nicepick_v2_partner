<template>
  <MainFirst />
  <MainReview />
  <MainBrandList />
  <CategoryInfo />
  <GuideAndStart />

  <div v-if="getDevice === 'mobile'" class="login-join-btn">
    <RouterLink to="/login" class="login none">
      <div>파트너 로그인 / 회원가입</div>
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import MainFirst from '../component/main/MainFirst.vue'
import MainReview from '../component/main/MainReview.vue'
import MainBrandList from '../component/main/MainBrandList.vue'
import CategoryInfo from '../component/main/CategoryInfo.vue'
import GuideAndStart from '../component/main/GuideAndStart.vue'

import { useWindowStore } from '../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

@include mobile {
  .login-join-btn {
    position: absolute;
    position: fixed;
    z-index: 2;

    width: 100%;
    height: 50px;
    bottom: 0;

    background-color: $mainColor;

    display: flex;
    justify-content: center;
    align-items: center;

    .none {
      text-decoration: none;
    }

    div {
      color: white;
    }
  }
}
</style>
