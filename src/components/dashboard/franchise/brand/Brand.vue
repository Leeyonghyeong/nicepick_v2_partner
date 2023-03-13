<template>
  <section>
    <article>
      <div class="top-title">브랜드</div>

      <div class="top-category">
        <div class="category-name select">브랜드 관리</div>
        <RouterLink to="/franchise/brand/management/info" class="none">
          <div class="category-name">브랜드 정보 수정</div>
        </RouterLink>
      </div>

      <div class="brand-image">
        <div class="description-logo">
          <div class="description">
            · 이미지는 <span>필수*</span>로 등록해 주세요.<br />
            · 이미지의 단위는 픽셀(px)입니다.<br />
            · 등록 이미지는 jpg, png 파일만 등록이 가능합니다.<br />
            · 이미지는 사이즈에 맞춰 등록해 주세요.
          </div>
          <div class="content logo">
            <div class="title">브랜드 로고<span>*</span></div>
            <div class="sub">(브랜드 대표 로고 이미지)</div>
            <div class="image-section">
              <label for="logo">
                <div v-if="!brandLogoImg?.url" class="btn-upload">
                  <i class="fa-regular fa-image" />
                  <div class="value">500x200</div>
                </div>
                <div v-else class="btn-upload">
                  <img :src="brandLogoImg.url" :alt="currentBrand?.brandName" />
                </div>
              </label>
              <input
                type="file"
                id="logo"
                @change="imageUpload($event, 'logo')"
              />
            </div>
          </div>
        </div>
        <div class="content list">
          <div class="title">브랜드 목록 이미지<span>*</span></div>
          <div class="sub">(업종 및 검색 리스트 노출 이미지)</div>
          <div class="image-section">
            <label for="list">
              <div v-if="!brandListImg?.url" class="btn-upload">
                <i class="fa-regular fa-image" />
                <div class="value">348x348(1:1비율)</div>
              </div>
              <div v-else class="btn-upload">
                <img :src="brandListImg.url" :alt="currentBrand?.brandName" />
              </div>
            </label>
            <input
              type="file"
              id="list"
              @change="imageUpload($event, 'list')"
            />
          </div>
        </div>
        <div class="content representative-image">
          <div class="title">브랜드 대표 이미지<span>*</span></div>
          <div class="sub">(브랜드 상세페이지 상단 노출 이미지)</div>
          <div class="image-section">
            <label for="main">
              <div v-if="!brandImg?.url" class="btn-upload">
                <i class="fa-regular fa-image" />
                <div class="value">1572x884(9:16비율)</div>
              </div>
              <div v-else class="btn-upload">
                <img :src="brandImg.url" :alt="currentBrand?.brandName" />
              </div>
            </label>
            <input
              type="file"
              name="file"
              id="main"
              @change="imageUpload($event, 'main')"
            />
          </div>
        </div>
      </div>

      <div class="content-section">
        <div class="content web">
          <div class="box">
            <div class="title">홈페이지</div>
            <input v-model="webUrl" type="text" placeholder="URL 입력" />
          </div>
        </div>
        <div class="content youtube">
          <div class="box">
            <div class="title">유튜브 영상</div>
            <div class="center">
              <div
                class="add"
                v-for="(item, index) in brandYoutube"
                :key="item.id"
              >
                <input
                  v-model="item.youtubeUrl"
                  type="text"
                  placeholder="URL 입력"
                />
                <img
                  src="../../../../assets/dashboard/brand/delete.png"
                  alt="delete"
                  @click="deleteYoutube(item.id!, index)"
                />
              </div>
              <div
                class="add"
                v-for="(item, index) in brandYoutubeInput"
                :key="index"
              >
                <input v-model="item.url" type="text" placeholder="URL 입력" />
                <img
                  v-if="index + 1 !== brandYoutubeInput.length"
                  src="../../../../assets/dashboard/brand/delete.png"
                  alt="delete"
                  @click="brandYoutubeInput.splice(index, 1)"
                />
              </div>
              <button @click="brandYoutubeInput.push({ url: '' })">
                <img src="../../../../assets/dashboard/add.png" alt="" />
                추가
              </button>
            </div>
          </div>
        </div>
        <div class="content promotion">
          <div class="box">
            <div class="title">
              프로모션 <span>* 프리미엄 멤버십 회원 전용</span>
            </div>
            <div class="promotion-category">
              <div
                class="category"
                :class="{ active: brandPromotionIcon.includes('가맹비 할인') }"
                @click="clickPromotionIconHandler('가맹비 할인')"
              >
                <img
                  v-if="brandPromotionIcon.includes('가맹비 할인')"
                  src="../../../../assets/dashboard/brand/가맹비할인_select.png"
                  alt="가맹비 할인"
                />
                <img
                  v-else
                  src="../../../../assets/dashboard/brand/가맹비할인.png"
                  alt="가맹비 할인"
                />
                가맹비 할인
              </div>
              <div
                class="category"
                :class="{ active: brandPromotionIcon.includes('가맹비 면제') }"
                @click="clickPromotionIconHandler('가맹비 면제')"
              >
                <img
                  v-if="brandPromotionIcon.includes('가맹비 면제')"
                  src="../../../../assets/dashboard/brand/가맹비면제_select.png"
                  alt=""
                />
                <img
                  v-else
                  src="../../../../assets/dashboard/brand/가맹비면제.png"
                  alt=""
                />
                가맹비 면제
              </div>
              <div
                class="category"
                :class="{ active: brandPromotionIcon.includes('교육비 할인') }"
                @click="clickPromotionIconHandler('교육비 할인')"
              >
                <img
                  v-if="brandPromotionIcon.includes('교육비 할인')"
                  src="../../../../assets/dashboard/brand/교육비할인_select.png"
                  alt=""
                />
                <img
                  v-else
                  src="../../../../assets/dashboard/brand/교육비할인.png"
                  alt=""
                />
                교육비 할인
              </div>
              <div
                class="category"
                :class="{ active: brandPromotionIcon.includes('교육비 면제') }"
                @click="clickPromotionIconHandler('교육비 면제')"
              >
                <img
                  v-if="brandPromotionIcon.includes('교육비 면제')"
                  src="../../../../assets/dashboard/brand/교육비면제_select.png"
                  alt=""
                />
                <img
                  v-else
                  src="../../../../assets/dashboard/brand/교육비면제.png"
                  alt=""
                />
                교육비 면제
              </div>
              <div
                class="category"
                :class="{ active: brandPromotionIcon.includes('물품지원') }"
                @click="clickPromotionIconHandler('물품지원')"
              >
                <img
                  v-if="brandPromotionIcon.includes('물품지원')"
                  src="../../../../assets/dashboard/brand/물품지원_select.png"
                  alt=""
                />
                <img
                  v-else
                  src="../../../../assets/dashboard/brand/물품지원.png"
                  alt=""
                />
                물품지원
              </div>
              <div
                class="category"
                :class="{ active: brandPromotionIcon.includes('장비지원') }"
                @click="clickPromotionIconHandler('장비지원')"
              >
                <img
                  v-if="brandPromotionIcon.includes('장비지원')"
                  src="../../../../assets/dashboard/brand/장비지원_select.png"
                  alt=""
                />
                <img
                  v-else
                  src="../../../../assets/dashboard/brand/장비지원.png"
                  alt=""
                />
                장비지원
              </div>
              <div
                class="category interior-gap"
                :class="{
                  active: brandPromotionIcon.includes('인테리어비용 지원'),
                }"
                @click="clickPromotionIconHandler('인테리어비용 지원')"
              >
                <img
                  v-if="brandPromotionIcon.includes('인테리어비용 지원')"
                  src="../../../../assets/dashboard/brand/인테리어비용지원_select.png"
                  alt=""
                />
                <img
                  v-else
                  src="../../../../assets/dashboard/brand/인테리어비용지원.png"
                  alt=""
                />
                인테리어<br />비용 지원
              </div>
            </div>
            <input
              v-model="brandPromotion"
              type="text"
              placeholder="진행중인 프로모션을 입력하세요."
              :disabled="!currentBrand?.isPremium"
            />
          </div>
        </div>
        <div class="content brand-introduce height">
          <div class="box">
            <img
              v-if="getDevice === 'pc' && brandIntroPrev"
              src="../../../../assets/dashboard/page_button_prev.png"
              alt="prev"
              class="page-button prev"
              @click="pageButtonHandler('intro', 'prev')"
            />
            <img
              v-if="getDevice === 'pc' && brandIntroNext"
              src="../../../../assets/dashboard/page_button_next.png"
              alt="next"
              class="page-button next"
              @click="pageButtonHandler('intro', 'next')"
            />
            <div class="title">브랜드 소개</div>
            <div ref="brandIntroImgListEl" class="center">
              <div
                class="image-section"
                v-for="(item, index) in brandIntroImg"
                :key="index"
              >
                <div class="origin-image">
                  <img :src="item.introImgUrl" :alt="item.introImgUrlKey" />
                </div>
                <div class="delete-image">
                  <img
                    src="../../../../assets/dashboard/brand/delete.png"
                    alt="delete"
                    @click="deleteInfoImage(item.id, index, 'intro')"
                  />
                </div>
              </div>
              <div class="image-section">
                <label for="intro">
                  <div class="btn-upload">
                    <i class="fa-regular fa-image" />
                    <div class="value">1572x884(9:16비율)</div>
                  </div>
                </label>
              </div>
              <input
                type="file"
                id="intro"
                @change="imageUpload($event, 'intro')"
              />
              <button>
                <label for="intro">
                  <img src="../../../../assets/dashboard/add.png" alt="" />
                  추가
                </label>
              </button>
            </div>
          </div>
        </div>
        <div class="content representative-menu height">
          <div class="box">
            <img
              v-if="getDevice === 'pc' && brandMenuPrev"
              src="../../../../assets/dashboard/page_button_prev.png"
              alt="prev"
              class="page-button prev"
              @click="pageButtonHandler('menu', 'prev')"
            />
            <img
              v-if="getDevice === 'pc' && brandMenuNext"
              src="../../../../assets/dashboard/page_button_next.png"
              alt="next"
              class="page-button next"
              @click="pageButtonHandler('menu', 'next')"
            />
            <div class="title">대표메뉴</div>
            <div ref="brandMenuImgListEl" class="center">
              <div
                class="menu-flex"
                v-for="(item, index) in brandMenuImg"
                :key="index"
              >
                <div class="image-section">
                  <div class="origin-image">
                    <img :src="item.menuImgUrl" :alt="item.menuImgUrlKey" />
                  </div>
                  <div class="delete-image">
                    <img
                      src="../../../../assets/dashboard/brand/delete.png"
                      alt="delete"
                      @click="deleteInfoImage(item.id, index, 'menu')"
                    />
                  </div>
                </div>
                <div class="name-cost">
                  <div class="name">
                    <input
                      v-model="item.menuName"
                      type="text"
                      placeholder="메뉴명"
                    />
                  </div>
                  <div class="cost">
                    <input
                      v-model="item.menuPrice"
                      type="number"
                      placeholder="0"
                    />
                    <div>원</div>
                  </div>
                </div>
              </div>

              <div class="menu-flex">
                <div class="image-section">
                  <label for="menu">
                    <div class="btn-upload">
                      <i class="fa-regular fa-image" />
                      <div class="value">540x540<br />(1:1비율)</div>
                    </div>
                  </label>
                </div>
                <div class="name-cost">
                  <div class="name">
                    <input type="text" placeholder="메뉴명" />
                  </div>
                  <div class="cost">
                    <input type="number" placeholder="0" />
                    <div>원</div>
                  </div>
                </div>
              </div>
              <input
                type="file"
                name="file"
                id="menu"
                @change="imageUpload($event, 'menu')"
              />
              <button>
                <label for="menu">
                  <img src="../../../../assets/dashboard/add.png" alt="" />
                  추가
                </label>
              </button>
            </div>
          </div>
        </div>
        <div class="content interior height">
          <div class="box">
            <img
              v-if="getDevice === 'pc' && brandInteriorPrev"
              src="../../../../assets/dashboard/page_button_prev.png"
              alt="prev"
              class="page-button prev"
              @click="pageButtonHandler('interior', 'prev')"
            />
            <img
              v-if="getDevice === 'pc' && brandInteriorNext"
              src="../../../../assets/dashboard/page_button_next.png"
              alt="next"
              class="page-button next"
              @click="pageButtonHandler('interior', 'next')"
            />
            <div class="title">시설 및 인테리어</div>
            <div ref="brandInteriorImgListEl" class="center">
              <div
                class="image-section"
                v-for="(item, index) in brandInteriorImg"
                :key="index"
              >
                <div class="origin-image">
                  <img
                    :src="item.interiorImgUrl"
                    :alt="item.interiorImgUrlKey"
                  />
                </div>
                <div class="delete-image">
                  <img
                    src="../../../../assets/dashboard/brand/delete.png"
                    alt="delete"
                    @click="deleteInfoImage(item.id, index, 'interior')"
                  />
                </div>
              </div>
              <div class="image-section">
                <label for="interior">
                  <div class="btn-upload">
                    <i class="fa-regular fa-image" />
                    <div class="value">1572x884(9:16비율)</div>
                  </div>
                </label>
              </div>
              <input
                type="file"
                name="file"
                id="interior"
                @change="imageUpload($event, 'interior')"
              />
              <button>
                <label for="interior">
                  <img src="../../../../assets/dashboard/add.png" alt="" />
                  추가
                </label>
              </button>
            </div>
          </div>
        </div>
        <div class="content cost-process height">
          <div class="box">
            <img
              v-if="getDevice === 'pc' && brandStartCostImgPrev"
              src="../../../../assets/dashboard/page_button_prev.png"
              alt="prev"
              class="page-button prev"
              @click="pageButtonHandler('cost', 'prev')"
            />
            <img
              v-if="getDevice === 'pc' && brandStartCostImgNext"
              src="../../../../assets/dashboard/page_button_next.png"
              alt="next"
              class="page-button next"
              @click="pageButtonHandler('cost', 'next')"
            />
            <div class="title">창업비용 및 절차</div>
            <div ref="brandStartCostImgListEl" class="center">
              <div
                class="image-section"
                v-for="(item, index) in brandStartCostImg"
                :key="index"
              >
                <div class="origin-image">
                  <img
                    :src="item.startCostImgUrl"
                    :alt="item.startCostImgUrlKey"
                  />
                </div>
                <div class="delete-image">
                  <img
                    src="../../../../assets/dashboard/brand/delete.png"
                    alt="delete"
                    @click="deleteInfoImage(item.id, index, 'cost')"
                  />
                </div>
              </div>
              <div class="image-section">
                <label for="cost">
                  <div class="btn-upload">
                    <i class="fa-regular fa-image" />
                    <div class="value">1572x884(9:16비율)</div>
                  </div>
                </label>
              </div>
              <input
                type="file"
                name="file"
                id="cost"
                @change="imageUpload($event, 'cost')"
              />
              <button>
                <label for="cost">
                  <img src="../../../../assets/dashboard/add.png" alt="" />
                  추가
                </label>
              </button>
            </div>
          </div>
        </div>
        <div class="save">
          <button @click="submit">저장</button>
        </div>
      </div>
    </article>
    <Premium v-if="isPremiumModal" @closePremiumModal="closePremiumModal" />
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import Premium from '../../../common/modal/dashboard/franchise/PremiumMembership.vue'
import api from '../../../../config/axios.config'
import {
  BrandResponse,
  CommonResponse,
  ImageUploadResponse,
} from '../../../../types/response'
import { useUserStore } from '../../../../store/user'
import { storeToRefs } from 'pinia'
import { Image } from '../../../../types/image'
import {
  BrandYoutube,
  BrandIntroImg,
  BrandMenuImg,
  BrandInteriorImg,
  BrandStartCostImg,
} from '../../../../types/brand'
import { AxiosResponse } from 'axios'
import { toastAlert, confirmAlert } from '../../../../functions/alert'
import { useWindowStore } from '../../../../store/window'

