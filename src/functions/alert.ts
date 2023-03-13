import { AlertOption } from '../types/alert'

export const confirmAlert = (
  alertOption: AlertOption
): Promise<{ isConfirmed: boolean }> => {
  const alertModal = document.createElement('div')
  alertModal.setAttribute('class', 'alert-modal')

  const alertWrapper = document.createElement('div')
  alertWrapper.setAttribute('class', 'alert-wrapper')

  const alertBox = document.createElement('div')
  alertBox.setAttribute('class', 'alert-box')

  if (alertOption.title) {
    const alertTitle = document.createElement('div')
    alertTitle.setAttribute('class', 'alert-title')
    alertTitle.innerText = alertOption.title

    alertBox.appendChild(alertTitle)
  }

  if (alertOption.text || alertOption.html) {
    const alertContent = document.createElement('div')
    alertContent.setAttribute('class', 'alert-content')

    if (alertOption.text) {
      alertContent.innerText = alertOption.text
    }

    if (alertOption.html) {
      alertContent.innerHTML = alertOption.html
    }

    alertBox.appendChild(alertContent)
  }

  const alertButtonBox = document.createElement('div')
  alertButtonBox.setAttribute('class', 'alert-button-box')

  const confirmButton = document.createElement('button')
  confirmButton.setAttribute('class', 'confirm-button')
  confirmButton.innerText = alertOption.confirmButtonText
    ? alertOption.confirmButtonText
    : '확인'

  alertButtonBox.appendChild(confirmButton)

  const cancelButton = document.createElement('button')
  cancelButton.setAttribute('class', 'cancel-button')

  if (alertOption.isCancelButton) {
    cancelButton.innerText = alertOption.cancelButtonText
      ? alertOption.cancelButtonText
      : '취소'

    alertButtonBox.appendChild(cancelButton)
  }

  alertBox.appendChild(alertButtonBox)
  alertWrapper.appendChild(alertBox)
  alertModal.appendChild(alertWrapper)

  document.body.appendChild(alertModal)

  // eslint-disable-next-line
  return new Promise((resolve, _reject) => {
    confirmButton.addEventListener('click', () => {
      document.body.removeChild(alertModal)
      return resolve({ isConfirmed: true })
    })
    cancelButton.addEventListener('click', () => {
      document.body.removeChild(alertModal)
      return resolve({ isConfirmed: false })
    })
  })
}

export const toastAlert = (alertOption: AlertOption): void => {
  const timer = alertOption.timer ? alertOption.timer : 3000

  const toastAlertBox = document.createElement('div')
  toastAlertBox.setAttribute('class', 'toast-alert-box')

  if (alertOption.position === 'top') {
    toastAlertBox.classList.add('top')
  }

  const toastAlert = document.createElement('div')
  toastAlert.setAttribute('class', 'toast-alert')

  const toastImg = document.createElement('div')

  if (alertOption.type === 'success') {
    toastImg.setAttribute('class', 'toast-img success')
  } else {
    toastImg.setAttribute('class', 'toast-img warning')
  }

  const toastContent = document.createElement('div')
  toastContent.setAttribute('class', 'toast-content')

  if (alertOption.text) {
    toastContent.innerText = alertOption.text
  }

  toastAlert.appendChild(toastImg)
  toastAlert.appendChild(toastContent)

  const isExistToastAlertBox =
    document.body.getElementsByClassName('toast-alert-box')

  const isExistToastAlert = document.body.getElementsByClassName('toast-alert')

  if (isExistToastAlertBox.length > 0) {
    isExistToastAlertBox[0].appendChild(toastAlert)

    setTimeout(() => {
      isExistToastAlertBox[0].removeChild(toastAlert)

      if (isExistToastAlert.length === 0) {
        document.body.removeChild(isExistToastAlertBox[0])
      }
    }, timer + 500)
  } else {
    toastAlertBox.appendChild(toastAlert)
    document.body.appendChild(toastAlertBox)

    setTimeout(() => {
      toastAlertBox.removeChild(toastAlert)

      if (isExistToastAlert.length === 0) {
        document.body.removeChild(toastAlertBox)
      }
    }, timer + 500)
  }

  toastAlert.classList.add('show')

  setTimeout(() => {
    toastAlert.classList.remove('show')
    toastAlert.classList.add('hide')
  }, timer)
}

export const taskingAlert = () => {
  confirmAlert({
    title: '서비스 개발중',
    text: '빠른 시일 안에 작업이 마무리 될 예정입니다',
  })
}
