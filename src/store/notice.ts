import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Notice } from '../types/notice'
import api from '../config/axios.config'
import { NoticeListResponse } from '../types/response'

export const useNoticeStore = defineStore('notice', () => {
  const notice = ref<Notice[]>([])

  const getNotice = async () => {
    const { data } = await api.get<NoticeListResponse>('/notice')

    if (data.success) {
      notice.value = data.notice
    }
  }

  return { notice, getNotice }
})
