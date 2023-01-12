<template>
  <section>
    <article class="nicepick-partner">
      <RouterLink to="/" class="none">
        <div v-if="getDevice !== 'mobile'" class="logo">
          <img class="nicepick" src="../assets/header/logo.png" alt="로고" />
          <img
            class="partner"
            src="../assets/header/partner.png"
            alt="파트너"
          />
        </div>

        <div v-if="getDevice === 'mobile'" class="title">
          <img src="../assets/login/arrow_lt.png" alt="이전" />
          <div>파트너 회원가입</div>
        </div>
      </RouterLink>
    </article>

    <article class="title-search">
      <div class="title">프랜차이즈 브랜드 회원가입</div>
      <div class="search">
        <div class="title">사업자 등록번호</div>
        <button>검색</button>
      </div>
    </article>

    <article class="join-input">
      <div class="input-box">
        <div class="box">
          <div>이메일<span>(아이디 사용)</span></div>
          <input type="email" placeholder="이메일 주소 입력" />
        </div>

        <div class="box">
          <div>비밀번호</div>
          <div class="pw-input">
            <input
              type="password"
              placeholder="비밀번호 입력(영문+숫자+특수문자 8~16자)"
            />
            <input type="password" placeholder="비밀번호 확인" />
          </div>
        </div>

        <div class="box">
          <div>담당자명</div>
          <input type="text" placeholder="이름 입력" />
        </div>

        <div class="box">
          <div>휴대폰 번호</div>
          <input type="text" placeholder="‘-’ 제외 숫자만 입력" />
        </div>
      </div>
    </article>

    <article class="check-submit">
      <div class="box">
        <div class="title">약관동의</div>
        <div class="border-box">
          <div class="padding-box">
            <div>전체 동의<input type="checkbox" /></div>

            <div class="gap-box">
              <div>(필수) 서비스 이용 약관 동의<input type="checkbox" /></div>
              <div>(필수) 개인정보 수집 이용 동의<input type="checkbox" /></div>
              <div>
                (선택) 창업 정보 및 이벤트 정보 수신 동의<input
                  type="checkbox"
                />
              </div>
            </div>
          </div>
        </div>

        <button>가입하기</button>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../store/window'
import { storeToRefs } from 'pinia'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)
</script>

<style lang="scss" scoped>
@import '@/scss/main';

section {
  padding-top: 100px;
  text-align: center;

  .none {
    text-decoration: none;
    color: inherit;
  }
  .nicepick-partner {
  }
}
</style>
