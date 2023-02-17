<template>
  <section>
    <article>
      <div class="top">
        <div v-if="getDevice !== 'mobile'" class="top-title">
          공인중개사 파트너 서비스
        </div>
        <div class="top-sub">
          중개사무소 홍보하고 예비창업자와 편리하게 매칭하는 창업픽 파트너
          서비스를 경험하세요!
        </div>
      </div>

      <div class="content">
        <div class="box">
          <div class="name">
            <img src="../../../assets/guide_partner/반짝이.png" alt="" />
            효과적으로 홍보하고 싶은 브랜드는 모여라~
          </div>
          <div class="sub">
            프랜차이즈 브랜드를 한 곳에서 비교해보고 쉽게 문의 할 수 있는
            창업PICK<br />
            프랜차이즈 브랜드 파트너님들은 이제 매출에만 집중하세요!
            <br /><br />
            찾아가지 않아도 찾아오는 창업문의를 창업픽을 통해 경험하세요!
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/service/pc1.png"
            alt="pc1"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/service/tab1.png"
            alt="tab1"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/service/mob1.png"
            alt="mob1"
          />
        </div>
        <div class="box">
          <div class="name">브랜드 정보 관리 OK</div>
          <div class="sub">
            내 브랜드 기본정보 관리·수정은 물론 담당자 코멘트까지~
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/service/pc2.png"
            alt="pc2"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/service/tab2.png"
            alt="tab2"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/service/mob2.png"
            alt="mob2"
          />
        </div>
        <div class="box">
          <div class="name">실시간 문의는 여기서 확인하세요!</div>
          <div class="sub">
            예비창업자들의 1:1 고객문의를 편리하고 쉽게 확인하세요.
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/service/pc3.png"
            alt="pc3"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/service/tab3.png"
            alt="tab3"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/service/mob3.png"
            alt="mob3"
          />
        </div>
        <div class="box">
          <div class="name">광고 상품을 통한 브랜드 인지도 UP</div>
          <div class="sub">
            창업픽이 준비한 광고상품을 통해 내 브랜드 인지도를 높여보세요.
          </div>
          <img
            v-if="getDevice === 'pc'"
            src="../../../assets/guide_partner/service/pc4.png"
            alt="pc4"
          />
          <img
            v-if="getDevice === 'tablet'"
            src="../../../assets/guide_partner/service/tab4.png"
            alt="tab4"
          />
          <img
            v-if="getDevice === 'mobile'"
            src="../../../assets/guide_partner/service/mob4.png"
            alt="mob4"
          />
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';
article {
  padding: 51px 0 80px 51px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  .top {
    color: $fontMain;
    .top-title {
      padding-bottom: 19px;
      font-size: 24px;
      font-weight: $semi;
    }
    .top-sub {
      height: 40px;
      font-size: 15px;
      background-color: #fafafa;
      border-radius: 10px;
      display: flex;
      align-items: center;
      padding-left: 16px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 80px;
    .box {
      width: 814px;
      .name {
        font-size: 20px;
        font-weight: $medi;
        color: $fontMain;
        display: flex;
        gap: 5px;
        img {
          padding: 0;
          width: 20px;
          height: 20px;
        }
      }
      .name-sub {
        font-size: 18px;
        font-weight: normal;
        color: $fontMain;
      }
      .sub {
        padding-top: 20px;
        font-size: 16px;
        color: $fontSub;
        line-height: 24px;
      }
      img {
        padding: 50px 41px 0;
        box-sizing: border-box;
        width: 100%;
      }
    }
  }
}

@include tablet {
  article {
    padding: 50px 44px 60px;

    .content {
      .box {
        width: 100%;
        img {
          padding: 50px 0 0 41px;
        }
      }
    }
  }
}

@include mobile {
  article {
    padding: 30px 23px 24px;
    gap: 0;
    .top {
      .top-sub {
        height: auto;
        padding: 16px;
        font-size: 14px;
        line-height: 24px;
      }
    }

    .content {
      padding-top: 50px;
      .box {
        width: 100%;
        .name,
        .name-sub {
          font-size: 16px;
        }
        .sub {
          padding-top: 10px;
          font-size: 14px;
        }
        img {
          padding: 30px 0 0;
        }
      }
    }
  }
}
</style>
