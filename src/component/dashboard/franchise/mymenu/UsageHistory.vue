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
            <input type="date" value="" />
            <span>-</span>
            <input type="date" value="" />
          </div>
          <button>조회</button>
        </div>

        <div class="state">
          <label class="all">
            <input type="radio" name="select" id="all" checked />
            <div>전체</div>
          </label>
          <label class="ing">
            <input type="radio" name="select" id="ing" />
            <div>이용중</div>
          </label>
          <label class="complete">
            <input type="radio" name="select" id="complete" />
            <div>이용완료</div>
          </label>
        </div>
      </div>

      <!-- <div class="history">
        <div class="ment">이용 내역이 없습니다.</div>
      </div> -->

      <div class="item">
        <div class="ing-item">
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

        <div class="ing-item">
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

        <div class="ing-item">
          <div class="title">
            <div>구매완료 <span class="ing">· 이용중</span></div>
            <div class="pay">2023.00.00 결제(삼성카드)</div>
          </div>
          <div class="info-item">
            <div class="info">
              <div class="item-title">추천 브랜드 (00일)</div>
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
          <div class="more">
            <img src="../../../../assets/login/arrow_down.png" alt="더보기" />
          </div>
        </div>

        <div class="complete-item">
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
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

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
    .state {
      display: flex;
      gap: 20px;
      label {
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        input {
          margin: 0;
          cursor: pointer;
        }
        div {
          font-size: 14px;
          color: $fontMain;
        }
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
      .more {
        width: 100%;
        display: flex;
        justify-content: center;
        border-top: 1px solid $sectionLine;
        padding-top: 10px;
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
    padding: 50px 24px 60px 24px;

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

    .history {
      width: 100%;
    }

    .item {
      width: 100%;
      .ing-item,
      .complete-item {
        height: 308px;
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
    }
  }
}

@include mobile {
  article {
    padding: 0 0 30px 0;
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
      margin-top: 10px;
      gap: 10px;
      .ing-item,
      .complete-item {
        height: 330px;
        border-radius: 0;
        box-shadow: none;
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
    }
  }
}
</style>
