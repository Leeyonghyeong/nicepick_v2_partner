<template>
  <section>
    <article>
      <div class="top-title">브랜드</div>

      <div class="category">
        <RouterLink to="/franchise/brand/management" class="none">
          <div class="category-name">브랜드 관리</div>
        </RouterLink>
        <div class="category-name select">브랜드 정보 수정</div>
      </div>

      <div class="content-section no-padding">
        <div class="content">
          <div class="title-year">
            <div class="title">
              가맹점 증감현황
              <span class="sub-title">(최근 3년)</span>
            </div>
            <div class="year-box">
              <div class="width">
                <div v-for="item in recentYear" :key="item">
                  <div class="year">{{ item }}년</div>
                </div>
              </div>
            </div>
          </div>

          <div class="info-section">
            <div class="input-section">
              <div class="input-title">신규개점</div>
              <div class="input-gap">
                <div
                  class="border-section"
                  v-for="(item, index) in brandChangeStatus"
                  :key="index"
                >
                  <input
                    v-model="item.newShopCount"
                    type="number"
                    placeholder="0"
                  />
                  <div>개</div>
                </div>
              </div>
            </div>
            <div class="input-section">
              <div class="input-title">계약종료</div>
              <div class="input-gap">
                <div
                  class="border-section"
                  v-for="(item, index) in brandChangeStatus"
                  :key="index"
                >
                  <input
                    v-model="item.terminationCount"
                    type="number"
                    placeholder="0"
                  />
                  <div>개</div>
                </div>
              </div>
            </div>
            <div class="input-section">
              <div class="input-title">계약해지</div>
              <div class="input-gap">
                <div
                  class="border-section"
                  v-for="(item, index) in brandChangeStatus"
                  :key="index"
                >
                  <input
                    v-model="item.cancelCount"
                    type="number"
                    placeholder="0"
                  />
                  <div>개</div>
                </div>
              </div>
            </div>
            <div class="input-section">
              <div class="input-title">명의변경</div>
              <div class="input-gap">
                <div
                  class="border-section"
                  v-for="(item, index) in brandChangeStatus"
                  :key="index"
                >
                  <input
                    v-model="item.changeCount"
                    type="number"
                    placeholder="0"
                  />
                  <div>개</div>
                </div>
              </div>
            </div>
          </div>

          <div class="comment">
            <div class="title">담당자 코멘트</div>
            <textarea
              ref="changeStatusCommentEl"
              v-model="changeStatusComment"
              rows="1"
              placeholder="코멘트 입력"
              @input="textareaResizeHandler"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="content-section">
        <div class="content">
          <div class="title-year">
            <div class="title">
              연도별 매장 현황
              <span class="sub-title">(최근 3년)</span>
              <span v-if="getDevice === 'pc'" class="red">
                ※해당년도에 운영중인 전체 매장수를 입력해 주세요.
              </span>
            </div>
            <div class="year-box">
              <div class="width">
                <div v-for="item in recentYear" :key="item">
                  <div class="year">{{ item }}년</div>
                </div>
              </div>
            </div>
          </div>
          <div class="info-section">
            <div class="input-section">
              <div class="input-title">가맹점 및 직영점 수</div>
              <div class="input-gap">
                <div
                  class="border-section"
                  v-for="(item, index) in brandFranchiseStatus"
                  :key="index"
                >
                  <input
                    v-model="item.allCount"
                    type="number"
                    placeholder="0"
                  />
                  <div>개</div>
                </div>
              </div>
            </div>
          </div>

          <div class="comment">
            <div class="title">담당자 코멘트</div>
            <textarea
              ref="franchiseStatusCommentEl"
              v-model="franchiseStatusComment"
              rows="1"
              placeholder="코멘트 입력"
              @change="textareaResizeHandler"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="content-section">
        <div class="content">
          <div class="title">창업비용</div>

          <div class="info-section mobile-gap">
            <div class="input-section calculator">
              <div class="input-title">가맹비</div>
              <div class="border-section">
                <input
                  v-model="brandStartCost.membershipFee"
                  id="membershipFee"
                  type="text"
                  placeholder="0"
                  @input="checkNumber"
                />
                <div>원</div>
              </div>
            </div>
            <div class="input-section calculator">
              <div class="input-title">교육비</div>
              <div class="border-section">
                <input
                  v-model="brandStartCost.educationFee"
                  id="educationFee"
                  type="text"
                  placeholder="0"
                  @input="checkNumber"
                />
                <div>원</div>
              </div>
            </div>
            <div class="input-section calculator">
              <div class="input-title">보증금</div>
              <div class="border-section">
                <input
                  v-model="brandStartCost.deposit"
                  id="deposit"
                  type="text"
                  placeholder="0"
                  @input="checkNumber"
                />
                <div>원</div>
              </div>
            </div>
            <div class="input-section calculator">
              <div class="input-title">기타비용</div>
              <div class="border-section">
                <input
                  v-model="brandStartCost.etcFee"
                  id="etcFee"
                  type="text"
                  placeholder="0"
                  @input="checkNumber"
                />
                <div>원</div>
              </div>
            </div>
            <div class="input-section calculator">
              <div class="input-title">인테리어</div>
              <div class="border-section">
                <input
                  v-model="brandStartCost.interiorFee"
                  id="interiorFee"
                  type="text"
                  placeholder="0"
                  @input="checkNumber"
                />
                <div>원</div>
              </div>
            </div>
            <div class="input-section calculator">
              <div class="input-title">기준면적</div>
              <div class="border-section area">
                <input
                  v-model="brandStartCost.standardArea"
                  id="standardArea"
                  type="text"
                  placeholder="0"
                  @input="checkNumber"
                />
                <div>㎡</div>
              </div>
            </div>
            <div class="input-section calculator total">
              <div class="input-title">총합계</div>
              <div class="total-section">
                <span>{{ brandStartCost.startTotalPrice }}</span> 원
              </div>
            </div>
          </div>

          <div class="comment">
            <div class="title">담당자 코멘트</div>
            <textarea
              ref="startCostCommentEl"
              v-model="startCostComment"
              rows="1"
              placeholder="코멘트 입력"
              @change="textareaResizeHandler"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="select-set">
        <label
          for="maintain"
          class="select maintain"
          :class="{ style: !isUpdate }"
          @click="isUpdate = false"
        >
          <input
            v-model="isUpdate"
            type="radio"
            name="select"
            id="maintain"
            :checked="!isUpdate"
          />
          <div class="select-title">
            <div class="title">현재 작성한 내용으로 브랜드 정보 저장</div>
            <div class="sub-title">
              (정보공개서의 정보가 업데이트와 상관없이 작성한 정보를 유지하고
              싶은 경우)
            </div>
          </div>
        </label>

        <label
          for="update"
          class="select"
          :class="{ style: isUpdate }"
          @click="isUpdate = true"
        >
          <input
            v-model="isUpdate"
            type="radio"
            name="select"
            id="update"
            :checked="isUpdate"
          />
          <div class="select-title">
            <div class="title">정보공개서 정보 업데이트 희망</div>
            <div class="sub-title">
              (정보공개서의 정보가 업데이트 될 때마다 적용을 원하는 경우)
            </div>
          </div>
        </label>
      </div>

      <div class="save">
        <button @click="submit">저장</button>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { useWindowStore } from '../../../../store/window'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../../../../store/user'
