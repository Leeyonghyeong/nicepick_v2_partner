<template>
  <section>
    <article class="nicepick-partner">
      <RouterLink to="/" class="none">
        <div v-if="getDevice !== 'mobile'" class="logo">
          <img
            class="nicepick"
            src="../../assets/header/logo_2.png"
            alt="로고"
          />
        </div>
      </RouterLink>

      <RouterLink to="join" class="none">
        <div v-if="getDevice === 'mobile'" class="title">
          <img src="../../assets/login/arrow_lt.png" alt="이전" />
          <div>프랜차이즈 브랜드 회원가입</div>
        </div>
      </RouterLink>
    </article>

    <article class="padding">
      <article class="title-search">
        <div class="box">
          <div v-if="getDevice !== 'mobile'" class="title">
            프랜차이즈 브랜드 회원가입
          </div>
          <div class="search">
            <div class="border">
              <div class="search-title">사업자 등록번호</div>
              <button @click="showCompanyNumberModal">검색</button>

              <div class="apply-section" v-if="bizNumber">{{ bizNumber }}</div>

              <div
                class="select-brand-list"
                v-if="selectBrandList.length > 0 && isAutoInput"
              >
                <div
                  class="apply-section"
                  v-for="(item, index) in selectBrandList"
                  :key="item.id"
                >
                  <div class="name-close">
                    <div class="brand-name">{{ item.brandName }}</div>
                    <img
                      src="../../assets/login/close.png"
                      alt="닫기"
                      @click="deleteSelectBrandList(index)"
                    />
                  </div>
                  <div class="select-box">
                    <div class="select" @click="showLargeCategory(index)">
                      <div class="category-select">
                        {{ item.largeCategoryName }}
                      </div>
                      <img src="../../assets/login/arrow_down.png" alt="down" />
                    </div>
                    <div
                      class="select"
                      @click="showSmallCategory(index, item.largeCategoryName)"
                    >
                      <div class="category-select">
                        {{ item.smallCategoryName }}
                      </div>
                      <img src="../../assets/login/arrow_down.png" alt="down" />
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="!isAutoInput && bizNumber" class="brand-info-input">
                <div class="apply-section">
                  <div class="name-close">
                    <input
                      v-model="manualBrandName"
                      type="text"
                      placeholder="브랜드명"
                    />
                  </div>
                  <div class="select-box">
                    <div class="select" @click="showLargeCategory(0)">
                      <div class="category-select">
                        {{
                          manualLargeCategory
                            ? manualLargeCategory
                            : '업종 대분류 선택'
                        }}
                      </div>
                      <img src="../../assets/login/arrow_down.png" alt="down" />
                    </div>
                    <div
                      class="select"
                      @click="showSmallCategory(0, manualLargeCategory)"
                    >
                      <div class="category-select">
                        {{
                          manualSmallCategory
                            ? manualSmallCategory
                            : '업종 소분류 선택'
                        }}
                      </div>
                      <img src="../../assets/login/arrow_down.png" alt="down" />
                    </div>
                  </div>
                  <div class="name-close">
                    <input
                      v-model="manualOwnerName"
                      type="text"
                      placeholder="대표자명"
                    />
                  </div>
                  <div class="name-close">
                    <input
                      v-model="manualCompanyName"
                      type="text"
                      placeholder="회사명"
                    />
                  </div>
                </div>
              </div>

              <small v-if="bizNumberErrorText">{{ bizNumberErrorText }}</small>
            </div>
          </div>
        </div>
      </article>

      <article class="join-input">
        <div class="input-box">
          <div class="box">
            <div class="input-title">
              이메일
              <div>(아이디 사용)</div>
            </div>
            <input
              v-model="email"
              type="email"
              placeholder="이메일 주소 입력"
            />
            <small v-if="emailErrorText">{{ emailErrorText }}</small>
          </div>

          <div class="box">
            <div class="input-title">비밀번호</div>
            <div class="pw-input">
              <input
                v-model="password"
                type="password"
                placeholder="비밀번호 입력(영문+숫자+특수문자 8~16자)"
              />
              <small v-if="passwordErrorText">{{ passwordErrorText }}</small>
              <input
                v-model="rePassword"
                type="password"
                placeholder="비밀번호 확인"
              />
              <small v-if="rePasswordErrorText">{{
                rePasswordErrorText
              }}</small>
            </div>
          </div>

          <div class="box">
            <div class="input-title">담당자명</div>
            <input v-model="userName" type="text" placeholder="이름 입력" />
            <small v-if="userNameErrorText">{{ userNameErrorText }}</small>
          </div>

          <div class="box phone">
            <div class="input-title">휴대폰 번호</div>
            <input
              v-model="phoneNumber"
              type="text"
              placeholder="‘-’ 제외 숫자만 입력"
            />
            <small v-if="phoneNumberErrorText">{{
              phoneNumberErrorText
            }}</small>
          </div>
        </div>
      </article>

      <article class="check-submit">
        <div class="box">
          <div class="title">약관동의</div>
          <div class="border-box">
            <div class="padding-box">
              <div class="space all">
                전체 동의
                <div class="check">
                  <input
                    v-model="isAllCheck"
                    type="checkbox"
                    id="check1"
                    @change="changeAllAgree"
                  />
                  <label for="check1"></label>
                </div>
              </div>

              <div class="gap-box">
                <div class="space">
                  <a
                    @click="
                      moveAgreePage(
                        'https://nicepick.notion.site/nicepick/112ba598e8d34c39b6b3ab29d6c9e34a'
                      )
                    "
                  >
                    (필수) 서비스 이용 약관 동의
                  </a>
                  <div class="check">
                    <input
                      v-model="isService"
                      type="checkbox"
                      id="check2"
                      @change="changeAgree"
                    />
                    <label for="check2"></label>
                  </div>
                </div>
                <div class="space">
                  <a
                    @click="
                      moveAgreePage(
                        'https://nicepick.notion.site/nicepick/b92941c41e6e4986b60a197ac607f1da'
                      )
                    "
                    >(필수) 개인정보 수집 이용 동의</a
                  >
                  <div class="check">
                    <input
                      v-model="isPrivacy"
                      type="checkbox"
                      id="check3"
                      @change="changeAgree"
                    />
                    <label for="check3"></label>
                  </div>
                </div>
                <div class="space">
                  <a
                    @click="
                      moveAgreePage(
                        'https://nicepick.notion.site/nicepick/e5db5ba7dd064fea86a0a0057d042654'
                      )
                    "
                    >(선택) 창업 정보 및 이벤트 정보 수신 동의</a
                  >
                  <div class="check">
                    <input
                      v-model="isMarketing"
                      type="checkbox"
                      id="check4"
                      @change="changeAgree"
                    />
                    <label for="check4"></label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button @click="submit">가입하기</button>
        </div>
      </article>

      <CompanyNumber
        v-if="showModal"
        selectBrandList="selectBrandList"
        @showCompanyNumberModal="showCompanyNumberModal"
        @getSelectBrandList="getSelectBrandList"
        @manualBrandInput="manualBrandInput"
      />
    </article>
  </section>

  <article
    v-if="isShowLargeCategoryModal"
    class="large-category-modal category-modal"
    @click="isShowLargeCategoryModal = false"
  >
    <div class="item-wrapper" @click.stop>
      <div
        class="item"
        v-for="item in category"
        :key="item.id"
        @click="changeLargeCategory(item)"
      >
        {{ item.categoryName }}
      </div>
    </div>
  </article>
  <article
    v-if="isShowSmallCategoryModal && currentLargeCategory"
    class="small-category-modal category-modal"
    @click="isShowSmallCategoryModal = false"
  >
    <div class="item-wrapper" @click.stop>
      <div
        class="item"
        v-for="item in currentLargeCategory.smallCategory"
        :key="item.id"
        @click="changeSmallCategory(item)"
      >
        {{ item.categoryName }}
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'
import CompanyNumber from '../common/modal/CompanyNumber.vue'
import { Brand } from '../../types/brand'
import { useCategoryStore } from '../../store/category'
import { LargeCategory, SmallCategory } from '../../types/category'
import api from '../../config/axios.config'
import { AuthResponse, CommonResponse } from '../../types/response'
import { toastAlert } from '../../functions/alert'
import { deviceMoveUrl } from '../../functions/common'
import { useUserStore } from '../../store/user'
import router from '../../router'

