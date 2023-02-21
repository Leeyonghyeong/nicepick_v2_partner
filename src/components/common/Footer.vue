<template>
  <footer>
    <section>
      <article class="qna">
        <div class="qna-info">
          <div>고객센터 070-8287-2281</div>
          <div>(운영시간 10:00~20:00 주말, 공휴일 휴무)</div>
        </div>
        <div class="footer-images">
          <img
            src="../../assets/footer/insta.png"
            alt="인스타그램"
            @click="
              moveFooterLink(
                'https://www.instagram.com/nicepick_official/',
                'https://www.instagram.com/nicepick_official/'
              )
            "
          />
          <img
            src="../../assets/footer/kakao.png"
            alt="카카오톡"
            @click="
              moveFooterLink(
                'https://pf.kakao.com/_vNwxnb',
                'https://pf.kakao.com/_vNwxnb'
              )
            "
          />
          <img
            src="../../assets/footer/you.png"
            alt="유튜브"
            @click="
              moveFooterLink(
                'https://www.youtube.com/@user-pc1os4hx8j',
                'https://m.youtube.com/@user-pc1os4hx8j'
              )
            "
          />
          <img
            src="../../assets/footer/gstore.png"
            alt="플레이스토어"
            class="hide-image"
            @click="
              moveFooterLink(
                'https://play.google.com/store/apps/details?id=com.nicepick.nicepick_android',
                'https://play.google.com/store/apps/details?id=com.nicepick.nicepick_android'
              )
            "
          />
          <img
            src="../../assets/footer/astore.png"
            alt="앱스토어"
            class="hide-image"
            @click="
              moveFooterLink(
                'https://apps.apple.com/us/app/%EC%B0%BD%EC%97%85%ED%94%BD-%EC%9E%90%EC%98%81%EC%97%85-%ED%94%84%EB%9E%9C%EC%B0%A8%EC%9D%B4%EC%A6%88-%EC%B0%BD%EC%97%85%EC%A0%95%EB%B3%B4-%EC%9B%90%ED%81%B4%EB%A6%AD-%EC%83%81%EA%B6%8C%EB%B6%84%EC%84%9D/id6443596242',
                'https://apps.apple.com/us/app/%EC%B0%BD%EC%97%85%ED%94%BD-%EC%9E%90%EC%98%81%EC%97%85-%ED%94%84%EB%9E%9C%EC%B0%A8%EC%9D%B4%EC%A6%88-%EC%B0%BD%EC%97%85%EC%A0%95%EB%B3%B4-%EC%9B%90%ED%81%B4%EB%A6%AD-%EC%83%81%EA%B6%8C%EB%B6%84%EC%84%9D/id6443596242'
              )
            "
          />
        </div>
      </article>

      <article class="company-info">
        <div class="footer-link">
          <div
            @click="
              moveFooterLink(
                'https://nicepick.notion.site/b92941c41e6e4986b60a197ac607f1da',
                'https://nicepick.notion.site/b92941c41e6e4986b60a197ac607f1da'
              )
            "
          >
            개인정보처리방침
          </div>
          <div
            @click="
              moveFooterLink(
                'https://nicepick.notion.site/112ba598e8d34c39b6b3ab29d6c9e34a',
                'https://nicepick.notion.site/112ba598e8d34c39b6b3ab29d6c9e34a'
              )
            "
          >
            서비스 이용약관
          </div>
          <div
            @click="
              moveFooterLink(
                'https://nicepick.notion.site/e5db5ba7dd064fea86a0a0057d042654',
                'https://nicepick.notion.site/e5db5ba7dd064fea86a0a0057d042654'
              )
            "
          >
            마케팅 정보 수신 동의
          </div>
        </div>
        <div class="info">
          <div>
            (주)삼화이노랩 대표이사 : 원용철 이메일 : nice1pick@gmail.com
          </div>
          <div>
            사업자등록번호 : 242-87-02414 통신판매업 : 제2022 - 서울강남 -
            00663호 서울특별시 강남구 테헤란로 82길15 디아이타워 6층 686
          </div>
          <div>Copyright © nicepick.co.kr. All rights reserved.</div>
        </div>
      </article>
    </section>
  </footer>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useWindowStore } from '../../store/window'
import { deviceMoveUrl } from '../../functions/common'

const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)

const moveFooterLink = (pcUrl: string, moUrl: string) => {
  deviceMoveUrl(getDevice.value, getDevice.value === 'pc' ? pcUrl : moUrl)
}
</script>

<style lang="scss" scoped>
@import '@/scss/main';

footer {
  height: 200px;
  width: 100%;
  background-color: #fcfcfc;

  section {
    @include pc-container();
    padding: 28px 0 18px 0;

    .qna {
      background-color: #f3f3f3;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px;
      padding: 0 20px;
      box-sizing: border-box;

      .qna-info {
        display: flex;
        align-items: center;

        div {
          font-size: 14px;
          color: $fontMain;

          &:last-child {
            font-size: 12px;
            color: $fontSub;
            margin-left: 10px;
          }
        }
      }

      .footer-images {
        display: flex;
        align-items: center;

        img {
          width: 24px;
          height: 24px;
          margin-right: 8px;
          cursor: pointer;
        }
      }
    }

    .company-info {
      margin-top: 20px;
      font-size: 12px;
      color: $fontSub;

      .footer-link {
        margin-bottom: 20px;
        cursor: pointer;
        display: flex;

        div {
          &:not(:first-child) {
            &::before {
              content: '|';
              margin: 0 20px;
            }
          }
        }
      }

      .info {
        line-height: 20px;

        div {
          &:last-child {
            font-weight: 600;
          }
        }
      }
    }
  }
  @include tablet {
    section {
      width: 100%;
      padding: 24px 44px 21px 44px;
      box-sizing: border-box;

      .qna {
        .footer-images {
          .hide-image {
            display: none;
          }
        }
      }
    }
  }
}
@include mobile {
  footer {
    height: auto;

    section {
      width: 100%;
      padding: 20px 24px 27px 24px;
      box-sizing: border-box;

      .qna {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 120px;

        .qna-info {
          flex-direction: column;
          line-height: 20px;
          margin-bottom: 20px;
        }

        .footer-images {
          .hide-image {
            display: none;
          }
        }
      }

      .company-info {
        font-size: 11px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .footer-link {
          div {
            &:not(:first-child) {
              &::before {
                content: '|';
                margin: 0 6px;
              }
            }
          }
        }

        .info {
          display: flex;
          flex-direction: column;
          align-items: center;

          div:nth-child(2) {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