import api from '../../../../config/axios.config'
import { BrandResponse, CommonResponse } from '../../../../types/response'
import {
  BrandChangeStatus,
  BrandFranchiseStatus,
  BrandStartCost,
} from '../../../../types/brand'
import { toastAlert } from '../../../../functions/alert'

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)
const userStore = useUserStore()
const { currentBrand } = storeToRefs(userStore)

const nowYear: number = new Date().getFullYear()

const recentYear: number[] = [nowYear, nowYear - 1, nowYear - 2]

const brandChangeStatus = ref<BrandChangeStatus[]>([])
const changeStatusComment = ref<string>('')
const changeStatusCommentEl = ref<HTMLTextAreaElement | null>(null)

const brandFranchiseStatus = ref<BrandFranchiseStatus[]>([])
const franchiseStatusComment = ref<string>('')
const franchiseStatusCommentEl = ref<HTMLTextAreaElement | null>(null)

const brandStartCost = ref<BrandStartCost>({
  deposit: '0',
  educationFee: '0',
  etcFee: '0',
  interiorFee: '0',
  membershipFee: '0',
  startTotalPrice: '0',
  totalFee: '0',
  standardArea: '0',
})
const startCostComment = ref<string>('')
const startCostCommentEl = ref<HTMLTextAreaElement | null>(null)