const windowStore = useWindowStore()
const categoryStore = useCategoryStore()
const userStore = useUserStore()
const { getDevice } = storeToRefs(windowStore)
const { category } = storeToRefs(categoryStore)
const { user, brandId } = storeToRefs(userStore)

const showModal = ref<boolean>(false)
const showCompanyNumberModal = () => {
  showModal.value = !showModal.value
}

const bizNumber = ref<string>()
const selectBrandList = ref<Brand[]>([])
const brandListIndex = ref<number>(0)
const isAutoInput = ref<boolean>(false)

const manualBrandName = ref<string>()
const manualLargeCategory = ref<string>()
const manualSmallCategory = ref<string>()
const manualOwnerName = ref<string>()
const manualCompanyName = ref<string>()

const isShowLargeCategoryModal = ref<boolean>(false)
const isShowSmallCategoryModal = ref<boolean>(false)
const currentLargeCategory = ref<LargeCategory>()

const email = ref<string>()
const password = ref<string>()
const rePassword = ref<string>()
const userName = ref<string>()
const phoneNumber = ref<string>()

const bizNumberErrorText = ref<string>()
const emailErrorText = ref<string>()
const passwordErrorText = ref<string>()
const rePasswordErrorText = ref<string>()
const userNameErrorText = ref<string>()
const phoneNumberErrorText = ref<string>()

