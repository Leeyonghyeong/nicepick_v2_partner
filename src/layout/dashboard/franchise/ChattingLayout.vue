<template>
  <DashHeader v-if="getDevice !== 'mobile'" />

  <div class="flex">
    <DashboardCategory />
    <RouterView class="width" />
  </div>
</template>

<script lang="ts" setup>
import DashHeader from '../../../component/common/dashboard/franchise/DashboardHeader.vue'
import DashboardCategory from '../../../component/common/dashboard/franchise/DashboardCategory.vue'

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
  .width {
    width: 100%;
    height: 100%;
  }
}
</style>
