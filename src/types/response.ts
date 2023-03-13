import { Brand, BrandTag } from './brand'
import { ChatMessage, ChatRoom } from './chat'
import { Notice } from './notice'
import { Cart, PayCategory, PayTermPrice } from './product'
import { Traffic } from './traffic'
import { Manager, User } from './user'

export interface CommonResponse {
  success: boolean
  errorMessage: string
}

export interface AuthResponse extends CommonResponse {
  accessToken: string
  brandId: string
  user: User
}

export interface ManagerResponse extends CommonResponse {
  manager: Manager[]
}

export interface BrandResponse extends CommonResponse {
  brand: Brand
}

export interface BrandsResponse extends CommonResponse {
  brand: Brand[]
}

export interface BrandTagResponse extends CommonResponse {
  brandTag: BrandTag[]
}

export interface TrafficResponse extends CommonResponse {
  traffic: Traffic[]
}

export interface CountResponse extends CommonResponse {
  count: number
}

export interface NoticeListResponse extends CommonResponse {
  notice: Notice[]
}

export interface NoticeDetailResponse extends CommonResponse {
  notice: Notice
}

export interface ImageUploadResponse extends CommonResponse {
  url: string
  key: string
}

export interface ChatRoomsResponse extends CommonResponse {
  chatRoom: ChatRoom[]
}

export interface ChatRoomResponse extends CommonResponse {
  chatRoom: ChatRoom
}

export interface ChatMessagesResponse extends CommonResponse {
  chatMessage: ChatMessage[]
}

export interface PayCategoryResponse extends CommonResponse {
  payCategory: PayCategory[]
}

export interface PayTermPriceResponse extends CommonResponse {
  payTermPrice: PayTermPrice[]
}

export interface CartResponse extends CommonResponse {
  cart: Cart
}
