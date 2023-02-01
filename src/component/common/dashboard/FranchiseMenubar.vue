<template>
  <section>
    <article>
      <div class="franchise" v-if="getDevice === 'mobile'">
        <div class="box">
          <div class="button">
            <img
              src="../../../assets/dashboard/menubar/dash.png"
              alt="대시보드"
            />
            <div class="name">대시보드</div>
          </div>

          <RouterLink to="/franchise/brand/management" class="none">
            <div class="button select">
              <img
                src="../../../assets/dashboard/menubar/brand_select.png"
                alt="브랜드"
              />
              <div class="name">브랜드</div>
            </div>
          </RouterLink>

          <RouterLink to="/franchise/ad" class="none">
            <div class="button">
              <img
                src="../../../assets/dashboard/menubar/ad.png"
                alt="광고상품"
              />
              <div class="name">광고상품</div>
            </div>
          </RouterLink>

          <RouterLink to="/franchise/qna" class="none">
            <div class="button">
              <img
                src="../../../assets/dashboard/menubar/qna.png"
                alt="고객문의"
              />
              <div class="name">고객문의</div>
            </div>
          </RouterLink>

          <RouterLink to="/franchise/mymenu/myinfo" class="none">
            <div class="button">
              <img
                src="../../../assets/dashboard/menubar/my.png"
                alt="마이메뉴"
              />
              <div class="name">마이메뉴</div>
            </div>
          </RouterLink>
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

.franchise {
  width: 100%;
  position: absolute;
  position: fixed;
  bottom: 0;

  .none {
    text-decoration: none;
    color: inherit;
  }
  .box {
    height: 58px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-top: 1px solid #f5f5f5;
    .button {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      font-size: 12px;
      color: $fontMain;
      cursor: pointer;
      img {
        width: 22px;
        height: 22px;
      }
    }
  }
}
</style>
