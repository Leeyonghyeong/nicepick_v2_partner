<template>
  <section>
    <article>
      <div class="top-title">
        <img
          v-if="getDevice === 'mobile'"
          src="../../assets/login/arrow_lt.png"
          alt="이전"
        />
        신청/결제
      </div>

      <div class="sequence">
        <div class="left">
          <div class="item-info">
            <div class="title">상품 정보</div>
            <div class="box">
              <div class="item">
                <div class="name-delete">
                  <div class="name">
                    <div class="bold">브랜드 핫클립 (30일)</div>
                    <div class="sub">홈 영상컨텐츠 노출</div>
                  </div>
                  <img
                    class="x"
                    src="../../assets/dashboard/cart_delete.png"
                    alt="삭제"
                  />
                </div>
                <div class="option-cost no-option">
                  <div class="cost">
                    <div class="bold">550,000원</div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="name-delete">
                  <div class="item-name">
                    <div class="name">
                      <div class="bold">
                        프리미엄 멤버십
                        <img
                          src="../../assets/dashboard/premium.png"
                          alt="프리미엄"
                        />
                      </div>
                      <div class="sub">
                        해시태그 + 페이지 상위 노출 + 다이렉트 고객 매칭
                      </div>
                    </div>
                  </div>
                  <img
                    class="x"
                    src="../../assets/dashboard/cart_delete.png"
                    alt="삭제"
                  />
                </div>
                <div class="option-cost no-option">
                  <div class="cost">
                    <div class="bold">88,000원</div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="name-delete">
                  <div class="name">
                    <div class="bold">추천브랜드 2 (60일)</div>
                    <div class="sub">
                      브랜드 상세페이지 하단 브랜드 리스트 노출
                    </div>
                  </div>
                  <img
                    class="x"
                    src="../../assets/dashboard/cart_delete.png"
                    alt="삭제"
                  />
                </div>
                <div class="option-cost no-option">
                  <div class="cost">
                    <div class="bold">990,000원</div>
                    <div class="sub">1,100,000원</div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="name-delete">
                  <div class="name">
                    <div class="bold">상권 지역플러스+ (30일)</div>
                    <div class="sub">상권지도 주변 지역 추가 노출</div>
                  </div>
                  <img
                    class="x"
                    src="../../assets/dashboard/cart_delete.png"
                    alt="삭제"
                  />
                </div>
                <div class="option-cost no-option">
                  <div class="cost">
                    <div class="bold">99,000원</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="image-apply">
            <div class="title">이미지 등록</div>
            <div class="box main-top">
              <div class="title-button">
                <div class="title">메인 TOP</div>
                <button>등록</button>
              </div>
              <div class="content pc">
                <div class="name">PC</div>
                <div class="image-section">
                  <label for="file">
                    <div class="upload-btn">
                      <i class="fa-regular fa-image" />
                      <div class="value">2388x400</div>
                    </div>
                  </label>
                  <input type="file" name="file" id="file" />
                </div>
              </div>
              <div class="flex">
                <div class="content tab">
                  <div class="name">TAB</div>
                  <div class="image-section">
                    <label for="file">
                      <div class="upload-btn">
                        <i class="fa-regular fa-image" />
                        <div class="value">1360x300</div>
                      </div>
                    </label>
                    <input type="file" name="file" id="file" />
                  </div>
                </div>
                <div class="content mob">
                  <div class="name">MOB</div>
                  <div class="image-section">
                    <label for="file">
                      <div class="upload-btn">
                        <i class="fa-regular fa-image" />
                        <div class="value">656x200</div>
                      </div>
                    </label>
                    <input type="file" name="file" id="file" />
                  </div>
                </div>
              </div>
              <div class="guide">
                · 이미지는 사이즈에 맞춰 등록해 주세요. <br />
                · 이미지의 단위는 픽셀(px)입니다. <br />
                · 등록한 이미지는 [마이메뉴>이용내역]에서 수정하실 수 있습니다.
              </div>
            </div>
            <div class="box main-special">
              <div class="title-button">
                <div class="title">메인 Special 1</div>
                <button>등록</button>
              </div>
              <div class="select-highlight">
                <div class="flex">
                  <label class="title">
                    <input type="radio" name="select" id="title" checked />
                    <div class="name">제목 강조</div>
                  </label>
                  <label class="main">
                    <input type="radio" name="select" id="main" />
                    <div class="name">본문 강조</div>
                  </label>
                  <label class="all">
                    <input type="radio" name="select" id="all" />
                    <div class="name">전체 강조</div>
                  </label>
                </div>
                <div class="border"></div>
                <div class="sub">광고 문구 : 제목 12자 + 본문 14자</div>
              </div>
              <div class="setting-banner" :style="{ backgroundColor: main }">
                <div class="input-section">
                  <input
                    class="title"
                    type="text"
                    placeholder="제목을 입력하세요"
                    maxlength="12"
                    :style="{ color: title }"
                  />
                  <input
                    class="main"
                    type="text"
                    placeholder="본문을 입력하세요"
                    maxlength="14"
                    :style="{ color: title }"
                  />
                </div>
                <div class="image-section">
                  <label for="file">
                    <div class="upload-btn">
                      <i class="fa-regular fa-image" />
                      <div class="value">280x200</div>
                    </div>
                  </label>
                  <input type="file" name="file" id="file" />
                </div>
              </div>
              <div class="select-color">
                <div class="color">
                  <div class="name">문구색상</div>
                  <ColorPicker
                    :color="title"
                    :visible-formats="['hex']"
                    alpha-channel="hide"
                    @color-change="titleColorChange"
                  />
                </div>
                <div class="color">
                  <div class="name">배경색상</div>
                  <ColorPicker
                    :color="main"
                    :visible-formats="['hex']"
                    alpha-channel="hide"
                    @color-change="mainColorChange"
                  />
                </div>
              </div>
              <div class="guide">
                · 배너의 문구 양식대로 등록해 주세요.<br />
                · 이미지는 사이즈에 맞춰 등록해 주세요.<br />
                · 이미지의 단위는 픽셀(px)입니다.<br />
                · 이미지는 배경없는 .png 파일만 등록이 가능합니다.
              </div>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="payment">
            <div class="title">최종 결제 금액</div>
            <div class="box">
              <div class="flex">
                <div class="name-cost">
                  <div class="name">상품 신청 금액</div>
                  <div class="cost">1,188,000원</div>
                </div>
                <div class="name-cost">
                  <div class="name">할인 금액</div>
                  <div class="cost discount">-110,000원</div>
                </div>
              </div>
              <div class="total">
                <div class="name">총 합계</div>
                <div class="cost"><span class="semi">1,078,000</span>원</div>
              </div>
            </div>
          </div>

          <div class="way">
            <div class="title">결제수단</div>
            <div class="box pay-btn">
              <button class="select">
                <i class="fa-regular fa-money-bill-1"></i>
                신용카드
              </button>
              <button>
                <i class="fa-regular fa-credit-card"></i>
                계좌이체
              </button>
            </div>
          </div>

          <div class="accent">
            <div class="box check-section">
              <div class="name-check all">
                <div class="name">전체 동의</div>
                <div class="check">
                  <input type="checkbox" id="check1" />
                  <label for="check1"></label>
                </div>
              </div>
              <div class="name-check">
                <div class="name">
                  주문 상품, 이용기간, 금액 등 확인 및 결제 동의
                </div>
                <div class="check">
                  <input type="checkbox" id="check2" />
                  <label for="check2"></label>
                </div>
              </div>
              <div class="name-check">
                <div class="name link">환불 정책 동의</div>
                <div class="check">
                  <input type="checkbox" id="check3" />
                  <label for="check3"></label>
                </div>
              </div>
            </div>
          </div>

          <button class="charge">
            <span class="semi">1,078,000원</span>
            결제하기
          </button>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { ColorChangeEvent, ColorPicker } from 'vue-accessible-color-picker'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const title = ref<string>('#777777')
