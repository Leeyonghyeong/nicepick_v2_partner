<template>
  <section>
    <article>
      <div class="title">브랜드</div>

      <div class="sub-category">
        <div class="sub select">브랜드 관리</div>
        <div class="sub">브랜드 정보 수정</div>
      </div>

      <div class="content-gap">
        <div class="image-apply">
          <div class="box">
            <div class="description">
              <div class="description-list">
                · 브랜드 이미지는 <span>필수*</span>로 등록해 주세요.
              </div>
              <div class="description-list">· 이미지의 단위는 px입니다.</div>
              <div class="description-list">
                · 등록 이미지는 jpg, png 파일만 등록이 가능합니다.
              </div>
              <div class="description-list">
                · 이미지는 사이즈에 맞춰 등록해 주세요.
              </div>
            </div>

            <div class="content logo">
              <div class="title-box">
                <div class="content-title">브랜드 로고<span>*</span><br /></div>
                <div class="content-sub">(브랜드 대표 로고 이미지)</div>
              </div>
              <div class="image-section">
                <i class="fa-regular fa-image"></i>
                <div>500x200</div>
              </div>
            </div>
          </div>

          <div class="content list">
            <div class="title-box">
              <div class="content-title">브랜드 목록 이미지<span>*</span></div>
              <div class="content-sub">(업종 및 검색 리스트 노출 이미지)</div>
            </div>
            <div class="image-section">
              <i class="fa-regular fa-image"></i>
              <div>348x348(1:1비율)</div>
            </div>
          </div>

          <div class="content representative">
            <div class="title-box">
              <div class="content-title">브랜드 대표 이미지<span>*</span></div>
              <div class="content-sub">
                (브랜드 상세페이지 상단 노출 이미지)
              </div>
            </div>
            <div class="image-section">
              <i class="fa-regular fa-image"></i>
              <div>1572x884(9:16비율)</div>
            </div>
          </div>
        </div>

        <div class="content web">
          <div class="content-title">홈페이지</div>
          <input type="text" placeholder="URL 입력" />
        </div>

        <div class="content youtube">
          <div class="content-title">유튜브</div>
          <input type="text" placeholder="URL 입력" />
          <button class="ad">
            <img src="../../../assets/dashboard/add.png" alt="추가" />
            추가
          </button>
        </div>

        <div class="content promotion" @click="showPremiumModal">
          <div class="content-title">
            프로모션
            <span class="promotion-sub">*프리미엄 멤버십 회원 전용</span>
          </div>

          <div class="promotion-category">
            <div class="promotion-box">
              <img
                src="../../../assets/dashboard/brand/store_discount.png"
                alt="가맹비할인"
              />
              <div class="promotion-name">가맹비 할인</div>
            </div>

            <div class="promotion-box">
              <img
                src="../../../assets/dashboard/brand/store_free.png"
                alt="가맹비면제"
              />
              <div class="promotion-name">가맹비 면제</div>
            </div>

            <div class="promotion-box">
              <img
                src="../../../assets/dashboard/brand/edu_discount.png"
                alt="교육비할인"
              />
              <div class="promotion-name">교육비 할인</div>
            </div>

            <div class="promotion-box">
              <img
                src="../../../assets/dashboard/brand/edu_free.png"
                alt="교육비면제"
              />
              <div class="promotion-name">교육비 면제</div>
            </div>

            <div class="promotion-box">
              <img
                src="../../../assets/dashboard/brand/article.png"
                alt="물품지원"
              />
              <div class="promotion-name">물품지원</div>
            </div>

            <div class="promotion-box">
              <img
                src="../../../assets/dashboard/brand/equipment.png"
                alt="장비지원"
              />
              <div class="promotion-name">장비지원</div>
            </div>

            <div class="promotion-box interior">
              <img
                src="../../../assets/dashboard/brand/interrior.png"
                alt="인테리어지원"
              />
              <div class="promotion-name">인테리어<br />비용 지원</div>
            </div>
          </div>

          <input type="text" placeholder="진행중인 프로모션을 입력하세요." />
        </div>

        <div class="content height">
          <div class="content-title">브랜드 소개</div>

          <div class="image-box">
            <div class="image-section">
              <i class="fa-regular fa-image"></i>
              <div>1572x884(9:16 비율)</div>
            </div>
            <button class="ad">
              <img src="../../../assets/dashboard/add.png" alt="추가" />
              추가
            </button>
          </div>
        </div>

        <div class="content height representative-menu">
          <div class="content-title">대표메뉴</div>

          <div class="image-box">
            <div class="box">
              <div class="image-section">
                <i class="fa-regular fa-image"></i>
                <div>540x540<br />(1:1 비율)</div>
              </div>
              <input type="text" placeholder="메뉴명" />
              <input type="text" placeholder="0 원" />
            </div>

            <button class="ad">
              <img src="../../../assets/dashboard/add.png" alt="추가" />
              추가
            </button>
          </div>
        </div>

        <div class="content height">
          <div class="content-title">시설 및 인테리어</div>

          <div class="image-box">
            <div class="image-section">
              <i class="fa-regular fa-image"></i>
              <div>1572x884(9:16 비율)</div>
            </div>
            <button class="ad">
              <img src="../../../assets/dashboard/add.png" alt="추가" />
              추가
            </button>
          </div>
        </div>

        <div class="content height">
          <div class="content-title">창업비용 및 절차</div>

          <div class="image-box">
            <div class="image-section">
              <i class="fa-regular fa-image"></i>
              <div>1572x884(9:16 비율)</div>
            </div>
            <button class="ad">
              <img src="../../../assets/dashboard/add.png" alt="추가" />
              추가
            </button>
          </div>
        </div>

        <button class="save">저장</button>
      </div>
    </article>

    <PremiumMembership v-if="showModal" @showPremiumModal="showPremiumModal" />
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PremiumMembership from '../../common/modal/dashboard/PremiumMembership.vue'

