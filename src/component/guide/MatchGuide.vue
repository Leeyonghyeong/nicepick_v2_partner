<template>
  <section>
    <article>
      <div class="top-title" v-if="getDevice !== 'mobile'">
        <span class="sub">BRAND MATCH GUIDE</span>
        브랜드 MATCH 가이드
      </div>
      <div class="mob-title" v-if="getDevice === 'mobile'">
        <img src="../../assets/guide/back.png" alt="뒤로가기" />
        브랜드 MATCH 가이드
      </div>

      <div class="content">
        <div class="img-box">
          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/match/pc.png"
              alt="매치1"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/match/tab.png"
              alt="매치1"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/match/mob.png"
              alt="매치1"
            />
            <div class="title">① 브랜드 매치 시작</div>
            <span class="sub"> - 브랜드 매치 서비스를 시작합니다. </span>
            <div class="box">
              <div class="title">② 브랜드 매치 현황</div>
              <span class="sub">
                - 브랜드 매치 서비스 진행 현황을 볼 수 있습니다.
              </span>
            </div>
          </div>

          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/match/pc-2.png"
              alt="매치2"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/match/tab-2.png"
              alt="매치2"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/match/mob-2.png"
              alt="매치2"
            />
            <div class="title">③ 질문</div>
            <span class="sub"> - 11개의 질문이 준비되어 있습니다. </span>
            <div class="box">
              <div class="title">④ 답</div>
              <span class="sub"> - 질문에 해당되는 답을 선택 하세요. </span>
            </div>
            <div class="box">
              <div class="title">⑤ 연락처 공유 동의</div>
              <span class="sub">
                - 브랜드와의 매치를 위해 연락처 공유에 동의해 주세요.
              </span>
            </div>
            <div class="box">
              <div class="title">⑥ 한 단계 뒤로</div>
              <span class="sub"> - 전 단계로 이동할 수 있습니다. </span>
            </div>
            <div class="box">
              <div class="title">⑦ 브랜드 매치 접수 완료</div>
              <span class="sub">
                - 브랜드 매치를 위한 매치 접수가 완료 되었습니다. AI 분석을 통해
                적절한 맞춤 브랜드가 매치될 예정입니다.
              </span>
            </div>
            <div class="box">
              <div class="title">⑧ 브랜드 매치 공지</div>
              <span class="sub">
                - 신청하신 매치 정보는 브랜드 담당자에게
                <span class="red"> 7일간 제공</span>되며, 계속 매치를 원할 경우
                새로운 매치 신청을 해주세요.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="main-link">
        <RouterLink to="/nicepickguide">
          <button>가이드 목록으로</button>
        </RouterLink>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 80px 0;

  .top-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    font-size: 20px;
    color: $fontMain;
    font-weight: $medi;
    .sub {
      font-size: 12px;
      color: $fontSub;
    }
  }

  .category {
    padding-top: 80px;
    display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 15px;
    color: $fontSub;
    border-bottom: 1px solid $sectionLine;
    div {
      cursor: pointer;
    }
    .select {
      color: $fontMain;
      font-weight: $semi;
      border-bottom: 2px solid $fontMain;
      padding-bottom: 18px;
    }
  }

  .content {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-box {
      display: flex;
      flex-direction: column;
      gap: 80px;
    }
    .box {
      width: 1194px;
      display: flex;
      flex-direction: column;
      .title {
        padding-top: 30px;
        color: $fontMain;
      }
      .sub {
        padding-top: 10px;
        color: $fontSub;
        font-size: 15px;
        .red {
          color: $subColor;
        }
      }
      .image {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        font-size: 12px;
        color: #1569ff;
        .more {
          padding: 20px 0 10px;
          display: flex;
          align-items: center;
          cursor: pointer;
          img {
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
        }
        .select-category {
          width: 161px;
          height: 408px;
        }
        .filter {
          width: 438px;
          height: 520px;
        }
        .promotion {
          width: 592px;
          height: 273px;
        }
        .possible {
          width: 306px;
          height: 156px;
        }
        .recommend {
          width: 786px;
          height: 713px;
        }
      }
      .link {
        margin-top: 30px;
        width: 188px;
        height: 40px;
        background-color: #1569ff;
        font-family: Pretendard;
        font-size: 15px;
        color: white;
        font-weight: $reg;
        border-radius: 10px;
        border: none;
        cursor: pointer;
      }
    }
  }
  .main-link {
    padding-top: 80px;
    display: flex;
    justify-content: center;
    button {
      width: 1194px;
      height: 50px;
      border-radius: 10px;
      border: 1px solid $fontSub;
      background-color: white;
      font-family: Pretendard;
      font-size: 16px;
      font-weight: $reg;
      color: $fontSub;
      cursor: pointer;
    }
  }
}

@include tablet {
  article {
    padding: 80px 44px 60px 44px;
    .content {
      .box {
        width: 100%;
        img {
          width: 100%;
        }
        .image {
          .compare,
          .wish {
            width: 174px;
            height: 96px;
          }
          .possible {
            width: 50%;
            height: 100%;
          }
          .recommend {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .main-link {
      display: block;
      button {
        width: 100%;
      }
    }
  }
}

@include mobile {
  article {
    padding: 0;
    .mob-title {
      padding: 15px 0 15px 24px;
      display: flex;
      align-items: center;
      gap: 8px;
      color: $fontMain;
      border-bottom: 1px solid $sectionLine;
      img {
        width: 30px;
        height: 30px;
      }
    }

    .category {
      padding: 17px 0 0 24px;
      justify-content: flex-start;
      font-size: 14px;
    }

    .content {
      padding: 20px 24px 0 24px;
      .img-box {
        gap: 60px;
      }
      .box {
        width: 100%;
        img {
          width: 100%;
        }
        .title {
          font-size: 15px;
        }
        .sub {
          font-size: 13px;
        }
        .image {
          .select-category {
            width: 70%;
            height: 100%;
          }
          .filter {
            width: 75%;
            height: 100%;
          }
          .compare,
          .wish {
            width: 50%;
            height: 100%;
          }
          .promotion,
          .possible,
          .recommend {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .main-link {
      padding: 60px 24px 30px 24px;
      display: block;
      button {
        width: 100%;
      }
    }
  }
}
</style>