const userStore = useUserStore()
const { brand, currentBrand } = storeToRefs(userStore)
const windowStore = useWindowStore()
const { getDevice } = storeToRefs(windowStore)

const brandLogoImg = ref<Image>()
const brandListImg = ref<Image>()
const brandImg = ref<Image>()

const webUrl = ref<string>()

const brandYoutube = ref<BrandYoutube[]>([])
const brandYoutubeInput = ref<{ url: string }[]>([{ url: '' }])

// 가맹비 할인,물품지원,가맹비 면제,교육비 할인,교육비 면제,인테리어비용 지원,장비지원
const brandPromotionIcon = ref<string[]>([])
const brandPromotion = ref<string>()

const brandIntroImg = ref<BrandIntroImg[]>([])
const brandIntroImgListEl = ref<HTMLDivElement | null>(null)
const brandIntroPrev = ref<boolean>(false)
const brandIntroNext = ref<boolean>(false)

const brandMenuImg = ref<BrandMenuImg[]>([])
const brandMenuImgListEl = ref<HTMLDivElement | null>(null)
const brandMenuPrev = ref<boolean>(false)
const brandMenuNext = ref<boolean>(false)

const brandInteriorImg = ref<BrandInteriorImg[]>([])
const brandInteriorImgListEl = ref<HTMLDivElement | null>(null)
const brandInteriorPrev = ref<boolean>(false)
const brandInteriorNext = ref<boolean>(false)

