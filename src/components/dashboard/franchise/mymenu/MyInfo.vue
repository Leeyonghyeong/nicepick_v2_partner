<template>
  <section>
    <article>
      <div class="top-title">마이메뉴</div>

      <div class="category">
        <div class="category-name select">내 정보관리</div>
        <RouterLink to="usagehistory" class="none">
          <div class="category-name">이용내역</div>
        </RouterLink>
        <RouterLink v-if="currentBrand?.isPremium" to="addkeyword" class="none">
          <div class="category-name">대표키워드</div>
        </RouterLink>
      </div>

      <div class="gap">
        <div class="content email-reset-pw">
          <div class="width email">
            <div class="title">이메일</div>
            <div class="email-box">{{ user?.email }}</div>
          </div>
          <div class="width reset-pw">
            <div class="title">
              비밀번호 변경
              <span
                v-if="password && rePassword && password === rePassword"
                class="sub"
              >
                *비밀번호 변경 내역이 있습니다.
              </span>
            </div>
            <button
              v-if="!isChangePassword"
              @click="isChangePassword = true"
              class="reset"
            >
              비밀번호 변경
            </button>

            <div v-if="isChangePassword">
              <div class="reset-input">
                <input
                  v-model="password"
                  type="password"
                  placeholder="새로운 비밀번호(영문+숫자+특수문자 8~16자)"
                />
                <span v-if="passwordErrorText" class="sub">
                  {{ passwordErrorText }}
                </span>
                <input
                  v-model="rePassword"
                  type="password"
                  placeholder="새로운 비밀번호 확인"
                />
                <span v-if="rePasswordErrorText" class="sub">{{
                  rePasswordErrorText
                }}</span>
              </div>
              <div class="reset-btn">
                <button @click="cancelChangePassword" class="cancel">
                  취소
                </button>
                <button @click="checkPassword" class="check">확인</button>
              </div>
            </div>
          </div>
        </div>

        <div class="content name-phone">
          <div class="default-user">
            <div class="title">[기본] 담당자명 / 연락처</div>
            <div class="input">
              <input
                v-model="userName"
                class="width mob"
                type="text"
                placeholder="담당자 명"
              />
              <input
                v-model="phoneNumber"
                class="width"
                type="text"
                placeholder="연락처"
              />
            </div>
            <div class="check-section">
              <input v-model="isAlarm" type="checkbox" id="isAlarm" />
              <label for="isAlarm"></label>
              <div class="name">알림톡 수신</div>
            </div>
          </div>

          <div class="manager" v-for="(item, index) in manager" :key="index">
            <div class="title">[{{ index + 2 }}] 담당자명 / 연락처</div>
            <div class="input">
              <input
                v-model="item.userName"
                class="width mob"
                type="text"
                placeholder="담당자 명"
              />
              <input
                v-model="item.phoneNumber"
                class="width"
                type="text"
                placeholder="연락처"
              />
              <img
                src="../../../../assets/dashboard/brand/delete.png"
                class="delete-manager"
                alt="delete"
                @click="deleteManager(item.id, item.userName, index)"
              />
            </div>
            <div class="check-section">
              <input
                v-model="item.isAlarm"
                type="checkbox"
                :id="`managerAlarm${index}`"
              />
              <label :for="`managerAlarm${index}`"></label>
              <div class="name">알림톡 수신</div>
            </div>
          </div>

          <div class="add">
            <button @click="addUserButtonHandler">
              <img src="../../../../assets/dashboard/add.png" alt="추가" />
              담당자 추가
            </button>
          </div>
        </div>

        <div class="content check-box">
          <div class="title-section">
            <div class="title">마케팅 정보 수신 동의(선택)</div>
            <div class="sub">
              수신 동의 시 이벤트 및 각종 행사 등의 정보를 알려드립니다.
            </div>
          </div>
          <div class="flex">
            <div class="check-section">
              <input v-model="isEmail" type="checkbox" id="email" checked />
              <label for="email"></label>
              <div class="name">이메일 수신</div>
            </div>
            <div class="check-section">
              <input v-model="isSMS" type="checkbox" id="isSMS" />
              <label for="isSMS"></label>
              <div class="name">SMS 수신</div>
            </div>
          </div>
        </div>

        <div class="mob-background">
          <button class="save" @click="submit">저장</button>

          <RouterLink to="/withdrawal" class="none">
            <div class="withdrawal">회원 탈퇴</div>
          </RouterLink>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { confirmAlert, toastAlert } from '../../../../functions/alert'
import { useUserStore } from '../../../../store/user'
import { Manager } from '../../../../types/user'
import {
  CommonResponse,
  AuthResponse,
  ManagerResponse,
} from '../../../../types/response'
import api from '../../../../config/axios.config'

const userStore = useUserStore()
const { user, currentBrand } = storeToRefs(userStore)

const password = ref<string>()
const rePassword = ref<string>()
const passwordErrorText = ref<string>()
const rePasswordErrorText = ref<string>()

const userName = ref<string>()
const phoneNumber = ref<string>()
const isAlarm = ref<boolean>(false)
const isEmail = ref<boolean>(false)
const isSMS = ref<boolean>(false)

