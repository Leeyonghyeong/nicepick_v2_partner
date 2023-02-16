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
          <div>파트너 회원가입</div>
          <img src="../../assets/login/close.png" alt="닫기" />
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
      <RouterLink to="franchisejoin" class="none">
        <div class="box franchise">
          <i class="fa-regular fa-building"></i>
          <div>프랜차이즈 브랜드</div>
        </div>
      </RouterLink>

      <RouterLink to="realtorjoin" class="none">
        <div class="box realtor">
          <i class="fa-solid fa-people-roof"></i>
          <div>공인중개사</div>
        </div>
      </RouterLink>

      <div class="box cooperation" @click="showPrepareModal">
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

    <PrepareCooperation v-if="showModal" @showPrepareModal="showPrepareModal" />
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'
import PrepareCooperation from '../common/modal/PrepareCooperation.vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const showModal = ref<boolean>(false)
const showPrepareModal = () => {
  showModal.value = !showModal.value
}
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
        width: 252px;
        height: 38px;
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

    .franchise {
      background-color: #2643a9;
    }
    .realtor {
      background-color: #eb82a2;
    }
    .cooperation {
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

    .none {
      text-decoration: none;
      width: 100%;
    }

    .nicepick-partner {
      display: flex;
      justify-content: flex-start;
      border-bottom: 1px solid $sectionLine;

      .title {
        @include mobile-container();
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        color: $fontMain;
        padding-bottom: 15px;

        img {
          position: absolute;
          right: 24px;
          width: 30px;
          height: 30px;
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
