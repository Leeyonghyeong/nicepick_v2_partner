export const deviceMoveUrl = (deviceType: string, url: string) => {
  if (deviceType === 'pc') {
    window.open(url, '_blank')
  } else {
    window.location.href = url
  }
}
