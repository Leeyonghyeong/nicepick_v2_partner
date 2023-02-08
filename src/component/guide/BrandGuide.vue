<template>
  <section>
    <article>
      <div class="top-title" v-if="getDevice !== 'mobile'">
        <span class="sub">NICEPICK GUIDE</span>
        창업픽 가이드
      </div>
      <div class="mob-title" v-if="getDevice === 'mobile'">
        <img src="../../assets/guide/back.png" alt="뒤로가기" /> 창업픽 가이드
      </div>

      <div class="category">
        <div class="box">
          <div
            :class="{ select: selectCategory === '업종카테고리' }"
            @click="selectCategory = '업종카테고리'"
          >
            업종카테고리
          </div>
          <div
            :class="{ select: selectCategory === '브랜드상세정보' }"
            @click="selectCategory = '브랜드상세정보'"
          >
            브랜드 상세정보
          </div>
          <div
            :class="{ select: selectCategory === '프로모션' }"
            @click="selectCategory = '프로모션'"
          >
            프로모션
          </div>
          <div
            :class="{ select: selectCategory === '지역별브랜드랭킹' }"
            @click="selectCategory = '지역별브랜드랭킹'"
          >
            지역별 브랜드 랭킹
          </div>
          <div
            :class="{ select: selectCategory === '브랜드비교' }"
            @click="selectCategory = '브랜드비교'"
          >
            브랜드 비교
          </div>
        </div>
      </div>

      <div class="content" v-if="selectCategory === '업종카테고리'">
        <div class="img-box">
          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/brand/pc업종-1.png"
              alt="업종1"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/brand/tab업종-1.png"
              alt="업종1"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/brand/mob업종-1.png"
              alt="업종1"
            />
            <div class="title">① 전체 업종</div>
            <span class="sub">
              - 메인페이지에서 업종별로 브랜드를 볼 수 있습니다.
            </span>
          </div>
          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/brand/pc업종-2.png"
              alt="업종2"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/brand/tab업종-2.png"
              alt="업종2"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/brand/mob업종-2.png"
              alt="업종2"
            />
            <div class="title">② 선택 업종 변경</div>
            <span class="sub">- 선택한 업종을 변경할 수 있습니다.</span>
            <div class="image">
              <div
                class="more"
                v-if="selectMoreImg === 'show'"
                @click="selectMoreImg = 'hide'"
              >
                이미지 보기
                <img src="../../assets/guide/more.png" alt="보기" />
              </div>
              <div
                v-if="selectMoreImg === 'hide'"
                @click="selectMoreImg = 'show'"
              >
                <div class="more">
                  이미지 숨기기
                  <img src="../../assets/guide/hide.png" alt="숨기기" />
                </div>
                <img
                  v-if="getDevice !== 'mobile'"
                  class="select-category"
                  src="../../assets/guide/brand/pc-tab선택업종.png"
                  alt="선택"
                />
                <img
                  v-if="getDevice === 'mobile'"
                  class="select-category"
                  src="../../assets/guide/brand/mob선택업종.png"
                  alt="선택"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="title">③ 세부 업종</div>
          <span class="sub">
            - 브랜드 목록에서 업종과 세부업종을 선택할 수 있습니다.
          </span>
        </div>
        <div class="box">
          <div class="title">④ 브랜드 목록</div>
          <span class="sub">
            - 선택한 업종의 브랜드를 목록으로 볼 수 있습니다.
          </span>
        </div>
        <div class="box">
          <div class="title">⑤ 필터</div>
          <span class="sub">
            - 우측에 필터를 사용하여 원하는 조건으로 설정 후 브랜드를 검색 할 수
            있습니다.
          </span>
          <div class="image">
            <div
              class="more"
              v-if="filterMoreImg === 'show'"
              @click="filterMoreImg = 'hide'"
            >
              이미지 보기
              <img src="../../assets/guide/more.png" alt="보기" />
            </div>
            <div
              v-if="filterMoreImg === 'hide'"
              @click="filterMoreImg = 'show'"
            >
              <div class="more">
                이미지 숨기기
                <img src="../../assets/guide/hide.png" alt="숨기기" />
              </div>
              <img
                v-if="getDevice !== 'mobile'"
                class="filter"
                src="../../assets/guide/brand/pc-tab필터.png"
                alt="필터"
              />
              <img
                v-if="getDevice === 'mobile'"
                class="filter"
                src="../../assets/guide/brand/mob필터.png"
                alt="필터"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="content" v-if="selectCategory === '브랜드상세정보'">
        <div class="img-box">
          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/brand/pc상세.png"
              alt="상세1"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/brand/tab상세.png"
              alt="상세1"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/brand/mob상세.png"
              alt="상세1"
            />
            <div class="title">① 메인 배너</div>
            <span class="sub">
              - 브랜드를 대표하는 메인 사진(이미지)입니다.
            </span>
            <div class="box">
              <div class="title">② 브랜드 요약 정보</div>
              <span class="sub">- 브랜드의 정보를 요약하여 보여줍니다.</span>
            </div>
            <div class="box">
              <div class="title">③ 브랜드 비교</div>
              <span class="sub">
                - 브랜드 비교 내역에 추가하는 버튼입니다.<br />
                - 관심있는 브랜드를 추가하여 브랜드별로 비교할 수 있습니다.
                (최대 4개)<br />
                - 브랜드 비교는 메인메뉴
                <span class="bold">[브랜드>브랜드비교]</span>에서 확인하실 수
                있습니다.
              </span>
              <div class="image">
                <div
                  class="more"
                  v-if="compareMoreImg === 'show'"
                  @click="compareMoreImg = 'hide'"
                >
                  이미지 보기
                  <img src="../../assets/guide/more.png" alt="보기" />
                </div>
                <div
                  v-if="compareMoreImg === 'hide'"
                  @click="compareMoreImg = 'show'"
                >
                  <div class="more">
                    이미지 숨기기
                    <img src="../../assets/guide/hide.png" alt="숨기기" />
                  </div>
                  <img
                    class="compare"
                    src="../../assets/guide/brand/비교.png"
                    alt="비교"
                  />
                </div>
              </div>
            </div>
            <div class="box">
              <div class="title">④ 브랜드 찜</div>
              <span class="sub">
                - 관심있는 브랜드를 찜할 수 있습니다. (최대 10개)
              </span>
              <div class="image">
                <div
                  class="more"
                  v-if="wishMoreImg === 'show'"
                  @click="wishMoreImg = 'hide'"
                >
                  이미지 보기
                  <img src="../../assets/guide/more.png" alt="보기" />
                </div>
                <div
                  v-if="wishMoreImg === 'hide'"
                  @click="wishMoreImg = 'show'"
                >
                  <div class="more">
                    이미지 숨기기
                    <img src="../../assets/guide/hide.png" alt="숨기기" />
                  </div>
                  <img
                    class="compare"
                    src="../../assets/guide/brand/찜.png"
                    alt="비교"
                  />
                </div>
              </div>
            </div>
            <div class="box">
              <div class="title">⑤ 실시간 문의</div>
              <span class="sub">
                - 브랜드에게 실시간으로 문의할 수 있습니다.<br />
                - 문의한 내역은 <span class="bold">[마이메뉴>문의내역]</span>
                확인하실 수 있습니다
              </span>
              <div class="image">
                <div class="more">
                  실시간 문의 가이드 바로가기
                  <img src="../../assets/guide/link.png" alt="링크" />
                </div>
              </div>
            </div>
            <div class="box">
              <div class="title">⑥ 프로모션</div>
              <span class="sub">
                - 브랜드의 진행중인 프로모션을 보여줍니다.
              </span>
            </div>
          </div>

          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/brand/pc상세-2.png"
              alt="상세2"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/brand/tab상세-2.png"
              alt="상세2"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/brand/mob상세-2.png"
              alt="상세2"
            />
            <div class="title">⑦ 브랜드 소개</div>
            <span class="sub">
              - 브랜드의 기본 정보와 유튜브 영상, 대표메뉴, 인테리어, 창업 절차
              등을 볼 수 있습니다.
            </span>
          </div>

          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/brand/pc상세-3.png"
              alt="상세3"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/brand/tab상세-3.png"
              alt="상세3"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/brand/mob상세-3.png"
              alt="상세3"
            />
            <div class="title">⑧ 브랜드 현황</div>
            <span class="sub">
              - 브랜드의 가맹점 증감 현황, 연도별 매장 현황, 창업 비용, 평균
              매출 현황 등을 그래프로 볼 수 있습니다.
            </span>
          </div>

          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/brand/pc상세-4.png"
              alt="상세4"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/brand/tab상세-4.png"
              alt="상세4"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/brand/mob상세-4.png"
              alt="상세4"
            />
            <div class="title">⑨ 본사 정보</div>
            <span class="sub">
              - 브랜드의 본사 정보, 본사 매출정보, 본사 임직원 수, 그 외
              운영하는 브랜드를 볼 수 있습니다.
            </span>
          </div>
        </div>
      </div>

      <div class="content" v-if="selectCategory === '프로모션'">
        <div class="img-box">
          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/brand/pc프로모션.png"
              alt="프로모션1"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/brand/tab프로모션.png"
              alt="프로모션2"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/brand/mob프로모션.png"
              alt="프로모션3"
            />
            <div class="title">① 프로모션</div>
            <span class="sub">
              - 현재 브랜드별 진행중인 프로모션을 한 눈에 확인 할 수 있습니다.
            </span>
            <div class="box">
              <div class="title">*프로모션 종류 알아보기</div>
              <span class="sub">
                - 기본 프로모션, 추가 프로모션을 확인해 보세요.
              </span>
              <div class="image">
                <div
                  class="more"
                  v-if="promotionMoreImg === 'show'"
                  @click="promotionMoreImg = 'hide'"
                >
                  이미지 보기
                  <img src="../../assets/guide/more.png" alt="보기" />
                </div>
                <div
                  v-if="promotionMoreImg === 'hide'"
                  @click="promotionMoreImg = 'show'"
                >
                  <div class="more">
                    이미지 숨기기
                    <img src="../../assets/guide/hide.png" alt="숨기기" />
                  </div>
                  <img
                    v-if="getDevice !== 'mobile'"
                    class="promotion"
                    src="../../assets/guide/brand/프로모션종류.png"
                    alt="프로모션"
                  />
                  <img
                    v-if="getDevice === 'mobile'"
                    class="promotion"
                    src="../../assets/guide/brand/mob프로모션종류.png"
                    alt="프로모션"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content" v-if="selectCategory === '지역별브랜드랭킹'">
        <div class="img-box">
          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/brand/pc지역별.png"
              alt="지역별1"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/brand/tab지역별.png"
              alt="지역별2"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/brand/mob지역별.png"
              alt="지역별3"
            />
            <div class="title">① 지역 선택</div>
            <span class="sub">
              - 각 지역 별 브랜드 랭킹을 확인 할 수 있습니다.
            </span>
            <div class="box">
              <div class="title">② 업종 선택</div>
              <span class="sub">
                - 업종별 브랜드 랭킹을 확인 할 수 있습니다.
              </span>
            </div>
            <div class="box">
              <div class="title">③ 전국/지역 매장수</div>
              <span class="sub">
                - 전체 매장 대비 해당 지역의 매장 수를 비교해 보세요.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="content" v-if="selectCategory === '브랜드비교'">
        <div class="img-box">
          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/brand/pc브랜드비교.png"
              alt="브랜드비교1"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/brand/tab브랜드비교.png"
              alt="브랜드비교2"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/brand/mob브랜드비교.png"
              alt="브랜드비교3"
            />
            <div class="title">① 브랜드 비교 선택 내역</div>
            <span class="sub">
              - 비교하고자 하는 브랜드를 보여줍니다. 최대 4개의 브랜드 선택이
              가능합니다.
            </span>
            <div class="box">
              <div class="title">② 순위별 그래프</div>
              <span class="sub">
                - 선택한 브랜드를 비교하여 순위별로 확인해 볼 수 있습니다.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="main-link">
        <RouterLink to="/nicepickguide">
          <button>가이드 목록으로</button>
        </RouterLink>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../store/window'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const selectCategory = ref<string>('업종카테고리')

