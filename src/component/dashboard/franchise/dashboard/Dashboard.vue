<template>
  <section>
    <article>
      <div class="top-title">대시보드</div>

      <div class="gap">
        <div class="flex">
          <div class="count-analysis">
            <div class="content count">
              <div class="box">
                <img
                  src="../../../../assets/dashboard/dash/월간.png"
                  alt="월간"
                />
                <div class="name-number">
                  <div class="name">창업픽 월간 방문자수</div>
                  <div class="number">10,000</div>
                </div>
              </div>
              <div class="box">
                <img
                  src="../../../../assets/dashboard/dash/실시간.png"
                  alt="실시간"
                />
                <div class="name-number">
                  <div class="name">실시간 문의건수</div>
                  <div class="number">1,000,000</div>
                </div>
              </div>
              <div class="box">
                <img
                  src="../../../../assets/dashboard/dash/조회.png"
                  alt="조회"
                />
                <div class="name-number">
                  <div class="name">내 브랜드 조회수</div>
                  <div class="number">100</div>
                </div>
              </div>
            </div>
            <div class="content analysis">
              <div class="box">
                <div class="name-period">
                  <div class="name">요일별 분석</div>
                  <div class="period">2023.01.01 / 12시 기준</div>
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <div class="content search">
            <div class="box">
              <div class="name">주간 검색어 순위</div>
            </div>
          </div>
        </div>

        <div class="content notice">
          <div class="box">
            <div class="name-link">
              <div class="name">
                공지사항 <i class="fa-solid fa-bullhorn"></i>
              </div>
              <div class="link">전체보기</div>
            </div>
            <div class="list">
              <div>프리미엄 서비스 이용시 주의사항</div>
              <div>파트너 홈페이지 리뉴얼 공지</div>
              <div>파트너 회원 선착순 이벤트 진행</div>
              <div>[긴급] 창업픽 파트너 2023년 공지사항</div>
              <div>프리미엄 서비스 이용시 주의사항</div>
            </div>
          </div>
        </div>

        <div class="banner">
          <img
            v-if="getDevice === 'pc'"
            src="../../../../assets/dashboard/dash/pc배너.png"
            alt="배너"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../../assets/dashboard/dash/tab배너.png"
            alt="배너"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../../assets/dashboard/dash/mob배너.png"
            alt="배너"
          />
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
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

  .gap,
  .flex,
  .count-analysis {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .gap {
    padding: 50px 0 60px;
  }

  .content {
    .box {
      background-color: white;
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      .name {
        font-size: 14px;
        color: $fontMain;
        font-weight: $medi;
      }
    }
  }
  .count {
    display: flex;
    gap: 24px;
    .box {
      width: 100%;
      height: 100px;
      padding: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      img {
        width: 40px;
        height: 40px;
      }
      .name-number {
        text-align: center;
        .name {
          font-size: 11px;
          color: $fontSub;
        }
        .number {
          padding-top: 9px;
          font-weight: $bold;
          color: $fontMain;
        }
      }
    }
  }
  .analysis {
    .box {
      height: 285px;
      padding: 30px;
      box-sizing: border-box;
      .name-period {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .period {
          font-size: 11px;
          color: $inputLine;
        }
      }
    }
  }
  .search {
    .box {
      height: 415px;
      padding: 30px;
      box-sizing: border-box;
    }
  }
  .notice {
    .box {
      height: 285px;
      padding: 30px;
      box-sizing: border-box;
      .name-link {
        padding-bottom: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid $sectionLine;
        .name {
          display: flex;
          align-items: center;
          gap: 6px;
          i {
            color: $mainColor;
            font-size: 16px;
          }
        }
        .link {
          font-size: 12px;
          color: $fontSub;
          cursor: pointer;
        }
      }
      .list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 14px;
        color: $fontMain;
        div {
          width: 50%;
          cursor: pointer;
        }
      }
    }
  }
  .banner {
    img {
      width: 100%;
    }
  }
}

@include mobile {
  article {
    padding: 0 0 58px;
    .top-title {
      display: flex;
      align-items: center;
      gap: 8px;
      position: absolute;
      top: 20px;
      left: 24px;
      font-size: 16px;
      padding: 0;
    }
  }
}

@include pc {
  article {
    padding: 50px 0 0 160px;
  }
}
</style>
