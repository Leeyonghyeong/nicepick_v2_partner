<template>
  <NoHammenuHeader />

  <div class="flex">
    <Category />
    <div>
      <RouterView class="width" />
      <div v-if="getDevice !== 'mobile'">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NoHammenuHeader from '../../../components/common/dashboard/NoHammenuHeader.vue'
import Footer from '../../../components/common/modal/dashboard/DashboardFooter.vue'
import Category from '../../../components/common/dashboard/realtor/DashboardCategory.vue'

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
  }
  .width {
    width: 100%;
  }
}
</style>
