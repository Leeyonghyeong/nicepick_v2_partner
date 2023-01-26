<template>
  <section>
    <article>
      <div class="top-title">마이메뉴</div>

      <div class="category">
        <div class="category-name select">내 정보관리</div>
        <RouterLink to="usagehistory" class="none">
          <div class="category-name">이용내역</div>
        </RouterLink>
        <RouterLink to="addkeyword" class="none">
          <div class="category-name">대표키워드</div>
        </RouterLink>
      </div>

      <div class="info-section">
        <div class="input-section">
          <div class="main-title">기본정보</div>
          <div class="info-flex">
            <div class="email-reset-pw">
              <div class="content email">
                <div class="title">이메일</div>
                <div class="email-box">abc1234@gmail.com</div>
              </div>
              <div class="content reset-pw">
                <div class="title">비밀번호 변경</div>
                <button>비밀번호 변경</button>
              </div>
            </div>
            <div class="content name-phone">
              <div class="name">
                <div class="title">담당자명</div>
                <input type="text" />
              </div>
              <div class="content phone">
                <div class="title">연락처</div>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
        <div class="check-box">
          <div class="title-section">
            <div class="title">마케팅 정보 수신 동의(선택)</div>
            <div class="sub-title">
              수신 동의 시 이벤트 및 각종 행사 등의 정보를 알려드립니다.
            </div>
          </div>
          <div class="check-section">
            <label class="email">
              <input type="checkbox" style="zoom: 1.5" id="email" checked />
              <div>이메일 수신</div>
            </label>
            <label class="sms">
              <input type="checkbox" style="zoom: 1.5" id="sms" checked />
              <div>SMS 수신</div>
            </label>
          </div>
        </div>
      </div>

      <button class="save">저장</button>

      <RouterLink to="/withdrawal" class="none">
        <div class="withdrawal">회원 탈퇴</div>
      </RouterLink>
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

  .info-section {
    width: 1270px;
    height: 476px;
    margin-top: 30px;
    padding: 30px;
    box-sizing: border-box;

    background-color: white;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    .input-section {
      .main-title {
        font-size: 18px;
        font-weight: $medi;
        color: $fontMain;
        padding-bottom: 30px;
      }
      .info-flex {
        width: 100%;
        display: flex;
        gap: 30px;
        border-bottom: 1px solid $iconLine;
        padding-bottom: 30px;
        .content {
          .title {
            padding-bottom: 10px;
            color: $fontMain;
          }
          input,
          .email-box {
            width: 100%;
            height: 50px;
            padding-left: 16px;
            box-sizing: border-box;
            border-radius: 10px;
            border: none;
            border: 1px solid $iconLine;
          }
        }
        .email-reset-pw,
        .name-phone {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .email-reset-pw {
          .email-box {
            background-color: $sectionLine;
            border: 1px solid $iconLine;
            display: flex;
            align-items: center;
            color: $inputLine;
          }
          .reset-pw {
            button {
              width: 100%;
              height: 50px;
              border-radius: 10px;
              border: none;
              background-color: $fontMain;
              color: white;
              font-family: Pretendard;
              font-size: 16px;
              font-weight: $reg;
              cursor: pointer;
            }
          }
        }
      }
    }
    .check-box {
      padding-top: 30px;
      .title-section {
        padding-bottom: 30px;
        .title {
          color: $fontMain;
          padding-bottom: 10px;
        }
        .sub-title {
          font-size: 14px;
          color: $fontSub;
        }
      }
      .check-section {
        display: flex;
        gap: 60px;
        label {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          color: $fontMain;
          cursor: pointer;
          input {
            cursor: pointer;
          }
        }
      }
    }
  }

  .save {
    margin: 30px 0;
    width: 1270px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: $mainColor;
    color: white;
    font-size: 16px;
    font-family: Pretendard;
    font-weight: $reg;
    cursor: pointer;
  }

  .withdrawal {
    width: 1270px;
    font-size: 14px;
    color: $fontSub;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
}

@include tablet {
  article {
    padding: 50px 24px 60px 24px;

    .info-section {
      width: 100%;
      height: 694px;
      .input-section {
        .info-flex {
          flex-direction: column;
        }
      }
    }

    .save {
      width: 100%;
    }

    .withdrawal {
      width: 100%;
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

    .info-section {
      width: 100%;
      height: 670px;
      box-shadow: none;
      border-radius: 0;
      margin-top: 0;
      .input-section {
        .main-title {
          font-size: 16px;
        }
        .info-flex {
          flex-direction: column;
          .content {
            .title {
              font-size: 14px;
            }
          }
          .email-reset-pw {
            .reset-pw {
              button {
                font-size: 14px;
              }
            }
          }
        }
      }
      .check-box {
        .title-section {
          .title {
            font-size: 14px;
          }
          .sub-title {
            font-size: 12px;
          }
        }
      }
    }

    .save {
      margin: 0;
      width: 100%;
      height: 60px;
      border-radius: 0;
    }

    .withdrawal {
      width: 100%;
      height: 76px;
      background-color: white;
      align-items: center;
    }
  }
}
</style>
