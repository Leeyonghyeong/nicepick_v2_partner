<template>
  <section>
    <article>
      <div class="top-title">브랜드</div>

      <div class="category">
        <RouterLink to="management" class="none">
          <div class="category-name">브랜드 관리</div>
        </RouterLink>
        <div class="category-name select">브랜드 정보 수정</div>
      </div>

      <div class="content-section no-padding">
        <div class="content">
          <div class="title">
            가맹점 증감현황
            <span class="sub-title">(최근 3년)</span>
          </div>

          <div class="info-section">
            <div class="input-section">
              <div class="input-title">신규개점</div>
              <div class="input-gap">
                <div class="border-section">
                  <!-- <div class="year">2023년</div> -->
                  <input type="text" placeholder="0" /> 개
                </div>
                <div class="border-section">
                  <!-- <div class="year">2022년</div> -->
                  <input type="text" placeholder="0" /> 개
                </div>
                <div class="border-section">
                  <!-- <div class="year">2021년</div> -->
                  <input type="text" placeholder="0" /> 개
                </div>
              </div>
            </div>
            <div class="input-section">
              <div class="input-title">계약종료</div>
              <div class="input-gap">
                <div class="border-section">
                  <input type="text" placeholder="0" /> 개
                </div>
                <div class="border-section">
                  <input type="text" placeholder="0" /> 개
                </div>
                <div class="border-section">
                  <input type="text" placeholder="0" /> 개
                </div>
              </div>
            </div>
            <div class="input-section">
              <div class="input-title">계약해지</div>
              <div class="input-gap">
                <div class="border-section">
                  <input type="text" placeholder="0" /> 개
                </div>
                <div class="border-section">
                  <input type="text" placeholder="0" /> 개
                </div>
                <div class="border-section">
                  <input type="text" placeholder="0" /> 개
                </div>
              </div>
            </div>
            <div class="input-section">
              <div class="input-title">명의변경</div>
              <div class="input-gap">
                <div class="border-section">
                  <input type="text" placeholder="0" /> 개
                </div>
                <div class="border-section">
                  <input type="text" placeholder="0" /> 개
                </div>
                <div class="border-section">
                  <input type="text" placeholder="0" /> 개
                </div>
              </div>
            </div>
          </div>

          <div class="comment">
            <div class="title">담당자 코멘트</div>
            <input type="text" placeholder="코멘트 입력" />
          </div>
        </div>
      </div>

      <div class="content-section">
        <div class="content">
          <div class="title">
            연도별 매장 현황
            <span class="sub-title">(최근 3년)</span>
          </div>

          <div class="info-section">
            <div class="input-section">
              <div class="input-title">가맹점 및 직영점 수</div>
              <div class="input-gap">
                <div class="border-section">
                  <input type="text" placeholder="0" /> 개
                </div>
                <div class="border-section">
                  <input type="text" placeholder="0" /> 개
                </div>
                <div class="border-section">
                  <input type="text" placeholder="0" /> 개
                </div>
              </div>
            </div>
          </div>

          <div class="comment">
            <div class="title">담당자 코멘트</div>
            <input type="text" placeholder="코멘트 입력" />
          </div>
        </div>
      </div>

      <div class="content-section">
        <div class="content">
          <div class="title">창업비용</div>

          <div class="info-section mobile-gap">
            <div class="input-section calculator">
              <div class="input-title">가맹비</div>
              <div class="border-section">
                <input type="text" placeholder="0" /> 원
              </div>
            </div>
            <div class="input-section calculator">
              <div class="input-title">교육비</div>
              <div class="border-section">
                <input type="text" placeholder="0" /> 원
              </div>
            </div>
            <div class="input-section calculator">
              <div class="input-title">보증금</div>
              <div class="border-section">
                <input type="text" placeholder="0" /> 원
              </div>
            </div>
            <div class="input-section calculator">
              <div class="input-title">기타비용</div>
              <div class="border-section">
                <input type="text" placeholder="0" /> 원
              </div>
            </div>
            <div class="input-section calculator">
              <div class="input-title">인테리어</div>
              <div class="border-section">
                <input type="text" placeholder="0" /> 원
              </div>
            </div>
            <div class="input-section calculator total">
              <div class="input-title">총합계</div>
              <div class="total-section"><span>2,000,000</span> 원</div>
            </div>
          </div>

          <div class="comment">
            <div class="title">담당자 코멘트</div>
            <input type="text" placeholder="코멘트 입력" />
          </div>
        </div>
      </div>

      <div class="select-set">
        <label for="maintain" class="select maintain">
          <input type="radio" name="select" id="maintain" checked />
          <div class="select-title">
            <div class="title">현재 작성한 내용으로 브랜드 정보 저장</div>
            <div class="sub-title">
              (정보공개서의 정보가 업데이트와 상관없이 작성한 정보를 유지하고
              싶은 경우)
            </div>
          </div>
        </label>

        <label for="update" class="select">
          <input type="radio" name="select" id="update" />
          <div class="select-title">
            <div class="title">정보공개서 정보 업데이트 희망</div>
            <div class="sub-title">
              (정보공개서의 정보가 업데이트 될 때마다 적용을 원하는 경우)
            </div>
          </div>
        </label>
      </div>

      <div class="save">
        <button>저장</button>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 0px 80px 160px;

  .none {
    text-decoration: none;
    color: inherit;
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

  .content-section {
    padding-top: 30px;

    .content {
      background-color: white;
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      padding: 30px;
      box-sizing: border-box;
      width: 1270px;

      .title {
        font-size: 18px;
        color: $fontMain;
        font-weight: $medi;
        padding-bottom: 30px;
        .sub-title {
          font-size: 12px;
          color: $fontSub;
        }
      }

      .info-section {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-bottom: 30px;

        .input-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .input-title {
            color: $fontMain;
            font-weight: $reg;
          }

          .input-gap {
            display: flex;
            gap: 30px;
            .border-section {
              width: 332px;
              height: 50px;
              padding: 15px 16px 16px 16px;
              box-sizing: border-box;

              display: flex;
              align-items: center;
              justify-content: flex-end;

              border: 1px solid $iconLine;
              border-radius: 10px;
              color: $fontMain;

              input {
                width: 100%;
                height: 46px;
                border: none;
              }
              input::placeholder {
                text-align: right;
                font-size: 16px;
                font-family: Pretendard;
                color: $inputLine;
                font-weight: $reg;
              }
              input:focus {
                text-align: right;
              }
            }
          }
        }

        .calculator {
          .border-section {
            width: 1056px;
            height: 50px;
            padding: 15px 16px 16px 16px;
            box-sizing: border-box;

            display: flex;
            align-items: center;
            justify-content: flex-end;

            border: 1px solid $iconLine;
            border-radius: 10px;
            color: $fontMain;

            input {
              width: 100%;
              height: 46px;
              border: none;
            }
            input::placeholder {
              text-align: right;
              font-size: 16px;
              font-family: Pretendard;
              color: $inputLine;
              font-weight: $reg;
            }
            input:focus {
              text-align: right;
            }
          }
        }

        .total {
          padding-top: 30px;
          .total-section {
            font-weight: $reg;
            span {
              font-size: 20px;
              color: $mainColor;
              font-weight: $medi;
            }
          }
        }
      }

      .comment {
        padding-top: 30px;
        border-top: 1px solid $iconLine;

        .title {
          font-size: 16px;
          font-weight: $reg;
        }
        input {
          width: 100%;
          height: 50px;
          border-radius: 10px;
          border: 1px solid $iconLine;
          padding: 15px 16px 16px 16px;
          box-sizing: border-box;
        }
        input::placeholder {
          color: $inputLine;
        }
      }
    }
  }

  .select-set {
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    width: 1270px;

    .select {
      width: 620px;
      height: 134px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      background-color: white;
      border-radius: 10px;
      font-size: 14px;

      cursor: pointer;

      .select-title {
        text-align: center;
        .title {
          font-weight: $medi;
          color: $fontMain;
        }
        .sub-title {
          padding-top: 10px;
          font-weight: $reg;
          color: $fontSub;
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

@include tablet {
  article {
    padding: 50px 24px 60px 24px;

    .content-section {
      .content {
        width: 100%;

        .info-section {
          .input-section {
            .input-gap {
              gap: 8px;
              .border-section {
                width: 114px;
              }
            }
          }

          .calculator {
            .border-section {
              width: 358px;
            }
          }
        }

        .comment {
          .title {
            padding-bottom: 20px;
          }
        }
      }
    }

    .select-set {
      width: 100%;
      .select {
        padding: 0px 7px 0px 6px;
        width: 100%;
        height: 157px;

        .sub-title {
          text-align: center;
          line-height: 24px;
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

    .category {
      background-color: white;
      justify-content: space-around;
      padding: 16px 24px 0 24px;
      border-bottom: 1px solid $iconLine;
      font-size: 14px;
    }

    .content-section {
      padding-top: 10px;
      .content {
        width: 100%;
        border-radius: 0;
        box-shadow: none;
        .title {
          font-size: 16px;
        }

        .info-section {
          .input-section {
            display: block;
            .input-title {
              font-size: 14px;
              padding-bottom: 10px;
            }
            .input-gap {
              gap: 8px;
              .border-section {
                width: 100%;
                font-size: 14px;

                input::placeholder {
                  font-size: 14px;
                }
              }
            }
          }
        }

        .mobile-gap {
          gap: 20px;
          .calculator {
            .border-section {
              width: 100%;
            }
          }
          .total {
            display: flex;
            padding-top: 15px;
            .input-title {
              padding: 0;
            }
            .total-section {
              font-size: 14px;
              span {
                font-size: 18px;
              }
            }
          }
        }

        .comment {
          .title {
            font-size: 14px;
            padding-bottom: 10px;
          }
        }
      }
    }

    .no-padding {
      padding-top: 0;
    }

    .select-set {
      width: 100%;
      padding-top: 10px;
      flex-direction: column;
      gap: 0;

      .select {
        width: 100%;
        height: 113px;
        padding: 20px 23px 20px 24px;
        box-sizing: border-box;

        justify-content: flex-start;
        gap: 16px;
        flex-direction: row;

        border-radius: 0;
        .select-title {
          display: flex;
          flex-direction: column;
          text-align: justify;

          .sub-title {
            line-height: 24px;
            font-size: 12px;
          }
        }
      }
      .maintain {
        border-bottom: 1px solid $iconLine;
      }
    }

    .save {
      height: 100px;
      margin: 10px 0 60px 0;
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
</style>
