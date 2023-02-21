<template>
  <section>
    <article>
      <div class="title">
        <div class="br">
          <div>프랜차이즈X창업픽이 함께</div>
          <div>가맹사업 성공을 위해 달리고 있습니다!</div>
        </div>
        <div class="bold">창업픽과 함께 성장하는 브랜드</div>
      </div>

      <div class="brand-list">
        <div class="box sa sa-up">
          <img src="../../assets/main/brand_1.jpg" alt="부어치킨" />
          <img src="../../assets/main/brand_2.jpg" alt="더풋샵" />
          <img src="../../assets/main/brand_3.jpg" alt="더치앤빈" />
          <img src="../../assets/main/brand_4.jpg" alt="카페인중독" />
          <img src="../../assets/main/brand_5.png" alt="카페청솔로" />
          <img src="../../assets/main/brand_6.jpg" alt="감동까스" />
          <img src="../../assets/main/brand_7.jpg" alt="돈까스짱" />
          <img src="../../assets/main/brand_8.jpg" alt="진심커피" />
          <img src="../../assets/main/brand_9.jpg" alt="호주스시" />
          <img src="../../assets/main/brand_10.png" alt="크레이저" />
          <img src="../../assets/main/brand_11.jpg" alt="촌댁맥주" />
          <img src="../../assets/main/brand_12.png" alt="보배반점" />
          <img src="../../assets/main/brand_13.jpg" alt="달다곰이" />
          <img src="../../assets/main/brand_14.jpg" alt="루이스" />
          <img src="../../assets/main/brand_15.png" alt="채우다" />
          <img src="../../assets/main/brand_16.png" alt="칙바이칙" />
          <img src="../../assets/main/brand_17.jpg" alt="밀면법칙" />
          <img src="../../assets/main/brand_18.jpg" alt="이수페" />
          <img src="../../assets/main/brand_19.jpg" alt="스태프핫도그" />
          <img src="../../assets/main/brand_20.jpg" alt="일차돌" />
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'

const scrollAnimation = () => {
  const element = document.querySelector('.sa')

  if (element) {
    if (window.innerHeight > element.getBoundingClientRect().top + 300) {
      element.classList.add('show')
    } else {
      element.classList.remove('show')
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollAnimation)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollAnimation)
})
</script>

<style lang="scss" scoped>
@import '@/scss/main';
@import '@/scss/animation';

article {
  padding: 150px 0;
  .title {
    text-align: center;

    .br {
      display: flex;
      justify-content: center;
      gap: 5px;
    }

    div {
      font-size: 20px;
      color: $fontMain;
    }

    .bold {
      padding-top: 15px;
      font-size: 32px;
      font-weight: $semi;
    }
  }

  .brand-list {
    display: flex;
    justify-content: center;
    padding-top: 80px;
    .box {
      width: 1195px;
      display: grid;
      justify-content: space-between;
      gap: 30px;
      grid-template-columns: repeat(5, calc((100% - 150px) / 5));
      img {
        width: 216px;
        height: 86px;
      }
    }
  }
}

@include tablet {
  article {
    .brand-list {
      width: 100%;
      padding: 80px 44px 0 44px;
      box-sizing: border-box;
      .box {
        width: 100%;
        gap: 24px;
        grid-template-columns: repeat(4, calc((100% - 72px) / 4));

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

@include mobile {
  article {
    width: 100%;
    padding: 100px 44px;
    box-sizing: border-box;
    .title {
      .br {
        flex-direction: column;
        gap: 6px;
        div {
          font-size: 14px;
        }
      }

      .bold {
        font-size: 22px;
      }
    }

    .brand-list {
      padding-top: 50px;
      .box {
        width: 100%;
        justify-content: center;
        gap: 15px;
        grid-template-columns: repeat(2, calc((100% - 24px) / 2));

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
