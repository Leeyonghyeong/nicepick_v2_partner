<template>
  <section>
    <article>
      <div class="top-title">
        <img
          v-if="getDevice === 'mobile'"
          src="../../assets/login/arrow_lt.png"
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
          <div class="main" style="display: none">
            안녕하십니까. 기업 파트너 여러분 창업픽입니다. 프리미엄 서비스를
            이용시 주의사항을 알려드립니다. 현재 진행중인 첫기업혜택 프리미엄
            멤버십 이용시 광고 상품 1택 이벤트가 신규 가입자 폭주로 인해 연락이
            지연되고 있는 점 양해부탁드립니다. 가입 파트너 회원분들께 순차적으로
            연락을 드리고 있습니다. 다른 불편 사항이 있으신 분들께서는
            고객센터(070-8287-2281) 또는 카카오채널>창업Pick 으로 문의 주시기
            바랍니다.
          </div>
        </div>
        <div
          class="list"
          :class="{ select: selectList === '2' }"
          @click="selectList = '2'"
        >
          <div class="name">프리미엄 서비스 이용시 주의사항</div>
          <div class="period">2022.12.01</div>
        </div>
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
      </div>

      <div class="notice-post">
        <div class="post">
          <div class="name-period">
            <div class="name">프리미엄 서비스 이용시 주의사항</div>
            <div class="period">2022.12.01</div>
          </div>
          <div class="post">
            안녕하십니까. 기업 파트너 여러분 창업픽입니다. 프리미엄 서비스를
            이용시 주의사항을 알려드립니다. 현재 진행중인 첫기업혜택 프리미엄
            멤버십 이용시 광고 상품 1택 이벤트가 신규 가입자 폭주로 인해 연락이
            지연되고 있는 점 양해부탁드립니다. 가입 파트너 회원분들께 순차적으로
            연락을 드리고 있습니다. 다른 불편 사항이 있으신 분들께서는
            고객센터(070-8287-2281) 또는 카카오채널>창업Pick 으로 문의 주시기
            바랍니다.
          </div>
        </div>
        <div class="prev-next">
          <div class="other">
            <div>
              <div class="sub">이전</div>
              <div class="name">파트너 홈페이지 리뉴얼 공지</div>
            </div>
            <div class="period">2022.12.01</div>
          </div>
          <div class="other">
            <div>
              <div class="sub">이전</div>
              <div class="name">파트너 홈페이지 리뉴얼 공지</div>
            </div>
            <div class="period">2022.12.01</div>
          </div>
        </div>
        <button class="list-go">목록보기</button>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const selectList = ref<string>()
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 24px 0 24px;

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
      border: 1px solid $mainColor;
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
        border: none;
        border-bottom: 1px solid $sectionLine;
        font-weight: normal;
      }
    }
  }
}

@include pc {
  article {
    padding: 50px 0 0 160px;

    .notice-list {
      .list {
        width: 1194px;
      }
      .list:hover {
        border: 1px solid $mainColor;
        font-weight: $medi;
      }
      .select {
        border: none;
        font-weight: normal;
      }
    }
  }
}
</style>