const brandStartCostImg = ref<BrandStartCostImg[]>([])
const brandStartCostImgListEl = ref<HTMLDivElement | null>(null)
const brandStartCostImgPrev = ref<boolean>(false)
const brandStartCostImgNext = ref<boolean>(false)

const isPremiumModal = ref<boolean>(false)

const getBrandInfo = async () => {
  if (currentBrand.value) {
    const { data } = await api.get<BrandResponse>(
      `/brand/management/ad/${currentBrand.value.id}`
    )

    if (data.success) {
      brandLogoImg.value = {
        key: data.brand.brandLogoImgKey,
        url: data.brand.brandLogoImg,
      }

      brandListImg.value = {
        key: data.brand.brandListImgKey,
        url: data.brand.brandListImg,
      }

      brandImg.value = {
        key: data.brand.brandImgKey,
        url: data.brand.brandImg,
      }

      webUrl.value = data.brand.webUrl

      brandYoutube.value = data.brand.brandYoutube

      brandPromotionIcon.value = data.brand.brandPromotionIcon
        ? data.brand.brandPromotionIcon.split(',')
        : []
      brandPromotion.value = data.brand.brandPromotion

      brandIntroImg.value = data.brand.brandIntroImg

      brandMenuImg.value = data.brand.brandMenuImg
      brandInteriorImg.value = data.brand.brandInteriorImg
      brandStartCostImg.value = data.brand.brandStartCostImg

      setTimeout(() => {
        pageButtonShowHandler('add')
      }, 0)

      const findIndex = brand.value.findIndex((e) => e.id === data.brand.id)

      if (findIndex > -1) {
        brand.value[findIndex] = data.brand
        currentBrand.value = brand.value[findIndex]
      }
    }
  }
}

