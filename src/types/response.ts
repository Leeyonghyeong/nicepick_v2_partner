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
