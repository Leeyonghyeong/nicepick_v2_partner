export interface PayCategory {
  id: string
  categoryName: string
  page: number
  notice: string
  payProduct: PayProduct[]
}

export interface PayProduct {
  id: string
  productName: string
  productNoti: string
  productImg: string
  productMobileImg: string
  productQuantity: number
  payType: string
  payTermPrice: PayTermPrice[]
  payProductTab: PayProductTab[]
}

export interface PayTermPrice {
  id: string
  payCategoryName: string
  payProductName: string
  price: number
  sale: number
  term: number
  payProductId: string
  payProduct: PayProduct
}

export interface PayProductTab {
  id: string
  tabName: string
  pcImg: string
  pcImgKey: string
  tabletImg: string
  tabletImgKey: string
  mobileImg: string
  mobileImgKey: string
  notice: string
  createAt: Date
  updateAt: Date
  payProductId: string
}

export interface Cart {
  id: string
  payTermPriceId: string
}
