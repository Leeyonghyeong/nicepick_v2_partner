<template>
  <section>
    <article>
      <div class="welcome">
        <img src="../../assets/login/welcome.png" alt="welcome" />
      </div>

      <div class="complete">
        <div class="complete-title">파트너 회원가입 완료!</div>
        <div class="complete-message">
          창업픽의 파트너가 되신걸 축하드립니다.<br />
          이제 창업픽은 귀사의 성공을 위해 최선을 다하겠습니다.<br />
          주요 서비스에 대한 안내를 원하시면 언제든 고객센터로 연락해 주세요.
        </div>
      </div>

      <div class="btn">
        <router-link to="/franchise/dashboard" class="none">
          <div class="home">홈으로</div>
        </router-link>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding-top: 240px;
  text-align: center;
  .welcome {
    img {
      width: 328px;
      height: 107px;
    }
  }

  .complete {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 26px;
    .complete-title {
      font-size: 20px;
      font-weight: $medi;
      color: $fontMain;
    }
    .complete-message {
      font-size: 15px;
      color: $fontSub;
      line-height: 24px;
    }
  }

  .btn {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    div {
      width: 378px;
      height: 50px;
      border: 1px solid $mainColor;
      box-sizing: border-box;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .none {
      text-decoration: none;

      .home {
        background-color: $mainColor;
        color: #fff;
      }
    }

    .consult {
      background-color: #fff;
      color: $mainColor;
    }
  }
}

@include tablet {
  article {
    .btn {
      div {
        width: 376px;
      }
    }
  }
}

@include mobile {
  article {
    padding: 170px 24px 0;
    .welcome {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .complete {
      .complete-title {
        font-size: 18px;
      }
      .complete-message {
        font-size: 13px;
      }
    }

    .btn {
      div {
        width: 100%;
        font-size: 14px;
      }
      .none {
        width: 100%;
      }
    }
  }
}
</style>
