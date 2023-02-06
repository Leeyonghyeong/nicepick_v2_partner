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
import DashHeader from '../../component/common/dashboard/DashboardHeader.vue'
import Footer from '../../component/common/Footer.vue'
import DashboardCategory from '../../component/common/dashboard/DashboardCategory.vue'
import FranchiseMenubar from '../../component/common/dashboard/FranchiseMenubar.vue'

import { onMounted } from 'vue'
import { useWindowStore } from '../../store/window'
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

  .width {
    width: 100%;
  }
}
</style>
