<template>
  <section>
    <article>
      <div class="period-list">
        <div
          class="name"
          :class="{ period: periodSelect === '30일' }"
          @click="periodSelect = '30일'"
        >
          30일
        </div>
        <div
          class="name middle"
          :class="{ period: periodSelect === '60일' }"
          @click="periodSelect = '60일'"
        >
          <div>60일</div>
          <div>(10% 할인)</div>
        </div>
        <div
          class="name"
          :class="{ period: periodSelect === '90일' }"
          @click="periodSelect = '90일'"
        >
          <div>90일</div>
          <div>(10% 할인)</div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const periodSelect = ref<string>('30일')
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
  border: 1px solid $inputLine;
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
  .period,
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
