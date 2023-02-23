import { Brand } from './brand'
import { User } from './user'

export interface CommonResponse {
  success: boolean
  errorMessage: string
}

export interface AuthResponse extends CommonResponse {
  accessToken: string
  brandId: string
  user: User
}

export interface BrandResponse extends CommonResponse {
  brand: Brand
}

export interface BrandsResponse extends CommonResponse {
  brand: Brand[]
}
