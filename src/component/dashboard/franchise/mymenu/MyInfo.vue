<template>
  <section>
    <article>
      <div class="top-title">마이메뉴</div>

      <div class="category">
        <div class="category-name select">내 정보관리</div>
        <div class="category-name">이용내역</div>
        <div class="category-name">대표키워드</div>
      </div>

      <div class="info-section">
        <div class="top-title">기본정보</div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 0px 76px 160px;
  box-sizing: border-box;
  width: 100%;

  .none {
    text-decoration: none;
    color: inherit;
  }

  .top-title {
    font-size: 20px;
    font-weight: $medi;
    color: $fontMain;
    padding-bottom: 65px;
  }

  .category {
    display: flex;
    gap: 30px;
    color: $fontSub;
    font-weight: $reg;
    .category-name {
      cursor: pointer;
    }
    .select {
      color: $mainColor;
      font-weight: $semi;
      border-bottom: 2px solid $mainColor;
      padding-bottom: 14px;
    }
  }
}
</style>
