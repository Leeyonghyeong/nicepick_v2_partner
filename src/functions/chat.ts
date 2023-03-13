import axios from 'axios'

export const calcDate = (date: Date): string => {
  const today = new Date()
  const reqDate = new Date(date)

  const calcTodayDate = today.getFullYear() + today.getMonth() + today.getDate()
  const calcReqDate =
    reqDate.getFullYear() + reqDate.getMonth() + reqDate.getDate()

  const calcDate = calcTodayDate - calcReqDate

  if (today.getFullYear() === reqDate.getFullYear()) {
    if (calcDate === 0) {
      return convertDate(date)
    } else {
      return reqDate.getMonth() + 1 + '월 ' + reqDate.getDate() + '일'
    }
  } else {
    return (
      reqDate.getFullYear +
      '. ' +
      reqDate.getMonth() +
      1 +
      '. ' +
      reqDate.getDate()
    )
  }
}

export const convertDate = (date: Date): string => {
  const messageDate = new Date(date)

  const ampm = messageDate.getHours() >= 12 ? '오후' : '오전'

  const hour =
    ampm === '오전'
      ? messageDate.getHours() === 0
        ? '12'
        : messageDate.getHours()
      : messageDate.getHours() > 12
      ? messageDate.getHours() - 12
      : messageDate.getHours()

  const minute =
    messageDate.getMinutes() < 10
      ? '0' + messageDate.getMinutes()
      : messageDate.getMinutes()

  return ampm + ' ' + hour + ':' + minute
}

export const compareDate = (
  currentDate: Date,
  beforeDate: Date,
  index: number
): boolean => {
  if (index === 0) {
    return true
  } else {
    const current = new Date(currentDate)
    const before = new Date(beforeDate)

    const calcCurrentDate =
      current.getFullYear() + current.getMonth() + current.getDate()
    const calcBeforeDate =
      before.getFullYear() + before.getMonth() + before.getDate()
    const calcDate = calcCurrentDate - calcBeforeDate

    if (calcDate === 0) {
      return false
    } else {
      return true
    }
  }
}

export const chatDateString = (date: Date): string => {
  const chatDate = new Date(date)

  const weekArr: string[] = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ]

  const year = chatDate.getFullYear()
  const month =
    chatDate.getMonth() + 1 < 10
      ? '0' + (chatDate.getMonth() + 1)
      : chatDate.getMonth() + 1
  const dayOfMonth =
    chatDate.getDate() < 10 ? '0' + chatDate.getDate() : chatDate.getDate()
  const dayOfWeek = weekArr[chatDate.getDay()]

  return year + '. ' + month + '. ' + dayOfMonth + ' ' + dayOfWeek
}

export const fileDownLoad = (originName: string, filePath: string) => {
  const uAgent = navigator.userAgent.toLocaleLowerCase()

  if (uAgent.search('android') > -1 || uAgent.search('iphone app') > -1) {
    const link = document.createElement('a')
    link.href = filePath
    link.style.display = 'none'
    link.download = originName

    document.body.appendChild(link)
    link.click()
    link.remove()
  } else {
    axios({
      url: filePath,
      method: 'GET',
      responseType: 'blob',
    }).then((res) => {
      const blob = new Blob([res.data])
      const fileObjectUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = fileObjectUrl
      link.style.display = 'none'
      link.download = originName

      document.body.appendChild(link)
      link.click()
      link.remove()

      window.URL.revokeObjectURL(fileObjectUrl)
    })
  }
}
