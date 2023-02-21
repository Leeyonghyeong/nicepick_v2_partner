<template>
  <section>
    <article>
      <div class="title top" v-if="getDevice !== 'mobile'">
        <span class="sub">NICEPICK GUIDE</span>
        창업픽 가이드
      </div>
      <div class="mob-title" v-if="getDevice === 'mobile'">
        <img src="../../assets/guide/back.png" alt="뒤로가기" /> 창업픽 가이드
      </div>

      <div class="guide-category">
        <RouterLink to="/nicepickguide/brandguide" class="category-btn">
          <div class="title">
            <span class="sub">BRAND GUIDE</span>
            브랜드 가이드
          </div>
          <img src="../../assets/guide/brand.png" alt="브랜드 가이드" />
        </RouterLink>

        <RouterLink to="/nicepickguide/commercialguide" class="category-btn">
          <div class="title">
            <span class="sub">COMMERCIAL AREA INFORMATION GUIDE</span>
            상권정보 가이드
          </div>
          <img src="../../assets/guide/area.png" alt="상권정보 가이드" />
        </RouterLink>

        <RouterLink to="/nicepickguide/inquiriesguide" class="category-btn">
          <div class="title">
            <span class="sub">INQUIRIES GUIDE</span>
            실시간 문의 가이드
          </div>
          <img src="../../assets/guide/qna.png" alt="실시간 문의 가이드" />
        </RouterLink>

        <RouterLink to="/nicepickguide/communityguide" class="category-btn">
          <div class="title">
            <span class="sub">COMMUNITY GUIDE</span>
            창업톡 가이드
          </div>
          <img src="../../assets/guide/talk.png" alt="창업톡 가이드" />
        </RouterLink>

        <RouterLink to="/nicepickguide/matchguide" class="category-btn">
          <div class="title">
            <span class="sub">BRAND MATCH GUIDE</span>
            브랜드 MATCH 가이드
          </div>
          <img src="../../assets/guide/match.png" alt="브랜드 MATCH 가이드" />
        </RouterLink>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';
article {
  padding: 80px 0;

  .title {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 20px;
    color: $fontMain;
    font-weight: $medi;
    .sub {
      font-size: 12px;
      color: $fontSub;
    }
  }
  .top {
    font-size: 24px;
    align-items: center;
  }

  .guide-category {
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    .category-btn {
      width: 1194px;
      height: 100px;
      padding: 0 30px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fafafa;
      border-radius: 10px;
      text-decoration: none;
      color: inherit;
      cursor: pointer;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
}

@include tablet {
  article {
    padding: 80px 44px 60px;

    .guide-category {
      .category-btn {
        width: 100%;
      }
    }
  }
}

@include mobile {
  article {
    padding: 0;

    .title {
      font-size: 18px;
      .sub {
        font-size: 11px;
      }
    }
    .mob-title {
      padding: 15px 0 15px 24px;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: 1px solid $sectionLine;
      color: $fontMain;
      img {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }

    .guide-category {
      padding: 20px 24px 30px;
      .category-btn {
        width: 100%;
      }
    }
  }
}
</style>