const main = ref<string>('#EBEBEB')

const titleColorChange = (event: ColorChangeEvent) => {
  title.value = event.cssColor
}

const mainColorChange = (event: ColorChangeEvent) => {
  main.value = event.cssColor
}

const countItem = ref<number>(1)
const countUp = () => {
  countItem.value++
}
const countDown = () => {
  countItem.value--
}
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 24px 0 24px;

  .top-title {
    font-size: 20px;
    font-weight: $medi;
    color: $fontMain;
  }

  .sequence {
    padding-top: 50px;
    .title {
      font-size: 18px;
      font-weight: $medi;
      color: $fontMain;
      padding-bottom: 20px;
    }
    .box {
      padding: 30px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    }

    .left {
      .item-info {
        .box {
          padding: 0 30px 34px 30px;
          display: flex;
          flex-direction: column;
        }
        .item {
          padding: 30px 0 40px 0;
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid $sectionLine;
          .name-delete {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            .name {
              display: flex;
              flex-direction: column;
              color: $fontMain;
              font-weight: $medi;
              .bold {
                display: flex;
                align-items: center;
                gap: 5px;
              }
              .sub {
                padding-top: 10px;
                color: $fontSub;
                font-size: 12px;
              }
            }
            img {
              width: 20px;
              height: 20px;
            }
            .x {
              cursor: pointer;
            }
          }
          .option-cost {
            padding-top: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .option {
              width: 130px;
              height: 40px;
              border: 1px solid $inputLine;
              border-radius: 5px;
              background-color: white;
              font-size: 14px;
              font-family: Pretendard;
              font-weight: $reg;
              color: $fontSub;
              cursor: pointer;
            }
            .btn {
              display: flex;
              align-items: center;
              gap: 5px;
              img {
                width: 20px;
                height: 20px;
                cursor: pointer;
              }
              input {
                width: 70px;
                height: 40px;
                border-radius: 5px;
                border: 1px solid $inputLine;
                font-family: $pre;
                font-size: 13px;
                color: $fontSub;
                text-align: center;
              }
            }
            .cost {
              text-align: right;
              .bold {
                font-size: 18px;
                color: $fontMain;
                font-weight: $medi;
              }
              .sub {
                font-size: 12px;
                color: $fontSub;
                text-decoration: line-through;
                font-weight: $reg;
                padding-top: 10px;
              }
            }
          }
          .no-option {
            justify-content: flex-end;
          }
        }
      }

      .image-apply {
        padding-top: 60px;
        .title {
          padding-bottom: 0;
        }
        .image-section {
          width: 100%;
          background-color: #f2f4f7;
          border-radius: 10px;
          .name {
            font-size: 14px;
            margin-bottom: 10px;
          }
          .upload-btn {
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
        .box {
          margin-top: 20px;
          .title-button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid $sectionLine;
            padding-bottom: 10px;
            button {
              width: 80px;
              height: 40px;
              border-radius: 10px;
              border: none;
              background-color: $inputLine;
              font-family: Pretendard;
              font-size: 16px;
              font-weight: $reg;
              color: white;
              cursor: pointer;
            }
          }
          .content {
            padding-top: 30px;
            .name {
              font-size: 14px;
              color: $fontMain;
              padding-bottom: 10px;
            }
          }
          .pc {
            .image-section {
              width: 444px;
              height: 74px;
            }
          }
          .tab {
            .image-section {
              width: 444px;
              height: 98px;
            }
          }
          .mob {
            .image-section {
              width: 328px;
              height: 100px;
            }
          }
          .guide {
            border-top: 1px solid $sectionLine;
            padding-top: 30px;
            margin-top: 30px;
            font-size: 14px;
            color: $fontSub;
            line-height: 24px;
          }
        }

        .main-special {
          .select-highlight {
            padding-top: 30px;
            display: flex;
            align-items: center;
            gap: 20px;
            .flex {
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
                  background-image: url(../../assets/dashboard/checked.png);
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
            .border {
              height: 17px;
              border: 1px solid $iconLine;
            }
            .sub {
              font-size: 14px;
              color: $fontSub;
            }
          }
          .setting-banner {
            height: 100px;
            padding: 0 30px;
            margin-top: 20px;
            display: flex;
            justify-content: center;
            background-color: #ebebeb;
            border-radius: 10px;
            .input-section {
              display: flex;
              flex-direction: column;
              justify-content: center;
              gap: 5px;
              input {
                width: 244px;
              }
              .title,
              .main {
                font-family: Pretendard;
                background-color: transparent;
                border: none;
              }
              .title {
                font-weight: $semi;
                font-size: 20px;
              }
              .main {
                font-size: 16px;
              }
            }
            .image-section {
              width: 140px;
              border-radius: 0;
            }
          }
          .select-color {
            padding: 20px 0 30px 0;
            display: flex;
            gap: 20px;
            .box {
              display: flex;
              align-items: center;
              gap: 10px;
              .name {
                font-size: 14px;
                color: $fontMain;
              }
            }
          }
          .guide {
            margin: 0;
          }
        }
      }
    }

    .right {
      .payment {
        padding-top: 60px;
        .flex {
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-bottom: 1px solid $sectionLine;
          padding-bottom: 30px;
          margin-bottom: 20px;
        }
        .name-cost,
        .total {
          display: flex;
          justify-content: space-between;
        }
        .name-cost {
          font-size: 14px;
          color: $fontMain;
          .cost {
            font-weight: $medi;
          }
          .discount {
            color: $subColor;
          }
        }
        .total {
          .name {
            color: $fontMain;
          }
          .cost {
            font-size: 18px;
            color: $mainColor;
            font-weight: $medi;
            .semi {
              font-weight: $semi;
            }
          }
        }
      }

      .way {
        padding-top: 30px;
        .pay-btn {
          display: flex;
          flex-direction: column;
          gap: 10px;
          button {
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 6px;
            border-radius: 10px;
            border: 1px solid $inputLine;
            background-color: white;
            font-family: Pretendard;
            font-size: 16px;
            color: $fontSub;
            cursor: pointer;
            i {
              font-size: 19px;
            }
          }
          button:hover,
          .select {
            border: 1px solid $mainColor;
            color: $mainColor;
          }
        }
      }

      .accent {
        padding-top: 20px;
        .check-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
          .name-check {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .name {
              font-size: 12px;
              color: $fontSub;
            }
            .link {
              text-decoration: underline;
              cursor: pointer;
            }
            .check {
              height: 20px;
              input[type='checkbox'] {
                display: none;
              }
              input[type='checkbox'] + label {
                display: inline-block;
                width: 20px;
                height: 20px;
                box-sizing: border-box;
                border: 1px solid $inputLine;
                border-radius: 3px;
                position: relative;
                cursor: pointer;
              }
              input[id='check1']:checked + label::after,
              input[id='check2']:checked + label::after,
              input[id='check3']:checked + label::after,
              input[id='check4']:checked + label::after {
                content: '';
                background-image: url(../../assets/dashboard/check.png);
                background-repeat: no-repeat;
                background-position: 4px;
                width: 20px;
                height: 20px;
                box-sizing: border-box;
                position: absolute;
                border: 1px solid $mainColor;
                border-radius: 3px;
                top: -1px;
                left: -1px;
                cursor: pointer;
              }
            }
          }
          .all {
            border-bottom: 1px solid $sectionLine;
            padding-bottom: 15px;
            .name {
              font-size: 15px;
            }
          }
        }
      }

      .charge {
        margin-top: 20px;
        width: 100%;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: $mainColor;
        color: white;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: $reg;
        .semi {
          font-weight: $semi;
        }
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
      font-size: 16px;
      padding: 0;
      img {
        width: 30px;
        height: 30px;
      }
    }

    .sequence {
      padding: 0;
      .title {
        padding: 30px 0 20px 24px;
        background-color: white;
        font-size: 16px;
        border-bottom: 1px solid $sectionLine;
      }
      .box {
        border-radius: 0;
        box-shadow: none;
      }

      .left {
        .item-info {
          .box {
            padding: 0 24px 34px 24px;
          }
        }

        .image-apply {
          padding-top: 10px;
          .title {
            padding: 30px 0 20px 24px;
          }
          .box {
            margin-top: 10px;
            padding: 30px 24px;
            .title-button {
              .title {
                padding: 0;
                border-bottom: none;
              }
            }

            .guide {
              font-size: 12px;
            }
          }

          .main-top {
            margin-top: 0;
            .pc {
              .image-section {
                width: 100%;
                height: 50px;
              }
            }
            .tab {
              .image-section {
                width: 100%;
                height: 72px;
              }
            }
            .mob {
              .image-section {
                width: 100%;
                height: 100px;
              }
            }
          }

          .main-special {
            .select-highlight {
              flex-direction: column;
              align-items: flex-start;
              gap: 0;
              .flex {
                .title {
                  padding: 0;
                  border-bottom: none;
                }
              }
              .border {
                border: none;
              }
              .sub {
                font-size: 12px;
              }
            }
            .setting-banner {
              padding: 0 10px;
              .input-section {
                input {
                  width: 148px;
                }
                .title {
                  font-size: 15px;
                  padding: 0;
                }
                .main {
                  font-size: 13px;
                }
              }
            }
          }
        }
      }

      .right {
        .payment {
          background-color: white;
          padding: 0 24px;
          margin-top: 10px;
          .title {
            padding-left: 0;
          }
          .box {
            padding: 30px 0;
          }
        }

        .way {
          background-color: white;
          padding: 0 24px;
        }

        .accent {
          padding-top: 10px;
          margin-bottom: 50px;
        }

        .charge {
          margin-top: 0;
          position: absolute;
          position: fixed;
          bottom: 0;
          border-radius: 0;
        }
      }
    }
  }
}

@include pc {
  article {
    padding: 50px 160px 80px 160px;

    .sequence {
      display: flex;
      gap: 30px;

      .left {
        width: 880px;
        .item-info {
          .item {
            padding: 33px 0;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            position: relative;
            .name-delete {
              .x {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(-50%, -50%);
              }
              .item-name {
                gap: 20px;
                align-items: center;
              }
            }
            .option-cost {
              margin-right: 72px;
              width: 320px;
              padding-top: 0;
            }
          }
        }

        .image-apply {
          .box {
            .flex {
              display: flex;
              gap: 37px;
            }
            .pc {
              .image-section {
                width: 820px;
                height: 137px;
              }
            }
            .tab {
              .image-section {
                width: 455px;
                height: 100px;
              }
            }
            .mob {
              .image-section {
                width: 328px;
                height: 100px;
              }
            }
          }

          .main-special {
            .setting-banner {
              padding: 0 80px;
              justify-content: space-between;
              .input-section {
                gap: 0;
                input {
                  width: 100%;
                }
              }
            }
          }
        }
      }

      .right {
        width: 360px;
        .payment {
          padding-top: 35px;
        }
      }
    }
  }
}
</style>