const imageUpload = async (e: Event, type: string) => {
  const target = e.target as HTMLInputElement
  const files = target.files

  if (files && files.length > 0) {
    for (const file of files) {
      const formData = new FormData()

      formData.append('file', file)
      if (currentBrand.value) formData.append('id', currentBrand.value.id)

      const { data: uploadImage } = await api.post<ImageUploadResponse>(
        '/brand/management/upload/image',
        formData
      )

      if (uploadImage.success) {
        if (type === 'logo') {
          if (brandLogoImg.value && brandLogoImg.value.url) {
            await deleteImage(brandLogoImg.value.key)
          }

          brandLogoImg.value = {
            key: uploadImage.key,
            url: uploadImage.url,
          }
        } else if (type === 'list') {
          if (brandListImg.value && brandListImg.value.url) {
            await deleteImage(brandListImg.value.key)
          }

          brandListImg.value = {
            key: uploadImage.key,
            url: uploadImage.url,
          }
        } else if (type === 'main') {
          if (brandImg.value && brandImg.value.url) {
            await deleteImage(brandImg.value.key)
          }

          brandImg.value = {
            key: uploadImage.key,
            url: uploadImage.url,
          }
        } else if (type === 'intro') {
          brandIntroImg.value.push({
            introImgUrlKey: uploadImage.key,
            introImgUrl: uploadImage.url,
          })

          setTimeout(() => {
            pageButtonShowHandler('add')
          }, 0)
        } else if (type === 'menu') {
          brandMenuImg.value.push({
            menuImgUrl: uploadImage.url,
            menuImgUrlKey: uploadImage.key,
          })

          setTimeout(() => {
            pageButtonShowHandler('add')
          }, 0)
        } else if (type === 'interior') {
          brandInteriorImg.value.push({
            interiorImgUrl: uploadImage.url,
            interiorImgUrlKey: uploadImage.key,
          })

          setTimeout(() => {
            pageButtonShowHandler('add')
          }, 0)
        } else if (type === 'cost') {
          brandStartCostImg.value.push({
            startCostImgUrl: uploadImage.url,
            startCostImgUrlKey: uploadImage.key,
          })

          setTimeout(() => {
            pageButtonShowHandler('add')
          }, 0)
        }
      }
    }
  }
}

const deleteImage = async (
  key: string
  // eslint-disable-next-line
): Promise<AxiosResponse<CommonResponse, any>> => {
  return await api.delete<CommonResponse>('/brand/management/upload/image', {
    data: {
      key,
    },
  })
}

