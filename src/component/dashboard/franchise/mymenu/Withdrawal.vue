<template>
  <section>
    <article>
      <div class="nicepick-partner">
        <img
          v-if="getDevice !== 'mobile'"
          src="../../../../assets/header/logo_2.png"
          alt="로고"
        />
      </div>

      <div class="top-title">
        <div class="title">회원 탈퇴</div>
        <img
          v-if="getDevice === 'mobile'"
          src="../../../../assets/login/close.png"
          alt="닫기"
        />
      </div>

      <div class="width">
        <div class="ment">
          <div class="title">정말 창업픽 파트너 회원 탈퇴를 하시겠습니까?</div>
          <div class="ment-box">
            <div>
              · 회원 탈퇴 후 개인정보는 즉시 파기되며, 복구가 불가능합니다.<br />
              · 삭제된 회원 정보 및 데이터는 복구할 수 없습니다.<br />
              · 창업픽 고객센터 <span>070-8287-2281</span>
            </div>
          </div>
        </div>

        <div class="reason-list">
          <div class="reason-title">탈퇴 사유</div>
          <div class="select-list">
            <div class="select">
              <label for="rejoin">
                <input type="radio" name="select" id="rejoin" />
                <div class="title">개인정보 변경으로 재가입할거에요.</div>
              </label>
            </div>
            <div class="select">
              <label for="obstacle">
                <input type="radio" name="select" id="obstacle" />
                <div class="title">사이트 이용시 장애가 많아요.</div>
              </label>
            </div>
            <div class="select">
              <label for="service">
                <input type="radio" name="select" id="service" />
                <div class="title">원하는 서비스가 없어요.</div>
              </label>
            </div>
            <div class="select">
              <label for="uncomfortable">
                <input type="radio" name="select" id="uncomfortable" />
                <div class="title">찾기 어렵고 사용이 불편해요.</div>
              </label>
            </div>
            <div class="select">
              <label for="unkind">
                <input type="radio" name="select" id="unkind" />
                <div class="title">고객 응대가 불친절해요.</div>
              </label>
            </div>
            <div class="select">
              <label for="other">
                <input type="radio" name="select" id="other" />
                <div class="title">타 사이트 유사서비스를 이용하고 있어요.</div>
              </label>
            </div>
            <div class="select etc">
              <label for="etc">
                <input type="radio" name="select" id="etc" />
                <div class="title">기타(직접입력)</div>
              </label>
              <input
                class="etc-reason"
                type="text"
                placeholder="기타 사유를 입력해 주세요."
              />
            </div>
          </div>
        </div>

        <RouterLink to="/withdrawalcomplete" class="none">
          <button class="withdrawal">회원 탈퇴</button>
        </RouterLink>

        <div class="cancel">취소</div>
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
  text-align: center;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .none {
    text-decoration: none;
    color: inherit;
  }

  .nicepick-partner {
    img {
      width: 252px;
      height: 38px;
    }
  }

  .top-title {
    padding-top: 40px;
    .title {
      font-weight: $medi;
      color: $fontMain;
    }
  }

  .width {
    width: 378px;
    .ment {
      padding: 21px 0 30px 0;
      .title {
        padding-top: 30px;
        border-top: 1px solid $sectionLine;
        font-weight: $medi;
        color: $fontMain;
      }
      .ment-box {
        height: 104px;
        margin-top: 24px;
        padding-left: 16px;

        display: flex;
        align-items: center;

        background-color: #fafafa;
        border-radius: 10px;
        font-size: 13px;
        line-height: 24px;
        color: $fontSub;
        text-align: left;
        span {
          color: #1569ff;
        }
      }
    }

    .reason-list {
      text-align: left;
      .reason-title {
        font-size: 15px;
        font-weight: $medi;
        color: $fontMain;
        padding-bottom: 20px;
      }
      .select-list {
        padding: 20px 0 30px 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-top: 1px solid $sectionLine;
        border-bottom: 1px solid $sectionLine;
        .select {
          label {
            display: flex;
            gap: 6px;
            .title {
              font-size: 15px;
              color: $fontMain;
            }
            input,
            .title {
              cursor: pointer;
            }
          }
        }
        .etc {
          label {
            margin-bottom: 20px;
          }
          .etc-reason {
            width: 100%;
            height: 50px;
            padding-left: 16px;
            box-sizing: border-box;
            border-radius: 10px;
            border: 1px solid $inputLine;
          }
          .etc-reason::placeholder {
            font-size: 16px;
            font-family: Pretendard;
            color: $iconLine;
          }
        }
      }
    }

    .withdrawal {
      margin-top: 30px;
      width: 100%;
      height: 50px;
      border-radius: 10px;
      border: none;
      background-color: $mainColor;
      color: white;
      font-family: Pretendard;
      font-size: 16px;
      font-weight: $reg;
      cursor: pointer;
    }

    .cancel {
      margin-top: 20px;
      font-size: 14px;
      color: $fontSub;
      cursor: pointer;
    }
  }
}

@include mobile {
  article {
    padding-top: 0;
    .top-title {
      width: 100%;
      height: 60px;
      padding-top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid $sectionLine;
      .title {
        color: $fontMain;
      }
      img {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 23px;
        cursor: pointer;
      }
    }

    .width {
      @include mobile-container();
      .ment {
        padding-top: 0;
        .title {
          padding-top: 28px;
          border: none;
        }
        .ment-box {
          font-size: 12px;
        }
      }

      .reason-list {
        .reason-title {
          font-size: 14px;
        }
        .select-list {
          .select {
            label {
              .title {
                font-size: 14px;
              }
            }
          }
        }
      }

      .withdrawal {
        font-size: 14px;
      }

      .cancel {
        font-size: 13px;
      }
    }
  }
}
</style>
