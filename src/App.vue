<template>
  <Header />
  <RouterLink to="/about">about</RouterLink>
  <RouterView />
  <Footer />
</template>

<script lang="ts" setup>
import Header from './component/common/Header.vue'
import Footer from './component/common/Footer.vue'
import { useWindowStore } from './window'
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