const deleteInfoImage = async (
  id: string | undefined,
  index: number,
  type: string
) => {
  let success = false
  if (type === 'intro') {
    if (id) {
      const alert = await confirmAlert({
        title: '브랜드 소개 이미지 삭제',
        text: '브랜드 소개 이미지를 삭제 하시겠습니까?',
        isCancelButton: true,
      })

      if (alert.isConfirmed) {
        const { data } = await api.delete<CommonResponse>(
          '/brand/management/intro',
          {
            data: {
              id,
            },
          }
        )

        success = data.success
      }
    } else {
      const { data } = await deleteImage(
        brandIntroImg.value[index].introImgUrlKey
      )

      success = data.success
    }

    if (success) {
      toastAlert({
        text: '브랜드 소개 이미지가 삭제 되었습니다',
        type: 'success',
        position: 'top',
      })

      brandIntroImg.value.splice(index, 1)

      setTimeout(() => {
        pageButtonShowHandler('')
      }, 0)
    }
  } else if (type === 'menu') {
    if (id) {
      const alert = await confirmAlert({
        title: '브랜드 메뉴 이미지 삭제',
        text: '브랜드 메뉴 이미지를 삭제 하시겠습니까?',
        isCancelButton: true,
      })

      if (alert.isConfirmed) {
        const { data } = await api.delete<CommonResponse>(
          '/brand/management/menu',
          {
            data: {
              id,
            },
          }
        )

        success = data.success
      }
    } else {
      const { data } = await deleteImage(
        brandMenuImg.value[index].menuImgUrlKey
      )

      success = data.success
    }

    if (success) {
      toastAlert({
        text: '브랜드 메뉴 이미지가 삭제 되었습니다',
        type: 'success',
        position: 'top',
      })

      brandMenuImg.value.splice(index, 1)

      setTimeout(() => {
        pageButtonShowHandler('')
      }, 0)
    }
  } else if (type === 'interior') {
    if (id) {
      const alert = await confirmAlert({
        title: '브랜드 인테리어 이미지 삭제',
        text: '브랜드 인테리어 이미지를 삭제 하시겠습니까?',
        isCancelButton: true,
      })

      if (alert.isConfirmed) {
        const { data } = await api.delete<CommonResponse>(
          '/brand/management/interior',
          {
            data: {
              id,
            },
          }
        )

        success = data.success
      }
    } else {
      const { data } = await deleteImage(
        brandInteriorImg.value[index].interiorImgUrlKey
      )

      success = data.success
    }

    if (success) {
      toastAlert({
        text: '브랜드 인테리어 이미지가 삭제 되었습니다',
        type: 'success',
        position: 'top',
      })

      brandInteriorImg.value.splice(index, 1)

      setTimeout(() => {
        pageButtonShowHandler('')
      }, 0)
    }
  } else if (type === 'cost') {
    if (id) {
      const alert = await confirmAlert({
        title: '브랜드 창업비용 이미지 삭제',
        text: '브랜드 창업비용 이미지를 삭제 하시겠습니까?',
        isCancelButton: true,
      })

      if (alert.isConfirmed) {
        const { data } = await api.delete<CommonResponse>(
          '/brand/management/cost',
          {
            data: {
              id,
            },
          }
        )

        success = data.success
      }
    } else {
      const { data } = await deleteImage(
        brandStartCostImg.value[index].startCostImgUrlKey
      )

      success = data.success
    }

    if (success) {
      toastAlert({
        text: '브랜드 창업비용 이미지가 삭제 되었습니다',
        type: 'success',
        position: 'top',
      })

      brandStartCostImg.value.splice(index, 1)

      setTimeout(() => {
        pageButtonShowHandler('')
      }, 0)
    }
  }
}

const deleteYoutube = async (id: string, index: number) => {
  const alert = await confirmAlert({
    title: '유튜브 링크 삭제',
    text: '유튜브 링크를 삭제 하시겠습니까?',
    isCancelButton: true,
  })

  if (alert.isConfirmed) {
    const { data } = await api.delete<CommonResponse>(
      '/brand/management/youtube',
      {
        data: {
          id,
        },
      }
    )

    if (data.success) {
      toastAlert({
        text: '유튜브 링크가 삭제 되었습니다.',
        type: 'success',
        position: 'top',
      })

      brandYoutube.value.splice(index, 1)
    } else {
      toastAlert({
        text: '유튜브 링크 삭제에 실패했습니다',
        type: 'warning',
        position: 'top',
      })
    }
  }
}

const pageButtonHandler = (type: string, cursor: string) => {
  if (type === 'intro') {
    if (brandIntroImgListEl.value) {
      const el = brandIntroImgListEl.value

      if (cursor === 'prev') {
        el.scrollLeft -= 425
      } else {
        el.scrollLeft += 425
      }
    }

    setTimeout(() => {
      pageButtonShowHandler('')
    }, 0)
  } else if (type === 'menu') {
    if (brandMenuImgListEl.value) {
      const el = brandMenuImgListEl.value

      if (cursor === 'prev') {
        el.scrollLeft -= 144
      } else {
        el.scrollLeft += 144
      }
    }

    setTimeout(() => {
      pageButtonShowHandler('')
    }, 0)
  } else if (type === 'interior') {
    if (brandInteriorImgListEl.value) {
      const el = brandInteriorImgListEl.value

      if (cursor === 'prev') {
        el.scrollLeft -= 425
      } else {
        el.scrollLeft += 425
      }
    }

    setTimeout(() => {
      pageButtonShowHandler('')
    }, 0)
  } else if (type === 'cost') {
    if (brandStartCostImgListEl.value) {
      const el = brandStartCostImgListEl.value

      if (cursor === 'prev') {
        el.scrollLeft -= 425
      } else {
        el.scrollLeft += 425
      }
    }

    setTimeout(() => {
      pageButtonShowHandler('')
    }, 0)
  }
}