const isAllCheck = ref<boolean>(false)
const isService = ref<boolean>(false)
const isPrivacy = ref<boolean>(false)
const isMarketing = ref<boolean>(false)

const getSelectBrandList = (_selectBrandList: Brand[], _bizNumber: string) => {
  isAutoInput.value = true

  if (bizNumber.value !== _bizNumber) {
    selectBrandList.value = []
  }

  selectBrandList.value.push(..._selectBrandList)
  bizNumber.value = _bizNumber

  selectBrandList.value.sort((a, b) => (a.brandName < b.brandName ? -1 : 0))

  selectBrandList.value = selectBrandList.value.reduce(
    (acc: Brand[], current: Brand) => {
      if (acc.findIndex(({ id }) => id === current.id) === -1) {
        acc.push(current)
      }

      return acc
    },
    []
  )
}

const manualBrandInput = (_bizNumber: string) => {
  bizNumber.value = _bizNumber
  isAutoInput.value = false
}

const deleteSelectBrandList = (index: number) => {
  selectBrandList.value.splice(index, 1)

  if (selectBrandList.value.length === 0) {
    bizNumber.value = undefined
  }
}

const showLargeCategory = (index: number) => {
  brandListIndex.value = index
  isShowLargeCategoryModal.value = true
}

const showSmallCategory = (index: number, categoryName: string | undefined) => {
  if (categoryName) {
    brandListIndex.value = index

    currentLargeCategory.value = category.value.find(
      (e) => e.categoryName === categoryName
    )

    if (currentLargeCategory.value) {
      isShowSmallCategoryModal.value = true
    }
  }
}

const changeLargeCategory = (item: LargeCategory) => {
  if (!isAutoInput.value) {
    manualLargeCategory.value = item.categoryName
  } else {
    if (
      selectBrandList.value[brandListIndex.value].largeCategoryName !==
      item.categoryName
    ) {
      selectBrandList.value[brandListIndex.value].largeCategoryName =
        item.categoryName

      selectBrandList.value[brandListIndex.value].smallCategoryName = ''
    }
  }

  isShowLargeCategoryModal.value = false
}

