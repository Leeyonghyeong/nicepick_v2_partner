<template>
  <section>
    <article>
      <div class="top-title" v-if="getDevice !== 'mobile'">
        <span class="sub">COMMERCIAL AREA INFORMATION GUIDE</span>
        상권정보 가이드
      </div>
      <div class="mob-title" v-if="getDevice === 'mobile'">
        <img src="../../assets/guide/back.png" alt="뒤로가기" /> 상권정보 가이드
      </div>

      <div class="category">
        <div
          :class="{ select: selectCategory === '상권분석' }"
          @click="selectCategory = '상권분석'"
        >
          상권분석
        </div>
        <div
          :class="{ select: selectCategory === '유사상권정보' }"
          @click="selectCategory = '유사상권정보'"
        >
          유사상권정보
        </div>
        <div
          :class="{ select: selectCategory === '브랜드리스트' }"
          @click="selectCategory = '브랜드리스트'"
        >
          브랜드 리스트
        </div>
      </div>

      <div class="content" v-if="selectCategory === '상권분석'">
        <div class="img-box">
          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/commercial/pc상권분석.png"
              alt="상권분석1"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/commercial/tab상권분석.png"
              alt="상권분석1"
            />
            <img
              v-if="getDevice === 'mob'"
              src="../../assets/guide/commercial/mob상권분석.png"
              alt="상권분석1"
            />
            <div class="title">① 상권분석</div>
            <span class="sub"> - 상권분석 서비스를 선택하세요. </span>
            <div class="box">
              <div class="title">② 지역 선택</div>
              <span class="sub">
                - 분석하고 싶은 지역(동)을 지도에서 선택하세요.
              </span>
            </div>
            <div class="box">
              <div class="title">③ 업종 선택</div>
              <span class="sub">
                - 선택한 지역의 분석하고자 하는 업종을 선택하세요.
              </span>
            </div>
            <div class="box">
              <div class="title">④ 세부 업종 선택</div>
              <span class="sub">
                - 분석하고 싶은 업종의 세부업종을 선택하세요.
              </span>
            </div>
            <div class="box">
              <div class="title">⑤ 분석하기</div>
              <span class="sub">
                - 지역, 업종, 세부업종까지 선택하고 분석하기 버튼을 누르세요.
              </span>
            </div>
          </div>

          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/commercial/pc상권분석-2.png"
              alt="상권분석2"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/commercial/tab상권분석-2.png"
              alt="상권분석2"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/commercial/mob상권분석-2.png"
              alt="상권분석2"
            />
            <div class="title">⑥ 상권분석 결과</div>
            <span class="sub">
              - 매장수, 일평균 유동인구, 주거인구, 직장인구, 가구세대 수 등
              선택지역의 상권 분석 결과를 그래프를 통해 볼 수 있습니다.
            </span>
            <button class="link">상권분석 바로가기 ></button>
          </div>
        </div>
      </div>

      <div class="content" v-if="selectCategory === '유사상권정보'">
        <div class="img-box">
          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/commercial/pc유사상권.png"
              alt="유사상권1"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/commercial/tab유사상권.png"
              alt="유사상권1"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/commercial/mob유사상권.png"
              alt="유사상권1"
            />
            <div class="title">① 유사상권분석</div>
            <span class="sub"> - 유사상권분석 서비스를 선택하세요. </span>
            <div class="box">
              <div class="title">② 로그인</div>
              <span class="sub">
                - 유사상권분석 서비스는 창업픽 회원전용 서비스입니다. 로그인 후
                이용하실 수 있습니다.
              </span>
              <div class="image">
                <div class="more">
                  로그인/회원가입 바로가기
                  <img src="../../assets/guide/link.png" alt="이동" />
                </div>
              </div>
            </div>
          </div>

          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/commercial/pc유사상권-2.png"
              alt="유사상권2"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/commercial/tab유사상권-2.png"
              alt="유사상권2"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/commercial/mob유사상권-2.png"
              alt="유사상권2"
            />
            <div class="title">③ 지역 선택</div>
            <span class="sub">
              - 분석하고 싶은 기준 지역(동)을 지도에서 선택하세요.
            </span>
            <div class="box">
              <div class="title">④ 업종 선택</div>
              <span class="sub">
                - 선택한 지역의 분석하고자 하는 업종을 선택하세요.
              </span>
            </div>
            <div class="box">
              <div class="title">⑤ 세부 업종 선택</div>
              <span class="sub">
                - 분석하고 싶은 업종의 세부업종을 선택하세요.
              </span>
            </div>
            <div class="box">
              <div class="title">⑥ 분석하기</div>
              <span class="sub">
                - 지역, 업종, 세부업종까지 선택하고 분석하기 버튼을 누르세요.
              </span>
            </div>
          </div>

          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/commercial/pc유사상권-3.png"
              alt="유사상권3"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/commercial/tab유사상권-3.png"
              alt="유사상권3"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/commercial/mob유사상권-3.png"
              alt="유사상권3"
            />
            <div class="title">⑦ 유사상권분석 결과</div>
            <span class="sub">
              - 동일업종매장수, 유동인구, 주거인구, 직장인구, 가구원별 세대 수
              등 선택지역과 유사상권분석 결과를 그래프를 통해 볼 수 있습니다.
            </span>
            <button class="link">유사상권분석 바로가기 ></button>
          </div>
        </div>
      </div>

      <div class="content" v-if="selectCategory === '브랜드리스트'">
        <div class="img-box">
          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/commercial/pc리스트.png"
              alt="리스트1"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/commercial/tab리스트.png"
              alt="리스트1"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/commercial/mob리스트.png"
              alt="리스트1"
            />
            <div class="title">① 브랜드 리스트 선택</div>
            <span class="sub">- 브랜드 리스트 서비스를 선택하세요.</span>
            <div class="box">
              <div class="title">② 업종 선택</div>
              <span class="sub">
                - 현재 지도에서 보고싶은 업종을 선택하세요.
              </span>
            </div>
            <div class="box">
              <div class="title">③ 세부 업종 선택</div>
              <span class="sub"> - 전체 또는 세부 업종을 선택하세요. </span>
            </div>
            <div class="box">
              <div class="title">④ 분석하기</div>
              <span class="sub">
                - 업종, 세부업종을 선택하고 확인 버튼을 누르세요.
              </span>
            </div>
          </div>

          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/commercial/pc리스트-2.png"
              alt="리스트1"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/commercial/tab리스트-2.png"
              alt="리스트1"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/commercial/mob리스트-2.png"
              alt="리스트1"
            />
            <div class="title">⑤ 창업 비용 필터</div>
            <span class="sub">
              - 창업비용 범위내의 브랜드 리스트만 보실수 있습니다.
            </span>
            <div class="box">
              <div class="title">⑥ 창업 가능 브랜드 보기</div>
              <span class="sub">
                - 현위치에서 창업이 가능한 브랜드만 보여줍니다. (창업가능 여부는
                해당 브랜드사로 직접 문의 부탁드립니다.)
              </span>
              <div class="image">
                <div
                  class="more"
                  v-if="possibleMoreImg === 'show'"
                  @click="possibleMoreImg = 'hide'"
                >
                  이미지 보기
                  <img src="../../assets/guide/more.png" alt="보기" />
                </div>
                <div
                  v-if="possibleMoreImg === 'hide'"
                  @click="possibleMoreImg = 'show'"
                >
                  <div class="more">
                    이미지 숨기기
                    <img src="../../assets/guide/hide.png" alt="숨기기" />
                  </div>
                  <img
                    class="possible"
                    src="../../assets/guide/commercial/창업가능브랜드.png"
                    alt="창업가능브랜드"
                  />
                </div>
              </div>
            </div>
            <div class="box">
              <div class="title">⑦ 브랜드 리스트</div>
              <span class="sub">- 지도에 표시된 브랜드 리스트 입니다.</span>
            </div>
            <div class="box">
              <div class="title">⑧ 지도 보기</div>
              <span class="sub">
                - 지도에서 브랜드의 위치를 확인 할 수 있습니다.
              </span>
            </div>
          </div>

          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/commercial/pc리스트-3.png"
              alt="리스트3"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/commercial/tab리스트-3.png"
              alt="리스트3"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/commercial/mob리스트-3.png"
              alt="리스트3"
            />
            <div class="title">⑨ 브랜드 상세보기</div>
            <span class="sub">
              - 브랜드의 상세 정보를 확인 하실 수 있습니다.
            </span>
            <button class="link">브랜드 리스트 바로가기 ></button>
            <div class="box">
              <div class="title">⑩ 실시간 문의</div>
              <span class="sub">
                - 브랜드에게 실시간으로 문의할 수 있습니다. <br />
                - 문의한 내역은
                <span class="bold">[마이메뉴>문의내역]</span>에서 확인하실 수
                있습니다.
              </span>
              <div class="image">
                <div class="more">
                  실시간 문의 가이드 바로가기
                  <img src="../../assets/guide/link.png" alt="보기" />
                </div>
              </div>
            </div>
            <div class="box">
              <div class="title">⑪ 추천중개사</div>
              <span class="sub">
                - 현재 지역의 중개사무소를 추천해 줍니다.
              </span>
              <div class="image">
                <div
                  class="more"
                  v-if="recommendMoreImg === 'show'"
                  @click="recommendMoreImg = 'hide'"
                >
                  이미지 보기
                  <img src="../../assets/guide/more.png" alt="보기" />
                </div>
                <div
                  v-if="recommendMoreImg === 'hide'"
                  @click="recommendMoreImg = 'show'"
                >
                  <div class="more">
                    이미지 숨기기
                    <img src="../../assets/guide/hide.png" alt="숨기기" />
                  </div>
                  <img
                    v-if="getDevice !== 'mobile'"
                    class="recommend"
                    src="../../assets/guide/commercial/추천중개사.png"
                    alt="추천중개사"
                  />
                  <img
                    v-if="getDevice === 'mobile'"
                    class="recommend"
                    src="../../assets/guide/commercial/mob추천중개사.png"
                    alt="추천중개사"
                  />
                </div>
              </div>
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

const selectCategory = ref<string>('상권분석')
const possibleMoreImg = ref<string>('show')
const recommendMoreImg = ref<string>('show')
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
    padding-top: 80px;
    display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 15px;
    color: $fontSub;
    border-bottom: 1px solid $sectionLine;
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
            cursor: pointer;
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
        .promotion {
          width: 592px;
          height: 273px;
        }
        .possible {
          width: 306px;
          height: 156px;
        }
        .recommend {
          width: 786px;
          height: 713px;
        }
      }
      .link {
        margin-top: 30px;
        width: 188px;
        height: 40px;
        background-color: #1569ff;
        font-family: Pretendard;
        font-size: 15px;
        color: white;
        font-weight: $reg;
        border-radius: 10px;
        border: none;
        cursor: pointer;
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
          .possible {
            width: 50%;
            height: 100%;
          }
          .recommend {
            width: 100%;
            height: 100%;
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
      padding: 17px 0 0 24px;
      justify-content: flex-start;
      font-size: 14px;
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
          .promotion,
          .possible,
          .recommend {
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
