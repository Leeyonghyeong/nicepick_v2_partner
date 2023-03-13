import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlarmStore = defineStore('alarm', () => {
  const cartCount = ref<number>(0)

  return { cartCount }
})
