import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LargeCategory } from '../types/category'
import api from '../config/axios.config'

export const useCategoryStore = defineStore('category', () => {
  const category = ref<LargeCategory[]>([])

  const getCategory = async () => {
    const { data } = await api.get('/category')

    if (data.success) {
      category.value = data.largeCategory
    }
  }

  return { category, getCategory }
})