const pageButtonShowHandler = (type: string) => {
  if (brandIntroImgListEl.value) {
    const el = brandIntroImgListEl.value

    if (type === 'add') {
      el.scrollLeft += el.scrollWidth
    }

    const isNext = el.scrollWidth - el.clientWidth !== el.scrollLeft
    const isPrev = el.scrollLeft !== 0

    brandIntroPrev.value = isPrev
    brandIntroNext.value = isNext
  }

  if (brandMenuImgListEl.value) {
    const el = brandMenuImgListEl.value

    if (type === 'add') {
      el.scrollLeft += el.scrollWidth
    }

    const isNext = el.scrollWidth - el.clientWidth !== el.scrollLeft
    const isPrev = el.scrollLeft !== 0

    brandMenuPrev.value = isPrev
    brandMenuNext.value = isNext
  }

  if (brandInteriorImgListEl.value) {
    const el = brandInteriorImgListEl.value

    if (type === 'add') {
      el.scrollLeft += el.scrollWidth
    }

    const isNext = el.scrollWidth - el.clientWidth !== el.scrollLeft
    const isPrev = el.scrollLeft !== 0

    brandInteriorPrev.value = isPrev
    brandInteriorNext.value = isNext
  }

  if (brandStartCostImgListEl.value) {
    const el = brandStartCostImgListEl.value

    if (type === 'add') {
      el.scrollLeft += el.scrollWidth
    }

    const isNext = el.scrollWidth - el.clientWidth !== el.scrollLeft
    const isPrev = el.scrollLeft !== 0

    brandStartCostImgPrev.value = isPrev
    brandStartCostImgNext.value = isNext
  }
}

const clickPromotionIconHandler = (icon: string) => {
  if (!checkPremium()) {
    return
  }

  const findIndex = brandPromotionIcon.value.findIndex((e) => e === icon)

  if (findIndex > -1) {
    brandPromotionIcon.value.splice(findIndex, 1)
  } else {
    brandPromotionIcon.value.push(icon)
  }
}

const checkPremium = (): boolean => {
  if (currentBrand.value) {
    if (!currentBrand.value.isPremium) {
      isPremiumModal.value = true
      return false
    }

    return true
  }

  return false
}

const closePremiumModal = () => {
  isPremiumModal.value = false
}

const submit = async () => {
  if (!brandLogoImg.value || !brandLogoImg.value.url) {
    toastAlert({
      text: '브랜도 로고 이미지는 필수 입니다.',
      type: 'warning',
    })

    return
  }

  if (!brandListImg.value || !brandListImg.value.url) {
    toastAlert({
      text: '브랜드 목록 이미지는 필수 입니다.',
      type: 'warning',
    })

    return
  }

  if (!brandImg.value || !brandImg.value.url) {
    toastAlert({
      text: '브랜드 대표 이미지는 필수 입니다.',
      type: 'warning',
    })

    return
  }

  if (currentBrand.value) {
    brandYoutubeInput.value.forEach((value) => {
      if (value.url !== '') {
        brandYoutube.value.push({
          youtubeUrl: value.url,
          youtubeId: value.url,
        })
      }
    })

    brandYoutube.value = brandYoutube.value.map((e) => {
      if (e.youtubeUrl !== '' || e.youtubeUrl !== undefined) {
        if (e.youtubeUrl.includes('watch')) {
          const findIndex = e.youtubeUrl.lastIndexOf('v=')
          const youtubeId = e.youtubeUrl.slice(findIndex + 2, findIndex + 13)

          e.youtubeId = youtubeId
        } else {
          const findIndex = e.youtubeUrl.lastIndexOf('/')
          const youtubeId = e.youtubeUrl.slice(findIndex + 1, findIndex + 12)

          e.youtubeId = youtubeId
        }
      }

      return e
    })

    const payload = {
      id: currentBrand.value.id,
      brandLogoImg: brandLogoImg.value,
      brandListImg: brandListImg.value,
      brandImg: brandImg.value,
      webUrl: webUrl.value,
      brandYoutube: brandYoutube.value,
      brandPromotionIcon: currentBrand.value.isPremium
        ? brandPromotionIcon.value.toString()
        : null,
      brandPromotion: currentBrand.value.isPremium
        ? brandPromotion.value
        : null,
      brandIntroImg: brandIntroImg.value,
      brandMenuImg: brandMenuImg.value,
      brandInteriorImg: brandInteriorImg.value,
      brandStartCostImg: brandStartCostImg.value,
    }

    const { data } = await api.post<CommonResponse>(
      '/brand/management',
      payload
    )

    if (data.success) {
      toastAlert({
        text: '브랜드 정보가 저장 되었습니다',
        type: 'success',
        position: 'top',
      })

      brandYoutubeInput.value = [{ url: '' }]

      await getBrandInfo()
    }
  }
}

watch(
  () => currentBrand.value?.id,
  async () => await getBrandInfo()
)

