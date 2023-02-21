import { defineStore } from 'pinia'
import { ref } from 'vue'
import { User } from '../types/user'
import api from '../config/axios.config'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()
  const brandId = ref<string>()
  const tempEmail = ref<string>()

  const getUser = async (): Promise<void> => {
    const accessToken = localStorage.getItem('accessToken')

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    }

    const { data } = await api.get<User>('/auth', { headers })

    user.value = data
  }

  return { user, brandId, tempEmail, getUser }
})
