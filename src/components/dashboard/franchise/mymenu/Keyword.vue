<template>
  <section>
    <article>
      <div class="top-title">마이메뉴</div>

      <div class="category">
        <RouterLink to="myinfo" class="none">
          <div class="category-name">내 정보관리</div>
        </RouterLink>
        <RouterLink to="usagehistory" class="none">
          <div class="category-name">이용내역</div>
        </RouterLink>
        <div class="category-name select">대표키워드</div>
      </div>

      <div class="add">
        <div class="box">
          <div class="title">해시태그 키워드 추가 {{ brandTag.length }}/6</div>
          <div class="input-section">
            <input
              v-model="tag"
              type="text"
              placeholder="키워드 입력"
              @keypress.enter="submit"
            />
            <button @click="submit">등록</button>
          </div>

          <div v-if="brandTag.length === 0" class="ment">
            입력한 키워드가 없습니다.
          </div>

          <div v-else class="hashtag-list">
            <div v-for="item in brandTag" :key="item.id" class="hashtag">
              {{ item.tag }}
              <img
                src="../../../../assets/dashboard/delete.png"
                alt="지우기"
                @click="deleteTag(item.id)"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="info">
        <div>
          · 입력한 해시태그 키워드는 검색창에서 확인하실 수 있습니다. <br />
          · 해당 키워드는 사용자에 따라 랜덤으로 보여지는 서비스입니다.
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { BrandTagResponse, CommonResponse } from '../../../../types/response'
import api from '../../../../config/axios.config'
import { useUserStore } from '../../../../store/user'
import { storeToRefs } from 'pinia'
import { confirmAlert, toastAlert } from '../../../../functions/alert'
import { useRouter } from 'vue-router'
import { onBeforeMount, ref, onMounted } from 'vue'
import { BrandTag } from '../../../../types/brand'

const router = useRouter()

const userStore = useUserStore()
const { currentBrand } = storeToRefs(userStore)

const brandTag = ref<BrandTag[]>([])
const tag = ref<string>()

const getTag = async () => {
  if (currentBrand.value) {
    const { data } = await api.get<BrandTagResponse>(
      `/brand/tag/${currentBrand.value.id}`
    )

    if (data.success) {
      brandTag.value = data.brandTag
    }
  }
}

const deleteTag = async (id: string) => {
  const { data } = await api.delete<CommonResponse>(`/brand/tag/${id}`)

  if (data.success) {
    toastAlert({
      text: '해시태그가 삭제 되었습니다',
      type: 'success',
      position: 'top',
    })

    await getTag()
  }
}

const submit = async () => {
  if (currentBrand.value) {
    if (!tag.value) {
      toastAlert({
        text: '키워드를 입력해 주세요',
        type: 'warning',
      })

      return
    }

    const payload = {
      tag: tag.value,
      brandId: currentBrand.value.id,
    }

    const { data } = await api.post<CommonResponse>('/brand/tag', payload)

    if (data.success) {
      toastAlert({
        text: '해시태그가 등록되었습니다',
        type: 'success',
        position: 'top',
      })

      await getTag()
    } else {
      toastAlert({
        text: data.errorMessage,
        type: 'warning',
        position: 'top',
      })
    }

    tag.value = undefined
  }
}

onBeforeMount(async () => {
  if (!currentBrand.value || !currentBrand.value.isPremium) {
    const alert = await confirmAlert({
      text: '잘못된 접근입니다',
    })

    if (alert.isConfirmed) {
      router.replace('/franchise/dashboard')
    }
  }
})

onMounted(() => {
  getTag()
})
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 0px 76px 160px;
  height: 65vh;
  .none {
    text-decoration: none;
    color: inherit;
  }

  .top-title {
    font-size: 20px;
    font-weight: $medi;
    color: $fontMain;
    padding-bottom: 65px;
  }

  .category {
    display: flex;
    gap: 30px;
    color: $fontSub;
    border-bottom: 1px solid $iconLine;
    .category-name {
      cursor: pointer;
    }
    .select {
      color: $mainColor;
      font-weight: $semi;
      border-bottom: 2px solid $mainColor;
      padding-bottom: 14px;
    }
  }

  .add {
    width: 1270px;
    margin-top: 30px;
    background-color: white;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    .box {
      padding: 30px 30px 57px;
      box-sizing: border-box;
      .title {
        font-size: 18px;
        font-weight: $medi;
        color: $fontMain;
      }
      .input-section {
        margin-top: 20px;
        display: flex;
        gap: 10px;
        input {
          height: 50px;
          width: 100%;
          padding-left: 16px;
          box-sizing: border-box;
          border-radius: 10px;
          border: 1px solid $iconLine;
        }
        input::placeholder {
          color: $inputLine;
          font-family: Pretendard;
          font-size: 16px;
          font-weight: $reg;
        }
        input:focus {
          border: 1px solid $mainColor;
        }
        button {
          width: 114px;
          border-radius: 10px;
          border: none;
          background-color: $mainColor;
          color: white;
          font-family: Pretendard;
          font-weight: $reg;
          font-size: 16px;
          cursor: pointer;
        }
      }

      .ment {
        padding-top: 56px;
        font-size: 14px;
        color: $fontSub;
        text-align: center;
      }

      .hashtag-list {
        padding-top: 30px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        .hashtag {
          background-color: #fafafa;
          padding: 15px 20px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: $fontMain;
          img {
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
        }
      }
    }
  }

  .info {
    margin-top: 20px;
    font-size: 14px;
    color: $fontSub;
    line-height: 24px;
  }
}

@include tablet {
  article {
    padding: 50px 24px 60px 24px;

    .add {
      width: 100%;
    }
  }
}

@include mobile {
  article {
    padding: 0;
    .top-title {
      position: absolute;
      top: 23px;
      left: 24px;
      font-size: 16px;
      padding: 0;
    }

    .category {
      background-color: white;
      justify-content: space-around;
      padding: 16px 24px 0 24px;
      border-bottom: 1px solid $iconLine;
      font-size: 14px;
    }

    .add {
      width: 100%;
      margin-top: 0;
      box-shadow: none;
      border-radius: 0;
      .box {
        padding: 30px 24px 0;
        .title {
          font-size: 16px;
        }
        .input-section {
          flex-direction: column;
          button {
            width: 100%;
            height: 50px;
            font-size: 14px;
          }
        }
        .ment {
          padding: 100px 0 110px;
          font-size: 13px;
        }
        .hashtag-list {
          gap: 14px;
          padding-bottom: 30px;
          .hashtag {
            font-size: 13px;
          }
        }
      }
    }

    .info {
      padding: 0 24px 0 24px;
      margin: 0;
      div {
        margin-top: 0;
        padding-top: 20px;
        border-top: 1px solid $sectionLine;
        background-color: white;
        font-size: 12px;
      }
    }
  }
}
</style>
