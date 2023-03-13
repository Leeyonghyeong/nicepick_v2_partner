export interface Image {
  key: string
  url: string
}

export interface MenuImage extends Image {
  menuName?: string
  menuPrice?: number
}
