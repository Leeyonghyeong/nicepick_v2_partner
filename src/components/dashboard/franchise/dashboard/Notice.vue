<template>
  <section>
    <article>
      <div class="top-title">공지사항</div>

      <div class="notice-list">
        <div
          class="list"
          v-for="item in noticeList"
          :key="item.id"
          @click="$router.push(`/franchise/notice/detail/${item.id}`)"
        >
          <div class="name">{{ item.title }}</div>
          <div class="period">{{ dateConvertString(item.createAt, '.') }}</div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useNoticeStore } from '../../../../store/notice'
import { Notice } from '../../../../types/notice'
import { dateConvertString } from '../../../../functions/common'

const noticeStore = useNoticeStore()
const { notice } = storeToRefs(noticeStore)

const noticeList = ref<Notice[]>([])

const getNotice = async () => {
  if (notice.value.length === 0) {
    await noticeStore.getNotice()
  }

  noticeList.value = notice.value.filter((e) => e.page === 0 || e.page === 3)
  noticeList.value.sort((a, b) => (a.createAt > b.createAt ? -1 : 0))
}

getNotice()
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 24px 0 24px;
  padding-bottom: 30%;

  .none {
    text-decoration: none;
    color: inherit;
  }

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
    }
  }
}
</style>
