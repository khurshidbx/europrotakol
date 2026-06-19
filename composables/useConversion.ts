export const useConversion = () => {
  const reportConversion = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-18247118933/zkiwCOrc9sEcENXg8_xD',
      })
    }
  }

  return { reportConversion }
}