const selectMoreImg = ref<string>('show')
const filterMoreImg = ref<string>('show')
const compareMoreImg = ref<string>('show')
const wishMoreImg = ref<string>('show')
const promotionMoreImg = ref<string>('show')
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 80px 0;

  .top-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    font-size: 20px;
    color: $fontMain;
    font-weight: $medi;
    .sub {
      font-size: 12px;
      color: $fontSub;
    }
  }

  .category {
    display: flex;
    justify-content: center;
    padding-top: 80px;
    font-size: 15px;
    color: $fontSub;
    white-space: nowrap;
    overflow-x: auto;
    touch-action: auto;
    .box {
      width: 1194px;
      border-bottom: 1px solid $sectionLine;
      display: flex;
      justify-content: center;
      gap: 30px;
      div {
        cursor: pointer;
      }
      .select {
        color: $fontMain;
        font-weight: $semi;
        border-bottom: 2px solid $fontMain;
        padding-bottom: 18px;
      }
    }
  }

  .content {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-box {
      display: flex;
      flex-direction: column;
      gap: 80px;
    }
    .box {
      width: 1194px;
      display: flex;
      flex-direction: column;
      .title {
        padding-top: 30px;
        color: $fontMain;
      }
      .sub {
        padding-top: 10px;
        color: $fontSub;
        font-size: 15px;
      }
      .image {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        font-size: 12px;
        color: #1569ff;
        .more {
          padding: 20px 0 10px;
          display: flex;
          align-items: center;
          cursor: pointer;
          img {
            width: 20px;
            height: 20px;
          }
        }
        .select-category {
          width: 161px;
          height: 408px;
        }
        .filter {
          width: 438px;
          height: 520px;
        }
        .compare,
        .wish {
          width: 174px;
          height: 96px;
        }
        .promotion {
          width: 592px;
          height: 273px;
        }
      }
    }
  }
  .main-link {
    padding-top: 80px;
    display: flex;
    justify-content: center;
    button {
      width: 1194px;
      height: 50px;
      border-radius: 10px;
      border: 1px solid $fontSub;
      background-color: white;
      font-family: Pretendard;
      font-size: 16px;
      font-weight: $reg;
      color: $fontSub;
      cursor: pointer;
    }
  }
}

