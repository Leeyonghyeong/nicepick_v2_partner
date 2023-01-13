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

        <div v-if="getDevice === 'mobile'" class="title">
          <img src="../../assets/login/arrow_lt.png" alt="이전" />
          <div>파트너 회원가입</div>
        </div>
      </RouterLink>
    </article>

    <article class="title-search">
      <div class="box">
        <div v-if="getDevice !== 'mobile'" class="title">
          프랜차이즈 브랜드 회원가입
        </div>
        <div class="search">
          <div class="border">
            <div class="search-title">사업자 등록번호</div>
            <button @click="showCompanyNumberModal">검색</button>
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
          <input type="email" placeholder="이메일 주소 입력" />
        </div>

        <div class="box">
          <div class="input-title">비밀번호</div>
          <div class="pw-input">
            <input
              type="password"
              placeholder="비밀번호 입력(영문+숫자+특수문자 8~16자)"
            />
            <input type="password" placeholder="비밀번호 확인" />
          </div>
        </div>

        <div class="box">
          <div class="input-title">담당자명</div>
          <input type="text" placeholder="이름 입력" />
        </div>

        <div class="box phone">
          <div class="input-title">휴대폰 번호</div>
          <input type="text" placeholder="‘-’ 제외 숫자만 입력" />
        </div>
      </div>
    </article>

    <article class="check-submit">
      <div class="box">
        <div class="title">약관동의</div>
        <div class="border-box">
          <div class="padding-box">
            <div class="space all">전체 동의<input type="checkbox" /></div>

            <div class="gap-box">
              <div class="space">
                <a
                  href="https://nicepick.notion.site/nicepick/112ba598e8d34c39b6b3ab29d6c9e34a"
                  target="_blank"
                >
                  (필수) 서비스 이용 약관 동의
                </a>
                <input type="checkbox" />
              </div>
              <div class="space">
                <a
                  href="https://nicepick.notion.site/nicepick/b92941c41e6e4986b60a197ac607f1da"
                  target="_blank"
                  >(필수) 개인정보 수집 이용 동의</a
                >
                <input type="checkbox" />
              </div>
              <div class="space">
                <a
                  href="https://nicepick.notion.site/nicepick/e5db5ba7dd064fea86a0a0057d042654"
                  target="_blank"
                  >(선택) 창업 정보 및 이벤트 정보 수신 동의</a
                >
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>

        <button>가입하기</button>
      </div>
    </article>

    <CompanyNumber
      v-if="showModal"
      @showCompanyNumberModal="showCompanyNumberModal"
    />
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'
import CompanyNumber from '../common/modal/CompanyNumber.vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const showModal = ref<boolean>(false)
const showCompanyNumberModal = () => {
  showModal.value = !showModal.value
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

  .title-search {
    padding: 40px 0 30px 0;
    display: flex;
    justify-content: center;
    .box {
      width: 378px;
      display: flex;
      flex-direction: column;
      gap: 30px;

      .title {
        font-weight: $medi;
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

            input {
              // zoom: 1.5;
              cursor: pointer;
            }
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
    padding: 0 0 50px 0;
    .nicepick-partner {
      border-bottom: 1px solid $sectionLine;
      justify-content: flex-start;
      padding-bottom: 15px;

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

    .title-search {
      padding-top: 0;
      .box {
        width: 100%;
        .search {
          .border {
            border-top: none;
            padding: 30px 24px;
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
          padding: 0 24px;
          box-sizing: border-box;
        }
      }
    }

    .check-submit {
      .box {
        width: 100%;
        padding: 0 24px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
