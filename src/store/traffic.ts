import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Traffic } from '../types/traffic'
import api from '../config/axios.config'
import { TrafficResponse } from '../types/response'

export const useTrafficStore = defineStore('traffic', () => {
  const traffic = ref<Traffic[]>([])

  const getTraffic = async () => {
    const { data } = await api.get<TrafficResponse>('/traffic')

    if (data.success) {
      traffic.value = data.traffic
    }
  }

  return { traffic, getTraffic }
})
