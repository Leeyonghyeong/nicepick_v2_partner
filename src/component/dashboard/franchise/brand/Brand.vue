<template>
  <section>
    <article>
      <div class="top-title">브랜드</div>

      <div class="top-category">
        <div class="category-name select">브랜드 관리</div>
        <RouterLink to="set" class="none">
          <div class="category-name">브랜드 정보 수정</div>
        </RouterLink>
      </div>

      <div class="brand-image">
        <div class="description-logo">
          <div class="description">
            · 이미지는 <span>필수*</span>로 등록해 주세요.<br />
            · 이미지의 단위는 픽셀(px)입니다.<br />
            · 등록 이미지는 jpg, png 파일만 등록이 가능합니다.<br />
            · 이미지는 사이즈에 맞춰 등록해 주세요.
          </div>
          <div class="content logo">
            <div class="title">브랜드 로고<span>*</span></div>
            <div class="sub">(브랜드 대표 로고 이미지)</div>
            <div class="image-section">
              <label for="file">
                <div class="btn-upload">
                  <i class="fa-regular fa-image" />
                  <div class="value">500x200</div>
                </div>
              </label>
              <input type="file" name="file" id="file" />
            </div>
          </div>
        </div>
        <div class="content list">
          <div class="title">브랜드 목록 이미지<span>*</span></div>
          <div class="sub">(업종 및 검색 리스트 노출 이미지)</div>
          <div class="image-section">
            <label for="file">
              <div class="btn-upload">
                <i class="fa-regular fa-image" />
                <div class="value">348x348(1:1비율)</div>
              </div>
            </label>
            <input type="file" name="file" id="file" />
          </div>
        </div>
        <div class="content representative-image">
          <div class="title">브랜드 대표 이미지<span>*</span></div>
          <div class="sub">(브랜드 상세페이지 상단 노출 이미지)</div>
          <div class="image-section">
            <label for="file">
              <div class="btn-upload">
                <i class="fa-regular fa-image" />
                <div class="value">1572x884(9:16비율)</div>
              </div>
            </label>
            <input type="file" name="file" id="file" />
          </div>
        </div>
      </div>

      <div class="content-section">
        <div class="content web">
          <div class="box">
            <div class="title">홈페이지</div>
            <input type="text" placeholder="URL 입력" />
          </div>
        </div>
        <div class="content youtube">
          <div class="box">
            <div class="title">유튜브 영상</div>
            <div class="center">
              <input type="text" placeholder="URL 입력" />
              <div class="add">
                <input type="text" placeholder="URL 입력" />
                <img
                  src="../../../../assets/dashboard/brand/delete.png"
                  alt="delete"
                />
              </div>
              <button>
                <img src="../../../../assets/dashboard/add.png" alt="" />
                추가
              </button>
            </div>
          </div>
        </div>
        <div class="content promotion" @click="showPremiumModal">
          <div class="box">
            <div class="title">
              프로모션 <span>* 프리미엄 멤버십 회원 전용</span>
            </div>
            <div class="promotion-category">
              <div class="category">
                <img
                  src="../../../../assets/dashboard/brand/가맹비할인.png"
                  alt=""
                />
                가맹비 할인
              </div>
              <div class="category">
                <img
                  src="../../../../assets/dashboard/brand/가맹비면제.png"
                  alt=""
                />
                가맹비 면제
              </div>
              <div class="category">
                <img
                  src="../../../../assets/dashboard/brand/교육비할인.png"
                  alt=""
                />
                교육비 할인
              </div>
              <div class="category">
                <img
                  src="../../../../assets/dashboard/brand/교육비면제.png"
                  alt=""
                />
                교육비 면제
              </div>
              <div class="category">
                <img
                  src="../../../../assets/dashboard/brand/물품지원.png"
                  alt=""
                />
                물품지원
              </div>
              <div class="category">
                <img
                  src="../../../../assets/dashboard/brand/장비지원.png"
                  alt=""
                />
                장비지원
              </div>
              <div class="category interior-gap">
                <img
                  src="../../../../assets/dashboard/brand/인테리어비용지원.png"
                  alt=""
                />
                인테리어<br />비용 지원
              </div>
            </div>
            <input type="text" placeholder="진행중인 프로모션을 입력하세요." />
          </div>
        </div>
        <div class="content brand-introduce height">
          <div class="box">
            <div class="title">브랜드 소개</div>
            <div class="center">
              <div class="image-section">
                <label for="file">
                  <div class="btn-upload">
                    <i class="fa-regular fa-image" />
                    <div class="value">1572x884(9:16비율)</div>
                  </div>
                </label>
                <input type="file" name="file" id="file" />
              </div>
              <button>
                <img src="../../../../assets/dashboard/add.png" alt="" />
                추가
              </button>
            </div>
          </div>
        </div>
        <div class="content representative-menu height">
          <div class="box">
            <div class="title">대표메뉴</div>
            <div class="center">
              <div class="menu-flex">
                <div class="image-section">
                  <label for="file">
                    <div class="btn-upload">
                      <i class="fa-regular fa-image" />
                      <div class="value">540x540<br />(1:1비율)</div>
                    </div>
                  </label>
                  <input type="file" name="file" id="file" />
                </div>
                <div class="name-cost">
                  <div class="name">
                    <input type="text" placeholder="메뉴명" />
                  </div>
                  <div class="cost">
                    <input type="text" placeholder="0" /> 원
                  </div>
                </div>
              </div>
              <button>
                <img src="../../../../assets/dashboard/add.png" alt="" />
                추가
              </button>
            </div>
          </div>
        </div>
        <div class="content interior height">
          <div class="box">
            <div class="title">시설 및 인테리어</div>
            <div class="center">
              <div class="image-section">
                <label for="file">
                  <div class="btn-upload">
                    <i class="fa-regular fa-image" />
                    <div class="value">1572x884(9:16비율)</div>
                  </div>
                </label>
                <input type="file" name="file" id="file" />
              </div>
              <button>
                <img src="../../../../assets/dashboard/add.png" alt="" />
                추가
              </button>
            </div>
          </div>
        </div>
        <div class="content cost-process height">
          <div class="box">
            <div class="title">창업비용 및 절차</div>
            <div class="center">
              <div class="image-section">
                <label for="file">
                  <div class="btn-upload">
                    <i class="fa-regular fa-image" />
                    <div class="value">1572x884(9:16비율)</div>
                  </div>
                </label>
                <input type="file" name="file" id="file" />
              </div>
              <button>
                <img src="../../../../assets/dashboard/add.png" alt="" />
                추가
              </button>
            </div>
          </div>
        </div>
        <div class="save">
          <button>저장</button>
        </div>
      </div>
    </article>
    <Premium v-if="showModal" @showPremiumModal="showPremiumModal" />
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Premium from '../../../common/modal/dashboard/franchise/PremiumMembership.vue'

