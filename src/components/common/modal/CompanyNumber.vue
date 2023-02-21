<template>
  <section>
    <article class="modal">
      <div class="modal-overlay">
        <div class="modal-box">
          <div class="padding-box">
            <div class="border-bottom">
              <div class="title">
                <div>사업자 등록번호 검색</div>
                <img
                  @click="$emit('showCompanyNumberModal')"
                  src="../../../assets/login/close.png"
                  alt="닫기"
                />
              </div>

              <div class="search">
                <input
                  type="text"
                  placeholder="ex) 123-45-678910"
                  value="123-45-678910"
                />
                <button>
                  <img
                    src="../../../assets/login/search_fff.png"
                    alt="search"
                  />
                </button>
              </div>

              <div class="select-title">다중 선택 가능</div>
            </div>

            <div class="list">
              <div @click="selectBrand = '1'" class="list-box">
                <div :class="{ select: selectBrand === '1' }" class="box">
                  <div class="brand-name">A브랜드</div>
                  <div class="brand-category">한식</div>
                </div>
              </div>
              <div class="list-box">
                <div class="box">
                  <div class="brand-name">B브랜드</div>
                  <div class="brand-category">중식</div>
                </div>
              </div>
              <div class="list-box">
                <div class="box">
                  <div class="brand-name">C브랜드</div>
                  <div class="brand-category">서양식</div>
                </div>
              </div>
              <div class="list-box">
                <div class="box">
                  <div class="brand-name">D브랜드</div>
                  <div class="brand-category">커피</div>
                </div>
              </div>
              <div class="list-box">
                <div class="box">
                  <div class="brand-name">E브랜드</div>
                  <div class="brand-category">스포츠 관련</div>
                </div>
              </div>
              <div class="list-box">
                <div class="box">
                  <div class="brand-name">F브랜드</div>
                  <div class="brand-category">한식</div>
                </div>
              </div>
              <div class="list-box">
                <div class="box">
                  <div class="brand-name">G브랜드</div>
                  <div class="brand-category">기타도소매</div>
                </div>
              </div>
              <div class="list-box">
                <div class="box">
                  <div class="brand-name">H브랜드</div>
                  <div class="brand-category">일식</div>
                </div>
              </div>
              <div class="list-box">
                <div class="box">
                  <div class="brand-name">I브랜드</div>
                  <div class="brand-category">제과제빵</div>
                </div>
              </div>
              <div class="list-box">
                <div class="box">
                  <div class="brand-name">J브랜드</div>
                  <div class="brand-category">편의점</div>
                </div>
              </div>
            </div>

            <div class="submit">
              <button @click="$emit('showCompanyNumberModal')">확인</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineEmits<{
  (e: 'showCompanyNumberModal'): void
}>()

onMounted(() => {
  document.body.setAttribute('style', 'overflow: hidden;')
})

onUnmounted(() => {
  document.body.removeAttribute('style')
})

const selectBrand = ref<string>('1')
</script>

<style lang="scss" scoped>
@import '@/scss/main';

section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(25, 25, 25, 0.5);

  .modal {
    width: 100%;
    height: 100%;
    .modal-overlay {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;

      .modal-box {
        background-color: white;
        width: 438px;
        height: 690px;
        border-radius: 10px;
        position: absolute;
        top: 190px;

        .padding-box {
          padding: 30px;

          .border-bottom {
            display: flex;
            flex-direction: column;
            gap: 20px;

            .title {
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 18px;
              position: relative;

              img {
                position: absolute;
                right: 0px;
                width: 30px;
                height: 30px;
                cursor: pointer;
              }
            }

            .search {
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 8px;
              input {
                width: 320px;
                height: 50px;
                border-radius: 10px;
                border: 1px solid $sectionLine;
                padding-left: 16px;
                box-sizing: border-box;
                font-size: 16px;
                font-family: $pre;
                color: $fontMain;
              }

              input::placeholder {
                font-family: Pretendard;
                font-size: 16px;
                color: $inputLine;
              }

              button {
                width: 50px;
                height: 50px;
                border-radius: 10px;
                border: none;
                background-color: black;
                cursor: pointer;

                img {
                  width: 30px;
                  height: 30px;
                }
              }
            }

            .select-title {
              font-size: 11px;
              color: $fontSub;
              font-weight: $reg;
              display: flex;

              padding-bottom: 0;
              border-bottom: 1px solid $sectionLine;
              padding-bottom: 10px;
            }
          }

          .list {
            height: 430px;
            overflow-y: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;

            .list-box {
              .box {
                height: 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                padding: 0 16px;
                font-weight: $reg;

                cursor: pointer;

                .brand-name {
                  color: $fontMain;
                }
                .brand-category {
                  color: $fontSub;
                  font-size: 12px;
                }
              }

              .select {
                background-color: #f5f7ff;
                .brand-name,
                .brand-category {
                  color: $mainColor;
                }
              }
            }
          }
          .list::-webkit-scrollbar {
            display: none;
          }

          .submit {
            width: 100%;
            border-top: 1px solid $sectionLine;

            button {
              margin-top: 30px;
              background-color: $mainColor;
              width: 100%;
              height: 50px;
              border-radius: 10px;
              border: none;
              color: white;
              font-size: 16px;
              font-family: Pretendard;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}

@include mobile {
  section {
    .modal {
      .modal-overlay {
        @include mobile-container();
        padding-top: 65px;

        .modal-box {
          width: 100%;
          height: 660px;
          position: static;

          .padding-box {
            .border-bottom {
              .search {
                input {
                  width: 100%;
                }
              }
            }
            .list {
              height: 400px;
            }
          }
        }
      }
    }
  }
}
</style>
