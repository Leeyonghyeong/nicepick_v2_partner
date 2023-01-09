<template>
  <RouterLink to="/">main</RouterLink>
  <span style="margin: 0 10px">|</span>
  <RouterLink to="/about">about</RouterLink>
  <RouterView />
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';

.test {
  color: $primary;
}
</style>
