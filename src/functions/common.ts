import { LargeCategory } from '../types/category'

export const loadCategoryImg = (
  category: LargeCategory[],
  largeCategoryName: string,
  smallCategoryName: string
): string => {
  const largeCategory = category.find(
    (category) => category.categoryName === largeCategoryName
  )

  let url = ''

  if (largeCategory) {
    const smallCategory = largeCategory.smallCategory.find(
      (category) => category.categoryName === smallCategoryName
    )

    if (smallCategory) {
      url = smallCategory.categoryImg
    }
  }

  return url
}

export const deviceMoveUrl = (deviceType: string, url: string) => {
  if (deviceType === 'pc') {
    window.open(url, '_blank')
  } else {
    window.location.href = url
  }
}

export const dateConvertString = (date: Date, text: string) => {
  const cDate = new Date(date)

  const year = cDate.getFullYear()
  const month =
    cDate.getMonth() + 1 < 10
      ? '0' + (cDate.getMonth() + 1)
      : cDate.getMonth() + 1

  const day = cDate.getDate() < 10 ? '0' + cDate.getDate() : cDate.getDate()

  return `${year}${text}${month}${text}${day}`
}
