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
          <div>비밀번호 찾기</div>
        </div>
      </RouterLink>
    </article>

    <article v-if="getDevice !== 'mobile'" class="title-find-pw">
      <div class="box">
        <div class="title">비밀번호 찾기</div>
      </div>
    </article>

    <article class="find-input">
      <div class="input-box">
        <div class="box">
          <div class="input-title">
            이메일
            <div>(아이디 사용)</div>
          </div>
          <input v-model="email" type="email" placeholder="이메일 주소 입력" />
          <button class="receive" @click="checkEmail">인증번호 전송</button>
        </div>

        <div class="box">
          <div class="input-title">인증번호</div>
          <div class="pw-input">
            <input
              v-model="certificationNumber"
              type="text"
              placeholder="인증번호 입력"
            />
          </div>
          <button class="submit" @click="checkCertificationNumber">확인</button>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import api from '../../config/axios.config'
import { CommonResponse } from '../../types/response'
import { toastAlert } from '../../functions/alert'
import { useUserStore } from '../../store/user'
import { useRouter } from 'vue-router'

const router = useRouter()

const windowStore = useWindowStore()
const userStore = useUserStore()
const { getDevice } = storeToRefs(windowStore)
const { tempEmail } = storeToRefs(userStore)

const email = ref<string>()
const certificationNumber = ref<string>()

const checkEmail = async () => {
  if (!email.value) {
    toastAlert({ text: '이메일을 입력해 주세요', type: 'warning', timer: 3000 })
    return
  }

  const { data } = await api.get<CommonResponse>(`/auth/user/${email.value}`)

  if (data.success) {
    toastAlert({
      text: '이메일이 존재하지 않습니다',
      type: 'warning',
    })
  } else if (data.errorMessage.includes('가입되어')) {
    toastAlert({
      text: '소셜 계정은 비밀번호 찾기가 불가능합니다',
      type: 'warning',
    })
  } else if (data.errorMessage.includes('사용중인')) {
    toastAlert({
      text: '해당 이메일로 인증번호를 전송중입니다',
      type: 'success',
      timer: 5000,
    })
    sendEmail()
  }
}

const sendEmail = async () => {
  const result = await api.get(
    `/auth/send/email?email=${email.value}&type=FINDPW`
  )

  if (result.data.success) {
    toastAlert({
      text: '인증번호가 이메일로 전송되었습니다',
      type: 'success',
    })
  } else {
    toastAlert({ text: result.data.errorMessage, type: 'warning' })
  }
}

const checkCertificationNumber = async () => {
  const { data } = await api.get<CommonResponse>(
    `/auth/verify/number?cerNum=${certificationNumber.value}&email=${email.value}&type=FINDPW`
  )

  if (data.success) {
    tempEmail.value = email.value
    router.replace(`/resetpw`)
  } else {
    toastAlert({
      text: '인증 번호가 올바르지 않습니다',
    })
  }
}
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

  .title-find-pw {
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

  .find-input {
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
        .input-title {
          display: flex;
          align-items: baseline;
          gap: 5px;
          font-size: 14px;
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

        button {
          width: 100%;
          height: 50px;
          border-radius: 10px;
          border: none;
          color: white;
          font-family: Pretendard;
          font-size: 16px;
          cursor: pointer;
        }

        .receive {
          background-color: $fontMain;
        }

        .submit {
          background-color: $mainColor;
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

    .find-input {
      padding-top: 30px;
      .input-box {
        width: 100%;
        .box {
          width: 100%;
          padding: 0 24px;
          box-sizing: border-box;

          button {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
