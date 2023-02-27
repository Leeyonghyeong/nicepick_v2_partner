<template>
  <article>
    <section id="logo">
      <RouterLink to="/" class="none">
        <div v-if="getDevice !== 'mobile'" class="title">
          <img class="logo" src="../../assets/header/logo_2.png" alt="로고" />
        </div>

        <div v-if="getDevice === 'mobile'" class="title">
          <img src="../../assets/login/arrow_lt.png" alt="이전" />
          <div>로그인</div>
        </div>
      </RouterLink>
    </section>

    <section id="login-section">
      <div class="left">
        <div class="login">
          <div class="select">
            <label class="title">
              <input
                v-model="partnerType"
                type="radio"
                name="category"
                id="realtor"
                :value="0"
                checked
              />
              <div class="name">프랜차이즈</div>
            </label>
            <label class="main">
              <input
                v-model="partnerType"
                type="radio"
                name="category"
                id="realtor"
                :value="1"
              />
              <div class="name">공인중개사</div>
            </label>
          </div>

          <div class="login-box">
            <div class="login-input">
              <div class="id-pw">
                <div class="id">
                  <input v-model="email" type="email" placeholder="이메일" />
                  <small v-if="emailErrorText">{{ emailErrorText }}</small>
                </div>
                <div class="pw">
                  <input
                    v-model="password"
                    type="password"
                    placeholder="비밀번호"
                  />
                  <small v-if="passwordErrorText">{{
                    passwordErrorText
                  }}</small>
                </div>

                <div class="login-btn">
                  <button @click="submit">로그인</button>
                </div>
              </div>
            </div>
          </div>

          <RouterLink to="findpw" class="none">
            <div class="find-pw">비밀번호 찾기</div>
          </RouterLink>
        </div>
      </div>
    </section>

    <section id="join-section">
      <div class="box">
        <div class="join">
          <div>
            아직 창업픽 파트너가 아니신가요?
            <RouterLink to="join">
              <span>회원가입</span>
            </RouterLink>
          </div>
        </div>

        <img src="../../assets/login/banner.png" alt="배너" />

        <div class="copy">
          Copyright &copy; nicepick.co.kr. All rights reserved
        </div>
      </div>
    </section>
  </article>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../store/window'
import { useUserStore } from '../../store/user'
import { storeToRefs } from 'pinia'
import api from '../../config/axios.config'
import { ref } from 'vue'
import { AuthResponse } from '../../types/response'
import { useRouter } from 'vue-router'

const router = useRouter()

const windowStore = useWindowStore()
const userStore = useUserStore()
const { getDevice } = storeToRefs(windowStore)
const { user, brandId } = storeToRefs(userStore)

const partnerType = ref<number>(0) // 0: 프랜차이즈, 1: 공인중개사

const email = ref<string>()
const password = ref<string>()
const emailErrorText = ref<string>()
const passwordErrorText = ref<string>()

const submit = async () => {
  if (!email.value) {
    emailErrorText.value = '이메일을 입력해 주세요.'
    return
  }

  if (!password.value) {
    password.value = '비밀번호를 입력해 주세요.'
    return
  }

  if (partnerType.value === 0) {
    const { data } = await api.post<AuthResponse>('/auth/signin', {
      email: email.value,
      password: password.value,
      role: 'COMPANY',
    })

    if (data.success) {
      const accessToken: string = data.accessToken
      localStorage.setItem('accessToken', accessToken)

      user.value = data.user
      brandId.value = data.brandId

      router.replace('/franchise/dashboard')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding-top: 100px;
  text-align: center;

  .none {
    text-decoration: none;
  }

  #logo {
    display: flex;
    justify-content: center;
    padding-bottom: 80px;
    .title {
      display: flex;
      align-items: flex-start;
      gap: 7.57px;

      .logo {
        width: 252px;
        height: 38px;
      }
    }
  }

  #login-section {
    .left {
      display: flex;
      justify-content: center;
      .login {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .select {
          display: flex;
          gap: 20px;
          label {
            display: flex;
            align-items: center;
            gap: 4px;
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
              background-image: url(../../assets/dashboard/checked.png);
              background-repeat: no-repeat;
              background-size: 8px;
              background-position: center;
            }
            .name {
              font-size: 14px;
              color: $fontMain;
            }
          }
        }

        .login-box {
          .login-input {
            .id-pw {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 8px;

              img {
                width: 20px;
                height: 20px;
                padding-right: 8px;
              }

              input {
                width: 378px;
                height: 50px;
                border: 1px solid $inputLine;
                border-radius: 10px;
                box-sizing: border-box;
                padding-left: 44px;

                background-repeat: no-repeat;
                background-size: 20px;
                background-position: 16px;
              }

              input::placeholder {
                font-family: Pretendard;
                font-size: 16px;
                color: $inputLine;
              }

              .id,
              .pw {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 8px 0;

                small {
                  color: $subColor;
                  font-weight: 400;
                  font-size: 12px;
                  line-height: 14px;
                }
              }

              .id {
                input {
                  background-image: url(../../assets/login/id.png);
                }
                input:focus {
                  border: 1px solid $mainColor;
                  background-image: url(../../assets/login/id_2.png);
                }
              }
              .pw {
                input {
                  background-image: url(../../assets/login/pw.png);
                }
                input:focus {
                  border: 1px solid $mainColor;
                  background-image: url(../../assets/login/pw_2.png);
                }
              }
            }
          }
          .login-btn {
            button {
              width: 378px;
              height: 50px;
              border-radius: 10px;
              border: none;
              background-color: $mainColor;
              color: white;
              font-size: 16px;
              font-family: Pretendard;
              cursor: pointer;
            }
          }
        }

        .find-pw {
          font-size: 11px;
          color: #707070;
          cursor: pointer;
        }
      }
    }
  }

  #join-section {
    padding-top: 50px;
    display: flex;
    justify-content: center;
    .box {
      width: 378px;
      display: flex;
      flex-direction: column;
      border-top: 1px solid $sectionLine;

      .join {
        padding: 20px 0 50px;
        font-size: 14px;
        color: $fontMain;

        span {
          padding-left: 10px;
          color: $subColor;
          text-decoration: underline;
          cursor: pointer;
        }
      }

      .copy {
        font-size: 12px;
        color: $inputLine;
        padding-top: 30px;
      }
    }
  }
}

@include mobile {
  article {
    padding-top: 15px;
    width: 100%;
    box-sizing: border-box;

    #logo {
      border-bottom: 1px solid $sectionLine;
      justify-content: flex-start;
      padding-bottom: 15px;

      .none {
        text-decoration: none;

        .title {
          @include mobile-container();
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

    #login-section {
      padding-top: 30px;
      .left {
        .login {
          @include mobile-container();
          width: 100%;

          .login-box {
            .login-input {
              .id-pw {
                .id,
                .pw {
                  width: 100%;
                  input {
                    width: 100%;
                  }
                }
                .login-btn {
                  width: 100%;
                  button {
                    width: 100%;
                    font-size: 14px;
                  }
                }
              }
            }
          }
        }
      }
    }

    #join-section {
      padding: 50px 24px 0 24px;
      .box {
        width: 100%;

        .join {
          font-size: 13px;
        }

        img {
          width: 100%;
        }

        .copy {
          font-size: 11px;
        }
      }
    }
  }
}
</style>
