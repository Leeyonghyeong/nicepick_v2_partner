<template>
  <section>
    <article>
      <div v-if="getDevice !== 'mobile'" class="top-title">파트너 Q&A</div>

      <div class="qna-list">
        <div class="content">
          <div class="title">프랜차이즈 브랜드 관련</div>
          <div @click="franchisePartner = !franchisePartner" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              프랜차이즈 파트너가 되면 뭐가 좋은가요?
            </div>
            <img
              v-if="franchisePartner === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="franchisePartner === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="franchisePartner === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              창업픽은 창업을 준비하는 예비창업자들에게 프랜차이즈 브랜드를
              소개하고 있습니다.<br />
              프랜차이즈 브랜드 파트너 회원이 되어 브랜드의 인지도 상승은 물론,
              다양한 연령층의 고객층을 확보하세요!<br />
              브랜드 별 1:1 채팅을 통해 편리하게 고객 상담도 가능합니다.<br />
              24시간 열려있는 온라인 창업박람회, 창업픽에서 효과적으로 브랜드를
              소개해 보세요!
            </div>
          </div>

          <div @click="brandInfo = !brandInfo" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              브랜드 관련 정보는 어떻게 수정하나요?
            </div>
            <img
              v-if="brandInfo === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="brandInfo === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="brandInfo === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              브랜드 관련 정보 수정은 아래의 경로를 통해 직접 수정하실 수
              있습니다.<br />
              <span class="bold">
                [로그인 > 브랜드 > 내 브랜드 or 브랜드 정보 수정 > 수정 완료]
              </span>
              <br /><br />
              <span class="red">
                ※ 정보공개서 업데이트시 자동 업데이트 가능(선택)
              </span>
            </div>
          </div>

          <div @click="qna = !qna" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              고객문의는 어떻게 확인할 수 있나요?
            </div>
            <img
              v-if="qna === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="qna === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="qna === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              로그인 후 고객문의에서 문의 리스트와 문의 상세내역을 확인할 수
              있습니다.
            </div>
          </div>

          <div @click="promotion = !promotion" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              프로모션 서비스는 어떻게 사용할 수 있나요?
            </div>
            <img
              v-if="promotion === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="promotion === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="promotion === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              프로모션은 프리미엄 멤버십을 이용해야 사용할 수 있는
              서비스입니다.<br />
              프랜차이즈 파트너 회원이라면 프리미엄 멤버십을 신청해 보세요!
            </div>
          </div>

          <div @click="manager = !manager" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              담당자를 추가할 수 있나요?
            </div>
            <img
              v-if="manager === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="manager === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="manager === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              브랜드 담당자를 추가할 수 있습니다. 아래의 경로를 참고해
              주세요.<br />
              <span class="bold">
                [로그인 > 브랜드 > 내 브랜드 > 담당자 추가 > 담당자명/연락처
                입력 > 저장]
              </span>
            </div>
          </div>
        </div>

        <div class="content">
          <div class="title">공인중개사 관련</div>
          <div @click="realtorPartner = !realtorPartner" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              공인중개사 파트너가 되면 뭐가 좋은가요?
            </div>
            <img
              v-if="realtorPartner === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="realtorPartner === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="realtorPartner === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              창업픽에서는 예비창업자 고객들에게 각 지역별 공인중개사를 연결하여
              편리하게 상가/점포를 안내 받을 수 있도록 중개사 추천리스트를
              제공하고 있습니다.<br />
              공인중개사 파트너 회원이 되어 예비창업자들에게 보다 쉽고 편리하게
              다가가 보세요!
            </div>
          </div>

          <div @click="realtorInfo = !realtorInfo" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              중개소 정보는 어떻게 수정하나요?
            </div>
            <img
              v-if="realtorInfo === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="realtorInfo === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="realtorInfo === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              중개소 관련 정보 수정은 아래의 경로를 통해 직접 수정하실 수
              있습니다.
              <span class="bold">
                [로그인 > 중개소 > 정보 수정 > 수정 완료]
              </span>
            </div>
          </div>

          <div @click="realtorList = !realtorList" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              등록한 중개소 리스트는 어디서 볼 수 있나요?
            </div>
            <img
              v-if="realtorList === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="realtorList === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="realtorList === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              등록한 중개소 리스트는 창업픽 홈페이지
              <span class="bold"> [상권정보 > 브랜드 리스트 > 중개사]</span>
              에서 확인 하실 수 있습니다.<br /><br />
              <span class="blue">창업픽 상권정보 바로가기</span>
            </div>
          </div>

          <div @click="ad = !ad" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              광고상품을 이용하지 않으면 리스트에 안나오나요?
            </div>
            <img
              v-if="ad === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="ad === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="ad === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              공인중개사 파트너 회원가입을 했다면 광고상품을 이용하지 않아도
              리스트에 등록이 됩니다.<br />
              공인중개사 광고 상품을 이용하면, 내 중개소를 리스트의 상단에
              띄우거나 노출되는 지역 범위를 넓힐수 있습니다.
            </div>
          </div>

          <div @click="place = !place" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              기본 지역을 변경하고 싶어요.
            </div>
            <img
              v-if="place === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="place === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="place === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              공인중개사 파트너 회원가입시 저장된 기본 지역은 변경하실 수
              없습니다.<br />
              대신 <span class="blue">상권 지역플러스+</span> 상품을 구매하여
              지역을 추가하실 수 있습니다. (유료상품)
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useWindowStore } from '../../../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const franchisePartner = ref<boolean>(false)
const brandInfo = ref<boolean>(false)
const qna = ref<boolean>(false)
const promotion = ref<boolean>(false)
const manager = ref<boolean>(false)
const realtorPartner = ref<boolean>(false)
const realtorInfo = ref<boolean>(false)
const realtorList = ref<boolean>(false)
const ad = ref<boolean>(false)
const place = ref<boolean>(false)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 44px 60px;
  .top-title {
    font-size: 24px;
    color: $fontMain;
    font-weight: $semi;
    border-bottom: 2px solid $fontMain;
    padding-bottom: 20px;
    margin-bottom: 70px;
  }

  .qna-list {
    display: flex;
    flex-direction: column;
    gap: 80px;
    .content {
      .title {
        font-size: 20px;
        color: $fontMain;
        font-weight: $medi;
        padding-bottom: 20px;
        line-height: 24px;
      }
      .list {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid $sectionLine;
        cursor: pointer;
        div {
          font-size: 16px;
          color: $fontMain;
          line-height: 24px;
          i {
            padding-right: 10px;
            font-size: 19px;
          }
        }
        img {
          width: 20px;
          height: 20px;
        }
      }
      .more-box {
        height: 100%;
        padding: 30px;
        box-sizing: border-box;
        display: flex;
        gap: 10px;
        background-color: #fafafa;
        font-size: 15px;
        color: $fontSub;
        line-height: 24px;
        i {
          font-size: 19px;
        }
        .bold {
          font-weight: $medi;
        }
        .red {
          color: $subColor;
        }
        .blue {
          color: $mainColor;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
}

@include mobile {
  article {
    padding: 30px 0;

    .qna-list {
      gap: 50px;
      .content {
        .title {
          padding-left: 24px;
          font-size: 16px;
        }
        .list {
          height: 100%;
          padding: 16px 24px;
          div {
            font-size: 14px;
            display: flex;
            i {
              font-size: 14px;
              padding-right: 6px;
              display: flex;
              align-items: center;
            }
          }
        }
        .more-box {
          height: 100%;
          padding: 30px 24px;
          font-size: 13px;
          i {
            font-size: 14px;
          }
        }
      }
    }
  }
}

@include pc {
  article {
    padding: 50px 0 80px 50px;
    width: 814px;
  }
}
</style>
