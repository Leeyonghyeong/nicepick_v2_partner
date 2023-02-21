<template>
  <section>
    <article>
      <div v-if="getDevice !== 'mobile'" class="top-title">광고 상품 Q&A</div>

      <div class="qna-list">
        <div class="content">
          <div class="title">프랜차이즈 브랜드 광고 상품 관련</div>
          <div @click="premium = !premium" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              [프리미엄 멤버십] 프리미엄 멤버십 서비스를 이용하고 싶어요.
            </div>
            <img
              v-if="premium === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="premium === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="premium === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              프리미엄 멤버십은 해시태그 6개 설정 + 리스트 상위 노출 + 다이렉트
              고객 매칭까지 한 번에 경험하실 수 있습니다.<br />
              <span class="red">신규 회원의 경우</span>, 프리미엄 멤버십을
              신청하면 <span class="red">첫달 30일 무료체험 혜택</span>을 받으실
              수 있습니다.
            </div>
          </div>

          <div @click="credit = !credit" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              [프리미엄 멤버십] 카드결제만 가능한가요?
            </div>
            <img
              v-if="credit === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="credit === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="credit === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              프리미엄 멤버십은 자동결제 or 정기결제 상품으로 카드결제만
              지원하고 있습니다.
            </div>
          </div>

          <div @click="terminate = !terminate" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              [프리미엄 멤버십] 정기결제 해지방법이 궁금해요.
            </div>
            <img
              v-if="terminate === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="terminate === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="terminate === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              <span class="bold">[마이메뉴 > 이용내역]</span> 에서 언제든지 확인
              가능하며, ‘해지’ 버튼으로 해지하실 수 있습니다.<br />
              정기 결제를 해지하면 남은 이용 기간 동안 서비스를 이용할 수 있고,
              다음 결제 예정일로부터 결제가 이루어지지 않습니다.
            </div>
          </div>

          <div @click="brandChange = !brandChange" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              [프리미엄 멤버십] 브랜드 전환은 어떻게 하나요?
            </div>
            <img
              v-if="brandChange === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="brandChange === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="brandChange === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              브랜드 전환은 아래의 경로를 통해 전환하실 수 있습니다.<br />
              <span class="bold">
                [로그인 > 내 브랜드 전환 > 브랜드 선택 > 확인 > 전환 완료]
              </span>
            </div>
          </div>

          <div @click="keyword = !keyword" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              [프리미엄 멤버십] 대표 키워드 등록은 어떻게 하나요?
            </div>
            <img
              v-if="keyword === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="keyword === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="keyword === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              대표 키워드 등록은 아래의 경로를 통해 등록/삭제 하실 수
              있습니다.<br />
              <span class="bold">
                [로그인 > 마이메뉴 > 대표키워드 > 해시태그 입력/추가 or 삭제 >
                완료]
              </span>
            </div>
          </div>

          <div @click="franchiseHistory = !franchiseHistory" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              광고 상품 이용내역은 어디서 볼 수 있나요?
            </div>
            <img
              v-if="franchiseHistory === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="franchiseHistory === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="franchiseHistory === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              구매한 광고 상품은
              <span class="bold">[마이메뉴 > 이용내역]</span> 에서 볼 수
              있습니다.
            </div>
          </div>

          <div @click="edit = !edit" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              배너 상품에 이미지 등록/수정은 어떻게 하나요?
            </div>
            <img
              v-if="edit === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="edit === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="edit === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              배너 상품은 결제 전 배너의 문구 or 이미지를 등록한 후에 결제가
              진행됩니다.<br />
              결제시 등록한 문구 or 이미지는
              <span class="bold">[마이메뉴 > 이용내역]</span> 에서 해당 상품
              상세내역에서 수정하실 수 있습니다.
            </div>
          </div>
        </div>

        <div class="content">
          <div class="title">공인중개사 광고 상품 관련</div>
          <div @click="realtorAd = !realtorAd" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              공인중개사 광고 서비스는 무엇인가요?
            </div>
            <img
              v-if="realtorAd === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="realtorAd === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="realtorAd === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              공인중개사 파트너 회원이 사용할 수 있는 광고 상품은 [상권
              지역플러스+] 와 [추천 중개사] 가 있습니다.<br /><br />
              <span class="blue">상권 지역플러스+</span>는 선택한 지역에
              중개사정보를 추가 노출하는 서비스 입니다. 더 많은 지역에
              중개사무실을 노출해 보세요.<br />
              <span class="blue">추천중개사</span>는 중개사 리스트 상단에 추천
              마크와 함께 노출되는 서비스 입니다. 상권 지역플러스를 이용하고
              계시다면 단 한번의 적용으로 모든 지역에 추천중개사로 등록됩니다.
            </div>
          </div>

          <div @click="service = !service" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              누구나 서비스를 신청할 수 있나요?
            </div>
            <img
              v-if="service === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="service === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="service === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              창업픽에 중개사 파트너로 가입되신 회원이면 누구나 이용 가능합니다.
            </div>
          </div>

          <div @click="manyPlace = !manyPlace" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              여러 지역도 신청이 가능한가요?
            </div>
            <img
              v-if="manyPlace === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="manyPlace === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="manyPlace === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              가입하신 중개사무소 주소로 기본 노출되며 다른 지역을 추가하고 싶은
              경우 <span class="blue">상권 지역플러스+</span>를 구매하여 지역을
              추가할 수 있습니다. 단, 지역 추가는 비용이 발생하는 유료
              서비스임을 알려드립니다.
            </div>
          </div>

          <div @click="setting = !setting" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              광고 상품 이용내역은 어디서 볼 수 있나요?
            </div>
            <img
              v-if="setting === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="setting === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="setting === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              구매한 광고 상품은
              <span class="bold">[마이메뉴 > 이용내역]</span> 에서 볼 수
              있습니다.
            </div>
          </div>

          <div @click="realtorHistory = !realtorHistory" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              구매한 광고 상품의 지역을 추가하려면 어떻게 해야하나요?
            </div>
            <img
              v-if="realtorHistory === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="realtorHistory === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="realtorHistory === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              구매한 광고 상품의 지역 추가는
              <span class="bold">[마이메뉴 > 이용내역 > 해당광고상품]</span>
              에서 추가할 수 있습니다.<br /><br />
              <span class="red">
                ※ 추가 노출 지역은 추가 후 변경이 불가하오니 이용에 참고하시기
                바랍니다.
              </span>
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

const premium = ref<boolean>(false)
const credit = ref<boolean>(false)
const terminate = ref<boolean>(false)
const brandChange = ref<boolean>(false)
const keyword = ref<boolean>(false)
const franchiseHistory = ref<boolean>(false)
const edit = ref<boolean>(false)
const realtorAd = ref<boolean>(false)
const service = ref<boolean>(false)
const manyPlace = ref<boolean>(false)
const setting = ref<boolean>(false)
const realtorHistory = ref<boolean>(false)
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
