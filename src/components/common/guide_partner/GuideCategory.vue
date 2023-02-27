<template>
  <section>
    <div class="modal">
      <div class="guide-category">
        <div v-if="getDevice !== 'pc'" class="top">
          <img
            @click="$emit('showHammenu')"
            src="../../../assets/guide_partner/x.png"
            alt="창닫기"
          />
        </div>

        <div class="category-list">
          <div class="category">
            <RouterLink to="/partnerguide/login" class="none">
              <div @click="selectCategory = 'join'" class="category-name">
                <div class="left">
                  <i
                    v-if="selectCategory !== 'join'"
                    class="fa-regular fa-folder"
                  ></i>
                  <i
                    v-if="selectCategory === 'join'"
                    class="fa-regular fa-folder-open"
                  ></i>
                  <div
                    :class="{ bold: selectCategory === 'join' }"
                    class="name"
                  >
                    파트너 가입 가이드
                  </div>
                </div>
                <img
                  v-if="selectCategory !== 'join'"
                  src="../../../assets/guide_partner/open.png"
                  alt="열기"
                />
                <img
                  v-if="selectCategory === 'join'"
                  src="../../../assets/guide_partner/close.png"
                  alt="닫기"
                />
              </div>
            </RouterLink>
            <div v-if="selectCategory === 'join'" class="sub-category">
              <RouterLink to="/partnerguide/login" class="none">
                <div
                  :class="{ style: joinSub === '회원가입/로그인' }"
                  @click="joinSub = '회원가입/로그인'"
                >
                  회원가입/로그인
                </div>
              </RouterLink>
              <RouterLink to="/partnerguide/franchisejoin" class="none">
                <div
                  :class="{
                    style: joinSub === '프랜차이즈 파트너 회원가입 절차',
                  }"
                  @click="joinSub = '프랜차이즈 파트너 회원가입 절차'"
                >
                  프랜차이즈 파트너 회원가입 절차
                </div>
              </RouterLink>
              <RouterLink to="/partnerguide/realtorjoin" class="none">
                <div
                  :class="{
                    style: joinSub === '공인중개사 파트너 회원가입 절차',
                  }"
                  @click="joinSub = '공인중개사 파트너 회원가입 절차'"
                >
                  공인중개사 파트너 회원가입 절차
                </div>
              </RouterLink>
              <RouterLink to="/partnerguide/cooperationjoin" class="none">
                <div
                  :class="{ style: joinSub === '협력 파트너 회원가입 절차' }"
                  @click="joinSub = '협력 파트너 회원가입 절차'"
                >
                  협력 파트너 회원가입 절차
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="category">
            <RouterLink to="/partnerguide/franchiseservice" class="none">
              <div @click="selectCategory = 'service'" class="category-name">
                <div class="left">
                  <i
                    v-if="selectCategory !== 'service'"
                    class="fa-regular fa-folder"
                  ></i>
                  <i
                    v-if="selectCategory === 'service'"
                    class="fa-regular fa-folder-open"
                  ></i>
                  <div
                    :class="{ bold: selectCategory === 'service' }"
                    class="name"
                  >
                    서비스 이용 가이드
                  </div>
                </div>
                <img
                  v-if="selectCategory !== 'service'"
                  src="../../../assets/guide_partner/open.png"
                  alt="열기"
                  @click="selectCategory = 'service'"
                />
                <img
                  v-if="selectCategory === 'service'"
                  src="../../../assets/guide_partner/close.png"
                  alt="닫기"
                />
              </div>
            </RouterLink>
            <div v-if="selectCategory === 'service'" class="sub-category">
              <RouterLink to="/partnerguide/franchiseservice" class="none">
                <div
                  :class="{
                    style: serviceSub === '프랜차이즈 파트너 회원가입 절차',
                  }"
                  @click="serviceSub = '프랜차이즈 파트너 회원가입 절차'"
                >
                  프랜차이즈 파트너 서비스
                </div>
              </RouterLink>
              <RouterLink to="/partnerguide/realtorservice" class="none">
                <div
                  :class="{
                    style: serviceSub === '공인중개사 파트너 서비스',
                  }"
                  @click="serviceSub = '공인중개사 파트너 서비스'"
                >
                  공인중개사 파트너 서비스
                </div>
              </RouterLink>
              <RouterLink to="/partnerguide/cooperationservice" class="none">
                <div
                  :class="{
                    style: serviceSub === '협력 파트너 서비스',
                  }"
                  @click="serviceSub = '협력 파트너 서비스'"
                >
                  협력 파트너 서비스
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="category">
            <RouterLink to="/partnerguide/franchisead" class="none">
              <div @click="selectCategory = 'ad'" class="category-name">
                <div class="left">
                  <i
                    v-if="selectCategory !== 'ad'"
                    class="fa-regular fa-folder"
                  ></i>
                  <i
                    v-if="selectCategory === 'ad'"
                    class="fa-regular fa-folder-open"
                  ></i>
                  <div :class="{ bold: selectCategory === 'ad' }" class="name">
                    광고 상품 안내
                  </div>
                </div>
                <img
                  v-if="selectCategory !== 'ad'"
                  src="../../../assets/guide_partner/open.png"
                  alt="열기"
                  @click="selectCategory = 'ad'"
                />
                <img
                  v-if="selectCategory === 'ad'"
                  src="../../../assets/guide_partner/close.png"
                  alt="닫기"
                />
              </div>
            </RouterLink>
            <div v-if="selectCategory === 'ad'" class="sub-category">
              <RouterLink to="/partnerguide/franchisead" class="none">
                <div
                  :class="{
                    style: adSub === '프랜차이즈 파트너 광고 상품',
                  }"
                  @click="adSub = '프랜차이즈 파트너 광고 상품'"
                >
                  프랜차이즈 파트너 광고 상품
                </div>
              </RouterLink>
              <RouterLink to="/partnerguide/realtorad" class="none">
                <div
                  :class="{
                    style: adSub === '공인중개사 파트너 광고 상품',
                  }"
                  @click="adSub = '공인중개사 파트너 광고 상품'"
                >
                  공인중개사 파트너 광고 상품
                </div>
              </RouterLink>
              <RouterLink to="/partnerguide/cooperationad" class="none">
                <div
                  :class="{
                    style: adSub === '협력 파트너 광고 상품',
                  }"
                  @click="adSub = '협력 파트너 광고 상품'"
                >
                  협력 파트너 광고 상품
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="category">
            <RouterLink to="/partnerguide/serviceqna" class="none">
              <div @click="selectCategory = 'question'" class="category-name">
                <div class="left">
                  <i
                    v-if="selectCategory !== 'question'"
                    class="fa-regular fa-folder"
                  ></i>
                  <i
                    v-if="selectCategory === 'question'"
                    class="fa-regular fa-folder-open"
                  ></i>
                  <div
                    :class="{ bold: selectCategory === 'question' }"
                    class="name"
                  >
                    자주 묻는 질문
                  </div>
                </div>
                <img
                  v-if="selectCategory !== 'question'"
                  src="../../../assets/guide_partner/open.png"
                  alt="열기"
                  @click="selectCategory = 'question'"
                />
                <img
                  v-if="selectCategory === 'question'"
                  src="../../../assets/guide_partner/close.png"
                  alt="닫기"
                />
              </div>
            </RouterLink>
            <div v-if="selectCategory === 'question'" class="sub-category">
              <RouterLink to="/partnerguide/serviceqna" class="none">
                <div
                  :class="{
                    style: qnaSub === '서비스 질문',
                  }"
                  @click="qnaSub = '서비스 질문'"
                >
                  서비스 Q&A
                </div>
              </RouterLink>
              <RouterLink to="/partnerguide/partnerqna" class="none">
                <div
                  :class="{
                    style: qnaSub === '파트너 질문',
                  }"
                  @click="qnaSub = '파트너 질문'"
                >
                  파트너 Q&A
                </div>
              </RouterLink>
              <RouterLink to="/partnerguide/adqna" class="none">
                <div
                  :class="{
                    style: qnaSub === '광고 질문',
                  }"
                  @click="qnaSub = '광고 질문'"
                >
                  광고 상품 Q&A
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../store/window'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const selectCategory = ref<string>('join')
const joinSub = ref<string>('회원가입/로그인')
const serviceSub = ref<string>('프랜차이즈 파트너 회원가입 절차')
const adSub = ref<string>('프랜차이즈 파트너 광고 상품')
const qnaSub = ref<string>('서비스 질문')

