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

      <RouterLink to="login" class="none">
        <div v-if="getDevice === 'mobile'" class="title">
          <img src="../../assets/login/arrow_lt.png" alt="이전" />
          <div>비밀번호 재설정</div>
        </div>
      </RouterLink>
    </article>

    <article v-if="getDevice !== 'mobile'" class="title-reset-pw">
      <div class="box">
        <div class="title">비밀번호 재설정</div>
      </div>
    </article>

    <article class="reset-input">
      <div class="input-box">
        <div class="box">
          <input
            v-model="password"
            type="password"
            placeholder="새로운 비밀번호(영문+숫자+특수문자 8~16자)"
          />
          <div class="ment" v-if="passwordErrorText">
            {{ passwordErrorText }}
          </div>
          <input
            v-model="rePassword"
            type="password"
            placeholder="새로운 비밀번호"
          />
          <div class="ment" v-if="rePasswordErrorText">
            {{ rePasswordErrorText }}
          </div>
        </div>

        <div class="submit">
          <button @click="submit">확인</button>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../store/user'
import { onMounted, ref } from 'vue'
import { confirmAlert, toastAlert } from '../../functions/alert'
import api from '../../config/axios.config'
import { CommonResponse } from '../../types/response'

const router = useRouter()

const windowStore = useWindowStore()
const userStore = useUserStore()
const { getDevice } = storeToRefs(windowStore)
const { tempEmail } = storeToRefs(userStore)

const password = ref<string>()
const rePassword = ref<string>()

const passwordErrorText = ref<string>()
const rePasswordErrorText = ref<string>()

const checkPassword = (): boolean => {
  passwordErrorText.value = undefined
  rePasswordErrorText.value = undefined

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

const submit = async () => {
  if (!checkPassword()) {
    return
  }

  const { data } = await api.patch<CommonResponse>('/auth/find/password', {
    email: tempEmail.value,
    password: password.value,
    rePassword: rePassword.value,
  })

  if (data.success) {
    toastAlert({
      text: '비밀번호가 변경 되었습니다',
      type: 'success',
    })

    tempEmail.value = undefined

    router.replace('/resetcomplete')
  } else {
    toastAlert({
      text: '비밀번호 변경에 실패했습니다',
      type: 'warning',
    })

    router.replace('/')
  }
}

onMounted(async () => {
  if (!tempEmail.value) {
    const alert = await confirmAlert({
      text: '잘못된 접근입니다',
    })

    if (alert.isConfirmed) {
      router.push('/')
    }
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

  .title-reset-pw {
    padding: 40px 0 30px 0;
    display: flex;
    justify-content: center;
    .box {
      width: 378px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      border-bottom: 1px solid $sectionLine;
      padding-bottom: 21px;

      .title {
        font-weight: $medi;
        color: $fontMain;
      }
    }
  }

  .reset-input {
    display: flex;
    justify-content: center;
    .input-box {
      display: flex;
      flex-direction: column;
      gap: 30px;

      .box {
        width: 378px;
        display: flex;
        flex-direction: column;
        gap: 8px;

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

        .ment {
          text-align: left;
          font-size: 12px;
          color: $subColor;
        }
      }

      .submit {
        button {
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
}

@include mobile {
  section {
    padding: 0 0 50px 0;
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

    .reset-input {
      padding-top: 30px;
      .input-box {
        width: 100%;
        .box {
          width: 100%;
          padding: 0 24px;
          box-sizing: border-box;
        }

        .submit {
          padding: 0 24px;

          button {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