const isUpdate = ref<boolean>(false) // 업데이트 유무

const getBrandInfo = async () => {
  if (currentBrand.value) {
    const { data } = await api.get<BrandResponse>(
      `/brand/management/info/${currentBrand.value.id}`
    )

    if (data.success) {
      infoInit()

      if (data.brand.brandChangeStatus.length > 0) {
        const _brandChangeStatus = data.brand.brandChangeStatus

        _brandChangeStatus.sort((a, b) => (a.year > b.year ? -1 : 0))

        _brandChangeStatus.forEach((e) => {
          const findIndex = brandChangeStatus.value.findIndex(
            (change) => change.year === e.year
          )

          if (findIndex > -1) {
            brandChangeStatus.value[findIndex] = e
          }
        })
      }

      if (data.brand.brandFranchiseStatus.length > 0) {
        const _brandFranchiseStatus = data.brand.brandFranchiseStatus

        _brandFranchiseStatus
          .filter((e) => e.location === '전체')
          .sort((a, b) => (a.year > b.year ? -1 : 0))
          .forEach((e) => {
            const findIndex = brandFranchiseStatus.value.findIndex(
              (franchise) => franchise.year === e.year
            )

            if (findIndex > -1) {
              brandFranchiseStatus.value[findIndex] = e
            }
          })
      }

      if (data.brand.brandStartCost) {
        brandStartCost.value = data.brand.brandStartCost

        brandStartCost.value.membershipFee = (
          parseInt(
            data.brand.brandStartCost.membershipFee.replaceAll(',', '')
          ) * 1000
        ).toLocaleString()
        brandStartCost.value.educationFee = (
          parseInt(data.brand.brandStartCost.educationFee.replaceAll(',', '')) *
          1000
        ).toLocaleString()
        brandStartCost.value.deposit = (
          parseInt(data.brand.brandStartCost.deposit.replaceAll(',', '')) * 1000
        ).toLocaleString()
        brandStartCost.value.etcFee = (
          parseInt(data.brand.brandStartCost.etcFee.replaceAll(',', '')) * 1000
        ).toLocaleString()
        brandStartCost.value.interiorFee = (
          parseInt(data.brand.brandStartCost.interiorFee.replaceAll(',', '')) *
          1000
        ).toLocaleString()
        brandStartCost.value.startTotalPrice = (
          parseInt(
            data.brand.brandStartCost.startTotalPrice.replaceAll(',', '')
          ) * 1000
        ).toLocaleString()
      }

      changeStatusComment.value = data.brand.changeStatusComment
      franchiseStatusComment.value = data.brand.franchiseStatusComment
      startCostComment.value = data.brand.startCostComment

      isUpdate.value = data.brand.isUpdate

      setTimeout(() => {
        if (changeStatusCommentEl.value)
          initTextareaResizeHandler(changeStatusCommentEl.value)

        if (franchiseStatusCommentEl.value)
          initTextareaResizeHandler(franchiseStatusCommentEl.value)

        if (startCostCommentEl.value)
          initTextareaResizeHandler(startCostCommentEl.value)
      }, 100)
    }
  }
}

const infoInit = () => {
  brandChangeStatus.value = []
  brandFranchiseStatus.value = []

  recentYear.forEach((year) => {
    brandChangeStatus.value.push({
      year,
      cancelCount: 0,
      changeCount: 0,
      newShopCount: 0,
      terminationCount: 0,
    })

    brandFranchiseStatus.value.push({
      year,
      allCount: 0,
      location: '전체',
    })
  })
}

const initTextareaResizeHandler = (target: HTMLTextAreaElement) => {
  target.style.height = 'auto'
  target.style.height = target.scrollHeight + 'px'
}

const textareaResizeHandler = (event: Event) => {
  const target = event.target as HTMLTextAreaElement

  target.style.height = 'auto'
  target.style.height = target.scrollHeight + 'px'
}

