import { onMounted, onUnmounted } from 'vue'

/**
 * Text reveal composable for headings.
 * Wraps each line in a clip-mask container and animates it into view
 * with a translate + opacity transition.
 *
 * Usage:
 *   useTextReveal()
 *
 * In template, add `data-text-reveal` to the heading container.
 * Each child `.line` span gets the clip animation.
 */
export function useTextReveal() {
  let observer: IntersectionObserver | null = null

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  onMounted(() => {
    const elements = document.querySelectorAll('[data-text-reveal]')

    if (prefersReducedMotion()) {
      // Show everything immediately
      elements.forEach((el) => {
        el.classList.add('text-revealed')
      })
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const el = entry.target as HTMLElement
          const lines = el.querySelectorAll('.line')

          // Stagger each line
          lines.forEach((line, index) => {
            const lineEl = line as HTMLElement
            lineEl.style.animationDelay = `${index * 200 + 100}ms`
          })

          // Animate the period dot separately
          const period = el.querySelector('.period') as HTMLElement | null
          if (period) {
            period.style.animationDelay = `${lines.length * 200 + 300}ms`
          }

          el.classList.add('text-revealed')
          observer?.unobserve(el)
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer?.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })
}
