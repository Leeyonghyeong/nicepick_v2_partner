<template>
  <DashHeader />

  <div class="flex">
    <DashboardCategory />
    <div>
      <RouterView class="width" />
      <div v-if="getDevice !== 'mobile'">
        <Footer />
      </div>
    </div>
  </div>

  <FranchiseMenubar />
</template>

<script lang="ts" setup>
import DashHeader from '../../../components/common/dashboard/franchise/DashboardHeader.vue'
import Footer from '../../../components/common/modal/dashboard/DashboardFooter.vue'
import DashboardCategory from '../../../components/common/dashboard/franchise/DashboardCategory.vue'
import FranchiseMenubar from '../../../components/common/dashboard/franchise/FranchiseMenubar.vue'

import { onMounted } from 'vue'
import { useWindowStore } from '../../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

onMounted(() => {
  store.windowWidth = window.innerWidth

  window.addEventListener('resize', () => {
    store.$patch({ windowWidth: window.innerWidth })
  })
})
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  background-color: #f2f4f7;
  div {
    width: 100%;
    height: 100%;
  }
  .width {
    width: 100%;
  }
}
</style>