const changeSmallCategory = (item: SmallCategory) => {
  if (!isAutoInput.value) {
    manualSmallCategory.value = item.categoryName
  } else {
    selectBrandList.value[brandListIndex.value].smallCategoryName =
      item.categoryName
  }

  isShowSmallCategoryModal.value = false
}

const checkBizNumber = (): boolean => {
  if (!bizNumber.value) {
    bizNumberErrorText.value = '사업자 등록번호를 검색 후 입력해 주세요'
    return false
  }

  if (!isAutoInput.value) {
    if (!manualBrandName.value) {
      bizNumberErrorText.value = '브랜드명을 입력해 주세요'
      return false
    } else if (!manualLargeCategory.value || !manualSmallCategory.value) {
      bizNumberErrorText.value = '업종을 선택해 주세요'
      return false
    } else if (!manualOwnerName.value) {
      bizNumberErrorText.value = '대표자명을 입력해 주세요'
      return false
    } else if (!manualCompanyName.value) {
      bizNumberErrorText.value = '회사명을 입력해 주세요'
      return false
    }
  }

  return true
}

const checkEmail = async (): Promise<boolean> => {
  if (!email.value) {
    emailErrorText.value = '이메일을 입력해 주세요'
    return false
  } else {
    const regEmail =
      /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/

    if (!regEmail.test(email.value)) {
      emailErrorText.value = '이메일 형식이 올바르지 않습니다.'
      return false
    } else {
      const { data } = await api.get<CommonResponse>(
        `/auth/user/${email.value}`
      )

      if (data.success) {
        return true
      } else {
        emailErrorText.value = data.errorMessage
        return false
      }
    }
  }
}

const checkPassword = (): boolean => {
  if (!password.value) {
    passwordErrorText.value = '비밀번호를 입력해주세요'
    return false
  } else {
    const regPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~$@$!%^*#?&()<>_=+])[A-Za-z\d~$@$!%^*#?&()<>_=+]{8,16}$/

    if (!regPassword.test(password.value)) {
      passwordErrorText.value = '영문+숫자+특수문자 8~16자로 입력해 주세요'
      return false
    }
  }

  if (!rePassword.value) {
    rePasswordErrorText.value = '비밀번호를 입력해주세요'
    return false
  } else if (password.value !== rePassword.value) {
    rePasswordErrorText.value = '비밀번호가 일치하지 않습니다'
    return false
  }

  return true
}

const checkUserName = (): boolean => {
  if (!userName.value) {
    userNameErrorText.value = '이름을 입력해 주세요'
    return false
  } else if (userName.value.length < 2 || userName.value.length > 10) {
    userNameErrorText.value = '2~10자 이내로 작성해 주세요'
    return false
  }

  return true
}

const checkPhoneNumber = (): boolean => {
  if (!phoneNumber.value) {
    phoneNumberErrorText.value = '전화번호를 입력해 주세요'
    return false
  } else {
    const regPhone = /^01([0|1|6|7|8|9]{1})([0-9]{3,4})([0-9]{4})$/

    if (!regPhone.test(phoneNumber.value)) {
      phoneNumberErrorText.value = '전화번호가 형식에 맞지 않습니다'
      return false
    }
  }

  return true
}

const changeAllAgree = (): void => {
  if (isAllCheck.value) {
    isService.value = true
    isPrivacy.value = true
    isMarketing.value = true
  } else {
    isService.value = false
    isPrivacy.value = false
    isMarketing.value = false
  }
}

const changeAgree = (): void => {
  if (isService.value && isPrivacy.value && isMarketing.value) {
    isAllCheck.value = true
  } else {
    isAllCheck.value = false
  }
}

const checkAgree = (): boolean => {
  if (!isService.value || !isPrivacy.value) {
    toastAlert({
      text: '필수 항목에 동의해 주세요',
      type: 'warning',
    })
    return false
  }
  return true
}

