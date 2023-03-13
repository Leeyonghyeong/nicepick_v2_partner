export interface Brand {
  id: string
  brandName: string
  brandLogoImg: string
  brandLogoImgKey: string
  brandListImg: string
  brandListImgKey: string
  brandImg: string
  brandImgKey: string
  webUrl: string
  brandPromotion: string
  brandPromotionIcon: string
  isPremium: boolean
  isUpdate: boolean
  largeCategoryName: string
  smallCategoryName: string
  changeStatusComment: string
  franchiseStatusComment: string
  startCostComment: string
  brandIntroImg: BrandIntroImg[]
  brandStartCostImg: BrandStartCostImg[]
  brandMenuImg: BrandMenuImg[]
  brandInteriorImg: BrandInteriorImg[]
  brandYoutube: BrandYoutube[]
  brandChangeStatus: BrandChangeStatus[]
  brandFranchiseStatus: BrandFranchiseStatus[]
  brandStartCost: BrandStartCost
}

export interface BrandIntroImg {
  id?: string
  introImgUrl: string
  introImgUrlKey: string
}

export interface BrandStartCostImg {
  id?: string
  startCostImgUrl: string
  startCostImgUrlKey: string
}

export interface BrandMenuImg {
  id?: string
  menuImgUrl: string
  menuImgUrlKey: string
  menuName?: string
  menuPrice?: number
}

export interface BrandInteriorImg {
  id?: string
  interiorImgUrl: string
  interiorImgUrlKey: string
}

export interface BrandYoutube {
  id?: string
  youtubeUrl: string
  youtubeId: string
}

export interface BrandChangeStatus {
  id?: string
  year: number
  newShopCount: number
  terminationCount: number
  cancelCount: number
  changeCount: number
}

export interface BrandFranchiseStatus {
  id?: string
  year: number
  location: string
  allCount: number
}

export interface BrandStartCost {
  id?: string
  membershipFee: string
  educationFee: string
  deposit: string
  etcFee: string
  totalFee: string
  interiorFee: string
  areaInteriorFee?: string
  standardArea: string
  startTotalPrice: string
}

export interface BrandTag {
  id: string
  tag: string
  createAt: Date
  updateAt: Date
}