const checkNumber = (e: Event) => {
  const regex = /[^0-9]/gi
  const input = e.target as HTMLInputElement
  const id: string = input.id
  const value: number = parseInt(input.value.replace(regex, ''))

  if (!isNaN(value)) {
    if (id === 'membershipFee') {
      brandStartCost.value.membershipFee = value.toLocaleString()
    } else if (id === 'educationFee') {
      brandStartCost.value.educationFee = value.toLocaleString()
    } else if (id === 'deposit') {
      brandStartCost.value.deposit = value.toLocaleString()
    } else if (id === 'etcFee') {
      brandStartCost.value.etcFee = value.toLocaleString()
    } else if (id === 'interiorFee') {
      brandStartCost.value.interiorFee = value.toLocaleString()
    } else if (id === 'standardArea') {
      brandStartCost.value.standardArea = value.toLocaleString()
    }
  } else {
    if (id === 'membershipFee') {
      brandStartCost.value.membershipFee = '0'
    } else if (id === 'educationFee') {
      brandStartCost.value.educationFee = '0'
    } else if (id === 'deposit') {
      brandStartCost.value.deposit = '0'
    } else if (id === 'etcFee') {
      brandStartCost.value.etcFee = '0'
    } else if (id === 'interiorFee') {
      brandStartCost.value.interiorFee = '0'
    } else if (id === 'standardArea') {
      brandStartCost.value.standardArea = '0'
    }
  }

  caclStartCost()
}

const caclStartCost = () => {
  const convertArea =
    parseInt(brandStartCost.value.standardArea.replace(/,/g, '')) / 3.3058

  const areaInteriorFee = Math.round(
    parseInt(brandStartCost.value.interiorFee.replace(/,/g, '')) /
      Math.round(convertArea)
  )

  const totalFee =
    parseInt(brandStartCost.value.membershipFee.replace(/,/g, '')) +
    parseInt(brandStartCost.value.educationFee.replace(/,/g, '')) +
    parseInt(brandStartCost.value.deposit.replace(/,/g, '')) +
    parseInt(brandStartCost.value.etcFee.replace(/,/g, ''))

  const startTotalPrice =
    totalFee + parseInt(brandStartCost.value.interiorFee.replace(/,/g, ''))

  brandStartCost.value.areaInteriorFee = (
    areaInteriorFee / 1000
  ).toLocaleString()
  brandStartCost.value.totalFee = (totalFee / 1000).toLocaleString()
  brandStartCost.value.startTotalPrice = startTotalPrice.toLocaleString()
}

const submit = async () => {
  if (currentBrand.value) {
    brandStartCost.value.membershipFee = (
      parseInt(brandStartCost.value.membershipFee.replace(/,/g, '')) / 1000
    ).toLocaleString()
    brandStartCost.value.educationFee = (
      parseInt(brandStartCost.value.educationFee.replace(/,/g, '')) / 1000
    ).toLocaleString()
    brandStartCost.value.deposit = (
      parseInt(brandStartCost.value.deposit.replace(/,/g, '')) / 1000
    ).toLocaleString()
    brandStartCost.value.etcFee = (
      parseInt(brandStartCost.value.etcFee.replace(/,/g, '')) / 1000
    ).toLocaleString()
    brandStartCost.value.interiorFee = (
      parseInt(brandStartCost.value.interiorFee.replace(/,/g, '')) / 1000
    ).toLocaleString()
    brandStartCost.value.startTotalPrice = (
      parseInt(brandStartCost.value.startTotalPrice.replace(/,/g, '')) / 1000
    ).toLocaleString()

    const payload = {
      id: currentBrand.value.id,
      changeStatusComment: changeStatusComment.value,
      franchiseStatusComment: franchiseStatusComment.value,
      startCostComment: startCostComment.value,
      brandChangeStatus: brandChangeStatus.value,
      brandFranchiseStatus: brandFranchiseStatus.value,
      brandStartCost: brandStartCost.value,
      isUpdate: isUpdate.value,
    }

    const { data } = await api.post<CommonResponse>(
      '/brand/management/info',
      payload
    )

    if (data.success) {
      toastAlert({
        text: '브랜드 정보가 저장 되었습니다',
        type: 'success',
        position: 'top',
      })

      await getBrandInfo()
    }
  }
}

watch(
  () => currentBrand.value?.id,
  async () => await getBrandInfo()
)

