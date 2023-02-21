<template>
  <section>
    <article>
      <div class="top-title">서비스 Q&A</div>

      <div class="qna-list">
        <div class="content">
          <div class="title">회원정보 관련</div>
          <div @click="selectList = !selectList" class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              회원가입은 어떻게 하나요?
            </div>
            <img
              v-if="selectList === false"
              src="../../../assets/guide_partner/open.png"
              alt="열기"
            />
            <img
              v-if="selectList === true"
              src="../../../assets/guide_partner/close_2.png"
              alt="닫기"
            />
          </div>
          <div v-if="selectList === true" class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              창업픽 파트너 회원가입은
              <span class="bold"
                >[로그인/회원가입 > <span class="blue">회원가입</span>]</span
              >
              에서 하실 수 있습니다. 파트너 회원의 구분은 프랜차이즈 브랜드,
              공인중개사, 협력 파트너 등이 있습니다.
            </div>
          </div>

          <div class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              회원정보는 어떻게 수정하나요?
            </div>
            <img src="../../../assets/guide_partner/open.png" alt="열기" />
            <img src="../../../assets/guide_partner/close_2.png" alt="닫기" />
          </div>
          <div class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              회원정보 수정은 로그인 후
              <span class="bold">[마이메뉴> 내 정보관리]</span> 에서 수정하실 수
              있습니다. <br /><br />
              <span class="red">
                ※ 회원정보는 언제든지 수정이 가능하나 회원ID로 사용되는 이메일은
                수정이 불가합니다.
              </span>
            </div>
          </div>

          <div class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              비밀번호가 기억나지 않아요. 어떻게 해야 하나요?
            </div>
            <img src="../../../assets/guide_partner/open.png" alt="열기" />
            <img src="../../../assets/guide_partner/close_2.png" alt="닫기" />
          </div>
          <div class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              로그인 페이지의 <span class="blue">비밀번호찾기</span>를 클릭 후
              이메일로 인증번호를 받아 입력하시면 비밀번호를 재설정 하실 수
              있습니다.
            </div>
          </div>

          <div class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              이메일을 변경하고 싶어요.
            </div>
            <img src="../../../assets/guide_partner/open.png" alt="열기" />
            <img src="../../../assets/guide_partner/close_2.png" alt="닫기" />
          </div>
          <div class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              창업픽 파트너 회원가입시 사용되는 이메일은 ID로 사용되기 때문에
              가입 후 변경이 불가합니다.
            </div>
          </div>

          <div class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              회원 탈퇴는 어떻게 하나요?
            </div>
            <img src="../../../assets/guide_partner/open.png" alt="열기" />
            <img src="../../../assets/guide_partner/close_2.png" alt="닫기" />
          </div>
          <div class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              창업픽 파트너 회원탈퇴는 아래의 경로를 통해 직접 회원탈퇴를 하실
              수 있습니다.
              <span class="bold"
                >[로그인 > 마이메뉴 > 내 정보관리 > 회원탈퇴 >
              </span>
              탈퇴사유 선택 > 탈퇴 완료]
              <br /><br />
              ※ 여러 차례 탈퇴/가입을 반복할 경우 이후 재가입이 어려울 수
              있습니다.
            </div>
          </div>
        </div>

        <div class="content">
          <div class="title">결제 및 환불 관련</div>
          <div class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              결제 방법이 궁금해요!
            </div>
            <img src="../../../assets/guide_partner/open.png" alt="열기" />
            <img src="../../../assets/guide_partner/close_2.png" alt="닫기" />
          </div>
          <div class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              결제 방법은 신용카드와 계좌이체로 가능합니다. 광고 상품은 부가세
              포함 금액이며, 계좌이체시 세금계산서 발급이 가능합니다.
            </div>
          </div>

          <div class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              세금계산서는 어떻게 받을 수 있나요?
            </div>
            <img src="../../../assets/guide_partner/open.png" alt="열기" />
            <img src="../../../assets/guide_partner/close_2.png" alt="닫기" />
          </div>
          <div class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              카드 결제 후 고객센터(070-8287-2281)로 문의하여 매출전표를
              요청하시면 발행해드립니다.
            </div>
          </div>

          <div class="list">
            <div>
              <i class="fa-solid fa-q"></i>
              결제 후 환불 받을 수 있나요?
            </div>
            <img src="../../../assets/guide_partner/open.png" alt="열기" />
            <img src="../../../assets/guide_partner/close_2.png" alt="닫기" />
          </div>
          <div class="more-box">
            <i class="fa-solid fa-a"></i>
            <div>
              사용전이라면 전액 환불이 가능하며, 이용중이라면 잔여기간을 일할
              계산하여 환불조치가 됩니다. 환불요청은 고객센터로 꼭 문의주시기
              바랍니다.
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectList = ref<boolean>()
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
        height: 150px;
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
        }
      }
    }
  }
}
</style>
