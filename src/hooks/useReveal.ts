import { useEffect } from 'react'

export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.animate(
              [
                { opacity: 0, transform: 'translateY(24px)' },
                { opacity: 1, transform: 'none' },
              ],
              {
                duration: 700,
                easing: 'cubic-bezier(.2,.9,.1,1)',
                fill: 'both',
              },
            )
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const timer = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        if (el.getBoundingClientRect().top > window.innerHeight) {
          el.style.opacity = '0'
          io.observe(el)
        }
      })
    }, 60)

    return () => {
      clearTimeout(timer)
      io.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
