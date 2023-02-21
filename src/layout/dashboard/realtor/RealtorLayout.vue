<template>
  <Header />

  <div class="flex">
    <DashboardCategory />
    <div>
      <RouterView class="width" />
      <div v-if="getDevice !== 'mobile'">
        <Footer />
      </div>
    </div>
  </div>

  <RealtorMenubar />
</template>

<script lang="ts" setup>
import Header from '../../../components/common/dashboard/realtor/RealtorHeader.vue'
import Footer from '../../../components/common/modal/dashboard/DashboardFooter.vue'
import DashboardCategory from '../../../components/common/dashboard/realtor/DashboardCategory.vue'
import RealtorMenubar from '../../../components/common/dashboard/realtor/RealtorMenubar.vue'

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
