<template>
  <section>
    <article>
      <div class="top-title">마이메뉴</div>

      <div class="category">
        <RouterLink to="myinfo" class="none">
          <div class="category-name">내 정보관리</div>
        </RouterLink>
        <div class="category-name select">이용내역</div>
        <RouterLink to="addkeyword" class="none">
          <div class="category-name">대표키워드</div>
        </RouterLink>
      </div>

      <div class="date-state">
        <div class="date">
          <div class="date-gap">
            <input type="date" />
            <span>-</span>
            <input type="date" />
          </div>
          <button>조회</button>
        </div>

        <div class="check-list top-check">
          <label class="all">
            <input type="radio" name="state" id="all" checked />
            <div class="name">전체</div>
          </label>
          <label class="ing">
            <input type="radio" name="state" id="ing" />
            <div class="name">이용중</div>
          </label>
          <label class="complete">
            <input type="radio" name="state" id="complete" />
            <div class="name">이용완료</div>
          </label>
        </div>
      </div>

      <!-- <div class="history">
        <div class="ment">이용 내역이 없습니다.</div>
      </div> -->

      <div class="item">
        <div class="ing-item">
          <div class="padding">
            <div class="title">
              <div>구매완료 <span class="ing">· 이용중</span></div>
              <div class="pay">2023.01.01 결제(삼성카드)</div>
            </div>
            <div class="info-item">
              <div class="info">
                <div class="item-title">브랜드 핫클립 (30일)</div>
                <div class="period">
                  이용기간 : 2023.01.01 ~ 02.01
                  <span class="alarm">광고기간이 7일 남았습니다.</span>
                </div>
              </div>
              <div class="cost">
                <div class="text-right">
                  <div class="cost-title">
                    <span class="bold">550,000</span> 원
                  </div>
                  <div class="vat">VAT 포함</div>
                </div>
                <button>기간연장</button>
              </div>
            </div>
          </div>
        </div>

        <div class="ing-item">
          <div class="padding">
            <div class="title">
              <div>구매완료 <span class="ing">· 이용중</span></div>
              <div class="pay">2023.01.22 결제(계좌이체)</div>
            </div>
            <div class="info-item">
              <div class="info">
                <div class="item-title">
                  프리미엄 멤버십
                  <img
                    src="../../../../assets/dashboard/premium.png"
                    alt="프리미엄"
                  />
                </div>
                <div class="period">이용기간 : 2023.01.22 ~ 02.22</div>
              </div>
              <div class="cost">
                <div class="text-right">
                  <div class="cost-title">
                    월 <span class="bold">88,000</span> 원
                  </div>
                  <div class="vat">VAT 포함</div>
                </div>
                <button>해지</button>
              </div>
            </div>
          </div>
        </div>

        <div
          :class="{ style: bannerApply === 'show' }"
          class="ing-item add-banner"
        >
          <div class="padding">
            <div class="title">
              <div>구매완료 <span class="ing">· 이용중</span></div>
              <div class="pay">2023.00.00 결제(삼성카드)</div>
            </div>
            <div class="info-item">
              <div class="info">
                <div class="item-title">메인 Special 1 (30일)</div>
                <div class="period">이용기간 : 2023.00.00 ~ 00.00</div>
              </div>
              <div class="cost">
                <div class="text-right">
                  <div class="cost-title">
                    <span class="sub">1,100,000원</span>
                    <span class="bold">990,000</span> 원
                  </div>
                  <div class="vat">
                    <span class="discount"
                      ><img
                        src="../../../../assets/dashboard/arrow_down.png"
                        alt="down"
                      />10% 할인</span
                    >
                    · VAT 포함
                  </div>
                </div>
                <button>기간연장</button>
              </div>
            </div>
          </div>
          <div
            v-if="bannerApply !== 'show'"
            @click="bannerApply = 'show'"
            class="more"
          >
            <img
              src="../../../../assets/dashboard/arrow_more.png"
              alt="더보기"
            />
          </div>
        </div>
        <div v-if="bannerApply === 'show'" class="banner-section">
          <div class="padding">
            <div class="title-save">
              <div class="title">문구/이미지 수정</div>
              <button class="save">저장</button>
            </div>
            <div class="select-highlight">
              <div class="check-list">
                <label @click="highLight = 'title'" class="title">
                  <input type="radio" name="highlight" id="title" checked />
                  <div class="name">제목 강조</div>
                </label>
                <label @click="highLight = 'main'" class="main">
                  <input type="radio" name="highlight" id="main" />
                  <div class="name">본문 강조</div>
                </label>
                <label @click="highLight = 'all'" class="all">
                  <input type="radio" name="highlight" id="all" />
                  <div class="name">전체 강조</div>
                </label>
              </div>
              <div class="border"></div>
              <div class="ment">
                광고 문구 : 제목 12자 + 본문 14자 / 이미지 사이즈: 280x200
              </div>
            </div>
            <div class="setting-banner" :style="{ backgroundColor: main }">
              <div
                :class="{
                  titlelight: highLight === 'title',
                  mainlight: highLight === 'main',
                  alllight: highLight === 'all',
                }"
                class="input-section"
              >
                <input
                  class="title"
                  type="text"
                  placeholder="제목을 입력하세요"
                  maxlength="20"
                  :style="{ color: title }"
                />
                <input
                  class="main"
                  type="text"
                  placeholder="본문을 입력하세요"
                  maxlength="20"
                  :style="{ color: title }"
                />
              </div>
              <div class="image-section">
                <label for="file">
                  <div class="btn-upload">
                    <i class="fa-regular fa-image" />
                    <div class="value">280x200</div>
                  </div>
                </label>
                <input type="file" name="file" id="file" />
              </div>
            </div>
            <div class="select-color">
              <div class="box">
                <div class="name">문구색상</div>
                <ColorPicker
                  :color="title"
                  :visible-formats="['hex']"
                  alpha-channel="hide"
                  @color-change="titleColorChange"
                />
              </div>
              <div class="box">
                <div class="name">배경색상</div>
                <ColorPicker
                  :color="main"
                  :visible-formats="['hex']"
                  alpha-channel="hide"
                  @color-change="mainColorChange"
                />
              </div>
            </div>
            <div class="url-input">
              <div class="check-list">
                <div class="name">URL 주소</div>
                <label @click="recommendUrl = 'detail'" class="detail">
                  <input type="radio" name="url" id="detail" checked />
                  <div class="name">내 브랜드 상세</div>
                </label>
                <label @click="recommendUrl = 'url'" class="url">
                  <input type="radio" name="url" id="url" />
                  <div class="name">URL</div>
                </label>
              </div>
              <input
                class="link"
                type="text"
                placeholder="배너 클릭시 이동할 URL을 입력해 주세요."
                :disabled="recommendUrl === 'detail'"
                :class="{ urlstyle: recommendUrl === 'url' }"
              />
            </div>
            <div class="ment">
              · 배너의 문구 양식대로 등록해 주세요.<br />
              · 이미지는 사이즈에 맞춰 등록해 주세요.<br />
              · 이미지의 단위는 픽셀(px)입니다.<br />
              · 이미지는 배경없는 .png 파일만 등록이 가능합니다.
            </div>
          </div>
          <div @click="bannerApply = 'hide'" class="close">
            <img src="../../../../assets/login/arrow_up.png" alt="닫기" />
          </div>
        </div>

        <div
          :class="{ style: imageApply === 'show' }"
          class="complete-item add-banner"
        >
          <div class="padding">
            <div class="title">
              <div>구매완료 · 이용완료</div>
              <div class="pay">2023.00.00 결제(삼성카드)</div>
            </div>
            <div class="info-item">
              <div class="info">
                <div class="item-title">메인 TOP (00일)</div>
                <div class="period">이용기간 : 2023.00.00 ~ 00.00</div>
              </div>
              <div class="cost">
                <div class="text-right">
                  <div class="cost-title">
                    <span class="sub">1,100,000원</span>
                    <span class="bold">990,000</span> 원
                  </div>
                  <div class="vat">
                    <span class="discount"
                      ><img
                        src="../../../../assets/dashboard/arrow_down.png"
                        alt="down"
                      />10% 할인</span
                    >
                    · VAT 포함
                  </div>
                </div>
                <button class="disabled">기간연장</button>
              </div>
            </div>
          </div>
          <div
            v-if="imageApply !== 'show'"
            @click="imageApply = 'show'"
            class="more"
          >
            <img
              src="../../../../assets/dashboard/arrow_more.png"
              alt="더보기"
            />
          </div>
        </div>
        <div v-if="imageApply === 'show'" class="banner-section">
          <div class="padding">
            <div class="title-save">
              <div class="title">이미지 수정</div>
              <button class="save">저장</button>
            </div>
            <div class="apply-image">
              <div class="box">
                <div class="name">PC <span class="size">(2388x400)</span></div>
                <div class="image-section pc">
                  <label for="file">
                    <div class="btn-upload">
                      <i class="fa-regular fa-image" />
                      <div class="value">2388x400</div>
                    </div>
                  </label>
                  <input type="file" name="file" id="file" />
                </div>
              </div>
              <div class="flex">
                <div class="box">
                  <div class="name">
                    TAB <span class="size">(1360x300)</span>
                  </div>
                  <div class="image-section tab">
                    <label for="file">
                      <div class="btn-upload">
                        <i class="fa-regular fa-image" />
                        <div class="value">1360x300</div>
                      </div>
                    </label>
                    <input type="file" name="file" id="file" />
                  </div>
                </div>
                <div class="box">
                  <div class="name">
                    MOBILE <span class="size">(656x200)</span>
                  </div>
                  <div class="image-section mob">
                    <label for="file">
                      <div class="btn-upload">
                        <i class="fa-regular fa-image" />
                        <div class="value">656x200</div>
                      </div>
                    </label>
                    <input type="file" name="file" id="file" />
                  </div>
                </div>
              </div>
            </div>
            <div class="url-input">
              <div class="check-list">
                <div class="name">URL 주소</div>
                <label @click="mainTopUrl = 'detail'" class="detail">
                  <input type="radio" name="url2" id="detail2" checked />
                  <div class="name">내 브랜드 상세</div>
                </label>
                <label @click="mainTopUrl = 'url'" class="url">
                  <input type="radio" name="url2" id="url2" />
                  <div class="name">URL</div>
                </label>
              </div>
              <input
                class="link"
                type="text"
                placeholder="배너 클릭시 이동할 URL을 입력해 주세요."
                :disabled="mainTopUrl === 'detail'"
                :class="{ urlstyle: mainTopUrl === 'url' }"
              />
            </div>
            <div class="ment">
              · 이미지의 단위는 픽셀(px)입니다.<br />
              · 이미지는 사이즈에 맞춰 등록해 주세요.
            </div>
          </div>
          <div @click="imageApply = ''" class="close">
            <img src="../../../../assets/login/arrow_up.png" alt="닫기" />
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ColorChangeEvent, ColorPicker } from 'vue-accessible-color-picker'

