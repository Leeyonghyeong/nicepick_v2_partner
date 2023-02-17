<template>
  <section id="category-info">
    <div class="title">
      <div
        :class="{ select: selectCategory === 'franchise' }"
        @click="selectCategory = 'franchise'"
      >
        프랜차이즈 브랜드
      </div>
      <div
        :class="{ select: selectCategory === 'realtor' }"
        @click="selectCategory = 'realtor'"
      >
        공인중개사
      </div>
      <div
        :class="{ select: selectCategory === 'cooperation' }"
        @click="selectCategory = 'cooperation'"
      >
        협력 파트너
      </div>
    </div>

    <div class="info">
      <div class="info-slide">
        <Swiper
          v-if="selectCategory === 'franchise'"
          :modules="[Navigation]"
          :slides-per-view="1"
          :loop="true"
          :loop-additional-slides="1"
          :navigation="{
            prevEl: '.prev',
            nextEl: '.next',
          }"
        >
          <div class="btn">
            <div v-if="getDevice === 'pc'" class="prev">
              <img src="../../assets/main/btn_prev.png" alt="이전" />
            </div>
            <div v-if="getDevice === 'pc'" class="next">
              <img src="../../assets/main/btn_next.png" alt="다음" />
            </div>
          </div>

          <SwiperSlide>
            <div id="slide-1" class="box">
              <img
                src="../../assets/main/브랜드광고효과.png"
                alt="브랜드광고효과"
              />
              <div class="box-title">
                <div class="bold">브랜드 광고 효과</div>
                <div>
                  자영업 창업 전문 플랫폼 창업픽을 찾는<br />
                  수많은 예비창업자들에게<br />
                  귀사의 브랜드를 효과적으로 홍보해 보세요!
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div id="slide-2" class="box">
              <img src="../../assets/main/마케팅효과.png" alt="마케팅효과" />
              <div class="box-title">
                <div class="bold">마케팅 효과 up 비용 down</div>
                <div>
                  예비 창업자를 타겟으로 하는 창업픽 광고를 통해<br />
                  기존 타사 마케팅 대비 비용은 다운! 효과는 업!<br />
                  직접 경험해 보세요.
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div id="slide-3" class="box">
              <img src="../../assets/main/고객상담.png" alt="고객상담" />
              <div class="box-title">
                <div class="bold">편리한 고객 상담</div>
                <div>
                  창업픽의 실시간 채널을 통해<br />
                  예비창업자와 1:1 소통이 가능합니다.<br />
                  브랜드 관리자로 가입하시면 바로 이용이 가능합니다.
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div id="slide-4" class="box">
              <img src="../../assets/main/가맹점증가.png" alt="가맹점증가" />
              <div class="box-title">
                <div class="bold">가맹점 증가</div>
                <div>
                  당신의 멋진 아이템을 창업픽을 통해 홍보해보세요.<br />
                  가맹점 증가는 자연스럽게 이뤄질 것입니다.
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          v-if="selectCategory === 'realtor'"
          :modules="[Navigation]"
          :slides-per-view="1"
          :loop="true"
          :loop-additional-slides="1"
          :navigation="{
            prevEl: '.prev',
            nextEl: '.next',
          }"
        >
          <div class="btn">
            <div v-if="getDevice === 'pc'" class="prev">
              <img src="../../assets/main/btn_prev.png" alt="이전" />
            </div>
            <div v-if="getDevice === 'pc'" class="next">
              <img src="../../assets/main/btn_next.png" alt="다음" />
            </div>
          </div>

          <SwiperSlide>
            <div id="slide-1" class="box">
              <img src="../../assets/main/온라인광고.png" alt="온라인광고" />
              <div class="box-title">
                <div class="bold">쉬운 온라인 광고</div>
                <div>
                  지금 바로 중개사회원으로 가입해보세요.<br />
                  창업을 준비하는 수많은 고객분들에게 <br />
                  중개업소 노출이 가능합니다.
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div id="slide-2" class="box">
              <img src="../../assets/main/고객노출.png" alt="고객노출" />
              <div class="box-title">
                <div class="bold">전국 단위 고객 노출</div>
                <div>
                  물건을 소개하고자 하는 모든 지역에<br />
                  중개업소를 노출 가능합니다.<br />
                  선택하신 지역에 내 중개업소를 노출해 보세요.
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div id="slide-3" class="box">
              <img src="../../assets/main/상담서비스.png" alt="상담서비스" />
              <div class="box-title">
                <div class="bold">중개사 상담 서비스</div>
                <div>
                  중개업소 위치 및 전화번호를 <br />
                  고객에게 직접 제공해 드립니다. <br />
                  창업픽 고객분들에게 친절한 상담 부탁드려요.
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div id="slide-4" class="box">
              <img src="../../assets/main/고객층.png" alt="고객층" />
              <div class="box-title">
                <div class="bold">가맹점 증가</div>
                <div>
                  PC 모바일, 앱을 통한 모든 고객에게<br />
                  중개업소를 홍보해보세요. <br />
                  놀랄만한 결과가 생길겁니다.
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          v-if="selectCategory === 'cooperation'"
          :modules="[Navigation]"
          :slides-per-view="1"
          :loop="true"
          :loop-additional-slides="1"
          :navigation="{
            prevEl: '.prev',
            nextEl: '.next',
          }"
        >
          <div class="btn">
            <div v-if="getDevice === 'pc'" class="prev">
              <img
                style="cursor: default"
                src="../../assets/main/btn_prev.png"
                alt="이전"
              />
            </div>
            <div v-if="getDevice === 'pc'" class="next">
              <img
                style="cursor: default"
                src="../../assets/main/btn_next.png"
                alt="다음"
              />
            </div>
          </div>

          <div id="slide-1" class="box">
            <img src="../../assets/main/협력.png" alt="협력" />
            <div class="box-title">
              <div class="bold">협력 파트너는 준비중!</div>
              <div>
                협력파트너 서비스는 준비중입니다.<br />
                보다 나은 서비스를 위하여 준비중에 있습니다.<br />
                빠른 시일내 준비하여 찾아뵙겠습니다.
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const selectCategory = ref<string>('franchise')
</script>

