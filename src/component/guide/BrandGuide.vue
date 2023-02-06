<template>
  <section>
    <article>
      <div class="top-title" v-if="getDevice !== 'mobile'">
        <span class="sub">NICEPICK GUIDE</span>
        창업픽 가이드
      </div>
      <div class="mob-title" v-if="getDevice === 'mobile'">
        <img src="../../assets/guide/back.png" alt="뒤로가기" /> 창업픽 가이드
      </div>

      <div class="category">
        <div
          :class="{ select: selectCategory === '업종카테고리' }"
          @click="selectCategory = '업종카테고리'"
        >
          업종카테고리
        </div>
        <div
          :class="{ select: selectCategory === '브랜드상세정보' }"
          @click="selectCategory = '브랜드상세정보'"
        >
          브랜드 상세정보
        </div>
        <div
          :class="{ select: selectCategory === '프로모션' }"
          @click="selectCategory = '프로모션'"
        >
          프로모션
        </div>
        <div
          :class="{ select: selectCategory === '지역별브랜드랭킹' }"
          @click="selectCategory = '지역별브랜드랭킹'"
        >
          지역별 브랜드 랭킹
        </div>
        <div
          :class="{ select: selectCategory === '브랜드비교' }"
          @click="selectCategory = '브랜드비교'"
        >
          브랜드 비교
        </div>
      </div>

      <div class="content">
        <div class="img-box">
          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/brand/pc업종-1.png"
              alt="업종1"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/brand/tab업종-1.png"
              alt="업종1"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/brand/mob업종-1.png"
              alt="업종1"
            />
            <div class="title">① 전체 업종</div>
            <span class="sub">
              - 메인페이지에서 업종별로 브랜드를 볼 수 있습니다.
            </span>
          </div>
          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/brand/pc업종-2.png"
              alt="업종2"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/brand/tab업종-2.png"
              alt="업종2"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/brand/mob업종-2.png"
              alt="업종2"
            />
            <div class="title">② 선택 업종 변경</div>
            <span class="sub">- 선택한 업종을 변경할 수 있습니다.</span>
            <div class="image">
              <div class="more">
                이미지 보기
                <img src="../../assets/guide/more.png" alt="보기" />
                <img src="../../assets/guide/hide.png" alt="숨기기" />
              </div>
              <img
                v-if="getDevice !== 'mobile'"
                class="select-category"
                src="../../assets/guide/brand/pc-tab선택업종.png"
                alt="선택"
              />
              <img
                v-if="getDevice === 'mobile'"
                class="select-category"
                src="../../assets/guide/brand/mob선택업종.png"
                alt="선택"
              />
            </div>
          </div>
        </div>
        <div class="box">
          <div class="title">③ 세부 업종</div>
          <span class="sub">
            - 브랜드 목록에서 업종과 세부업종을 선택할 수 있습니다.
          </span>
        </div>
        <div class="box">
          <div class="title">④ 브랜드 목록</div>
          <span class="sub">
            - 선택한 업종의 브랜드를 목록으로 볼 수 있습니다.
          </span>
        </div>
        <div class="box">
          <div class="title">⑤ 필터</div>
          <span class="sub">
            - 우측에 필터를 사용하여 원하는 조건으로 설정 후 브랜드를 검색 할 수
            있습니다.
          </span>
          <div class="image">
            <div class="more">
              이미지 보기
              <img src="../../assets/guide/more.png" alt="보기" />
              <img src="../../assets/guide/hide.png" alt="숨기기" />
            </div>
            <img
              v-if="getDevice !== 'mobile'"
              class="filter"
              src="../../assets/guide/brand/pc-tab필터.png"
              alt="필터"
            />
            <img
              v-if="getDevice === 'mobile'"
              class="filter"
              src="../../assets/guide/brand/mob필터.png"
              alt="필터"
            />
          </div>
        </div>
      </div>

      <div class="main-link">
        <RouterLink to="/nicepickguide">
          <button>가이드 목록으로</button>
        </RouterLink>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const selectCategory = ref<string>('업종카테고리')
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 80px 0;

  .top-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    font-size: 20px;
    color: $fontMain;
    font-weight: $medi;
    .sub {
      font-size: 12px;
      color: $fontSub;
    }
  }

  .category {
    padding-top: 80px;
    display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 15px;
    color: $fontSub;
    cursor: pointer;
    .select {
      color: $fontMain;
      font-weight: $semi;
      border-bottom: 2px solid $fontMain;
      padding-bottom: 18px;
    }
  }

  .content {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-box {
      display: flex;
      flex-direction: column;
      gap: 80px;
    }
    .box {
      width: 1194px;
      display: flex;
      flex-direction: column;
      .title {
        padding-top: 30px;
      }
      .sub {
        padding-top: 10px;
        color: $fontSub;
        font-size: 15px;
      }
      .image {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        font-size: 12px;
        color: #1569ff;
        .more {
          padding: 20px 0 10px;
          display: flex;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
        }
        .select-category {
          width: 161px;
          height: 408px;
        }
        .filter {
          width: 438px;
          height: 520px;
        }
      }
    }
  }

  .main-link {
    padding-top: 80px;
    display: flex;
    justify-content: center;
    button {
      width: 1194px;
      height: 50px;
      border-radius: 10px;
      border: 1px solid $fontSub;
      background-color: white;
      font-family: Pretendard;
      font-size: 16px;
      font-weight: $reg;
      color: $fontSub;
      cursor: pointer;
    }
  }
}

@include tablet {
  article {
    padding: 80px 44px 60px 44px;
    .content {
      .box {
        width: 100%;
        .image {
          .select-category {
          }
        }
      }
    }
  }
}

@include mobile {
}
</style>
