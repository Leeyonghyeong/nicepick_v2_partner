<template>
  <section>
    <article class="modal">
      <div class="modal-overlay">
        <div class="modal-box">
          <div class="title-close">
            <div class="title">옵션 변경</div>
            <div class="close" @click="$emit('showCartOption')">
              <img src="../../../../assets/login/close.png" alt="닫기" />
            </div>
          </div>

          <div class="item-name">
            <div class="bold">브랜드 핫클립</div>
            <div class="sub">홈 영상컨텐츠 노출</div>
          </div>

          <div class="period">
            <div class="name">광고기간</div>
            <div
              @click="showList = !showList"
              :class="{ style: showList === true }"
              class="period-list"
            >
              <div>30일</div>
              <img
                v-if="showList === true"
                src="../../../../assets/dashboard/up.png"
                alt="up"
              />
              <img
                v-if="showList === false"
                src="../../../../assets/dashboard/down.png"
                alt="down"
              />
            </div>
          </div>
          <div v-if="showList === true" class="list">
            <div class="padding">
              <div>30일</div>
              <div>60일(10% 할인)</div>
              <div>90일(10% 할인)</div>
            </div>
          </div>

          <div class="cost-section">
            <div class="section">
              <div class="flex">
                <div class="name">금액</div>
                <div class="cost">550,000원</div>
              </div>
              <div class="flex">
                <div class="name">할인 금액</div>
                <div class="cost discount">-0원</div>
              </div>
            </div>

            <div class="flex total-cost">
              <div class="name">총 금액</div>
              <div class="cost total">550,000원</div>
            </div>
          </div>

          <div @click="$emit('showCartOption')" class="apply">
            <button>확인</button>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'

const showList = ref<boolean>(false)

defineEmits<{
  (e: 'showCartOption'): void
}>()

onMounted(() => {
  document.body.setAttribute('style', 'overflow: hidden;')
})

onUnmounted(() => {
  document.body.removeAttribute('style')
})
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
        width: 438px;
        height: 523px;
        padding: 30px;
        box-sizing: border-box;
        background-color: white;
        border-radius: 10px;
        position: relative;

        .title-close {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-bottom: 20px;

          .title {
            font-size: 18px;
            font-weight: $medi;
            color: $fontMain;
          }
          .close {
            position: absolute;
            right: 30px;
            img {
              width: 30px;
              height: 30px;
              cursor: pointer;
            }
          }
        }

        .item-name {
          padding: 20px 0;
          border-top: 1px solid $sectionLine;

          .bold {
            color: $fontMain;
          }
          .sub {
            font-size: 12px;
            color: $fontSub;
            padding: 10px 0 20px 0;
            border-bottom: 1px solid $sectionLine;
          }
        }

        .period {
          padding-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: $fontMain;
          .name {
            font-size: 15px;
          }
          .period-list {
            width: 296px;
            height: 50px;
            padding: 15px 16px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            border: 1px solid $inputLine;
            border-radius: 10px;
            font-size: 14px;
            cursor: pointer;
            img {
              width: 20px;
              height: 20px;
            }
          }
          .style {
            border: 1px solid $mainColor;
          }
        }
        .list {
          .padding {
            width: 296px;
            box-sizing: border-box;
            background-color: white;
            border: 1px solid $inputLine;
            border-radius: 10px;
            position: absolute;
            top: 242px;
            right: 30px;
            overflow: hidden;
            div {
              font-size: 14px;
              color: $fontMain;
              border-bottom: 1px solid $sectionLine;
              padding: 16px 0 16px 16px;
              cursor: pointer;
            }
            div:hover {
              background-color: #f5f7ff;
              color: $mainColor;
            }
          }
        }

        .cost-section {
          padding: 30px 0;
          border-bottom: 1px solid $sectionLine;
          .section {
            display: flex;
            gap: 20px;
            flex-direction: column;
            border-bottom: 1px solid $fontMain;
            padding-bottom: 20px;
          }

          .flex {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .name {
              font-size: 15px;
            }
            .cost {
              font-weight: $medi;
            }
            .discount {
              color: $subColor;
            }
            .total {
              font-size: 18px;
            }
          }
          .total-cost {
            padding-top: 20px;
          }
        }

        .apply {
          padding-top: 30px;
          button {
            width: 100%;
            height: 50px;
            border-radius: 10px;
            border: none;
            background-color: $mainColor;
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
}

@include mobile {
  section {
    .modal {
      .modal-overlay {
        .modal-box {
          width: 100%;
          height: 100%;
          border-radius: 0;
          padding: 0;
          .title-close {
            height: 60px;
            padding: 0;
            .title {
              font-size: 16px;
            }
          }

          .item-name {
            padding: 30px 24px 0;
          }

          .period {
            padding: 36px 24px 0 24px;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            .period-list {
              width: 100%;
            }
          }

          .list {
            .padding {
              width: 100%;
              top: 265px;
              right: 0;
            }
          }

          .cost-section {
            padding: 30px 24px 195px 24px;
          }

          .apply {
            margin-top: 0px;
            padding: 10px 24px;
          }
        }
      }
    }
  }
}
</style>
