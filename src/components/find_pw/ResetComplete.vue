<template>
  <section>
    <article>
      <div class="ok">
        <img src="../../assets/login/ok.png" alt="ok" />
      </div>

      <div class="complete">
        <div class="complete-title">비밀번호 변경 완료!</div>
        <div class="complete-message">비밀번호 변경이 완료되었습니다.</div>
      </div>

      <div class="btn">
        <router-link to="/" class="none">
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
  .ok {
    img {
      width: 328px;
      height: 107px;
    }
  }

  .complete {
    padding: 48px 0 50px;
    display: flex;
    flex-direction: column;
    gap: 26px;
    .complete-title {
      font-size: 20px;
      font-weight: 500;
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
    padding: 170px 24px;
    .ok {
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
