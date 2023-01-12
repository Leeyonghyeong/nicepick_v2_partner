<template>
  <section>
    <article class="nicepick-partner">
      <RouterLink to="/" class="none">
        <div v-if="getDevice !== 'mobile'" class="logo">
          <img class="nicepick" src="../assets/header/logo.png" alt="로고" />
          <img
            class="partner"
            src="../assets/header/partner.png"
            alt="파트너"
          />
        </div>

        <div v-if="getDevice === 'mobile'" class="title">
          <img src="../assets/login/arrow_lt.png" alt="이전" />
          <div>파트너 회원가입</div>
        </div>
      </RouterLink>
    </article>

    <article class="title-box">
      <div class="box">
        <div v-if="getDevice !== 'mobile'" class="bold">파트너 회원가입</div>
        <div class="sub">
          창업픽 파트너가 되어 다양한 광고효과를 경험해 보세요!
        </div>
      </div>
    </article>

    <article class="category">
      <router-link to="franchisejoin" class="none">
        <div class="box fc">
          <i class="fa-regular fa-building"></i>
          <div>프랜차이즈 브랜드</div>
        </div>
      </router-link>

      <div class="box rt">
        <i class="fa-solid fa-people-roof"></i>
        <div>공인중개사</div>
      </div>

      <div class="box cp">
        <i class="fa-regular fa-building"></i>
        <div>협력파트너</div>
      </div>
    </article>

    <article class="login">
      <div class="center">
        <div>
          이미 계정이 있으신가요?
          <RouterLink to="/login" class="none">
            <span>로그인</span>
          </RouterLink>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

section {
  padding-top: 100px;
  text-align: center;

  .none {
    text-decoration: none;
  }

  .nicepick-partner {
    display: flex;
    justify-content: center;
    .logo {
      display: flex;
      align-items: flex-start;
      gap: 7.57px;

      .nicepick {
        width: 160.5px;
        height: 38px;
      }

      .partner {
        width: 87.16px;
        height: 25.7px;
      }
    }
  }

  .title-box {
    display: flex;
    justify-content: center;
    .box {
      width: 378px;
      div {
        border-bottom: 1px solid $sectionLine;
      }

      .bold {
        padding: 40px 0 20px 0;
        font-weight: $medi;
      }

      .sub {
        padding: 30px 0;
        font-size: 14px;
        color: $fontSub;
      }
    }
  }

  .category {
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .box {
      width: 378px;
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      border-radius: 10px;
      color: white;
      cursor: pointer;

      i {
        font-size: 20px;
      }

      div {
        font-size: 18px;
        font-weight: $medi;
      }
    }

    .fc {
      background-color: #2643a9;
    }
    .rt {
      background-color: #eb82a2;
    }
    .cp {
      background-color: #4bbe88;
    }
  }

  .login {
    display: flex;
    justify-content: center;

    .center {
      border-top: 1px solid $sectionLine;

      div {
        width: 378px;
        padding-top: 20px;
        font-size: 14px;
        color: $fontMain;

        span {
          color: $subColor;
          text-decoration: underline;
          padding-left: 10px;
          cursor: pointer;
        }
      }
    }
  }
}

@include tablet {
  section {
    .category {
      .box {
        width: 376px;
      }
    }
  }
}

@include mobile {
  section {
    padding-top: 15px;
    width: 100%;
    box-sizing: border-box;

    .nicepick-partner {
      display: flex;
      justify-content: flex-start;
      border-bottom: 1px solid $sectionLine;
      .none {
        text-decoration: none;
        .title {
          @include mobile-container();
          display: flex;
          align-items: center;
          color: $fontMain;
          padding-bottom: 15px;

          img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }

    .title-box {
      .box {
        @include mobile-container();
      }
    }

    .category {
      width: 100%;
      padding: 30px 24px;
      box-sizing: border-box;

      .box {
        width: 100%;
      }
    }

    .login {
      @include mobile-container();

      .center {
        width: 100%;
        div {
          width: 100%;
        }
      }
    }
  }
}
</style>