const title = ref<string>('#777777')
const main = ref<string>('#EBEBEB')

const titleColorChange = (event: ColorChangeEvent) => {
  title.value = event.cssColor
}

const mainColorChange = (event: ColorChangeEvent) => {
  main.value = event.cssColor
}

const bannerApply = ref<string>('show')
const imageApply = ref<string>('show')
const highLight = ref<string>('title')
const recommendUrl = ref<string>('detail')
const mainTopUrl = ref<string>('detail')
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 0px 76px 160px;
  box-sizing: border-box;
  width: 100%;

  .none {
    text-decoration: none;
    color: inherit;
  }

  .check-list {
    display: flex;
    gap: 20px;
    label {
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      input {
        margin: 0;
        cursor: pointer;
      }
      input[type='radio'] {
        appearance: none;
        border: 1px solid $inputLine;
        border-radius: 50%;
        width: 16px;
        height: 16px;
      }
      input[type='radio']:checked {
        background-image: url(../../../../assets/dashboard/checked.png);
        background-repeat: no-repeat;
        background-size: 8px;
        background-position: center;
      }
      .name {
        font-size: 14px;
        color: $fontMain;
      }
    }
  }

  .top-title {
    font-size: 20px;
    font-weight: $medi;
    color: $fontMain;
    padding-bottom: 65px;
  }

  .category {
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

  .date-state {
    width: 1270px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .date {
      padding-top: 30px;
      display: flex;
      .date-gap {
        display: flex;
        align-items: center;
        gap: 5px;
        input {
          width: 152px;
          height: 40px;
          padding: 0 16px;
          box-sizing: border-box;
          border: none;
          border-radius: 50px;
          font-family: Pretendard;
        }
      }
      button {
        width: 152px;
        height: 40px;
        margin-left: 24px;
        border: none;
        border-radius: 50px;
        background-color: $mainColor;
        color: white;
        font-family: Pretendard;
        font-size: 14px;
        font-weight: $reg;
        cursor: pointer;
      }
    }
  }

  .history {
    margin-top: 30px;
    background-color: white;
    width: 1270px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    font-size: 14px;
    color: $fontSub;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item {
    width: 1270px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
    .ing-item,
    .complete-item {
      padding: 30px;
      box-sizing: border-box;
      background-color: white;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      z-index: 1;

      .title {
        padding-bottom: 10px;
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        border-bottom: 1px solid $sectionLine;
        font-size: 18px;
        color: $inputLine;
        font-weight: $medi;
        .ing {
          color: $mainColor;
        }
        .pay {
          font-size: 14px;
          color: $fontSub;
          font-weight: $reg;
        }
      }
      .info-item {
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        .info {
          .item-title {
            font-size: 18px;
            color: $fontMain;
            font-weight: $medi;
            display: flex;
            align-items: center;
            gap: 6px;
            img {
              width: 20px;
              height: 20px;
            }
          }
          .period {
            padding-top: 13px;
            font-size: 14px;
            color: $fontSub;
            .alarm {
              padding-left: 10px;
              color: $subColor;
              font-size: 12px;
              font-weight: $medi;
            }
          }
        }
        .cost {
          display: flex;
          gap: 30px;
          .text-right {
            .cost-title {
              font-size: 18px;
              color: $fontMain;
              .sub {
                font-size: 15px;
                color: $fontSub;
                text-decoration: line-through;
                padding-right: 10px;
              }
              .bold {
                font-weight: $medi;
              }
            }
            .vat {
              padding-top: 12px;
              font-size: 12px;
              color: $fontSub;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              gap: 3px;
              .discount {
                color: $mainColor;
                display: flex;
                align-items: center;
                img {
                  width: 14px;
                  height: 14px;
                }
              }
            }
          }
          button {
            width: 114px;
            background-color: white;
            border: 1px solid $mainColor;
            border-radius: 10px;
            font-size: 16px;
            font-family: Pretendard;
            color: $mainColor;
            cursor: pointer;
          }
          .disabled {
            background-color: $iconLine;
            border: none;
            color: $inputLine;
            cursor: default;
          }
        }
      }
    }
    .style {
      box-shadow: 0 0 0 1px $mainColor inset;
    }
    .add-banner {
      padding: 0;
      .padding {
        padding: 30px;
      }
      .more {
        width: 100%;
        display: flex;
        justify-content: center;
        border-top: 1px solid $sectionLine;
        padding: 10px 0;
        cursor: pointer;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }

    .banner-section {
      margin-top: -40px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      .padding {
        padding: 80px 30px 30px;
        .image-section {
          background-color: #f2f4f7;
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
        .ment {
          font-size: 14px;
          color: $fontSub;
          line-height: 24px;
        }
        .title-save {
          padding-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid $sectionLine;
          .title {
            color: $fontMain;
          }
          .save {
            width: 80px;
            height: 40px;
            border-radius: 10px;
            border: none;
            background-color: $mainColor;
            color: white;
            font-size: 16px;
            font-family: Pretendard;
            font-weight: $reg;
            cursor: pointer;
          }
        }
        .select-highlight {
          padding-top: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          .border {
            height: 17px;
            border: 1px solid $iconLine;
          }
        }
        .setting-banner {
          height: 100px;
          padding: 0 102px;
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          background-color: #ebebeb;
          border-radius: 10px;
          .input-section {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
            .title,
            .main {
              width: 100%;
              font-family: Pretendard;
              background-color: transparent;
              border: none;
            }
            .title {
              font-size: 20px;
            }
            .main {
              font-size: 16px;
            }
          }
          .titlelight {
            .title {
              font-weight: $semi;
            }
          }
          .mainlight {
            .main {
              font-weight: $semi;
            }
          }
          .alllight {
            .title,
            .main {
              font-weight: $semi;
            }
          }
          .image-section {
            width: 140px;
          }
        }
        .select-color {
          padding: 20px 0 30px;
          display: flex;
          gap: 20px;
          .box {
            display: flex;
            flex-direction: column;
            gap: 10px;
            .name {
              font-size: 14px;
              color: $fontMain;
            }
            .vacp-color-picker {
              padding: 0;
            }
          }
        }
        .url-input {
          border-bottom: 1px solid $sectionLine;
          margin-bottom: 30px;
          .name {
            font-size: 14px;
          }
          .link {
            width: 100%;
            height: 50px;
            margin: 20px 0 30px;
            border-radius: 10px;
            background-color: $sectionLine;
            border: 1px solid $iconLine;
            padding-left: 16px;
            box-sizing: border-box;
            font-size: 16px;
            font-family: $pre;
          }
          .link::placeholder {
            color: $inputLine;
          }
          .link:focus {
            border: 1px solid $mainColor;
          }
          .urlstyle {
            background-color: white;
          }
        }

        .apply-image {
          display: flex;
          flex-direction: column;
          gap: 30px;
          padding: 30px 0;
          .box {
            .name {
              font-size: 14px;
              color: $fontMain;
              padding-bottom: 10px;
              .size {
                font-size: 12px;
                color: $fontSub;
              }
            }
            .image-section {
              border-radius: 10px;
              height: 100px;
            }
            .pc {
              width: 1210px;
              height: 202px;
            }
          }
          .flex {
            display: flex;
            gap: 142px;
            .tab {
              width: 455px;
            }
            .mob {
              width: 328px;
            }
          }
        }
      }
      .close {
        width: 100%;
        display: flex;
        justify-content: center;
        border-top: 1px solid $sectionLine;
        padding: 10px 0;
        cursor: pointer;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}

@include tablet {
  article {
    padding: 50px 24px 60px;

    .date-state {
      width: 100%;
      flex-direction: column;
      .date {
        width: 100%;
        .date-gap {
          input {
            width: 100%;
          }
        }
      }
      .state {
        padding-top: 30px;
      }
    }

    .top-check {
      padding: 30px 30px 0 0;
    }

    .history {
      width: 100%;
    }

    .item {
      width: 100%;
      .ing-item,
      .complete-item {
        .info-item {
          flex-direction: column;
          gap: 30px;

          .cost {
            justify-content: flex-end;
            flex-direction: column;
            .text-right {
              .cost-title {
                display: flex;
                justify-content: flex-end;
                gap: 5px;
              }
            }
            button {
              width: 100%;
              height: 50px;
            }
          }
        }
      }
      .banner-section {
        .padding {
          .select-highlight {
            flex-direction: column;
            align-items: flex-start;
            .border {
              display: none;
            }
          }
          .setting-banner {
            padding: 0 30px;
            .input-section {
              input {
                width: 244px;
              }
            }
          }

          .apply-image {
            .box {
              .pc {
                width: 427px;
                height: 66px;
              }
            }
            .flex {
              flex-direction: column;
              gap: 32px;

              .tab {
                width: 427px;
                height: 89px;
              }
              .mob {
                width: 328px;
              }
            }
          }
        }
      }
    }
  }
}

@include mobile {
  article {
    padding: 0 0 60px 0;
    .top-title {
      position: absolute;
      top: 23px;
      left: 24px;
      font-size: 16px;
      padding: 0;
    }

    .category {
      background-color: white;
      justify-content: space-around;
      padding: 16px 24px 0 24px;
      border-bottom: 1px solid $iconLine;
      font-size: 14px;
    }

    .date-state {
      width: 100%;
      flex-direction: column;
      .date {
        width: 100%;
        padding: 30px 24px;
        box-sizing: border-box;
        background-color: white;
        flex-direction: column;
        .date-gap {
          width: 100%;
          justify-content: center;
          input {
            width: 100%;
            background-color: #fafafa;
          }
        }
        button {
          width: 100%;
          margin: 20px 0 0 0;
        }
      }
      .state {
        padding: 30px 24px 20px 24px;
      }
    }

    .top-check {
      padding: 30px 13px 20px 0;
    }

    .history {
      width: 100%;
      height: 479px;
      padding: 0 24px 0 24px;
      box-sizing: border-box;
      margin-top: 10px;
      box-shadow: none;
      border-radius: 0;
      align-items: flex-start;

      display: none;
      .ment {
        padding-top: 100px;
      }
    }

    .item {
      width: 100%;
      margin: 0;
      gap: 10px;
      .ing-item,
      .complete-item {
        border-radius: 0;
        box-shadow: none;
        padding: 33px 24px 30px;
        .title {
          font-size: 16px;
          .pay {
            font-size: 12px;
          }
        }
        .info-item {
          flex-direction: column;
          gap: 40px;
          .info {
            .item-title {
              font-size: 16px;
            }
            .period {
              padding-top: 10.5px;
              display: flex;
              flex-direction: column;
              font-size: 13px;
              gap: 0;
              .alarm {
                padding: 10px 0 0 0;
                font-size: 11px;
              }
            }
          }
          .cost {
            justify-content: flex-end;
            flex-direction: column;
            .text-right {
              .cost-title {
                font-size: 16px;
                display: flex;
                justify-content: flex-end;
                gap: 5px;
              }
              .vat {
                font-size: 10px;
              }
            }
            button {
              width: 100%;
              height: 50px;
              font-size: 14px;
            }
          }
        }
      }

      .style {
        border-bottom: 1px solid $mainColor;
      }

      .add-banner {
        .padding {
          padding: 0;
        }
      }

      .banner-section {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        margin-bottom: 20px;
        .padding {
          padding: 70px 24px 30px;
          .title-save {
            .title {
              font-size: 14px;
            }
            .save {
              font-size: 14px;
            }
          }
          .ment {
            font-size: 12px;
          }
          .select-highlight {
            flex-direction: column;
            align-items: flex-start;
            .border {
              display: none;
            }
          }
          .setting-banner {
            padding: 0 20px;
            .input-section {
              input {
                width: 148px;
              }
              .title {
                font-size: 15px;
              }
              .main {
                font-size: 13px;
              }
            }
          }
          .select-color {
            .box {
              .name {
                font-size: 13px;
              }
            }
          }
          .url-input {
            .check-list {
              padding: 0 0 20px;
              .name {
                font-size: 13px;
              }
            }
            .link {
              margin: 0 0 30px;
            }
          }
          .apply-image {
            .box {
              .pc {
                width: 100%;
                height: 55px;
              }
            }
            .flex {
              flex-direction: column;
              gap: 30px;
              .tab {
                width: 100%;
                height: 72px;
              }
              .mob {
                width: 100%;
                height: 100px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