onMounted(async () => {
  await getBrandInfo()
})
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 0px 80px 160px;

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

  .content-section {
    padding-top: 30px;

    .content {
      background-color: white;
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      padding: 30px;
      box-sizing: border-box;
      width: 1270px;
      .title {
        font-size: 18px;
        color: $fontMain;
        font-weight: $medi;
        padding-bottom: 30px;
        .sub-title {
          font-size: 12px;
          color: $fontSub;
        }
        .red {
          padding-left: 8px;
          font-size: 12px;
          color: $subColor;
        }
      }
      .title-year {
        display: flex;
        flex-direction: column;
        .year-box {
          display: flex;
          justify-content: flex-end;
          padding-bottom: 20px;
          .width {
            width: 1056px;
            display: flex;
            justify-content: flex-end;
            gap: 30px;
            div {
              width: 332px;
              display: flex;
              justify-content: center;
              .year {
                width: 114px;
                height: 30px;
                background-color: $sectionLine;
                border-radius: 50px;
                font-size: 14px;
                color: $fontMain;
                display: flex;
                align-items: center;
              }
            }
          }
        }
      }

      .info-section {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-bottom: 30px;

        .input-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .input-title {
            color: $fontMain;
            font-weight: $reg;
            line-height: 24px;
          }

          .input-gap {
            display: flex;
            gap: 30px;
            .border-section {
              display: flex;
              align-items: center;
              justify-content: flex-end;
              gap: 4px;
              color: $fontMain;
              position: relative;

              input {
                width: 332px;
                height: 50px;
                text-align: right;
                padding-right: 35px;
                box-sizing: border-box;
                border: 1px solid $iconLine;
                border-radius: 10px;
                font-family: $pre;
                font-size: 16px;
              }
              input::placeholder {
                text-align: right;
                color: $inputLine;
                font-weight: $reg;
              }
              input:focus {
                text-align: right;
                border: 1px solid $mainColor;
              }
              input::-webkit-inner-spin-button {
                appearance: none;
                -moz-appearance: none;
                -webkit-appearance: none;
              }
              div {
                position: absolute;
                right: 16px;
              }
            }
          }
        }

        .calculator {
          .border-section {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 4px;
            color: $fontMain;
            position: relative;

            input {
              width: 1056px;
              height: 50px;
              padding-right: 35px;
              box-sizing: border-box;
              border: 1px solid $iconLine;
              border-radius: 10px;
              text-align: right;
              font-family: $pre;
              font-size: 16px;
            }
            input::placeholder {
              color: $inputLine;
              font-weight: $reg;
            }
            input:focus {
              text-align: right;
              border: 1px solid $mainColor;
            }
            input::-webkit-inner-spin-button {
              appearance: none;
              -moz-appearance: none;
              -webkit-appearance: none;
            }
            div {
              position: absolute;
              right: 16px;
            }

            &.area {
              div {
                right: 10px;
              }
            }
          }
        }

        .total {
          padding-top: 30px;
          .total-section {
            font-weight: $reg;
            span {
              font-size: 20px;
              color: $mainColor;
              font-weight: $medi;
            }
          }
        }
      }

      .comment {
        padding-top: 30px;
        border-top: 1px solid $iconLine;

        .title {
          font-size: 16px;
          font-weight: $reg;
          padding-bottom: 20px;
        }
        textarea {
          width: 100%;
          height: 50px;
          border-radius: 10px;
          border: 1px solid $iconLine;
          padding: 13px 16px 16px 16px;
          box-sizing: border-box;
          font-size: 16px;
          font-family: $pre;
          resize: none;
          overflow: hidden;
          line-height: 24px;
        }
        textarea::placeholder {
          color: $inputLine;
        }
        textarea:focus {
          border: 1px solid $mainColor;
        }
      }
    }
  }

  .select-set {
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    width: 1270px;

    .select {
      width: 620px;
      height: 134px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      background-color: white;
      border-radius: 10px;
      font-size: 14px;
      cursor: pointer;

      input {
        margin: 0;
        cursor: pointer;
      }
      input[type='radio'] {
        appearance: none;
        border: 1px solid $inputLine;
        border-radius: 50%;
        width: 16px;
        height: 16px;
      }
      input[type='radio']:checked {
        background-image: url(../../../../assets/dashboard/checked.png);
        background-repeat: no-repeat;
        background-size: 8px;
        background-position: center;
      }

      .select-title {
        text-align: center;
        .title {
          font-weight: $medi;
          color: $fontMain;
        }
        .sub-title {
          padding-top: 10px;
          font-weight: $reg;
          color: $fontSub;
        }
      }
    }
    .style {
      box-shadow: 0 0 0 1px $mainColor inset;
    }
  }

  .save {
    margin-top: 30px;
    button {
      width: 1270px;
      height: 50px;

      background-color: $mainColor;
      border-radius: 10px;
      border: none;

      color: white;
      font-size: 16px;
      font-family: Pretendard;
      font-weight: $reg;

      cursor: pointer;
    }
  }
}

