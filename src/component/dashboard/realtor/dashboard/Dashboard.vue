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
                  <div class="name">실시간 지역 검색수</div>
                  <div class="number">1,000,000</div>
                </div>
              </div>
              <div class="box view">
                <img
                  src="../../../../assets/dashboard/dash/조회.png"
                  alt="조회"
                />
                <div class="name-number">
                  <div class="name">내 중개사 조회수</div>
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

        <div class="bottom-flex">
          <div class="content notice">
            <div class="box">
              <div class="name-link">
                <div class="name">
                  공지사항 <i class="fa-solid fa-bullhorn"></i>
                </div>
                <RouterLink to="/realtor/notice" class="none">
                  <div class="link">전체보기</div>
                </RouterLink>
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
              src="../../../../assets/realtor/pc-banner.png"
              alt="배너"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../../../assets/realtor/tab-banner.png"
              alt="배너"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../../../assets/realtor/mob-banner.png"
              alt="배너"
            />
          </div>
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

  .none {
    text-decoration: none;
    color: inherit;
  }

  .top-title {
    font-size: 20px;
    font-weight: $medi;
    color: $fontMain;
  }

  .gap,
  .flex {
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
  .view {
    position: relative;
    .balloon {
      position: absolute;
      top: -30px;
      right: -15px;
      background-color: white;
      border: 1px solid $mainColor;
      border-radius: 10px;
      color: $mainColor;
      font-size: 13px;
      padding: 12px;
      animation: motion 0.8s linear 0s infinite alternate;
    }

    .balloon::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 65%;
      border: 7px solid transparent;
      border-top-color: white;
      border-bottom: 0;
      margin-bottom: -6px;
    }

    .balloon::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 65%;
      border: 7px solid transparent;
      border-top-color: $mainColor;
      border-bottom: 0;
      margin-bottom: -7px;
      z-index: 0;
    }
  }
  .analysis {
    padding-top: 30px;
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
          cursor: pointer;
        }
      }
    }
  }
  .banner {
    padding-top: 30px;
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

    .gap,
    .flex {
      gap: 20px;
    }
    .gap {
      padding: 20px 0 30px;
    }

    .content {
      padding: 0 24px;
      .box {
        padding: 30px 20px;
      }
    }
    .count {
      gap: 8px;
      .box {
        flex-direction: column;
        padding: 12px 6px;
        .number {
          font-size: 14px;
        }
      }
    }

    .balloon {
      position: relative;
      top: 0;
      right: 0;
      background-color: white;
      border: 1px solid $mainColor;
      border-radius: 10px;
      color: $mainColor;
      text-align: center;
      font-size: 13px;
      margin: 0 24px;
      padding: 12px;
    }
    .balloon::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 7px solid transparent;
      border-bottom-color: white;
      border-top: 0;
      margin-left: 32%;
      margin-top: -6px;
    }
    .balloon::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 7px solid transparent;
      border-bottom-color: $mainColor;
      border-top: 0;
      margin-left: 32%;
      margin-top: -7px;
    }

    .count-analysis {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .banner {
      padding: 20px 24px 0 24px;
    }
  }
}

@include pc {
  article {
    padding: 50px 0 0 160px;

    .flex {
      flex-direction: row;
      .count-analysis {
        width: 100%;
      }
      .search {
        width: 30%;
      }
    }
    .count {
      gap: 30px;
      .box {
        gap: 47px;
        img {
          width: 50px;
          height: 50px;
        }
        .name-number {
          .name {
            font-size: 14px;
          }
          .number {
            font-size: 24px;
          }
        }
      }
    }
    .view {
      .balloon {
        top: -40px;
        right: 50px;
      }
      .balloon::after {
        left: 50%;
      }
      .balloon::before {
        left: 50%;
      }
    }

    .bottom-flex {
      display: flex;
      gap: 30px;
      height: 285px;
      .notice {
        width: 490px;
      }
      .banner {
        padding: 0;
        width: 750px;
      }
    }
  }
}

@keyframes motion {
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: 8px;
  }
}
</style>
