<template>
  <section>
    <article>
      <img
        v-if="getDevice === 'pc'"
        src="../../assets/guide_partner/join/cooperation/pc.png"
        alt="pc"
      />
      <img
        v-if="getDevice === 'tablet'"
        src="../../assets/guide_partner/join/cooperation/tab.png"
        alt="pc"
      />
      <img
        v-if="getDevice === 'mobile'"
        src="../../assets/guide_partner/join/cooperation/mob.png"
        alt="pc"
      />
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  img {
    padding-left: 50px;
    width: 814px;
    height: 820px;
  }
}

@include tablet {
  article {
    padding: 296px;
    text-align: center;
    img {
      padding-left: 0;
      width: 356px;
      height: 172px;
    }
  }
}

@include mobile {
  article {
    padding: 120px 0 0;
    height: 50vh;
    text-align: center;
    img {
      padding-left: 0;
      width: 267px;
      height: 172px;
    }
  }
}
</style>
