<template>
  <section>
    <article>
      <div class="period-list">
        <div
          v-for="item in payTermPrice"
          :key="item.id"
          class="name middle"
          :class="{ active: currentTermPrice.id === item.id }"
          @click="$emit('changeTermPrice', item, index)"
        >
          <div>{{ item.term }}일</div>
          <div v-if="item.sale > 0">(10% 할인)</div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { PayTermPrice } from '../../../types/product'

defineProps<{
  payTermPrice: PayTermPrice[]
  currentTermPrice: PayTermPrice
  index: number
}>()

defineEmits<{
  (e: 'changeTermPrice', item: PayTermPrice, index: number): void
}>()
</script>

<style lang="scss" scoped>
@import '@/scss/main';

.period-list {
  background-color: white;
  width: 170px;
  height: 145px;
  position: absolute;
  margin: -210px 0 0 95px;
  z-index: 2;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #ebebeb;
  overflow: hidden;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
  .name {
    padding: 17px 0px 16px 15px;
    font-size: 14px;
    color: $fontMain;
    display: flex;
    cursor: pointer;
  }
  .middle {
    border-top: 1px solid $sectionLine;
    border-bottom: 1px solid $sectionLine;
  }
  .active,
  .name:hover {
    background-color: #f5f7ff;
    color: $mainColor;
  }
}

@include mobile {
  .period-list {
    margin: -200px 0 0 75px;
  }
}

@include pc {
  .period-list {
    margin: -50px 0 0 95px;
  }
}
</style>
