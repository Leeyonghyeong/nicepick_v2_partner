<template>
  <section>
    <article>
      <div class="top-title">중개소</div>

      <div class="flex">
        <div class="brand-image">
          <div class="list-representative">
            <div class="content list">
              <div class="title">목록 이미지<span>*</span></div>
              <div class="sub">(리스트 노출 이미지)</div>
              <div class="image-section">
                <label for="file">
                  <div class="btn-upload">
                    <i class="fa-regular fa-image" />
                    <div class="value">300x300(1:1비율)</div>
                  </div>
                </label>
                <input type="file" name="file" id="file" />
              </div>
            </div>
            <div class="content representative">
              <div class="title">대표 이미지<span>*</span></div>
              <div class="sub">(상세페이지 상단 노출 이미지)</div>
              <div class="image-section">
                <label for="file">
                  <div class="btn-upload">
                    <i class="fa-regular fa-image" />
                    <div class="value">750x300</div>
                  </div>
                </label>
                <input type="file" name="file" id="file" />
              </div>
            </div>
          </div>
          <div class="description">
            · 이미지는 <span>필수*</span>로 등록해 주세요.<br />
            · 이미지의 단위는 픽셀(px)입니다.<br />
            · 등록 이미지는 jpg, png 파일만 등록이 가능합니다.<br />
            · 이미지는 사이즈에 맞춰 등록해 주세요.
          </div>
        </div>

        <div class="content-section">
          <div class="content">
            <div class="title">홈페이지</div>
            <input type="text" placeholder="URL 입력" />
          </div>
          <div class="content">
            <div class="title">블로그</div>
            <input type="text" placeholder="URL 입력" />
          </div>
          <div class="content">
            <div class="title">유튜브</div>
            <input type="text" placeholder="URL 입력" />
          </div>
        </div>

        <div class="realtor-info">
          <div class="content">
            <div class="title">중개사무소 소개</div>
            <textarea placeholder="간단한 소개 내용 입력"></textarea>
          </div>
        </div>

        <div class="save">
          <button class="save">저장</button>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 160px 80px 160px;

  span {
    color: $subColor;
  }

  .top-title {
    font-size: 20px;
    font-weight: $medi;
    color: $fontMain;
    padding-bottom: 50px;
  }

  .flex {
    display: flex;
    flex-direction: column;
    gap: 30px;
    .brand-image {
      width: 1270px;
      display: flex;
      align-items: flex-end;
      gap: 30px;
      .list-representative {
        display: flex;
        gap: 30px;
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
            padding-top: 4px;
            font-size: 12px;
            color: $fontSub;
          }
          .image-section {
            background-color: #f2f4f7;
            margin-top: 20px;
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
        .list {
          width: 362px;
          height: 269px;
          .image-section {
            width: 150px;
            height: 150px;
            border-radius: 100%;
          }
        }
        .representative {
          width: 490px;
          height: 269px;
          .image-section {
            width: 375px;
            height: 150px;
            border-radius: 10px;
          }
        }
      }
      .description {
        line-height: 24.5px;
        font-size: 14px;
        color: $fontSub;
      }
    }

    .content-section {
      padding: 30px 30px 0 30px;
      background-color: white;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      .content {
        padding-bottom: 30px;
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
          font-family: $pre;
          font-size: 16px;
          color: $inputLine;
        }
      }
    }

    .realtor-info {
      padding: 30px;
      background-color: white;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      .content {
        .title {
          font-size: 18px;
          color: $fontMain;
          font-weight: $medi;
          padding-bottom: 20px;
        }
        textarea {
          width: 100%;
          height: 300px;
          box-sizing: border-box;
          border: 1px solid $iconLine;
          border-radius: 10px;
          padding: 16px;
          font-family: $pre;
          color: $fontMain;
          resize: none;
        }
        textarea::placeholder {
          color: $inputLine;
        }
      }
    }

    .save {
      button {
        width: 1270px;
        height: 50px;
        background-color: $mainColor;
        border-radius: 10px;
        border: none;
        color: white;
        font-size: 16px;
        font-family: $pre;
        font-weight: $reg;
        cursor: pointer;
      }
    }
  }
}

@include tablet {
  article {
    padding: 50px 24px 60px 24px;

    .flex {
      .brand-image {
        width: 100%;
        flex-direction: column-reverse;
        align-items: flex-start;
        .list-representative {
          flex-direction: column;
          width: 100%;
          .content {
            width: 100%;
            padding: 30px;
            box-sizing: border-box;
          }

          .representative {
            .image-section {
              width: 444px;
              height: 178px;
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
    overflow: hidden;

    .top-title {
      padding: 0;
      font-size: 16px;
      position: absolute;
      top: 23px;
      left: 24px;
    }

    .flex {
      gap: 10px;
      .brand-image {
        width: 100%;
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: 10px;
        .list-representative {
          flex-direction: column;
          width: 100%;
          gap: 10px;
          .content {
            box-shadow: none;
            border-radius: 0;
            padding: 30px 24px;
            box-sizing: border-box;
            .title {
              font-size: 16px;
            }
            .sub {
              font-size: 11px;
            }
          }
          .list {
            width: 100%;
            height: 266px;
          }
          .representative {
            width: 100%;
            height: 248px;
            .image-section {
              width: 313px;
              height: 131px;
            }
          }
        }
        .description {
          width: 100%;
          background-color: white;
          padding: 20px 24px;
          font-size: 12px;
        }
      }

      .content-section {
        box-shadow: none;
        border-radius: 0;
        .content {
          .title {
            font-size: 16px;
          }
        }
      }

      .realtor-info {
        box-shadow: none;
        border-radius: 0;
        .content {
          .title {
            font-size: 16px;
          }
        }
      }

      .save {
        padding: 20px 24px;
        background-color: white;
        margin-bottom: 30px;
        button {
          width: 100%;
        }
      }
    }
  }
}
</style>