const showModal = ref<boolean>(false)
const showPremiumModal = () => {
  showModal.value = !showModal.value
}
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 0px 80px 160px;

  .none {
    text-decoration: none;
    color: inherit;
  }
  span {
    color: $subColor;
  }

  .top-title {
    font-size: 20px;
    font-weight: $medi;
    color: $fontMain;
    padding-bottom: 65px;
  }

  .top-category {
    display: flex;
    gap: 30px;
    color: $fontSub;
    border-bottom: 1px solid $iconLine;
    .category-name {
      cursor: pointer;
    }
    .select {
      color: $mainColor;
      font-weight: $semi;
      border-bottom: 2px solid $mainColor;
      padding-bottom: 14px;
    }
  }

  .brand-image {
    width: 1270px;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    .description-logo {
      .description {
        line-height: 24.5px;
        font-size: 14px;
        color: $fontSub;
        padding-bottom: 37px;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      .title {
        font-size: 18px;
        font-weight: $medi;
        color: $fontMain;
        padding-bottom: 3px;
      }
      .sub {
        font-size: 12px;
        color: $fontSub;
      }
      .image-section {
        background-color: #f2f4f7;
        margin-top: 20px;
        border-radius: 10px;
        .btn-upload {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 6px;
          color: $fontSub;
          cursor: pointer;
          i {
            font-size: 16px;
          }
          .value {
            font-size: 14px;
          }
        }
        #file {
          display: none;
        }
      }
    }
    .logo {
      width: 360px;
      height: 209px;
      .image-section {
        width: 225px;
        height: 90px;
      }
    }
    .list {
      width: 362px;
      .image-section {
        width: 227px;
        height: 227px;
      }
    }
    .representative-image {
      width: 490px;
      .image-section {
        width: 405px;
        height: 225px;
      }
    }
  }

  .content-section {
    display: flex;
    flex-direction: column;
    gap: 30px;
    .content {
      background-color: white;
      width: 1270px;
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      .box {
        padding: 30px;
        .title {
          font-size: 18px;
          font-weight: $medi;
          color: $fontMain;
          padding-bottom: 20px;
        }
        input {
          width: 100%;
          height: 50px;
          border-radius: 10px;
          border: 1px solid $iconLine;
          padding-left: 16px;
          box-sizing: border-box;
        }
        input::placeholder {
          font-family: Pretendard;
          font-size: 16px;
          color: $inputLine;
        }
        input:focus {
          border: 1px solid $mainColor;
        }
        button {
          background-color: #fafafa;
          border: none;
          color: $mainColor;
          font-family: Pretendard;
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
    .youtube {
      .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        .add {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          img {
            width: 24px;
            height: 24px;
            cursor: pointer;
          }
        }
        button {
          padding: 10px 20px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 4px;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .promotion {
      span {
        font-size: 12px;
      }
      .promotion-category {
        display: flex;
        gap: 20px;
        padding-bottom: 20px;
        .category {
          width: 80px;
          height: 80px;
          padding-top: 4px;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;

          border: 1px solid $iconLine;
          border-radius: 10px;
          font-size: 13px;
          color: $fontSub;

          cursor: pointer;
          img {
            width: 40px;
            height: 40px;
          }
        }
        .interior-gap {
          gap: 0;
        }
        .select {
          border: 1px solid $mainColor;
          color: $fontMain;
        }
      }
    }
    .height {
      height: 326px;
      .center {
        display: flex;
        gap: 20px;
        .image-section {
          border-radius: 10px;
          .btn-upload {
            width: 405px;
            height: 225px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 6px;

            background-color: #f2f4f7;
            border-radius: 10px;
            color: $fontSub;

            cursor: pointer;
            i {
              font-size: 16px;
            }
            .value {
              font-size: 14px;
            }
          }
          #file {
            display: none;
          }
        }
        button {
          width: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          border-radius: 10px;
          cursor: pointer;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .representative-menu {
      .menu-flex {
        display: flex;
        flex-direction: column;
        gap: 11px;

        .image-section {
          .btn-upload {
            width: 122px;
            height: 122px;
            .value {
              text-align: center;
            }
          }
        }
        .name-cost {
          display: flex;
          flex-direction: column;
          gap: 11px;
          input {
            padding: 0 14px;
            width: 122px;
            height: 41px;
            box-sizing: border-box;
            text-align: center;
          }
          .cost {
            width: 122px;
            height: 41px;
            padding: 0 14px;
            box-sizing: border-box;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;

            border: 1px solid $iconLine;
            border-radius: 10px;
            color: $fontMain;

            input {
              width: 100%;
              height: 39px;
              border: none;
              padding: 0;
            }
            input::placeholder {
              text-align: right;
              font-size: 16px;
              font-family: Pretendard;
              font-weight: $reg;
            }
            input:focus {
              text-align: right;
            }
          }
        }
      }
    }
    .save {
      margin-top: 30px;
      button {
        width: 1270px;
        height: 50px;

        background-color: $mainColor;
        border-radius: 10px;
        border: none;

        color: white;
        font-size: 16px;
        font-family: Pretendard;
        font-weight: $reg;

        cursor: pointer;
      }
    }
  }
}

@include tablet {
  article {
    padding: 50px 24px 60px 24px;

    .brand-image {
      width: 100%;
      flex-direction: column;
      gap: 30px;
      .description-logo {
        .description {
          padding-bottom: 30px;
        }
      }
      .logo {
        width: 100%;
        box-sizing: border-box;
      }
      .list {
        width: 100%;
        height: 344px;
      }
      .representative-image {
        width: 100%;
        height: 366px;
      }
    }

    .content-section {
      .content {
        width: 100%;
      }
      .promotion {
        .promotion-category {
          flex-wrap: wrap;
          .category {
            width: 20%;
          }
        }
      }
      .height {
        height: 385px;
        .center {
          flex-direction: column;
          align-items: center;
          button {
            flex-direction: row;
            width: 89px;
            height: 40px;
            border-radius: 50px;
          }
        }
      }
      .representative-menu {
        height: 253px;
        .menu-flex {
          width: 100%;
          flex-direction: row;
          .image-section {
            .btn-upload {
              width: 93px;
              height: 93px;
              .value {
                text-align: center;
              }
            }
          }
          .name-cost {
            width: 100%;
            input {
              width: 100%;
            }
            .cost {
              width: auto;
            }
          }
        }
      }
      .save {
        button {
          width: 100%;
        }
      }
    }
  }
}

@include mobile {
  article {
    padding: 0;

    .top-title {
      padding: 0;
      font-size: 16px;
      position: absolute;
      top: 23px;
      left: 24px;
    }

    .top-category {
      background-color: white;
      justify-content: space-around;
      padding: 16px 24px 0 24px;
      border-bottom: 1px solid $iconLine;
      font-size: 14px;
    }

    .brand-image {
      padding: 0 0 10px 0;
      width: 100%;
      flex-direction: column;
      gap: 10px;
      .description-logo {
        .description {
          background-color: white;
          padding: 30px 24px;
          font-size: 12px;
        }
      }
      .content {
        box-shadow: none;
        border-radius: 0;
        .title {
          font-size: 16px;
        }
        .sub {
          font-size: 11px;
        }
      }
      .logo {
        width: 100%;
        margin-top: 10px;
      }
      .list {
        width: 100%;
        height: 341px;
      }
      .representative-image {
        width: 100%;
        height: 299px;
        .image-section {
          width: 328px;
          height: 183px;
        }
      }
    }

    .content-section {
      gap: 10px;
      .content {
        width: 100%;
        border-radius: 0;
        box-shadow: none;
        .box {
          padding: 30px 24px;
          .title {
            font-size: 16px;
          }
        }
      }
      .promotion {
        .promotion-category {
          flex-wrap: wrap;
          .category {
            width: 20%;
            height: 70px;
            gap: 6px;
            font-size: 11px;
          }
          .interior-gap {
            gap: 0;
          }
        }
      }
      .height {
        height: 342px;
        .center {
          flex-direction: column;
          align-items: center;
          .image-section {
            .btn-upload {
              width: 328px;
              height: 183px;
            }
          }
          button {
            width: 89px;
            height: 40px;
            border-radius: 50px;
            flex-direction: row;
          }
        }
      }
      .representative-menu {
        height: 248px;
        .menu-flex {
          width: 100%;
          flex-direction: row;
          .image-section {
            .btn-upload {
              width: 89px;
              height: 89px;
            }
          }
          .name-cost {
            width: 100%;
            input {
              width: 100%;
            }
            .cost {
              width: 100%;
            }
          }
        }
      }
      .save {
        height: 100px;
        margin: 0px 0 60px 0;
        padding: 0 24px;
        display: flex;
        align-items: center;
        background-color: white;
        button {
          width: 100%;
          height: 60px;
        }
      }
    }
  }
}
</style>
