<template>
  <MainFirst />
  <MainReview />
  <MainBrandList />
  <CategoryInfo />
  <GuideAndStart />
  <Footer />

  <div v-if="getDevice === 'mobile'" class="login-join-btn">
    <RouterLink to="/login" class="login none">
      <div>파트너 로그인 / 회원가입</div>
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import MainFirst from '../components/main/MainFirst.vue'
import MainReview from '../components/main/MainReview.vue'
import MainBrandList from '../components/main/MainBrandList.vue'
import CategoryInfo from '../components/main/CategoryInfo.vue'
import GuideAndStart from '../components/main/GuideAndStart.vue'
import Footer from '../components/common/Footer.vue'

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
    position: sticky;
    z-index: 2;

    width: 100%;
    height: 58px;
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
