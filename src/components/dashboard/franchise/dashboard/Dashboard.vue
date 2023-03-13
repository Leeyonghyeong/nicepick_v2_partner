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
                  <div class="number">
                    {{ trafficInfo?.monthVisitorCount.toLocaleString() }}
                  </div>
                </div>
              </div>
              <div class="box">
                <img
                  src="../../../../assets/dashboard/dash/실시간.png"
                  alt="실시간"
                />
                <div class="name-number">
                  <div class="name">실시간 문의건수</div>
                  <div class="number">
                    {{ trafficInfo?.realtimeInquiryCount.toLocaleString() }}
                  </div>
                </div>
              </div>
              <div class="box view">
                <img
                  src="../../../../assets/dashboard/dash/조회.png"
                  alt="조회"
                />
                <div class="name-number">
                  <div class="name">내 브랜드 조회수</div>
                  <div class="number">
                    {{ brandWatchCount.toLocaleString() }}
                  </div>
                </div>
                <RouterLink
                  to="/franchise/ad"
                  class="none"
                  v-if="getDevice !== 'mobile'"
                >
                  <div class="balloon">내 브랜드 조회수 높이는 방법!</div>
                </RouterLink>
              </div>
            </div>
            <RouterLink
              to="/franchise/ad"
              class="none"
              v-if="getDevice === 'mobile'"
            >
              <div class="balloon">내 브랜드 조회수 높이는 방법!</div>
            </RouterLink>
            <div class="content analysis">
              <div class="box">
                <div class="name-period">
                  <div class="name">요일별 분석</div>
                  <div class="period">2023.01.01 / 12시 기준</div>
                </div>
                <div v-if="trafficInfo">
                  <TrafficGraph :chartData="trafficInfo" />
                </div>
              </div>
            </div>
          </div>

          <div class="content search">
            <div class="box">
              <div class="name">주간 검색어 순위</div>
              <div class="rank-box">
                <div
                  v-for="item in currentRank"
                  :key="item.rank"
                  class="rank-item"
                >
                  <div class="keyword-rank">{{ item.rank }}</div>
                  <div class="keyword">
                    {{ item.keyword }}
                  </div>
                  <div class="variance">
                    <img
                      v-if="item.variance === 'new'"
                      src="../../../../assets/rank/new.png"
                      alt="new"
                    />
                    <img
                      v-else-if="item.variance > 0"
                      src="../../../../assets/rank/up.png"
                      alt="up"
                    />
                    <img
                      v-else-if="item.variance === 0"
                      src="../../../../assets/rank/no-change.png"
                      alt="no-change"
                    />
                    <img
                      v-else
                      src="../../../../assets/rank/down.png"
                      alt="down"
                    />
                  </div>
                </div>
              </div>
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
                <RouterLink to="/franchise/notice" class="none">
                  <div class="link">전체보기</div>
                </RouterLink>
              </div>
              <div class="list">
                <div
                  class="item"
                  v-for="item in noticeList"
                  :key="item.id"
                  @click="$router.push(`/franchise/notice/detail/${item.id}`)"
                >
                  {{ item.title }}
                </div>
              </div>
            </div>
          </div>

          <div class="banner" @click="$router.push('/franchise/ad')">
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
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import TrafficGraph from './graph/TrafficGraph.vue'
import { useWindowStore } from '../../../../store/window'
import { storeToRefs } from 'pinia'
import api from '../../../../config/axios.config'
import { ref, watch } from 'vue'
import { Traffic } from '../../../../types/traffic'
import { TrafficResponse, CountResponse } from '../../../../types/response'
import { useUserStore } from '../../../../store/user'
import { useTrafficStore } from '../../../../store/traffic'
import { useKeywordRankStore } from '../../../../store/keyworkRank'
import { useNoticeStore } from '../../../../store/notice'
import { Notice } from '../../../../types/notice'

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)
const userStore = useUserStore()
const { currentBrand } = storeToRefs(userStore)
const trafficStore = useTrafficStore()
const { traffic } = storeToRefs(trafficStore)
const keywordRankStore = useKeywordRankStore()
const { currentRank } = storeToRefs(keywordRankStore)
const noticeStore = useNoticeStore()
const { notice } = storeToRefs(noticeStore)

const trafficInfo = ref<Traffic>()
const brandWatchCount = ref<number>(0)

const noticeList = ref<Notice[]>([])

const getTraffic = async () => {
  if (traffic.value.length === 0) {
    const { data } = await api.get<TrafficResponse>('/traffic')

    if (data.success) {
      trafficInfo.value = data.traffic.filter((e) => e.page === 0)[0]
    }
  } else {
    trafficInfo.value = traffic.value.filter((e) => e.page === 0)[0]
  }
}

const getBrandWatchCount = async () => {
  const { data } = await api.get<CountResponse>(
    `/traffic/brand/watch/${currentBrand.value?.id}`
  )

  if (data.success) {
    brandWatchCount.value = data.count
  }
}

const getKeywordRank = async () => {
  if (currentRank.value.length === 0) {
    await keywordRankStore.addKeywordRank()
  }
}

const getNotice = async () => {
  if (notice.value.length === 0) {
    await noticeStore.getNotice()
  }

  noticeList.value = notice.value.filter((e) => e.page === 0 || e.page === 3)
  noticeList.value.sort((a, b) => (a.createAt > b.createAt ? -1 : 0))
  noticeList.value = noticeList.value.splice(0, 5)
}

getTraffic()
getBrandWatchCount()
getKeywordRank()
getNotice()

watch(
  () => currentBrand.value,
  () => getBrandWatchCount()
)
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

      .rank-box {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        .rank-item {
          display: flex;
          align-items: center;

          .keyword-rank {
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
            color: $mainColor;
            width: 15px;
            text-align: center;
          }

          .keyword {
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            padding: 0 20px;
            color: #777;
            flex: 1;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .variance {
            img {
              display: block;
              width: 18px;
              height: 18px;
            }
          }
        }
      }
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
    cursor: pointer;
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
    padding: 50px 160px 0 160px;

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
