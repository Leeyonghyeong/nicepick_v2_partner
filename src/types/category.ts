export interface LargeCategory {
  id: string
  categoryName: string
  mainImg: string
  smallCategory: SmallCategory[]
}

export interface SmallCategory {
  id: string
  categoryName: string
  categoryImg: string
  categoryActiveImg: string
}
