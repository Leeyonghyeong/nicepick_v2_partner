export interface Notice {
  id: string
  title: string
  content: string
  page: number
  createAt: Date
  noticeImage: NoticeImage[]
}

export interface NoticeImage {
  id: string
  imageUrl: string
  imageKey: string
  createAt: Date
}