onMounted(async () => {
  await getBrandInfo()
})
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 0px 76px 160px;

  .none {
    text-decoration: none;
    color: inherit;
  }
  span {
    color: $subColor;
  }

  .top-title {
    font-size: 20px;
    font-weight: $medi;
    color: $fontMain;
    padding-bottom: 65px;
  }

  .top-category {
    display: flex;
    gap: 30px;
    color: $fontSub;
    border-bottom: 1px solid $iconLine;
    .category-name {
      cursor: pointer;
    }
    .select {
      color: $mainColor;
      font-weight: $semi;
      border-bottom: 2px solid $mainColor;
      padding-bottom: 14px;
    }
  }

  .brand-image {
    width: 1270px;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    .description-logo {
      .description {
        line-height: 24.5px;
        font-size: 14px;
        color: $fontSub;
        padding-bottom: 37px;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      .title {
        font-size: 18px;
        font-weight: $medi;
        color: $fontMain;
        padding-bottom: 3px;
      }
      .sub {
        font-size: 12px;
        color: $fontSub;
      }
      .image-section {
        background-color: #f2f4f7;
        margin-top: 20px;
        border-radius: 10px;
        overflow: hidden;
        .btn-upload {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 6px;
          color: $fontSub;
          cursor: pointer;
          i {
            font-size: 16px;
          }
          .value {
            font-size: 14px;
          }

          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }

        input[type='file'] {
          display: none;
        }
      }
    }
    .logo {
      width: 360px;
      height: 209px;
      .image-section {
        width: 225px;
        height: 90px;
      }
    }
    .list {
      width: 362px;
      .image-section {
        width: 227px;
        height: 227px;
      }
    }
    .representative-image {
      width: 490px;
      .image-section {
        width: 405px;
        height: 225px;
      }
    }
  }

  .content-section {
    display: flex;
    flex-direction: column;
    gap: 30px;
    .content {
      background-color: white;
      width: 1270px;
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
      .box {
        padding: 30px;
        .title {
          font-size: 18px;
          font-weight: $medi;
          color: $fontMain;
          padding-bottom: 20px;
        }
        input {
          width: 100%;
          height: 50px;
          border-radius: 10px;
          border: 1px solid $iconLine;
          padding-left: 16px;
          box-sizing: border-box;
        }
        input::placeholder {
          font-family: Pretendard;
          font-size: 16px;
          color: $inputLine;
        }
        input:focus {
          border: 1px solid $mainColor;
        }
        button {
          background-color: #fafafa;
          border: none;
          color: $mainColor;
          font-family: Pretendard;
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
    .youtube {
      .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        .add {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          img {
            width: 24px;
            height: 24px;
            cursor: pointer;
          }
        }
        button {
          padding: 10px 20px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 4px;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .promotion {
      span {
        font-size: 12px;
      }
      .promotion-category {
        display: flex;
        gap: 20px;
        padding-bottom: 20px;
        .category {
          width: 80px;
          height: 80px;
          padding-top: 4px;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;

          border: 1px solid $iconLine;
          border-radius: 10px;
          font-size: 13px;
          color: $fontSub;
          text-align: center;
          cursor: pointer;

          img {
            width: 40px;
            height: 40px;
          }

          &.active {
            color: $fontMain;
            border-color: $mainColor;
          }
        }
        .interior-gap {
          gap: 0;
        }
        .select {
          border: 1px solid $mainColor;
          color: $fontMain;
        }
      }
    }
    .height {
      height: 326px;

      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none;
      ::-webkit-scrollbar {
        display: none;
      }

      .box {
        position: relative;

        .page-button {
          position: absolute;
          width: 40px;
          top: 163px;
          height: 40px;
          cursor: pointer;
          z-index: 1;

          &.prev {
            left: 10px;
          }

          &.next {
            right: 10px;
          }
        }

        .center {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          gap: 20px;

          .image-section {
            border-radius: 10px;
            position: relative;

            .origin-image {
              width: 405px;
              height: 225px;
              border-radius: 10px;
              overflow: hidden;

              img {
                display: block;
                width: 100%;
                height: 100%;
              }
            }

            .delete-image {
              position: absolute;
              top: 5px;
              right: 5px;

              img {
                display: block;
                width: 24px;
                cursor: pointer;
              }
            }
            .btn-upload {
              width: 405px;
              height: 225px;

              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 6px;

              background-color: #f2f4f7;
              border-radius: 10px;
              color: $fontSub;

              cursor: pointer;
              i {
                font-size: 16px;
              }
              .value {
                font-size: 14px;
              }
            }
          }

          input[type='file'] {
            display: none;
          }

          button {
            label {
              width: 64px;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 4px;
              border-radius: 10px;
              cursor: pointer;

              img {
                width: 20px;
                height: 20px;
              }
            }
          }
        }
      }

      &.representative-menu {
        height: 100%;
        .menu-flex {
          display: flex;
          flex-direction: column;
          gap: 10px;

          .image-section {
            position: relative;
            .origin-image {
              width: 122px;
              height: 122px;
              border-radius: 10px;
              overflow: hidden;

              img {
                display: block;
                width: 100%;
                height: 100%;
              }
            }

            .delete-image {
              position: absolute;
              top: 5px;
              right: 5px;

              img {
                display: block;
                width: 24px;
                cursor: pointer;
              }
            }
            .btn-upload {
              width: 122px;
              height: 122px;
              .value {
                text-align: center;
              }
            }
          }
          .name-cost {
            width: 122px;
            display: flex;
            flex-direction: column;
            gap: 11px;
            .name {
              input {
                height: 40px;
                padding: 0;
                text-align: center;
              }
            }
            .cost {
              position: relative;
              input {
                height: 40px;
                padding: 0 31px 0 0;
                text-align: right;
                font-family: $pre;
                font-size: 16px;
              }
              input::-webkit-inner-spin-button {
                appearance: none;
                -moz-appearance: none;
                -webkit-appearance: none;
              }
              div {
                position: absolute;
                right: 13px;
                top: 50%;
                transform: translate(0%, -50%);
              }
            }
          }
        }
      }
    }
    .save {
      button {
        width: 1270px;
        height: 50px;

        background-color: $mainColor;
        border-radius: 10px;
        border: none;

        color: white;
        font-size: 16px;
        font-family: Pretendard;
        font-weight: $reg;

        cursor: pointer;
      }
    }
  }
}

@include tablet {
  article {
    padding: 50px 24px 60px 24px;

    .brand-image {
      width: 100%;
      flex-direction: column;
      gap: 30px;
      .description-logo {
        .description {
          padding-bottom: 30px;
        }
      }
      .logo {
        width: 100%;
        box-sizing: border-box;
      }
      .list {
        width: 100%;
        height: 344px;
      }
      .representative-image {
        width: 100%;
        height: 366px;
        .image-section {
          width: 425px;
          height: 228px;
        }
      }
    }

    .content-section {
      .content {
        width: 100%;
      }
      .promotion {
        .promotion-category {
          flex-wrap: wrap;
          .category {
            width: 20%;
          }
        }
      }
      .height {
        width: 100%;
        height: 100%;

        .box {
          .center {
            flex-direction: column;
            align-items: center;
            .image-section {
              .origin-image {
                width: 425px;
                height: 228px;
              }
              .btn-upload {
                width: 425px;
                height: 228px;
              }
            }

            button {
              border-radius: 50px;

              label {
                flex-direction: row;
                width: 89px;
                height: 40px;
              }
            }
          }
        }

        &.representative-menu {
          .menu-flex {
            width: 100%;
            flex-direction: row;
            .image-section {
              .origin-image {
                width: 93px;
                height: 93px;
                border-radius: 10px;
                overflow: hidden;
              }
              .btn-upload {
                width: 93px;
                height: 93px;
                .value {
                  text-align: center;
                }
              }
            }
            .name-cost {
              width: 100%;
              justify-content: space-between;

              input {
                width: 100%;
              }
              .cost {
                width: auto;
              }
            }
          }
        }
      }

      .save {
        button {
          width: 100%;
        }
      }
    }
  }
}

@include mobile {
  article {
    padding: 0;

    .top-title {
      padding: 0;
      font-size: 16px;
      position: absolute;
      top: 23px;
      left: 24px;
    }

    .top-category {
      background-color: white;
      justify-content: space-around;
      padding: 16px 24px 0 24px;
      border-bottom: 1px solid $iconLine;
      font-size: 14px;
    }

    .brand-image {
      padding: 0 0 10px 0;
      width: 100%;
      flex-direction: column;
      gap: 10px;
      .description-logo {
        .description {
          background-color: white;
          padding: 20px 24px;
          font-size: 12px;
        }
      }
      .content {
        box-shadow: none;
        border-radius: 0;
        .title {
          font-size: 16px;
        }
        .sub {
          font-size: 11px;
        }
      }
      .logo {
        width: 100%;
        margin-top: 10px;
      }
      .list {
        width: 100%;
        height: 341px;
      }
      .representative-image {
        width: 100%;
        height: 299px;
        .image-section {
          width: 328px;
          height: 183px;
        }
      }
    }

    .content-section {
      gap: 10px;
      .content {
        width: 100%;
        border-radius: 0;
        box-shadow: none;
        .box {
          padding: 30px 24px;
          .title {
            font-size: 16px;
          }
        }
      }
      .promotion {
        .promotion-category {
          flex-wrap: wrap;
          gap: 16px;
          .category {
            width: 20%;
            height: 70px;
            gap: 6px;
            font-size: 11px;
          }
          .interior-gap {
            gap: 0;
          }
        }
      }
      .height {
        height: auto;

        .box {
          .center {
            flex-direction: column;
            align-items: center;
            .image-section {
              width: 100%;

              .origin-image {
                width: 100%;
                height: auto;
                aspect-ratio: 16 / 9;
                border-radius: 10px;
                overflow: hidden;
              }
              .btn-upload {
                width: 100%;
                // height: 183px;
                height: auto;
                aspect-ratio: 16 / 9;
              }
            }
            button {
              border-radius: 50px;

              label {
                width: 89px;
                height: 40px;
                flex-direction: row;
              }
            }
          }
        }

        &.representative-menu {
          height: auto;
          .menu-flex {
            width: 100%;
            flex-direction: row;
            .image-section {
              width: 89px;
              aspect-ratio: 1;
              .origin-image {
                width: 89px;
                height: 89px;
                border-radius: 10px;
                overflow: hidden;

                img {
                  display: block;
                  width: 100%;
                  height: 100%;
                }
              }
              .btn-upload {
                width: 89px;
                height: 89px;
              }
            }
            .name-cost {
              width: 100%;
              input {
                width: 100%;
                height: 40px;
              }
              .cost {
                width: 100%;
              }
            }
          }
        }
      }

      .save {
        height: 90px;
        margin: 0px 0 60px 0;
        padding: 0 24px;
        display: flex;
        align-items: center;
        background-color: white;
        button {
          width: 100%;
        }
      }
    }
  }
}
</style>