const moveAgreePage = (url: string) => {
  deviceMoveUrl(getDevice.value, url)
}

const submit = async () => {
  bizNumberErrorText.value = undefined
  emailErrorText.value = undefined
  passwordErrorText.value = undefined
  rePasswordErrorText.value = undefined
  userNameErrorText.value = undefined
  phoneNumberErrorText.value = undefined

  if (!checkBizNumber()) return
  if (!(await checkEmail())) return
  if (!checkPassword()) return
  if (!checkUserName()) return
  if (!checkPhoneNumber()) return
  if (!checkAgree()) return

  const payload = {
    bizNumber: bizNumber.value,
    brand: selectBrandList.value,
    brandName: manualBrandName.value,
    largeCategoryName: manualLargeCategory.value,
    smallCategoryName: manualSmallCategory.value,
    ownerName: manualOwnerName.value,
    companyName: manualCompanyName.value,
    email: email.value,
    password: password.value,
    rePassword: rePassword.value,
    userName: userName.value,
    phoneNumber: phoneNumber.value,
    isMarketing: isMarketing.value,
    role: 'COMPANY',
  }

  const { data } = await api.post<AuthResponse>(
    '/auth/signup/franchise',
    payload
  )

  if (data.success) {
    const accessToken: string = data.accessToken
    localStorage.setItem('accessToken', accessToken)

    user.value = data.user
    brandId.value = data.brandId

    router.replace('/joincomplete')
  }
}

onMounted(async () => {
  if (category.value.length === 0) {
    await categoryStore.getCategory()
  }
})
</script>

<style lang="scss" scoped>
@import '@/scss/main';