const showModal = ref<boolean>(false)
const showPremiumModal = () => {
  showModal.value = !showModal.value
}
</script>

<style lang="scss" scoped>
@import '@/scss/main';
article {
  padding: 50px 0 76px 160px;

  span {
    color: $subColor;
  }

  .title {
    font-size: 20px;
    font-weight: $medi;
    color: $fontMain;
  }

  .sub-category {
    padding: 65px 0 30px 0;
    display: flex;
    gap: 30px;

    .sub {
      color: $fontSub;
      cursor: pointer;
    }

    .select {
      color: $mainColor;
      font-weight: $semi;
      border-bottom: 2px solid $mainColor;
      padding-bottom: 15px;
    }
  }

  .content-gap {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .image-apply {
      height: 344px;
      display: flex;
      gap: 28px;

      .box {
        .description {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding-bottom: 37px;

          .description-list {
            color: $fontSub;
            font-size: 14px;
            font-weight: $reg;
          }
        }
      }

      .content {
        width: 360px;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;

        text-align: center;
        background-color: white;
        border-radius: 10px;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);

        .title-box {
          display: flex;
          flex-direction: column;
          gap: 4px;
          .content-title {
            font-size: 18px;
            font-weight: $medi;
            color: $fontMain;
          }

          .content-sub {
            font-size: 12px;
            color: $fontSub;
            font-weight: $reg;
          }
        }
      }

      .logo {
        height: 209px;

        .image-section {
          height: 90px;
        }
      }

      .list {
        .image-section {
          width: 227px;
        }
      }

      .representative {
        width: 490px;

        .image-section {
          width: 405px;
        }
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 20px;

      padding: 30px;
      box-sizing: border-box;

      background-color: white;
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);

      .content-title {
        font-size: 18px;
        font-weight: $medi;
        color: $fontMain;
      }

      .image-box {
        display: flex;
        gap: 20px;

        button {
          width: 64px;
          background-color: #fafafa;
          border: none;
          border-radius: 10px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;

          font-family: Pretendard;
          font-weight: $reg;
          color: $mainColor;
          font-size: 14px;

          cursor: pointer;

          img {
            width: 20px;
            height: 20px;
          }
        }
      }

      .image-section {
        background-color: #f2f4f7;
        width: 225px;
        border-radius: 10px;
        height: 225px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 6px;
        color: $fontSub;
        cursor: pointer;
      }
    }

    input {
      width: 100%;
      height: 50px;
      padding-left: 16px;
      border-radius: 10px;
      border: 1px solid $iconLine;
      box-sizing: border-box;
    }

    input::placeholder {
      font-size: 16px;
      font-family: Pretendard;
      color: $inputLine;
    }

    .web {
      height: 151px;
    }

    .youtube {
      height: 211px;

      button {
        width: 89px;
        height: 40px;
        border-radius: 50px;
        border: none;
        background-color: #fafafa;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;

        font-size: 14px;
        font-family: Pretendard;
        font-weight: $reg;
        color: $mainColor;

        cursor: pointer;

        img {
          width: 20px;
          height: 20px;
        }
      }
    }

    .promotion {
      height: 251px;

      .promotion-sub {
        font-size: 12px;
        font-weight: $reg;
      }

      .promotion-category {
        display: flex;
        gap: 20px;

        .promotion-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;

          width: 80px;
          height: 80px;
          padding-top: 4px;

          box-sizing: border-box;
          border: 1px solid $iconLine;
          border-radius: 10px;

          cursor: pointer;

          img {
            width: 40px;
            height: 40px;
          }

          .promotion-name {
            font-size: 13px;
            color: $fontSub;
            font-weight: $reg;
          }
        }

        .interior {
          gap: 0;
        }
      }
    }

    .height {
      height: 326px;

      .image-section {
        width: 405px;
      }
    }

    .representative-menu {
      .image-box {
        display: flex;
        .box {
          display: flex;
          flex-direction: column;
          gap: 11px;
          .image-section {
            width: 122px;
            height: 122px;
            text-align: center;
          }

          input {
            width: 122px;
            height: 41px;
            text-align: center;
            padding: 0;
          }
        }
      }
    }

    .save {
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
  }
}

@include tablet {
  article {
    padding: 50px 24px 60px 24px;

    .content-gap {
      .image-apply {
        flex-direction: column;
        height: 100%;

        .box {
          .content {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
