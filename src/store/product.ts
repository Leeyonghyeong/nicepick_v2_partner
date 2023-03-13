import { defineStore } from 'pinia'
import { ref } from 'vue'
import { PayTermPrice } from '../types/product'

export const useProductStore = defineStore('product', () => {
  const payProductItems = ref<PayTermPrice[]>([])

  return { payProductItems }
})
