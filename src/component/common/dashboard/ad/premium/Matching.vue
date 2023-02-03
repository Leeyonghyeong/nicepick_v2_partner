<template>
  <section>
    <article>
      <div class="matching">
        <div class="icon-name">
          <div class="icon">
            <i class="fa-solid fa-users pre"></i>
            <div class="name">예비창업자</div>
          </div>
          <div class="icon">
            <i class="fa-solid fa-arrows-left-right gap"></i>
          </div>
          <div class="icon">
            <i class="fa-solid fa-building-user franchise"></i>
            <div class="name">프랜차이즈 브랜드<br />(담당자)</div>
          </div>
        </div>
        <div class="ment">
          · 브랜드 매치 통해 예비창업자를 다이렉트로 매칭하는 서비스입니다.<br />
          · 다이렉트 매칭을 통해 창업 상담을 시작하세요!
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  .matching {
    .icon-name {
      background-color: white;
      border-radius: 10px;
      border: 1px solid $iconLine;
      border-top: none;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      padding: 98px 65px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 65px;
      .icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 19px;
        .pre {
          font-size: 60px;
        }
        .gap {
          font-size: 30px;
          color: $subColor;
        }
        .franchise {
          font-size: 60px;
          color: $mainColor;
        }
        .name {
          font-size: 14px;
          color: $fontMain;
          text-align: center;
        }
      }
    }
    .ment {
      padding-top: 30px;
      font-size: 14px;
      color: $fontSub;
      line-height: 24px;
    }
  }
}

@include mobile {
  article {
    .matching {
      .icon-name {
        height: 300px;
        padding: 111px 24px;
        gap: 30px;
        .icon {
          gap: 17px;
          .pre {
            font-size: 40px;
          }
          .gap {
            font-size: 30px;
          }
          .franchise {
            font-size: 40px;
          }
          .name {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
