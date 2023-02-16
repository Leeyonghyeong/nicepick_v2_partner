<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script lang="ts" setup>
import Header from '../component/common/Header.vue'
import Footer from '../component/common/modal/dashboard/DashboardFooter.vue'
import { useWindowStore } from '../store/window'
import { onMounted } from 'vue'

const store = useWindowStore()

onMounted(() => {
  store.windowWidth = window.innerWidth

  window.addEventListener('resize', () => {
    store.$patch({ windowWidth: window.innerWidth })
  })
})
</script>

<style lang="scss" scoped></style>
