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
                <input type="text" placeholder="ex) 123-45-678910" />
                <button>
                  <img
                    src="../../../assets/login/search_fff.png"
                    alt="search"
                  />
                </button>
              </div>
            </div>

            <div class="list"></div>

            <div class="submit">
              <button>확인</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'

defineEmits<{
  (e: 'showCompanyNumberModal'): void
}>()

onMounted(() => {
  document.body.setAttribute('style', 'overflow-x: hidden;')
})

onUnmounted(() => {
  document.body.removeAttribute('style')
})
</script>

<style lang="scss" scoped>
@import '@/scss/main';

section {
  padding: 0 !important;

  .modal {
    .modal-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 1256px;
      background-color: rgba(25, 25, 25, 0.5);
      display: flex;
      justify-content: center;
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
            border-bottom: 1px solid $sectionLine;
            padding-bottom: 30px;
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
          }
          .list {
            height: 430px;
          }

          .submit {
            width: 100%;
            border-top: 1px solid $sectionLine;

            button {
              margin-top: 30px;
              background-color: $inputLine;
              width: 100%;
              height: 50px;
              border-radius: 10px;
              border: none;
              color: white;
              font-size: 16px;
              font-family: Pretendard;
              // cursor: pointer;
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
