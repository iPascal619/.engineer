import { defineStore } from 'pinia'
import { ref } from 'vue'

// Section mapping like Olaolu's original
export const SECTION_MAP = {
  une: 'Pitch',
  deux: 'Cornerstone', 
  trois: 'Experience',
  quatre: 'Carriageway',
  cinq: 'Contact'
} as const

export const SECTIONS = Object.keys(SECTION_MAP) as Array<keyof typeof SECTION_MAP>

export const useAppStore = defineStore('app', () => {
  const currentSection = ref<keyof typeof SECTION_MAP>('une')
  const headerCompact = ref(false)
  
  // Theme management
  const isDarkMode = ref(false)
  
  // Navigation tracking for discovery button
  const contactClickedFromNav = ref(false)

  // Initialize theme from localStorage or system preference
  const initializeTheme = () => {
    console.log('Initializing theme...')
    const savedTheme = localStorage.getItem('theme')
    console.log('Saved theme from localStorage:', savedTheme)
    if (savedTheme) {
      isDarkMode.value = savedTheme === 'dark'
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      console.log('System prefers dark mode:', prefersDark)
      isDarkMode.value = prefersDark
    }
    console.log('Final isDarkMode value:', isDarkMode.value)
    applyTheme()
  }

  const toggleTheme = () => {
    console.log('Toggle theme called, current isDarkMode:', isDarkMode.value)
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
    console.log('New isDarkMode:', isDarkMode.value)
    applyTheme()
  }

  const applyTheme = () => {
    console.log('Applying theme, isDarkMode:', isDarkMode.value)
    const htmlElement = document.documentElement
    if (isDarkMode.value) {
      htmlElement.classList.add('dark-mode')
      htmlElement.classList.remove('light-mode')
      console.log('Applied dark mode')
    } else {
      htmlElement.classList.add('light-mode')
      htmlElement.classList.remove('dark-mode')
      console.log('Applied light mode')
    }
  }

  const setCurrentSection = (section: keyof typeof SECTION_MAP) => {
    currentSection.value = section
  }

  const setHeaderCompact = (compact: boolean) => {
    headerCompact.value = compact
  }

  const getCurrentSectionName = () => {
    return SECTION_MAP[currentSection.value]
  }

  // Navigation tracking methods
  const setContactClickedFromNav = (clicked: boolean) => {
    contactClickedFromNav.value = clicked
  }

  const handleNavigation = (sectionId: keyof typeof SECTION_MAP) => {
    if (sectionId === 'cinq') {
      contactClickedFromNav.value = true
    } else {
      contactClickedFromNav.value = false
    }
  }

  return {
    currentSection,
    headerCompact,
    isDarkMode,
    contactClickedFromNav,
    setCurrentSection,
    setHeaderCompact,
    getCurrentSectionName,
    setContactClickedFromNav,
    handleNavigation,
    toggleTheme,
    initializeTheme,
    SECTION_MAP,
    SECTIONS
  }
})
