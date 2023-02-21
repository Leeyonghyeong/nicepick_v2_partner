<template>
  <Header />
  <RouterView />
</template>

<script lang="ts" setup>
import Header from '../components/common/Header.vue'
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
