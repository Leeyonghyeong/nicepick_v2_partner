import { Brand } from './brand'
import { User } from './user'

export interface ChatRoom {
  id: string
  brandId: string
  userId: string
  lastChatMessage: string
  newMessageCount: number
  createAt: Date
  updateAt: Date
  brand: Brand
  user: User
}

export interface ChatMessage {
  id: string
  message: string
  fileOriginName: string
  isUserRead: boolean
  isBrandRead: boolean
  senderId: string
  type: string
  createAt: Date
  chatRoomId: string
}
