<template>
  <section>
    <article>
      <div class="promotion">
        <div class="menu-detail">
          <div class="menu">
            <div>해시태그</div>
            <div>리스트</div>
            <div class="select">프로모션</div>
            <div>고객 매칭</div>
          </div>
          <div v-if="getDevice === 'tablet'" class="detail">
            <img
              class="first"
              src="../../../../assets/dashboard/ad/premium/promotion/tab.png"
              alt=""
            />
            <img
              class="second"
              src="../../../../assets/dashboard/ad/premium/promotion/tab_2.png"
              alt=""
            />
            <img
              class="third"
              src="../../../../assets/dashboard/ad/premium/promotion/tab_3.png"
              alt=""
            />
          </div>
          <div v-if="getDevice === 'pc'" class="detail">
            <img
              class="first"
              src="../../../../assets/dashboard/ad/premium/promotion/pc.png"
              alt=""
            />
            <img
              class="second"
              src="../../../../assets/dashboard/ad/premium/promotion/pc_2.png"
              alt=""
            />
            <img
              class="third"
              src="../../../../assets/dashboard/ad/premium/promotion/pc_3.png"
              alt=""
            />
          </div>
          <div v-if="getDevice === 'mobile'" class="detail">
            <img
              class="first"
              src="../../../../assets/dashboard/ad/premium/promotion/mob.png"
              alt=""
            />
            <img
              class="second"
              src="../../../../assets/dashboard/ad/premium/promotion/mob_2.png"
              alt=""
            />
            <img
              class="third"
              src="../../../../assets/dashboard/ad/premium/promotion/mob_3.png"
              alt=""
            />
          </div>
        </div>
        <div class="ment">
          · 프로모션 페이지 리스트와 브랜드 상세페이지에 노출됩니다.<br />
          · 프로모션 아이콘과 프로모션 작성 내용으로 표시됩니다.
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
