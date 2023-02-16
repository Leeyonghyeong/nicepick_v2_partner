<template>
  <section>
    <article>
      <div class="top-title">
        <div v-if="getDevice !== 'mobile'" class="title">공지사항</div>
        <img
          v-if="getDevice === 'mobile'"
          src="../../../../assets/login/arrow_lt.png"
          alt="이전"
        />
      </div>

      <div class="notice-post">
        <div class="box post">
          <div class="name-period">
            <div class="name">공인중개사 광고 상품 공지사항</div>
            <div class="period">2022.12.01</div>
          </div>
          <div class="main">
            안녕하십니까.<br />
            공인중개사 회원 여러분 창업픽입니다.<br />
            창업픽 서비스를 이용해 주셔서 감사합니다.<br /><br />

            공인중개사 광고상품을 더 많이 기획하고 준비하고 있습니다.<br />
            다양한 서비스를 기대해주세요.<br /><br />

            다른 불편 사항이 있으신 분들께서는 고객센터(070-8287-2281) 또는
            카카오채널>창업Pick 으로 문의 주시기 바랍니다.
          </div>
        </div>

        <div class="box prev-next">
          <div class="other prev">
            <div class="sub-name">
              <div class="sub">이전</div>
              <div class="name">파트너 홈페이지 리뉴얼 공지</div>
            </div>
            <div class="period">2022.12.01</div>
          </div>
          <div class="other next">
            <div class="sub-name">
              <div class="sub">다음</div>
              <div class="name">[긴급] 창업픽 파트너 2023년 공지사항</div>
            </div>
            <div class="period">2022.12.01</div>
          </div>
        </div>

        <div class="list-go">
          <button>목록보기</button>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 24px 0 24px;

  .top-title {
    font-size: 20px;
    color: $fontMain;
    font-weight: $medi;
  }

  .notice-post {
    padding: 50px 0 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .box {
      background-color: white;
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    }
    .post {
      padding: 30px;
      height: 613px;
      .name-period {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid $sectionLine;
        padding-bottom: 30px;
        margin-bottom: 30px;
        .name {
          font-size: 18px;
          color: $fontMain;
          font-weight: $medi;
        }
        .period {
          font-size: 14px;
          color: $fontSub;
        }
      }
      .main {
        color: $fontSub;
        line-height: 30px;
      }
    }
    .prev-next {
      padding: 20px 30px;
      .other {
        display: flex;
        justify-content: space-between;
        .sub-name {
          display: flex;
          gap: 20px;
          font-size: 14px;
          .sub {
            color: $fontSub;
          }
          .name {
            color: $fontMain;
            cursor: pointer;
          }
          .name:hover {
            color: $mainColor;
          }
        }
        .period {
          font-size: 12px;
          color: $fontSub;
        }
      }
      .prev {
        border-bottom: 1px solid $sectionLine;
        padding-bottom: 14px;
        margin-bottom: 14px;
      }
    }

    .list-go {
      padding-top: 10px;
      display: flex;
      justify-content: center;
      button {
        width: 230px;
        height: 40px;
        border-radius: 50px;
        border: none;
        background-color: white;
        font-family: $pre;
        font-size: 16px;
        color: $fontSub;
        cursor: pointer;
      }
      button:hover {
        border: 1px solid $mainColor;
        color: $mainColor;
      }
    }
  }
}

@include mobile {
  article {
    padding: 0;

    .top-title {
      display: flex;
      align-items: center;
      gap: 8px;
      position: absolute;
      top: 15px;
      left: 24px;
      img {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }

    .notice-post {
      padding: 0;
      gap: 0px;
      .box {
        border-radius: 0;
        box-shadow: none;
      }
      .post {
        height: 500px;
        .name-period {
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
          position: absolute;
          top: 16px;
          left: 62px;
          border: none;
          padding: 0;
          margin: 0;
          .name {
            font-size: 16px;
          }
          .period {
            font-size: 10px;
          }
        }
        .main {
          font-size: 13px;
        }
      }
      .prev-next {
        margin-top: 10px;
        padding: 0;
        .other {
          padding: 20px 30px 17px 30px;
          .sub-name {
            .sub {
              font-size: 12px;
            }
            .name {
              font-size: 13px;
            }
          }
          .period {
            font-size: 11px;
          }
        }
        .prev {
          margin-bottom: 0;
        }
      }
      .list-go {
        padding: 0;
        border-top: 1px solid $sectionLine;
        button {
          width: 100%;
          height: 50px;
          border-radius: 0;
          font-size: 13px;
        }
        button:hover {
          border: none;
          color: $fontSub;
        }
      }
    }
  }
}

@include pc {
  article {
    padding: 50px 0 0 160px;

    .notice-post {
      width: 1270px;
    }
  }
}
</style>