const manager = ref<Manager[]>([])

const isChangePassword = ref<boolean>(false)

const cancelChangePassword = () => {
  isChangePassword.value = false

  password.value = undefined
  rePassword.value = undefined
}

const checkPassword = () => {
  if (!password.value) {
    passwordErrorText.value = '비밀번호를 입력해주세요'
    return
  } else {
    const regPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~$@$!%^*#?&()<>_=+])[A-Za-z\d~$@$!%^*#?&()<>_=+]{8,16}$/

    if (!regPassword.test(password.value)) {
      passwordErrorText.value = '영문+숫자+특수문자 8~16자로 입력해 주세요'
      return
    }
  }

  passwordErrorText.value = undefined

  if (!rePassword.value) {
    rePasswordErrorText.value = '비밀번호를 입력해주세요'
    return
  } else if (password.value !== rePassword.value) {
    rePasswordErrorText.value = '비밀번호가 일치하지 않습니다'
    return
  }

  rePasswordErrorText.value = undefined

  isChangePassword.value = false
}

const getManager = async () => {
  if (user.value) {
    const { data } = await api.get<ManagerResponse>(`/manager/${user.value.id}`)

    if (data.success) {
      manager.value = data.manager
    }
  }
}

const addUserButtonHandler = () => {
  if (user.value) {
    if (manager.value.length < 4) {
      manager.value.push({
        userId: user.value.id,
        userName: '',
        phoneNumber: '',
        isAlarm: true,
      })
    } else {
      toastAlert({
        text: '담당자는 5명까지 추가 가능합니다',
        type: 'warning',
      })
    }
  }
}

const deleteManager = async (
  id: string | undefined,
  userName: string,
  index: number
) => {
  if (id) {
    const alert = await confirmAlert({
      title: '담당자 삭제',
      text: `정말로 ${userName} 담당자를 삭제하시겠습니까?`,
      isCancelButton: true,
    })

    if (alert.isConfirmed) {
      const { data } = await api.delete<CommonResponse>('/manager', {
        data: {
          id,
        },
      })

      if (data.success) {
        toastAlert({
          text: `${userName} 담당자가 삭제되었습니다`,
          type: 'success',
          position: 'top',
        })

        manager.value.splice(index, 1)
      }
    }
  } else {
    manager.value.splice(index, 1)
  }
}

const checkUserName = (userName: string): boolean => {
  if (!userName) {
    toastAlert({
      text: '담당자 명을 입력해 주세요',
      type: 'warning',
    })
    return false
  } else if (userName.length < 2 || userName.length > 10) {
    toastAlert({
      text: '2~10자 이내로 작성해 주세요',
      type: 'warning',
    })
    return false
  }

  return true
}

const checkPhoneNumber = (phoneNumber: string): boolean => {
  if (!phoneNumber) {
    toastAlert({
      text: '전화번호를 입력해 주세요',
      type: 'warning',
    })
    return false
  } else {
    const regPhone = /^01([0|1|6|7|8|9]{1})([0-9]{3,4})([0-9]{4})$/

    if (!regPhone.test(phoneNumber)) {
      toastAlert({
        text: '전화번호가 형식에 맞지 않습니다',
        type: 'warning',
      })
      return false
    }
  }

  return true
}

const submit = async () => {
  if (user.value) {
    if (!checkUserName(userName.value ? userName.value : '')) return
    if (!checkPhoneNumber(phoneNumber.value ? phoneNumber.value : '')) return

    if (manager.value.length > 0) {
      for (const item of manager.value) {
        if (!checkUserName(item.userName)) return
        if (!checkPhoneNumber(item.phoneNumber)) return
      }
    }

    const payload = {
      id: user.value.id,
      userName: userName.value,
      password: password.value,
      rePassword: rePassword.value,
      isEmail: isEmail.value,
      isSMS: isSMS.value,
      isAlarm: isAlarm.value,
    }

    const { data: changeUserInfo } = await api.patch<AuthResponse>(
      '/auth/user',
      payload
    )

    if (changeUserInfo.success) {
      if (manager.value.length > 0) {
        const { data: managerInfo } = await api.post<CommonResponse>(
          '/manager',
          manager.value
        )

        if (!managerInfo.success) {
          toastAlert({
            text: '담당자 정보 변경에 실패했습니다',
            type: 'warning',
            position: 'top',
          })
        } else {
          await getManager()
        }
      }

      toastAlert({
        text: '정보가 수정되었습니다',
        type: 'success',
        position: 'top',
      })

      user.value = changeUserInfo.user
    }
  }
}

