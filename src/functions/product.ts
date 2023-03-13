export const calcOriginPrice = (price: number, sale: number): string => {
  const calcSale = 1 - sale / 100

  const originPrice = price / calcSale

  return originPrice.toLocaleString()
}

export const calcTotalPrice = (originPrice: number[]): string => {
  let result = 0
  if (originPrice.length > 0) {
    result = originPrice.reduce((prev, current) => prev + current)
  }

  return result.toLocaleString()
}
