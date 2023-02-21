<template>
  <section>
    <article>
      <div class="top-title">마이메뉴</div>

      <div class="category">
        <div class="category-name select">내 정보관리</div>
        <RouterLink to="/realtor/mymenu/usagehistory" class="none">
          <div class="category-name">이용내역</div>
        </RouterLink>
      </div>

      <div class="gap">
        <div class="content email-reset-pw">
          <div class="width email">
            <div class="title">이메일</div>
            <div class="email-box">changuppick@gmail.com</div>
          </div>
          <div class="width reset-pw">
            <div class="title">
              비밀번호 변경
              <span v-if="resetPw === 'ok'" class="sub">
                *비밀번호 변경 내역이 있습니다.
              </span>
            </div>
            <button
              v-if="resetPw !== 'show'"
              @click="resetPw = 'show'"
              class="reset"
            >
              비밀번호 변경
            </button>

            <div v-if="resetPw === 'show'">
              <div class="reset-input">
                <input
                  type="password"
                  placeholder="새로운 비밀번호(영문+숫자+특수문자 8~16자)"
                />
                <span class="sub">
                  영문+숫자+특수문자 8~16자로 입력해 주세요.
                </span>
                <input type="password" placeholder="새로운 비밀번호 확인" />
                <span class="sub"> 비밀번호가 일치하지 않습니다. </span>
              </div>
              <div class="reset-btn">
                <button @click="resetPw = ''" class="cancel">취소</button>
                <button @click="resetPw = 'ok'" class="check">확인</button>
              </div>
            </div>
          </div>
        </div>

        <div class="content place">
          <div class="title">기본 노출 지역</div>
          <div class="box">서울 강남구 역삼동</div>
        </div>

        <div class="content name-phone">
          <div class="title">담당자명 / 연락처</div>
          <div class="input">
            <input class="width mob" type="text" value="김중개" />
            <input class="width" type="text" value="01012345678" />
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
              <input type="checkbox" id="check2" checked />
              <label for="check2"></label>
              <div class="name">이메일 수신</div>
            </div>
            <div class="check-section">
              <input type="checkbox" id="check3" />
              <label for="check3"></label>
              <div class="name">SMS 수신</div>
            </div>
          </div>
        </div>

        <div class="mob-background">
          <button class="save">저장</button>

          <RouterLink to="/withdrawal" class="none">
            <div class="withdrawal">회원 탈퇴</div>
          </RouterLink>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const resetPw = ref<string>()
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
      input[id='check1']:checked + label::after,
      input[id='check2']:checked + label::after,
      input[id='check3']:checked + label::after,
      input[id='check4']:checked + label::after {
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

    .place {
      .box {
        height: 50px;
        padding-left: 16px;
        display: flex;
        align-items: center;
        background-color: $sectionLine;
        border: 1px solid $iconLine;
        border-radius: 10px;
        color: $fontSub;
      }
    }

    .name-phone {
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
        .mob {
          width: 20%;
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
    font-size: 14px;
    color: $fontSub;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
}

@include tablet {
  article {
    padding: 50px 24px 60px 24px;

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
      }

      .withdrawal {
        width: 100%;
      }
    }
  }
}
</style>
