<template>
  <section>
    <article class="modal">
      <div class="modal-overlay">
        <div class="modal-box">
          <div class="padding-box">
            <div class="border-bottom">
              <div class="title">
                <div>사업자 등록번호 검색</div>
                <img
                  @click="closeModalAndHistoryBack"
                  src="../../../assets/login/close.png"
                  alt="닫기"
                />
              </div>

              <div class="search">
                <input
                  v-model="bizNumber"
                  type="text"
                  placeholder="ex) 123-45-678910"
                  @keypress.enter="brandSearch"
                />
                <button @click="brandSearch">
                  <img
                    src="../../../assets/login/search_fff.png"
                    alt="search"
                  />
                </button>
              </div>
            </div>

            <div class="list" v-if="brandList.length > 0">
              <div class="select-title">다중 선택 가능</div>
              <div
                v-for="item in brandList"
                :key="item.id"
                class="list-box"
                @click="selectBrand(item)"
              >
                <div
                  :class="{
                    select: selectBrandList.find((e) => e.id === item.id),
                  }"
                  class="box"
                >
                  <div class="brand-name">{{ item.brandName }}</div>
                  <div class="brand-category">{{ item.smallCategoryName }}</div>
                </div>
              </div>
            </div>

            <div v-else class="empty">
              <p>정보공개서에 등록되어 있지 않으신가요?</p>
              <p @click="changeAutoInput">직접 등록</p>
            </div>

            <div class="submit">
              <button @click="submit">확인</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Brand } from '../../../types/brand'
import { toastAlert } from '../../../functions/alert'
import api from '../../../config/axios.config'
import { BrandsResponse } from '../../../types/response'

const emits = defineEmits<{
  (e: 'showCompanyNumberModal'): void
  (e: 'getSelectBrandList', selectBrandList: Brand[], bizNumber: string): void
  (e: 'manualBrandInput', bizNumber: string): void
}>()

const bizNumber = ref<string>()
const brandList = ref<Brand[]>([])
const selectBrandList = ref<Brand[]>([])

const brandSearch = async () => {
  brandList.value = []

  if (!checkBizNumber()) {
    return
  }

  const { data } = await api.get<BrandsResponse>(
    `/brand/biz/${bizNumber.value}`
  )

  if (data.success) {
    if (data.brand.length > 0) {
      brandList.value = data.brand
    } else {
      toastAlert({
        text: '검색된 브랜드가 없습니다',
        type: 'warning',
      })
    }
  } else {
    toastAlert({
      text: data.errorMessage,
      type: 'warning',
    })
  }
}

const checkBizNumber = (): boolean => {
  const regBizNumber = /^([0-9]{3})*-([0-9]{2})*-([0-9]{5})$/

  if (!bizNumber.value) {
    toastAlert({ text: '사업자 등록번호를 입력해 주세요', type: 'warning' })
    return false
  } else if (!regBizNumber.test(bizNumber.value)) {
    toastAlert({ text: '사업자 번호가 올바르지 않습니다', type: 'warning' })
    return false
  } else {
    return true
  }
}

const selectBrand = (item: Brand) => {
  const findIndex = selectBrandList.value.findIndex((e) => e.id === item.id)

  if (findIndex > -1) {
    selectBrandList.value.splice(findIndex, 1)
  } else {
    selectBrandList.value.push(item)
  }
}

const changeAutoInput = () => {
  if (!checkBizNumber()) return

  // eslint-disable-next-line
  emits('manualBrandInput', bizNumber.value!)
  closeModalAndHistoryBack()
}

const submit = () => {
  if (!checkBizNumber()) {
    return
  }

  if (selectBrandList.value.length === 0) {
    toastAlert({
      text: '브랜드를 선택해 주세요',
      type: 'warning',
    })

    return
  }

  // eslint-disable-next-line
  emits('getSelectBrandList', selectBrandList.value, bizNumber.value!)
  closeModalAndHistoryBack()
}

const closeModal = () => {
  emits('showCompanyNumberModal')
}

const closeModalAndHistoryBack = () => {
  emits('showCompanyNumberModal')
  history.back()
}

onMounted(() => {
  document.body.setAttribute('style', 'overflow: hidden;')
  window.history.pushState({ page: 'modal' }, '', '#modal')
  window.addEventListener('popstate', closeModal)
})

onUnmounted(() => {
  document.body.removeAttribute('style')
  window.removeEventListener('popstate', closeModal)
})
</script>

<style lang="scss" scoped>
@import '@/scss/main';

section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(25, 25, 25, 0.5);
  padding: 0 !important;

  .modal {
    width: 100%;
    height: 100%;
    .modal-overlay {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .modal-box {
        background-color: #fff;
        width: 438px;
        height: 700px;
        border-radius: 10px;

        .padding-box {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 30px;
          display: flex;
          flex-direction: column;

          .border-bottom {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 20px;

            .title {
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 18px;
              position: relative;

              img {
                position: absolute;
                right: 0px;
                width: 30px;
                height: 30px;
                cursor: pointer;
              }
            }

            .search {
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 8px;
              input {
                width: 320px;
                height: 50px;
                border-radius: 10px;
                border: 1px solid $sectionLine;
                padding-left: 16px;
                box-sizing: border-box;
                font-size: 16px;
                font-family: $pre;
                color: $fontMain;
              }

              input::placeholder {
                font-family: Pretendard;
                font-size: 16px;
                color: $inputLine;
              }

              button {
                width: 50px;
                height: 50px;
                border-radius: 10px;
                border: none;
                background-color: black;
                cursor: pointer;

                img {
                  width: 30px;
                  height: 30px;
                }
              }
            }
          }

          .list {
            flex: 1 1 0;
            overflow-y: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;
            position: relative;

            &::-webkit-scrollbar {
              display: none;
            }

            .select-title {
              position: sticky;
              top: 0;
              font-size: 11px;
              color: $fontSub;
              font-weight: $reg;
              text-align: left;
              background-color: #fff;

              padding-bottom: 0;
              border-bottom: 1px solid $sectionLine;
              padding-bottom: 10px;
            }

            .list-box {
              .box {
                height: 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                padding: 0 16px;
                font-weight: $reg;

                cursor: pointer;

                .brand-name {
                  flex-basis: 70%;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  text-align: left;
                  color: $fontMain;
                }
                .brand-category {
                  color: $fontSub;
                  font-size: 12px;
                }
              }

              .select {
                background-color: #f5f7ff;
                .brand-name,
                .brand-category {
                  color: $mainColor;
                }
              }
            }
          }

          .empty {
            flex: 1 1 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px 0;

            p {
              font-size: 14px;
              color: $fontSub;

              &:last-child {
                color: $mainColor;
                cursor: pointer;
              }
            }
          }

          .submit {
            width: 100%;
            border-top: 1px solid $sectionLine;

            button {
              margin-top: 30px;
              background-color: $mainColor;
              width: 100%;
              height: 50px;
              border-radius: 10px;
              border: none;
              color: white;
              font-size: 16px;
              font-family: Pretendard;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}

@include mobile {
  section {
    .modal {
      .modal-overlay {
        @include mobile-container();
        padding: {
          top: 50px;
          bottom: 50px;
        }

        .modal-box {
          width: 100%;
          height: 100%;
          position: static;

          .padding-box {
            .border-bottom {
              .search {
                input {
                  width: 100%;
                }
              }
            }
            .list {
              height: 400px;
            }
          }
        }
      }
    }
  }
}
</style>
