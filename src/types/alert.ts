export type AlertOption = {
  title?: string
  text?: string
  html?: string
  type?: 'success' | 'warning'
  position?: 'top' | 'bottom' | 'center'
  timer?: number
  isCancelButton?: boolean
  confirmButtonText?: string
  cancelButtonText?: string
}
