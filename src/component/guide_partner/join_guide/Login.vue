<template>
  <section>
    <article>
      <div class="top">
        <div v-if="getDevice !== 'mobile'" class="top-title">
          회원가입/로그인
        </div>
        <div class="top-sub">
          창업픽 파트너 회원으로 가입하시고 보다 효율적인 광고 효과를 경험해
          보세요.
        </div>
      </div>

      <div class="content">
        <div class="box">
          <div class="name">1. 회원가입</div>
          <div class="sub">
            창업픽 파트너 로그인 화면에서 회원가입을 클릭하여 이동합니다.
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/join/login/pc1.png"
            alt="1"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/join/login/tab1.png"
            alt="tab1"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/join/login/mob1.png"
            alt="mob1"
          />
        </div>
        <div class="box">
          <div class="name">2. 파트너 선택</div>
          <div class="sub">
            프랜차이즈 브랜드, 공인중개사, 협력 파트너 중 해당되는 회원가입을
            선택합니다.
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/join/login/pc2.png"
            alt="pc2"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/join/login/tab2.png"
            alt="tab2"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/join/login/mob2.png"
            alt="mob2"
          />
        </div>
        <div class="box">
          <div class="name">3. 정보입력</div>
          <div class="sub">
            파트너 회원가입에 필요한 정보(아이디로 사용될 이메일, 비밀번호,
            등록증, 등록번호, 전화번호, 담당자 등)를 입력합니다.
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/join/login/pc3.png"
            alt="pc3"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/join/login/tab3.png"
            alt="tab3"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/join/login/mob3.png"
            alt="mob3"
          />
        </div>
        <div class="box">
          <div class="name">4. 가입완료</div>
          <div class="sub">
            회원가입이 완료되면 가입하신 이메일(아이디)로 자동 로그인이 됩니다.
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/join/login/pc4.png"
            alt="pc4"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/join/login/tab4.png"
            alt="tab4"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/join/login/mob4.png"
            alt="mob4"
          />
        </div>
        <div class="box">
          <div class="name">5. 로그인</div>
          <div class="sub">
            회원 구분을 선택하고 회원가입시 작성한 이메일(아이디)와 비밀번호를
            입력합니다.
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/join/login/pc5.png"
            alt="pc5"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/join/login/tab5.png"
            alt="tab5"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/join/login/mob5.png"
            alt="mob5"
          />
        </div>
        <div class="box">
          <div class="name">6. 비밀번호 찾기/변경</div>
          <div class="sub">
            비밀번호를 잃어버렸을 시 로그인 버튼 아래 [비밀번호 찾기]를
            클릭하세요.
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/join/login/pc6.png"
            alt="pc6"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/join/login/tab6.png"
            alt="tab6"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/join/login/mob6.png"
            alt="mob6"
          />
        </div>
        <div class="box">
          <div class="name-sub">6-1. 비밀번호 찾기 (인증번호)</div>
          <div class="sub">
            비밀번호 찾기 화면에서 가입시 작성했던 이메일을 입력하고 메일로
            인증번호를 확인 후 비밀번호를 재설정 할 수 있습니다.
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/join/login/pc7.png"
            alt="pc7"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/join/login/tab7.png"
            alt="tab7"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/join/login/mob7.png"
            alt="mob7"
          />
        </div>
        <div class="box">
          <div class="name-sub">6-2. 비밀번호 찾기 (재설정)</div>
          <div class="sub">
            영문+숫자+특수문자 8~16자로 비밀번호 재설정을 하면 변경 완료됩니다.
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/join/login/pc8.png"
            alt="pc8"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/join/login/tab8.png"
            alt="tab8"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/join/login/mob8.png"
            alt="mob"
          />
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';
article {
  padding: 51px 0 80px 51px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  .top {
    color: $fontMain;
    .top-title {
      padding-bottom: 19px;
      font-size: 24px;
      font-weight: $semi;
    }
    .top-sub {
      height: 40px;
      font-size: 15px;
      background-color: #fafafa;
      border-radius: 10px;
      display: flex;
      align-items: center;
      padding-left: 16px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 80px;
    .box {
      width: 814px;
      .name {
        font-size: 20px;
        font-weight: $medi;
        color: $fontMain;
      }
      .name-sub {
        font-size: 18px;
        font-weight: normal;
        color: $fontMain;
      }
      .sub {
        padding-top: 20px;
        font-size: 16px;
        color: $fontSub;
        line-height: 24px;
      }
      img {
        padding: 50px 41px 0;
        box-sizing: border-box;
        width: 100%;
      }
    }
  }
}

@include tablet {
  article {
    padding: 50px 44px 60px;

    .content {
      .box {
        width: 100%;
        img {
          padding: 50px 0 0 41px;
        }
      }
    }
  }
}

@include mobile {
  article {
    padding: 30px 23px 24px;
    gap: 0;
    .top {
      .top-sub {
        height: auto;
        padding: 16px;
        font-size: 14px;
        line-height: 24px;
      }
    }

    .content {
      padding-top: 50px;
      .box {
        width: 100%;
        .name,
        .name-sub {
          font-size: 16px;
        }
        .sub {
          padding-top: 10px;
          font-size: 14px;
        }
        img {
          padding: 30px 0 0;
        }
      }
    }
  }
}
</style>