defineEmits<{
  (e: 'showBrandChange'): void
}>()
</script>

<style lang="scss" scoped>
@import '@/scss/main';
section {
  .none {
    text-decoration: none;
  }
  .modal {
    width: 330px;
    height: 100%;
    background-color: #fafcfd;
    .guide-category {
      .category-list {
        padding: 45px 30px 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
        .category {
          .category-name {
            height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: $fontMain;
            cursor: pointer;
            .left {
              display: flex;
              align-items: center;
              gap: 14px;
            }
            img {
              width: 20px;
              height: 20px;
            }
          }
          .bold {
            font-weight: $semi;
          }
          .sub-category {
            div {
              height: 40px;
              padding-left: 16px;
              box-sizing: border-box;
              display: flex;
              align-items: center;
              border-radius: 10px;
              font-size: 15px;
              color: $fontSub;
              cursor: pointer;
            }
            .style {
              background-color: #e7ebf8;
              color: #3d50cb;
              font-weight: $medi;
            }
          }
        }
      }
    }
  }
}

@include tablet {
  section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(25, 25, 25, 0.5);
    .modal {
      width: 358px;
      display: flex;
      justify-content: center;
      .guide-category {
        width: 100%;
        .top {
          border-bottom: 1px solid $sectionLine;
          padding: 14px 44px 16px;
          img {
            width: 30px;
            height: 30px;
            cursor: pointer;
          }
        }
        .category-list {
          padding: 20px 44px 0;
        }
      }
    }
  }
}

@include mobile {
  section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    .modal {
      width: 100%;
      display: flex;
      justify-content: center;
      .guide-category {
        width: 100%;
        .top {
          border-bottom: 1px solid $sectionLine;
          padding: 14px 24px 16px;
          img {
            width: 30px;
            height: 30px;
            cursor: pointer;
          }
        }
        .category-list {
          padding: 20px 24px 23px;
          .category {
            .sub-category {
              div {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
