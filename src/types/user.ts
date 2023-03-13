export interface User {
  id: string
  userName: string
  email: string
  phoneNumber: string
  userImg: string
  isEmail: boolean
  isSMS: boolean
  isAlarm: boolean
  role: string
}

export interface Manager {
  id?: string
  userId: string
  userName: string
  phoneNumber: string
  isAlarm: boolean
}
