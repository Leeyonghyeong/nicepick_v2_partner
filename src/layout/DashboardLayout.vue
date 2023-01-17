<template>
  <DashHeader />

  <div class="flex">
    <DashboardCategory />
    <RouterView class="width" />
  </div>

  <Footer />
</template>

<script lang="ts" setup>
import DashHeader from '../component/common/DashboardHeader.vue'
import Footer from '../component/common/Footer.vue'
import { useWindowStore } from '../store/window'
import { onMounted } from 'vue'
import DashboardCategory from '../component/common/dashboardcategory/DashboardCategory.vue'

const store = useWindowStore()

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
