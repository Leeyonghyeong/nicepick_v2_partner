<template>
  <section>
    <article>
      <div class="top-title" v-if="getDevice !== 'mobile'">
        <span class="sub">COMMUNITY GUIDE</span>
        창업톡 가이드
      </div>
      <div class="mob-title" v-if="getDevice === 'mobile'">
        <img src="../../assets/guide/back.png" alt="뒤로가기" /> 창업톡 가이드
      </div>

      <div class="content">
        <div class="img-box">
          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/community/pc.png"
              alt="커뮤니티1"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/community/tab.png"
              alt="커뮤니티1"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/community/mob.png"
              alt="커뮤니티1"
            />
            <div class="title">① 로그인 하기</div>
            <span class="sub">
              - 창업톡 서비스를 이용하시려면 로그인을 해주세요.
            </span>
            <div class="image">
              <div
                class="more"
                v-if="loginMoreImg === 'show'"
                @click="loginMoreImg = 'hide'"
              >
                이미지 보기
                <img src="../../assets/guide/more.png" alt="보기" />
              </div>
              <div
                v-if="loginMoreImg === 'hide'"
                @click="loginMoreImg = 'show'"
              >
                <div class="more">
                  이미지 숨기기
                  <img src="../../assets/guide/hide.png" alt="숨기기" />
                </div>
                <img
                  v-if="getDevice === 'pc'"
                  class="login"
                  src="../../assets/guide/community/pc-login.png"
                  alt="로그인"
                />
                <img
                  class="login"
                  v-if="getDevice === 'tablet'"
                  src="../../assets/guide/community/tab-login.png"
                  alt="로그인"
                />
                <img
                  class="login"
                  v-if="getDevice === 'mobile'"
                  src="../../assets/guide/community/mob-login.png"
                  alt="로그인"
                />
              </div>
            </div>
            <div class="box">
              <div class="title">② 게시글 작성</div>
              <span class="sub">
                - 창업 정보를 게시글로 작성하여 공유해 보세요.
              </span>
              <div class="image">
                <div
                  class="more"
                  v-if="postMoreImg === 'show'"
                  @click="postMoreImg = 'hide'"
                >
                  이미지 보기
                  <img src="../../assets/guide/more.png" alt="보기" />
                </div>
                <div
                  v-if="postMoreImg === 'hide'"
                  @click="postMoreImg = 'show'"
                >
                  <div class="more">
                    이미지 숨기기
                    <img src="../../assets/guide/hide.png" alt="숨기기" />
                  </div>
                  <img
                    v-if="getDevice === 'pc'"
                    class="post"
                    src="../../assets/guide/community/pc-post.png"
                    alt="post"
                  />
                  <img
                    v-if="getDevice === 'tablet'"
                    class="post"
                    src="../../assets/guide/community/tab-post.png"
                    alt="post"
                  />
                  <img
                    v-if="getDevice === 'mobile'"
                    class="post"
                    src="../../assets/guide/community/mob-post.png"
                    alt="post"
                  />
                </div>
              </div>
            </div>
            <div class="box">
              <div class="title">③ 카테고리 선택</div>
              <span class="sub">
                - 카테고리별로 선택하여 다양한 창업 정보를 확인하세요.
              </span>
            </div>
            <div class="box">
              <div class="title">④ 창업톡 검색</div>
              <span class="sub"> - 궁금한 창업 정보를 검색해 보세요. </span>
            </div>
            <div class="box">
              <div class="title">⑤ 게시글 보기</div>
              <span class="sub">
                - 자세히 보고싶은 게시글을 클릭해 보세요.
              </span>
            </div>
          </div>

          <div class="box">
            <img
              v-if="getDevice === 'pc'"
              src="../../assets/guide/community/pc-2.png"
              alt="커뮤니티2"
            />
            <img
              v-if="getDevice === 'tablet'"
              src="../../assets/guide/community/tab-2.png"
              alt="커뮤니티2"
            />
            <img
              v-if="getDevice === 'mobile'"
              src="../../assets/guide/community/mob-2.png"
              alt="커뮤니티2"
            />
            <div class="title">⑥ 좋아요</div>
            <span class="sub"> - 게시글에 좋아요를 눌러 보세요. </span>
            <div class="box">
              <div class="title">⑦ 공유</div>
              <span class="sub"> - 게시글을 공유해 보세요. </span>
              <div class="image">
                <div
                  class="more"
                  v-if="shareMoreImg === 'show'"
                  @click="shareMoreImg = 'hide'"
                >
                  이미지 보기
                  <img src="../../assets/guide/more.png" alt="보기" />
                </div>
                <div
                  v-if="shareMoreImg === 'hide'"
                  @click="shareMoreImg = 'show'"
                >
                  <div class="more">
                    이미지 숨기기
                    <img src="../../assets/guide/hide.png" alt="숨기기" />
                  </div>
                  <img
                    class="share"
                    src="../../assets/guide/community/share.png"
                    alt="share"
                  />
                </div>
              </div>
            </div>
            <div class="box">
              <div class="title">⑧ 댓글</div>
              <span class="sub"> - 게시글에 댓글을 남길 수 있습니다. </span>
            </div>
            <div class="box">
              <div class="title">⑨ 답글 달기</div>
              <span class="sub"> - 댓글에 답글을 남길 수 있습니다. </span>
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

const loginMoreImg = ref<string>('show')
const postMoreImg = ref<string>('show')
const shareMoreImg = ref<string>('show')
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
        .login {
          width: 582px;
          height: 228px;
        }
        .post {
          width: 990px;
          height: 443px;
        }
        .share {
          width: 378px;
          height: 200px;
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
          .recommend,
          .post {
            width: 100%;
            height: 100%;
          }
          .login {
            width: 240px;
            height: 265px;
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
          .recommend,
          .login,
          .post,
          .share {
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
