<template>
  <section>
    <article>
      <div class="hashtag">
        <div class="menu-detail">
          <div class="menu">
            <div class="select">해시태그</div>
            <div>리스트</div>
            <div>프로모션</div>
            <div>고객 매칭</div>
          </div>
          <div v-if="getDevice === 'tablet'" class="detail">
            <img
              class="first"
              src="../../../../assets/dashboard/ad/premium/tab.png"
              alt=""
            />
            <img
              class="second"
              src="../../../../assets/dashboard/ad/premium/tab_2.png"
              alt=""
            />
          </div>
          <div v-if="getDevice === 'pc'" class="detail">
            <img
              class="first"
              src="../../../../assets/dashboard/ad/premium/pc.png"
              alt=""
            />
            <img
              class="second"
              src="../../../../assets/dashboard/ad/premium/pc_2.png"
              alt=""
            />
          </div>
          <div v-if="getDevice === 'mobile'" class="detail">
            <img
              class="first"
              src="../../../../assets/dashboard/ad/premium/mob.png"
              alt=""
            />
            <img
              class="second"
              src="../../../../assets/dashboard/ad/premium/mob_2.png"
              alt=""
            />
          </div>
        </div>
        <div class="ment">
          · 검색페이지 추천태그 영역에 노출됩니다.<br />
          · 추천태그는 사용자에 따라 랜덤으로 노출될 수 있습니다.
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
