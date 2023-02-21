<template>
  <section>
    <article>
      <div class="top">
        <div v-if="getDevice !== 'mobile'" class="top-title">
          프랜차이즈 파트너 회원가입 절차
        </div>
        <div class="top-sub">
          프랜차이즈 파트너 회원가입하고 내 브랜드를 소개하고 광고 효과를
          경험하세요!
        </div>
      </div>

      <div class="content">
        <div class="box">
          <div class="name">1. 회원가입</div>
          <div class="sub">
            파트너 회원가입 화면에서 프랜차이즈 브랜드를 클릭합니다.
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/join/franchise_join/pc1.png"
            alt="1"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/join/franchise_join/tab1.png"
            alt="tab1"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/join/franchise_join/mob1.png"
            alt="mob1"
          />
        </div>
        <div class="box">
          <div class="name">2. 정보 입력</div>
          <div class="sub">
            가입 양식에 맞게 프랜차이즈 브랜드 정보(담당자, 전화번호, 이메일,
            비밀번호, 등록증, 등록번호 등)를 입력합니다.
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/join/franchise_join/pc2.png"
            alt="pc2"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/join/franchise_join/tab2.png"
            alt="tab2"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/join/franchise_join/mob2.png"
            alt="mob2"
          />
        </div>
        <div class="box">
          <div class="name-sub">2-1. 사업자등록번호 검색</div>
          <div class="sub">
            사업자등록번호 검색 버튼을 누르고 사업자등록번호를 검색하세요.
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/join/franchise_join/pc3.png"
            alt="pc3"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/join/franchise_join/tab3.png"
            alt="tab3"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/join/franchise_join/mob3.png"
            alt="mob3"
          />
        </div>
        <div class="box">
          <div class="name-sub">2-2. 사업자등록번호 검색</div>
          <div class="sub">
            검색한 본사브랜드를 다중 선택하여 한 번에 가입할 수 있습니다.
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/join/franchise_join/pc4.png"
            alt="pc4"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/join/franchise_join/tab4.png"
            alt="tab4"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/join/franchise_join/mob4.png"
            alt="mob4"
          />
        </div>
        <div class="box">
          <div class="name-sub">2-3. 다중선택 브랜드 업종 선택</div>
          <div class="sub">다중 선택한 브랜드의 업종을 선택해 주세요.</div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/join/franchise_join/pc5.png"
            alt="pc5"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/join/franchise_join/tab5.png"
            alt="tab5"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/join/franchise_join/mob5.png"
            alt="mob5"
          />
        </div>
        <div class="box">
          <div class="name">3. 가입완료</div>
          <div class="sub">
            회원가입이 완료되면 가입하신 이메일(아이디)로 자동 로그인이 됩니다.
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/join/franchise_join/pc6.png"
            alt="pc6"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/join/franchise_join/tab6.png"
            alt="tab6"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/join/franchise_join/mob6.png"
            alt="mob6"
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
