import { onMounted, onUnmounted } from 'vue'

interface ScrollRevealOptions {
  /** CSS selector for elements to reveal */
  selector?: string
  /** IntersectionObserver threshold (0 to 1) */
  threshold?: number
  /** Root margin for triggering earlier/later */
  rootMargin?: string
  /** Delay between staggered children (ms) */
  staggerDelay?: number
  /** Base CSS class added when element is visible */
  activeClass?: string
}

/**
 * Composable that uses IntersectionObserver to trigger CSS animations
 * as elements scroll into view. Supports staggered child reveals.
 *
 * Usage:
 *   useScrollReveal({ selector: '.reveal' })
 *
 * Add data attributes on elements:
 *   data-reveal          — fade up (default)
 *   data-reveal="left"   — slide from left
 *   data-reveal="right"  — slide from right
 *   data-reveal="scale"  — scale in
 *   data-reveal-stagger  — stagger children with .reveal-child
 *   data-reveal-delay="200" — extra delay in ms
 */
export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    selector = '[data-reveal]',
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    staggerDelay = 120,
    activeClass = 'revealed'
  } = options

  let observer: IntersectionObserver | null = null

  // Respect prefers-reduced-motion
  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return

      const el = entry.target as HTMLElement
      const extraDelay = parseInt(el.dataset.revealDelay || '0', 10)

      if (prefersReducedMotion()) {
        // Skip animation, just show immediately
        el.classList.add(activeClass)
        observer?.unobserve(el)
        return
      }

      // Check for stagger mode
      if (el.hasAttribute('data-reveal-stagger')) {
        const children = el.querySelectorAll('.reveal-child')
        children.forEach((child, index) => {
          const childEl = child as HTMLElement
          const delay = extraDelay + index * staggerDelay
          childEl.style.transitionDelay = `${delay}ms`
          childEl.style.animationDelay = `${delay}ms`
        })
      }

      // Apply reveal after optional delay
      if (extraDelay > 0 && !el.hasAttribute('data-reveal-stagger')) {
        setTimeout(() => el.classList.add(activeClass), extraDelay)
      } else {
        el.classList.add(activeClass)
      }

      observer?.unobserve(el)
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    })

    // Observe all elements matching selector
    document.querySelectorAll(selector).forEach((el) => {
      observer?.observe(el)
    })

    // Also observe stagger containers
    document.querySelectorAll('[data-reveal-stagger]').forEach((el) => {
      observer?.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })
}
