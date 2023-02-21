<template>
  <section>
    <article>
      <div class="ment-img">
        <div class="detail-contents">
          <img
            v-if="getDevice === 'tablet'"
            class="detail"
            src="../../../../../assets/dashboard/ad/main-special/ment-img/tab.png"
            alt=""
          />
          <img
            v-if="getDevice === 'pc'"
            class="detail"
            src="../../../../../assets/dashboard/ad/main-special/ment-img/pc.png"
            alt=""
          />
          <img
            v-if="getDevice === 'mobile'"
            class="detail"
            src="../../../../../assets/dashboard/ad/main-special/ment-img/mob.png"
            alt=""
          />
        </div>

        <div class="ment">
          · 배너 문구는 제목강조, 본문강조, 전체강조로 3가지 중에 자유롭게 선택
          가능합니다.<br />
          · 해당 상품 결제시 [문구작성 및 색상 선택 -> 배경 색상 선택 -> 이미지
          파일 첨부] 하여 등록하실 수 있습니다.
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

article {
  .detail-contents {
    padding: 46px 0;
    background-color: white;
    border-radius: 10px;
    border: 1px solid $iconLine;
    border-top: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    text-align: center;
    .detail {
      width: 332px;
      height: 658px;
    }
  }
  .ment {
    padding-top: 30px;
    font-size: 14px;
    color: $fontSub;
    line-height: 24px;
  }
}

@include mobile {
  article {
    .detail-contents {
      padding: 30px 19px;
      .detail {
        width: 100%;
        height: 100%;
      }
    }
    .ment {
      padding-top: 20px;
      font-size: 13px;
    }
  }
}

@include pc {
  article {
    .detail-contents {
      .detail {
        width: 618px;
        height: 335px;
      }
    }
  }
}
</style>
