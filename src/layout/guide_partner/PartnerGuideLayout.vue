<template>
  <Header />
  <div class="flex">
    <GuideCategory v-if="getDevice === 'pc'" />
    <RouterView class="width" />
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import Header from '../../component/common/guide_partner/GuideHeader.vue'
import GuideCategory from '../../component/common/guide_partner/GuideCategory.vue'
import Footer from '../../component/common/Footer.vue'
import { useWindowStore } from '../../store/window'
import { onMounted } from 'vue'
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
@import '@/scss/main';
.flex {
  display: flex;
  justify-content: center;
}

@include tablet {
  .flex {
    .width {
      width: 100%;
    }
  }
}

@include mobile {
  .flex {
    .width {
      width: 100%;
    }
  }
}
</style>
