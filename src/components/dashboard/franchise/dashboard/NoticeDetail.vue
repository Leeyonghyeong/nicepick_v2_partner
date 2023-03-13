<template>
  <section v-if="noticeList.length > 0">
    <article>
      <div class="top-title">
        <div v-if="getDevice !== 'mobile'" class="title">공지사항</div>
        <img
          v-if="getDevice === 'mobile'"
          src="../../../../assets/login/arrow_lt.png"
          alt="이전"
        />
      </div>

      <div class="notice-post">
        <div class="box post">
          <div class="name-period">
            <div class="name">{{ noticeList[currentNoticeIndex].title }}</div>
            <div class="period">
              {{
                dateConvertString(noticeList[currentNoticeIndex].createAt, '.')
              }}
            </div>
          </div>
          <div
            class="main"
            v-html="
              noticeList[currentNoticeIndex].content.replace(
                /(?:\r\n|\r|\n)/g,
                '<br />'
              )
            "
          ></div>
          <div
            class="image"
            v-if="noticeList[currentNoticeIndex].noticeImage.length > 0"
          >
            <div
              class="image-item"
              v-for="item in noticeList[currentNoticeIndex].noticeImage"
              :key="item.id"
            >
              <img :src="item.imageUrl" alt="이미지" />
            </div>
          </div>
        </div>

        <div class="box prev-next">
          <div class="other prev">
            <div class="sub-name">
              <div class="sub">이전</div>
              <div
                class="name"
                v-if="currentNoticeIndex !== noticeList.length - 1"
                @click="
                  $router.push(
                    `/franchise/notice/detail/${
                      noticeList[currentNoticeIndex + 1].id
                    }`
                  )
                "
              >
                {{ noticeList[currentNoticeIndex + 1].title }}
              </div>
              <div v-else class="last">이전 글이 존재하지 않습니다.</div>
            </div>
            <div class="period">2022.12.01</div>
          </div>
          <div class="other next">
            <div class="sub-name">
              <div class="sub">다음</div>
              <div
                class="name"
                v-if="currentNoticeIndex !== 0"
                @click="
                  $router.push(
                    `/franchise/notice/detail/${
                      noticeList[currentNoticeIndex - 1].id
                    }`
                  )
                "
              >
                {{ noticeList[currentNoticeIndex - 1].title }}
              </div>
              <div v-else class="last">다음 글이 존재하지 않습니다.</div>
            </div>
            <div class="period">2022.12.01</div>
          </div>
        </div>

        <div class="list-go">
          <button @click="$router.push('/franchise/notice')">목록보기</button>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../../store/window'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { Notice } from '../../../../types/notice'
import { useRoute } from 'vue-router'
import { dateConvertString } from '../../../../functions/common'
import { useNoticeStore } from '../../../../store/notice'

const route = useRoute()

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)
const noticeStore = useNoticeStore()
const { notice } = storeToRefs(noticeStore)

const noticeList = ref<Notice[]>([])
const currentNoticeIndex = ref<number>(0)

const getNotice = async () => {
  const { id } = route.params

  if (notice.value.length === 0) {
    await noticeStore.getNotice()
  }

  noticeList.value = notice.value.filter((e) => e.page === 0 || e.page === 3)
  noticeList.value.sort((a, b) => (a.createAt > b.createAt ? -1 : 0))

  const findIndex = noticeList.value.findIndex((e) => e.id === id)
  if (findIndex > -1) {
    currentNoticeIndex.value = findIndex
  }
}

getNotice()

watch(
  () => route.params,
  () => getNotice()
)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 24px 0 24px;

  .top-title {
    font-size: 20px;
    color: $fontMain;
    font-weight: $medi;
  }

  .notice-post {
    padding: 50px 0 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .box {
      background-color: white;
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    }
    .post {
      padding: 30px;
      min-height: 613px;
      .name-period {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid $sectionLine;
        padding-bottom: 30px;
        margin-bottom: 30px;
        .name {
          font-size: 18px;
          color: $fontMain;
          font-weight: $medi;
        }
        .period {
          font-size: 14px;
          color: $fontSub;
        }
      }
      .main {
        color: $fontSub;
        line-height: 30px;
      }

      .image {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .image-item {
          width: 100%;

          img {
            display: block;
            max-width: 100%;
          }
        }
      }
    }
    .prev-next {
      padding: 20px 30px;
      .other {
        display: flex;
        justify-content: space-between;
        .sub-name {
          display: flex;
          gap: 20px;
          font-size: 14px;
          .sub {
            color: $fontSub;
          }
          .name {
            color: $fontMain;
            cursor: pointer;
          }
          .name:hover {
            color: $mainColor;
          }

          .last {
            cursor: auto;
            color: $fontSub;
          }
        }
        .period {
          font-size: 12px;
          color: $fontSub;
        }
      }
      .prev {
        border-bottom: 1px solid $sectionLine;
        padding-bottom: 14px;
        margin-bottom: 14px;
      }
    }

    .list-go {
      padding-top: 10px;
      display: flex;
      justify-content: center;
      button {
        width: 230px;
        height: 40px;
        border-radius: 50px;
        border: none;
        background-color: white;
        font-family: $pre;
        font-size: 16px;
        color: $fontSub;
        cursor: pointer;
      }
      button:hover {
        border: 1px solid $mainColor;
        color: $mainColor;
      }
    }
  }
}

@include mobile {
  article {
    padding: 0;

    .top-title {
      display: flex;
      align-items: center;
      gap: 8px;
      position: absolute;
      top: 15px;
      left: 24px;
      img {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }

    .notice-post {
      padding: 0;
      gap: 0px;
      .box {
        border-radius: 0;
        box-shadow: none;
      }
      .post {
        height: 500px;
        .name-period {
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
          position: absolute;
          top: 16px;
          left: 62px;
          border: none;
          padding: 0;
          margin: 0;
          .name {
            font-size: 16px;
          }
          .period {
            font-size: 10px;
          }
        }
        .main {
          font-size: 13px;
        }
      }
      .prev-next {
        margin-top: 10px;
        padding: 0;
        .other {
          padding: 20px 30px 17px 30px;
          .sub-name {
            .sub {
              font-size: 12px;
            }
            .name {
              font-size: 13px;
            }
          }
          .period {
            font-size: 11px;
          }
        }
        .prev {
          margin-bottom: 0;
        }
      }
      .list-go {
        padding: 0;
        border-top: 1px solid $sectionLine;
        button {
          width: 100%;
          height: 50px;
          border-radius: 0;
          font-size: 13px;
        }
        button:hover {
          border: none;
          color: $fontSub;
        }
      }
    }
  }
}

@include pc {
  article {
    padding: 50px 0 0 160px;

    .notice-post {
      width: 1270px;
    }
  }
}
</style>