@include tablet {
  article {
    padding: 80px 44px 60px 44px;
    .content {
      .box {
        width: 100%;
        img {
          width: 100%;
        }
        .image {
          .compare,
          .wish {
            width: 174px;
            height: 96px;
          }
        }
      }
    }
    .main-link {
      display: block;
      button {
        width: 100%;
      }
    }
  }
}

@include mobile {
  article {
    padding: 0;
    .mob-title {
      padding: 15px 0 15px 24px;
      display: flex;
      align-items: center;
      gap: 8px;
      color: $fontMain;
      border-bottom: 1px solid $sectionLine;
      img {
        width: 30px;
        height: 30px;
      }
    }

    .category {
      padding: 17px 24px 0;
      justify-content: flex-start;
      font-size: 14px;
      border-bottom: 1px solid $sectionLine;
      .box {
        border: none;
      }
    }

    .content {
      padding: 20px 24px 0 24px;
      .img-box {
        gap: 60px;
      }
      .box {
        width: 100%;
        img {
          width: 100%;
        }
        .title {
          font-size: 15px;
        }
        .sub {
          font-size: 13px;
        }
        .image {
          .select-category {
            width: 70%;
            height: 100%;
          }
          .filter {
            width: 75%;
            height: 100%;
          }
          .compare,
          .wish {
            width: 50%;
            height: 100%;
          }
          .promotion {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .main-link {
      padding: 60px 24px 30px 24px;
      display: block;
      button {
        width: 100%;
      }
    }
  }
}
</style>
