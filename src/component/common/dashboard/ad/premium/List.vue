<template>
  <section>
    <article>
      <div class="list">
        <div class="menu-detail">
          <div class="menu">
            <div>해시태그</div>
            <div class="select">리스트</div>
            <div>프로모션</div>
            <div>고객 매칭</div>
          </div>
          <div v-if="getDevice === 'tablet'" class="detail">
            <img
              class="first"
              src="../../../../assets/dashboard/ad/premium/list/tab.png"
              alt=""
            />
            <img
              class="second"
              src="../../../../assets/dashboard/ad/premium/list/tab_2.png"
              alt=""
            />
          </div>
          <div v-if="getDevice === 'pc'" class="detail">
            <img
              class="first"
              src="../../../../assets/dashboard/ad/premium/list/pc.png"
              alt=""
            />
            <img
              class="second"
              src="../../../../assets/dashboard/ad/premium/list/pc_2.png"
              alt=""
            />
          </div>
          <div v-if="getDevice === 'mobile'" class="detail">
            <img
              class="first"
              src="../../../../assets/dashboard/ad/premium/list/mob.png"
              alt=""
            />
            <img
              class="second"
              src="../../../../assets/dashboard/ad/premium/list/mob_2.png"
              alt=""
            />
          </div>
        </div>
        <div class="ment">
          · 검색 및 업종 브랜드 리스트 상위 영역에 노출됩니다.<br />
          · 사용자 또는 업종/검색 내역에 따라 랜덤으로 노출될 수 있습니다.
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
