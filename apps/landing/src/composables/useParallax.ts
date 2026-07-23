import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Lightweight parallax composable.
 * Moves an element at a slower rate than scroll to create depth.
 *
 * Usage:
 *   const { parallaxStyle } = useParallax({ speed: 0.3 })
 *
 * In template:
 *   <img :style="parallaxStyle" ... />
 */
export function useParallax(options: { speed?: number } = {}) {
  const { speed = 0.3 } = options
  const parallaxStyle = ref<Record<string, string>>({})
  let rafId: number | null = null
  let ticking = false

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const updateParallax = () => {
    if (prefersReducedMotion()) return

    const scrollY = window.scrollY
    const offset = scrollY * speed

    parallaxStyle.value = {
      transform: `translateY(${offset}px)`,
      willChange: 'transform'
    }

    ticking = false
  }

  const onScroll = () => {
    if (!ticking) {
      rafId = requestAnimationFrame(updateParallax)
      ticking = true
    }
  }

  onMounted(() => {
    if (!prefersReducedMotion()) {
      window.addEventListener('scroll', onScroll, { passive: true })
      updateParallax()
    }
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
    }
  })

  return { parallaxStyle }
}