section {
  padding: 100px 0;
  text-align: center;

  .none {
    text-decoration: none;
    color: inherit;
  }
  .nicepick-partner {
    display: flex;
    justify-content: center;
    .logo {
      display: flex;
      align-items: flex-start;
      gap: 7.57px;

      .nicepick {
        width: 252px;
        height: 38px;
      }
    }
  }

  .title-search {
    padding: 40px 0 30px 0;
    display: flex;
    justify-content: center;
    .box {
      width: 378px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .title {
        font-weight: $medi;
        color: $fontMain;
      }

      .search {
        .border {
          padding: 30px 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-top: 1px solid $sectionLine;
          border-bottom: 1px solid $sectionLine;
          .search-title {
            font-size: 14px;
            color: $fontMain;
            display: flex;
          }
          button {
            background-color: $fontMain;
            color: white;
            font-family: Pretendard;
            font-size: 16px;
            height: 50px;
            border-radius: 10px;
            cursor: pointer;
            border: none;
          }

          .select-brand-list {
            display: flex;
            flex-direction: column;
            gap: 20px 0;
          }

          .apply-section {
            background-color: #fafafa;
            border-radius: 10px;
            padding: 20px 16px;
            color: $fontMain;
            font-weight: $reg;

            display: flex;
            flex-direction: column;
            gap: 21px;

            .name-close {
              display: flex;
              align-items: center;
              justify-content: space-between;

              .brand-name {
                display: flex;
              }

              img {
                width: 20px;
                height: 20px;
                cursor: pointer;
              }

              input {
                width: 100%;
                height: 50px;
                border: 1px solid $inputLine;
                border-radius: 10px;
                padding: 0 16px;
                font-size: 16px;
              }
            }

            .select-box {
              display: flex;
              gap: 8px;

              .select {
                background-color: white;
                width: 169px;
                border: 1px solid $inputLine;
                border-radius: 10px;
                padding: 15px 16px;

                display: flex;
                align-items: center;

                cursor: pointer;

                .category-select {
                  width: 100%;
                  display: flex;
                  color: $fontSub;
                  font-weight: $reg;
                }

                img {
                  width: 20px;
                  height: 20px;
                }
              }
            }
          }

          small {
            color: $subColor;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
          }
        }
      }
    }
  }

  .join-input {
    display: flex;
    justify-content: center;
    .input-box {
      display: flex;
      flex-direction: column;
      gap: 30px;

      .box {
        width: 378px;
        .input-title {
          display: flex;
          align-items: baseline;
          gap: 5px;
          font-size: 14px;
          padding-bottom: 8px;
          color: $fontMain;

          div {
            font-size: 11px;
            color: $fontSub;
          }
        }

        input {
          width: 100%;
          height: 50px;
          border-radius: 10px;
          border: 1px solid $inputLine;
          padding-left: 16px;
          box-sizing: border-box;
        }

        input::placeholder {
          font-family: Pretendard;
          font-size: 16px;
          color: $inputLine;
        }

        input:focus {
          border: 1px solid $mainColor;
        }

        .pw-input {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        small {
          color: $subColor;
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
        }
      }

      .phone {
        border-bottom: 1px solid $sectionLine;
        input {
          margin-bottom: 30px;
        }
      }
    }
  }

  .check-submit {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    .box {
      width: 378px;
      .title {
        font-size: 14px;
        padding-bottom: 8px;
        display: flex;
        color: $fontMain;
      }

      .border-box {
        border: 1px solid $inputLine;
        border-radius: 10px;

        .padding-box {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;

          .space {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 13px;
            color: $fontSub;

            a {
              cursor: pointer;
              color: $fontSub;
            }

            .check {
              height: 20px;
              input[type='checkbox'] {
                display: none;
              }
              input[type='checkbox'] + label {
                display: inline-block;
                width: 20px;
                height: 20px;
                box-sizing: border-box;
                border: 1px solid $inputLine;
                border-radius: 3px;
                position: relative;
                cursor: pointer;
              }
              input[id='check1']:checked + label::after,
              input[id='check2']:checked + label::after,
              input[id='check3']:checked + label::after,
              input[id='check4']:checked + label::after {
                content: '';
                background-image: url(../../assets/dashboard/check.png);
                background-repeat: no-repeat;
                background-position: 4px;
                width: 20px;
                height: 20px;
                box-sizing: border-box;
                position: absolute;
                border: 1px solid $mainColor;
                border-radius: 3px;
                top: -1px;
                left: -1px;
                cursor: pointer;
              }
            }
          }
          .all {
            font-size: 15px;
          }

          .gap-box {
            border-top: 1px solid $sectionLine;
            padding-top: 17px;
            display: flex;
            flex-direction: column;
            gap: 14px;
            text-decoration: underline;
          }
        }
      }
      button {
        margin-top: 30px;
        width: 100%;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: $mainColor;
        color: white;
        font-family: Pretendard;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
}

@include mobile {
  section {
    padding: 0 0 50px;
    .nicepick-partner {
      border-bottom: 1px solid $sectionLine;
      justify-content: flex-start;

      width: 100%;
      padding: 15px 24px;
      box-sizing: border-box;

      .none {
        text-decoration: none;

        .title {
          display: flex;
          align-items: center;
          gap: 8px;
          color: $fontMain;

          img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }

    .padding {
      padding: 0 24px;
      .title-search {
        padding-top: 0;
        .box {
          width: 100%;
          .search {
            .border {
              border-top: none;
              padding: 30px 0;
              box-sizing: border-box;
            }
          }
        }
      }

      .join-input {
        .input-box {
          width: 100%;
          .box {
            width: 100%;
            box-sizing: border-box;
          }
        }
      }

      .check-submit {
        .box {
          width: 100%;
          box-sizing: border-box;
          button {
            font-size: 14px;
          }
        }
      }
    }
  }
}

.category-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(25, 25, 25, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .item-wrapper {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px 0;

    .item {
      font-size: 14px;
      color: $fontMain;
      cursor: pointer;

      &:hover {
        color: $mainColor;
      }
    }
  }
}
</style>