if (user.value) {
  userName.value = user.value.userName
  phoneNumber.value = user.value.phoneNumber
  isAlarm.value = user.value.isAlarm
  isEmail.value = user.value.isEmail
  isSMS.value = user.value.isSMS
  getManager()
}
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 0 76px 160px;
  box-sizing: border-box;
  width: 100%;

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

  .gap {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .content {
      width: 1270px;
      padding: 30px;
      box-sizing: border-box;
      background-color: white;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      color: $fontMain;
      .title {
        padding-bottom: 10px;
      }
      .width {
        width: 100%;
      }
      .check-section {
        padding-top: 16px;
        display: flex;
        align-items: center;
        gap: 6px;
        .name {
          font-size: 14px;
        }
      }
      input[type='checkbox'] {
        display: none;
      }
      input[type='checkbox'] + label {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 1px solid $inputLine;
        border-radius: 3px;
        position: relative;
        cursor: pointer;
      }
      input[type='checkbox']:checked + label::after {
        content: '';
        background-image: url(../../../../assets/dashboard/check.png);
        background-repeat: no-repeat;
        background-position: 5px;
        width: 20px;
        height: 20px;
        position: absolute;
        border: 1px solid $mainColor;
        border-radius: 3px;
        top: -1px;
        left: -1px;
        cursor: pointer;
      }
    }

    .email-reset-pw {
      display: flex;
      gap: 30px;
      .email-box {
        height: 50px;
        padding-left: 16px;
        display: flex;
        align-items: center;
        background-color: $sectionLine;
        border: 1px solid $iconLine;
        border-radius: 10px;
        color: $inputLine;
      }
      .sub {
        padding-left: 6px;
        font-size: 12px;
        color: $subColor;
      }
      .reset {
        width: 100%;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: $fontMain;
        color: white;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: $reg;
        cursor: pointer;
      }
      .reset-input {
        display: flex;
        flex-direction: column;
        gap: 8px;
        input {
          height: 50px;
          border-radius: 10px;
          border: 1px solid $iconLine;
          padding-left: 15px;
          box-sizing: border-box;
          font-family: $pre;
          font-size: 16px;
        }
        input::placeholder {
          color: $inputLine;
        }
        input:focus {
          border: 1px solid $mainColor;
        }
      }
      .reset-btn {
        padding-top: 8px;
        display: flex;
        gap: 30px;
        button {
          width: 100%;
          height: 50px;
          border-radius: 10px;
          font-family: $pre;
          font-size: 16px;
          cursor: pointer;
        }
        .cancel {
          background-color: white;
          border: 1px solid $fontMain;
          box-sizing: border-box;
          color: $fontMain;
        }
        .check {
          background-color: $fontMain;
          color: white;
        }
      }
    }

    .name-phone {
      display: flex;
      flex-direction: column;
      gap: 30px 0;
      .input {
        display: flex;
        gap: 10px;
        input {
          height: 50px;
          padding-left: 16px;
          border-radius: 10px;
          border: 1px solid $iconLine;
          font-family: Pretendard;
          font-size: 16px;
          color: $fontMain;
        }
        input:focus {
          border: 1px solid $mainColor;
        }
        .mob {
          width: 20%;
        }
      }

      .manager {
        padding-top: 30px;
        border-top: 1px solid #ebebeb;

        .input {
          display: flex;
          align-items: center;
        }

        .delete-manager {
          width: 24px;
          height: 24px;
          cursor: pointer;
        }
      }
      .add {
        width: 100%;
        display: flex;
        justify-content: center;
        button {
          width: 109px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          background-color: #fafafa;
          border-radius: 50px;
          border: none;
          color: $mainColor;
          font-size: 14px;
          font-family: Pretendard;
          cursor: pointer;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }

    .check-box {
      .title-section {
        .sub {
          font-size: 14px;
          color: $fontSub;
        }
      }
      .flex {
        padding-top: 30px;
        display: flex;
        gap: 60px;
      }
    }
  }

  .save {
    width: 1270px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: $mainColor;
    color: white;
    font-size: 16px;
    font-family: Pretendard;
    font-weight: $reg;
    cursor: pointer;
  }

  .withdrawal {
    width: 1270px;
    padding-top: 30px;
    font-size: 13px;
    color: $fontSub;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
}

@include tablet {
  article {
    padding: 50px 24px 60px;

    .gap {
      .content {
        width: 100%;
      }

      .email-reset-pw {
        flex-direction: column;
      }

      .name-phone {
        .input {
          gap: 10px;
          .mob {
            width: 50%;
          }
        }
      }

      .check-box {
        padding: 30px 30px 50px;
      }
    }

    .save {
      width: 100%;
    }

    .withdrawal {
      width: 100%;
    }
  }
}

@include mobile {
  article {
    padding: 0 0 58px 0;

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

    .gap {
      padding: 0;
      gap: 10px;
      .content {
        width: 100%;
        padding: 30px 24px;
        border-radius: 0;
        box-shadow: none;
        .title {
          padding-bottom: 8px;
          font-size: 14px;
        }
        .reset {
          font-size: 14px;
        }
      }

      .email-reset-pw {
        flex-direction: column;
        button {
          font-size: 14px;
        }
      }

      .name-phone {
        .input {
          gap: 10px;
          .mob {
            width: 55%;
          }
        }
      }

      .check-box {
        .title-section {
          .sub {
            font-size: 12px;
          }
        }
      }
    }

    .mob-background {
      padding: 30px 24px;
      background-color: white;
      .save {
        width: 100%;
        font-size: 14px;
      }

      .withdrawal {
        width: 100%;
        font-size: 12px;
      }
    }
  }
}
</style>
