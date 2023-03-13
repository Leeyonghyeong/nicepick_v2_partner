import { defineStore } from 'pinia'
import { ref } from 'vue'
import { User } from '../types/user'
import api from '../config/axios.config'
import { Brand } from '../types/brand'
import { BrandsResponse } from '../types/response'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()
  const tempEmail = ref<string>()
  const currentBrand = ref<Brand>()
  const brand = ref<Brand[]>([])

  const getUser = async (): Promise<void> => {
    const accessToken = localStorage.getItem('accessToken')

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    }

    const { data } = await api.get<User>('/auth', { headers })

    user.value = data

    if (user.value.role === 'COMPANY') {
      const { data: brandInfo } = await api.get<BrandsResponse>(
        `/auth/brand/${user.value.id}`
      )

      if (brandInfo.success) {
        brand.value = brandInfo.brand
        currentBrand.value = brand.value[0]
      }
    }
  }

  return { user, brand, currentBrand, tempEmail, getUser }
})
