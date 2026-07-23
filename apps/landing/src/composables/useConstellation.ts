import { ref, onMounted, onUnmounted } from 'vue'

export function useConstellation() {
  const containerRef = ref<HTMLElement | null>(null)
  const drawProgress = ref(0)
  
  let rafId: number | null = null

  const update = () => {
    if (!containerRef.value) {
      rafId = requestAnimationFrame(update)
      return
    }

    const container = containerRef.value
    const rect = container.getBoundingClientRect()
    
    // We want the drawing to start when the top of the container hits the middle of the viewport
    // and finish when the bottom of the container hits the middle of the viewport
    const startPoint = window.innerHeight / 1.5
    
    // Calculate how much of the container has passed the startPoint
    const distanceScrolledIntoView = startPoint - rect.top
    const totalScrollableDistance = rect.height
    
    let progress = distanceScrolledIntoView / totalScrollableDistance
    progress = Math.max(0, Math.min(1, progress))
    
    drawProgress.value = progress

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
    drawProgress
  }
}
