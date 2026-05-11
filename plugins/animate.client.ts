export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('animate', {
    getSSRProps: () => ({}),
    mounted(el, { value }) {
      const type: string = value?.type ?? 'up'
      const delay: number = value?.delay ?? 0

      // Skip elements already in the initial viewport to avoid flash
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight - 60) return

      el.classList.add('anim-hidden')
      if (type === 'up') el.classList.add('anim-from-up')
      else if (type === 'left') el.classList.add('anim-from-left')
      else if (type === 'right') el.classList.add('anim-from-right')
      else if (type === 'scale') el.classList.add('anim-from-scale')

      if (delay) el.style.transitionDelay = `${delay}ms`

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('anim-visible')
            observer.unobserve(el)
          }
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
      )
      observer.observe(el)
    },
  })
})