<style lang="scss" scoped>
@import '@/scss/main';

#category-info {
  background-color: $backColor;
  padding: 150px 0 298px 0;
  .title {
    display: flex;
    justify-content: center;
    gap: 60px;
    font-size: 20px;
    color: $inputLine;

    div {
      cursor: pointer;
    }

    .select {
      color: $mainColor;
      font-weight: $semi;
      border-bottom: 3px solid $mainColor;
      padding-bottom: 10px;
    }
  }

  .info {
    padding-top: 138px;

    .info-slide {
      .btn {
        @include pc-container();
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 113px;
        left: 50%;
        transform: translate(-50%, 0%);
        z-index: 2;

        div {
          img {
            width: 50px;
            height: 50px;
            border-radius: 100%;
            box-shadow: 1px 1px 10px (rgba(0, 0, 0, 0.05));
            cursor: pointer;
          }
        }
      }

      .box {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 145px;

        img {
          width: 306px;
          height: 277px;
        }
        .box-title {
          display: flex;
          flex-direction: column;
          gap: 20px;
          font-size: 18px;
          color: $fontSub;
          line-height: 30px;

          .bold {
            font-size: 40px;
            color: $fontMain;
            font-weight: $semi;
          }
        }
      }
    }
  }
}

@include tablet {
  #category-info {
    .info {
      padding-top: 168px;

      .box {
        gap: 24px;

        img {
          width: 240px;
          height: 217px;
        }

        .box-title {
          font-size: 15px;
          line-height: 24px;

          .bold {
            font-size: 30px;
          }
        }
      }
    }
  }
}

@include mobile {
  #category-info {
    .title {
      @include mobile-container();
      font-size: 16px;
      gap: 30px;
    }

    .info {
      padding-top: 50px;

      .info-slide {
        .box {
          flex-direction: column;
          gap: 50px;
          text-align: center;
          .box-title {
            font-size: 15px;
            line-height: 24px;
            .bold {
              font-size: 26px;
            }
          }
        }
      }
    }
  }
}
</style>
