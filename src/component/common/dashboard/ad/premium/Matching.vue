<template>
  <section>
    <article>
      <div class="matching">
        <div class="menu-detail">
          <div class="menu">
            <div>해시태그</div>
            <div>리스트</div>
            <div>프로모션</div>
            <div class="select">고객 매칭</div>
          </div>
        </div>
        <div class="icon-name">
          <div class="icon">
            <i class="fa-solid fa-users"></i>
            <div class="name">예비창업자</div>
          </div>
          <div class="icon">
            <i class="fa-solid fa-arrows-left-right"></i>
          </div>
          <div class="icon">
            <i class="fa-solid fa-building-user"></i>
            <div class="name">프랜차이즈 브랜드<br />(담당자)</div>
          </div>
        </div>
        <div class="ment">
          · 브랜드 매치 통해 예비창업자를 다이렉트로 매칭하는 서비스입니다.<br />
          · 다이렉트 매칭을 통해 창업 상담을 시작하세요!
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';
</style>
