import { ref, onUnmounted } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export function useAstronaut() {
  let renderer: THREE.WebGLRenderer | null = null
  let scene: THREE.Scene | null = null
  let camera: THREE.PerspectiveCamera | null = null
  let astronautGroup: THREE.Group | null = null
  let animationId: number | null = null
  let container: HTMLElement | null = null
  let clock: THREE.Clock | null = null

  const isLoading = ref(true)
  const loadingProgress = ref(0)

  // Mouse tracking for interactive rotation
  const mouse = { x: 0, y: 0 }
  const targetRotation = { x: 0, y: 0 }

  function init(el: HTMLElement) {
    container = el

    // Scene
    scene = new THREE.Scene()

    // Camera
    const aspect = el.clientWidth / el.clientHeight
    camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100)
    camera.position.set(0, 0.5, 4.5)

    // Renderer
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(el.clientWidth, el.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    el.appendChild(renderer.domElement)

    // Style the canvas to fill container
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.5)
    mainLight.position.set(3, 5, 4)
    scene.add(mainLight)

    const rimLight = new THREE.DirectionalLight(0x9cdc08, 0.8)
    rimLight.position.set(-3, 2, -2)
    scene.add(rimLight)

    // Astronaut Group
    astronautGroup = new THREE.Group()
    scene.add(astronautGroup)

    // Load Model
    const loader = new GLTFLoader()
    loader.load(
      '/models/AstroStitch_02.glb',
      (gltf) => {
        const model = gltf.scene

        // Center the model based on its bounding box
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        
        // Adjust these values to fit the model properly in the scene
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 3.5 / maxDim
        model.scale.set(scale, scale, scale)
        
        // Center the model
        model.position.x = -center.x * scale
        model.position.y = -center.y * scale
        model.position.z = -center.z * scale

        // Enhance materials
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (child.material) {
              child.material.envMapIntensity = 1.5
              child.material.needsUpdate = true
            }
          }
        })

        astronautGroup?.add(model)
        isLoading.value = false
      },
      (xhr) => {
        if (xhr.total > 0) {
          loadingProgress.value = Math.round((xhr.loaded / xhr.total) * 100)
        } else {
          // Fallback based on 45MB file size
          loadingProgress.value = Math.min(Math.round((xhr.loaded / 45779120) * 100), 99)
        }
      },
      (error) => {
        console.error('An error happened loading the 3D model:', error)
        isLoading.value = false
      }
    )

    // Clock
    clock = new THREE.Clock()

    // Event listeners
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)

    // Start render loop
    animate()
  }

  function animate() {
    animationId = requestAnimationFrame(animate)

    if (!scene || !camera || !renderer || !astronautGroup || !clock) return

    const elapsed = clock.getElapsedTime()

    // Floating bob animation
    astronautGroup.position.y = Math.sin(elapsed * 0.8) * 0.15
    astronautGroup.rotation.z = Math.sin(elapsed * 0.5) * 0.05

    // Mouse-driven rotation (smooth lerp)
    targetRotation.y = mouse.x * 0.4
    targetRotation.x = -mouse.y * 0.2

    astronautGroup.rotation.y += (targetRotation.y - astronautGroup.rotation.y) * 0.05
    astronautGroup.rotation.x += (targetRotation.x - astronautGroup.rotation.x) * 0.05

    renderer.render(scene, camera)
  }

  function onMouseMove(event: MouseEvent) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = (event.clientY / window.innerHeight) * 2 - 1
  }

  function onResize() {
    if (!container || !camera || !renderer) return

    const width = container.clientWidth
    const height = container.clientHeight

    camera.aspect = width / height
    camera.updateProjectionMatrix()

    renderer.setSize(width, height)
  }

  function dispose() {
    if (animationId !== null) cancelAnimationFrame(animationId)
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('resize', onResize)

    if (renderer) {
      renderer.dispose()
      renderer.domElement.remove()
    }
    
    // Proper memory cleanup
    if (scene) {
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose()
          if (Array.isArray(obj.material)) {
            obj.material.forEach(m => m.dispose())
          } else {
            obj.material.dispose()
          }
        }
      })
    }

    renderer = null
    scene = null
    camera = null
    astronautGroup = null
    clock = null
    container = null
  }

  onUnmounted(() => dispose())

  return { init, dispose, isLoading, loadingProgress }
}
