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

      <div class="content-section">
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

          <div class="info-section">
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
        <div class="select">
          <input type="radio" checked />
          <div class="title">현재 작성한 내용으로 브랜드 정보 저장</div>
          <div class="sub-title">
            (정보공개서의 정보가 업데이트와 상관없이 작성한 정보를 유지하고 싶은
            경우)
          </div>
        </div>

        <div class="select">
          <input type="radio" />
          <div class="title">정보공개서 정보 업데이트 희망</div>
          <div class="sub-title">
            (정보공개서의 정보가 업데이트 될 때마다 적용을 원하는 경우)
          </div>
        </div>
      </div>

      <button class="save">저장</button>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 160px 80px 160px;

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
    font-weight: $reg;
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

    .select {
      width: 100%;
      height: 134px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background-color: white;
      border-radius: 10px;
    }
  }
}
</style>