@include tablet {
  article {
    padding: 50px 24px 60px 24px;

    .content-section {
      .content {
        width: 100%;
        .title-year {
          .year-box {
            .width {
              width: 358px;
              gap: 8px;
            }
          }
        }

        .info-section {
          .input-section {
            .input-gap {
              gap: 8px;
              .border-section {
                input {
                  width: 114px;
                }
              }
            }
          }

          .calculator {
            .border-section {
              width: 358px;
            }
          }
        }

        .comment {
          .title {
            padding-bottom: 20px;
          }
        }
      }
    }

    .select-set {
      width: 100%;
      gap: 24px;
      .select {
        padding: 0px 7px 0px 6px;
        width: 100%;
        height: 157px;

        .sub-title {
          text-align: center;
          line-height: 24px;
        }
      }
    }
    .save {
      button {
        width: 100%;
      }
    }
  }
}

@include mobile {
  article {
    padding: 0;

    .top-title {
      padding: 0;
      font-size: 16px;
      position: absolute;
      top: 23px;
      left: 24px;
    }

    .category {
      background-color: white;
      justify-content: space-around;
      padding: 16px 24px 0 24px;
      border-bottom: 1px solid $iconLine;
      font-size: 14px;
    }

    .content-section {
      padding-top: 10px;
      .content {
        width: 100%;
        border-radius: 0;
        box-shadow: none;
        .title {
          font-size: 16px;
        }
        .title-year {
          .year-box {
            .width {
              width: 100%;
              gap: 8px;
              div {
                width: 100%;
                .year {
                  width: 100%;
                  font-size: 12px;
                }
              }
            }
          }
        }

        .info-section {
          .input-section {
            display: block;
            .input-title {
              font-size: 14px;
              padding-bottom: 10px;
            }
            .input-gap {
              gap: 8px;
              .border-section {
                font-size: 14px;
                input {
                  width: 100%;
                  padding-right: 34px;
                  font-size: 14px;
                }

                input::placeholder {
                  font-size: 14px;
                }
              }
            }
          }
          .calculator {
            .border-section {
              input {
                padding-right: 34px;
                font-size: 14px;
              }
            }
          }
        }

        .mobile-gap {
          gap: 20px;
          .calculator {
            .border-section {
              width: 100%;
            }
          }
          .total {
            display: flex;
            padding-top: 15px;
            .input-title {
              padding: 0;
            }
            .total-section {
              font-size: 14px;
              span {
                font-size: 18px;
              }
            }
          }
        }

        .comment {
          .title {
            font-size: 14px;
            padding-bottom: 10px;
          }
        }
      }
    }

    .no-padding {
      padding-top: 0;
    }

    .select-set {
      width: 100%;
      padding-top: 10px;
      flex-direction: column;
      gap: 0;

      .select {
        width: 100%;
        height: 113px;
        padding: 20px 23px 20px 24px;
        box-sizing: border-box;

        justify-content: flex-start;
        gap: 16px;
        flex-direction: row;

        border-radius: 0;
        .select-title {
          display: flex;
          flex-direction: column;
          text-align: justify;

          .sub-title {
            line-height: 24px;
            font-size: 12px;
          }
        }
      }
      .style {
        box-shadow: none;
      }
      .maintain {
        border-bottom: 1px solid $iconLine;
      }
    }

    .save {
      height: 90px;
      margin: 10px 0 60px 0;
      padding: 0 24px;
      display: flex;
      align-items: center;
      background-color: white;
      button {
        width: 100%;
      }
    }
  }
}
</style>
