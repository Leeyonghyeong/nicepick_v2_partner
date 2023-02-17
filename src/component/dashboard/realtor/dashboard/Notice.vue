<template>
  <section>
    <article>
      <div class="top-title">
        <img
          v-if="getDevice === 'mobile'"
          src="../../../../assets/login/arrow_lt.png"
          alt="이전"
        />
        공지사항
      </div>

      <div class="notice-list">
        <div
          class="list"
          :class="{ select: selectList === '1' }"
          @click="selectList = '1'"
        >
          <div class="name">[긴급] 창업픽 파트너 2023년 공지사항</div>
          <div class="period">2023.01.01</div>
        </div>
        <RouterLink to="/realtor/noticemain" style="text-decoration: none">
          <div
            class="list"
            :class="{ select: selectList === '2' }"
            @click="selectList = '2'"
          >
            <div class="name">공인중개사 광고 상품 공지사항</div>
            <div class="period">2022.12.01</div>
          </div>
        </RouterLink>
        <div
          class="list"
          :class="{ select: selectList === '3' }"
          @click="selectList = '3'"
        >
          <div class="name">파트너 홈페이지 리뉴얼 공지</div>
          <div class="period">2022.10.29</div>
        </div>
        <div
          class="list"
          :class="{ select: selectList === '4' }"
          @click="selectList = '4'"
        >
          <div class="name">파트너 회원 선착순 이벤트 진행</div>
          <div class="period">2022.09.01</div>
        </div>
        <div
          class="list"
          :class="{ select: selectList === '5' }"
          @click="selectList = '5'"
        >
          <div class="name">공인중개사 이벤트 진행</div>
          <div class="period">2023.01.01</div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useWindowStore } from '../../../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const selectList = ref<string>()
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 24px 0 24px;
  padding-bottom: 30%;
  .top-title {
    font-size: 20px;
    font-weight: $medi;
    color: $fontMain;
  }

  .notice-list {
    padding: 50px 0 60px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .list {
      padding: 20px 30px;
      display: flex;
      justify-content: space-between;
      background-color: white;
      border-radius: 10px;
      cursor: pointer;
      .name {
        color: $fontMain;
      }
      .period {
        font-size: 14px;
        color: $fontSub;
      }
    }
    .select {
      box-shadow: 0 0 0 1px $mainColor inset;
      font-weight: $medi;
    }
  }
}

@include mobile {
  article {
    padding: 0;
    background-color: white;

    .top-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      position: absolute;
      top: 15px;
      left: 24px;
      img {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }

    .notice-list {
      padding: 20px 24px 0;
      gap: 0;
      .list {
        height: 50px;
        align-items: center;
        border-bottom: 1px solid $sectionLine;
        padding: 0;
        .name {
          font-size: 14px;
        }
        .period {
          font-size: 11px;
        }
      }
      .select {
        box-shadow: none;
        border-bottom: 1px solid $sectionLine;
        font-weight: normal;
      }
    }
  }
}

@include pc {
  article {
    padding: 50px 0 0 160px;
    padding-bottom: 20%;

    .notice-list {
      .list {
        width: 1194px;
      }
      .list:hover {
        box-shadow: 0 0 0 1px $mainColor inset;
        font-weight: $medi;
      }
      .select {
        border: none;
      }
    }
  }
}
</style>
