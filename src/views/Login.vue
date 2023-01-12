<template>
  <article>
    <section id="logo">
      <RouterLink to="/" class="none">
        <div v-if="getDevice !== 'mobile'" class="title">
          <img class="logo" src="../assets/header/logo.png" alt="로고" />
          <img
            class="partner"
            src="../assets/header/partner.png"
            alt="파트너"
          />
        </div>

        <div v-if="getDevice === 'mobile'" class="title">
          <img src="../assets/login/arrow_lt.png" alt="이전" />
          <div>로그인</div>
        </div>
      </RouterLink>
    </section>

    <section id="login-section">
      <div class="left">
        <div class="login">
          <div class="select">
            <div>
              <input type="radio" name="select" id="f" checked />
              <label for="f">프랜차이즈</label>
            </div>
            <div>
              <input type="radio" name="select" id="r" />
              <label for="r">공인중개사</label>
            </div>
          </div>

          <div class="login-box">
            <div class="login-input">
              <div class="id-pw">
                <div class="id">
                  <input type="email" placeholder="이메일" />
                </div>
                <div class="pw">
                  <input type="password" placeholder="비밀번호" />
                </div>

                <div class="login-btn">
                  <button>로그인</button>
                </div>
              </div>
            </div>
          </div>

          <div class="find-pw">비밀번호 찾기</div>
        </div>
      </div>
    </section>

    <section id="join-section">
      <div class="box">
        <div class="join">
          <div>
            아직 창업픽 파트너가 아니신가요?
            <router-link to="join">
              <span>회원가입</span>
            </router-link>
          </div>
        </div>

        <img src="../assets/login/banner.png" alt="배너" />

        <div class="copy">
          Copyright &copy; nicepick.co.kr. All rights reserved
        </div>
      </div>
    </section>
  </article>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding-top: 100px;
  text-align: center;

  #logo {
    display: flex;
    justify-content: center;
    padding-bottom: 80px;
    .title {
      display: flex;
      align-items: flex-start;
      gap: 7.57px;

      .logo {
        width: 160.5px;
        height: 38px;
      }

      .partner {
        width: 87.16px;
        height: 25.7px;
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

          input,
          label {
            cursor: pointer;
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
                height: 44px;
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

              .id {
                input {
                  background-image: url(../assets/login/id.png);
                }
                input:focus {
                  border: 1px solid $mainColor;
                  background-image: url(../assets/login/id_2.png);
                }
              }
              .pw {
                input {
                  background-image: url(../assets/login/pw.png);
                }
                input:focus {
                  border: 1px solid $mainColor;
                  background-image: url(../assets/login/pw_2.png);
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
        padding: 20px 0 59px 0;
        font-size: 14px;

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
