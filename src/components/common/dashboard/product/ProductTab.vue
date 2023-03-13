<template>
  <section>
    <article>
      <div class="maintop-main">
        <div class="detail-contents">
          <div v-if="getDevice === 'tablet'" class="detail">
            <img
              class="first"
              :src="payProductTab.tabletImg"
              :alt="payProductTab.tabName"
            />
          </div>
          <div v-if="getDevice === 'pc'" class="detail">
            <img
              class="first"
              :src="payProductTab.pcImg"
              :alt="payProductTab.tabName"
            />
          </div>
          <div v-if="getDevice === 'mobile'" class="detail">
            <img
              class="first"
              :src="payProductTab.mobileImg"
              :alt="payProductTab.tabName"
            />
          </div>
        </div>
        <div
          class="ment"
          v-html="payProductTab.notice.replace(/(?:\r\n|\r|\n)/g, '<br />')"
        ></div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../../store/window'
import { storeToRefs } from 'pinia'
import { PayProductTab } from '../../../../types/product'

defineProps<{
  payProductTab: PayProductTab
}>()

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  .detail-contents {
    .detail {
      background-color: white;
      border-radius: 10px;
      border: 1px solid $iconLine;
      border-top: none;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .first {
        width: 100%;
      }
    }
  }
  .ment {
    padding: 30px 0;
    font-size: 14px;
    color: $fontSub;
    line-height: 24px;
  }
}

@include mobile {
  article {
    .ment {
      padding-top: 20px;
      font-size: 13px;
    }
  }
}
</style>
