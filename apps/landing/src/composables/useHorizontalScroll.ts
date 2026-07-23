import { ref, onMounted, onUnmounted } from 'vue'

export function useHorizontalScroll() {
  const containerRef = ref<HTMLElement | null>(null)
  const trackRef = ref<HTMLElement | null>(null)
  
  const scrollProgress = ref(0)
  
  let rafId: number | null = null
  let targetProgress = 0
  let currentProgress = 0
  
  // Lerp factor (lower is smoother but slower, 0.08 provides an Apple-like glide)
  const ease = 0.08

  const update = () => {
    if (!containerRef.value || !trackRef.value) {
      rafId = requestAnimationFrame(update)
      return
    }

    const container = containerRef.value
    const track = trackRef.value

    // Calculate target progress based on scroll
    const rect = container.getBoundingClientRect()
    const scrollEnd = container.scrollHeight - window.innerHeight
    
    // Convert current scroll position to progress (0 to 1)
    let p = -rect.top / scrollEnd
    p = Math.max(0, Math.min(1, p))
    targetProgress = p

    // Lerp current progress towards target
    currentProgress += (targetProgress - currentProgress) * ease
    
    // Update ref for external use (background text)
    scrollProgress.value = currentProgress

    // Calculate how far the track needs to move horizontally
    const maxTranslateX = track.scrollWidth - window.innerWidth
    
    if (maxTranslateX > 0) {
      const translateX = currentProgress * maxTranslateX
      track.style.transform = `translate3d(-${translateX}px, 0, 0)`
    }

    rafId = requestAnimationFrame(update)
  }

  onMounted(() => {
    rafId = requestAnimationFrame(update)
  })

  onUnmounted(() => {
    if (rafId) cancelAnimationFrame(rafId)
  })

  return {
    containerRef,
    trackRef,
    scrollProgress
  }
}
