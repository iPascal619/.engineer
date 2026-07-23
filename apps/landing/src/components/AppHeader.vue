<template>
  <header class="app-header" :class="{ 'compact': compact }">
    <div class="header-inner">
      <!-- Logo/Brand -->
      <div class="brand">
        <span class="brand-text">
          <span class="brace">{</span><span class="logo-p">P</span>ascal<span class="brace">}</span>
        </span>
      </div>
      
      <!-- Desktop Navigation -->
      <nav class="main-nav" id="section-nav" :class="{ 'nav-open': mobileMenuOpen }">
        <ul class="nav-list">
          <li class="nav-item" v-for="(item, index) in navItems" :key="item.id">
            <a 
              :href="'#' + item.id" 
              class="nav-link"
              :class="{ active: currentSection === item.id }"
              @click.prevent="handleNavClick(item.id)"
            >
              <span class="nav-number">{{ item.number }}</span>
              <span class="nav-text">{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Mobile menu backdrop -->
      <div 
        class="mobile-backdrop" 
        :class="{ 'active': mobileMenuOpen }"
        @click="closeMobileMenu"
      ></div>
      
      <!-- Right controls -->
      <div class="external-links">        
        <!-- Theme Toggle Button -->
        <button 
          class="theme-toggle" 
          @click="handleThemeToggle"
          :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg 
            v-if="!isDarkMode" 
            class="theme-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.22-8.22 8.05 8.05 0 0 1 .73-3.37A1 1 0 0 0 8.59 1a10.18 10.18 0 1 0 13.05 12 1 1 0 0 0 0-1z" fill="currentColor"/>
          </svg>
          <svg 
            v-else 
            class="theme-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="5" fill="currentColor"/>
            <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
            <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
            <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/>
            <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/>
          </svg>
        </button>

        <!-- Mobile Hamburger Button -->
        <button 
          class="hamburger-btn"
          @click="toggleMobileMenu"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          :class="{ 'open': mobileMenuOpen }"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

interface Props {
  compact?: boolean
  currentSection?: string
}

withDefaults(defineProps<Props>(), {
  compact: false,
  currentSection: 'une'
})

// Store
const appStore = useAppStore()
const { isDarkMode } = storeToRefs(appStore)
const { toggleTheme, handleNavigation } = appStore

// Nav items
const navItems = [
  { id: 'une', number: '01', label: 'Pitch' },
  { id: 'deux', number: '02', label: 'Cornerstone' },
  { id: 'trois', number: '03', label: 'Experience' },
  { id: 'quatre', number: '04', label: 'Carriageway' },
  { id: 'cinq', number: '05', label: 'Contact' }
]

// Mobile menu state
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // Prevent body scroll when menu is open
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleThemeToggle = () => {
  console.log('Theme toggle button clicked')
  toggleTheme()
}

const handleNavClick = (sectionId: string) => {
  closeMobileMenu()
  handleNavigation(sectionId as keyof typeof appStore.SECTION_MAP)
  
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const scrollToSection = (sectionId: string) => {
  handleNavClick(sectionId)
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--theme-header-bg, rgba(255, 255, 255, 0.85));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--theme-border, rgba(0, 0, 0, 0.06));
  transition: all var(--transition-normal);
  padding: 1rem 0;
}

.compact {
  padding: 0.5rem 0;
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Brand */
.brand {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--theme-text);
  z-index: 1001;
}

.brand-text {
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
}

.logo-p {
  color: var(--color-lime);
}

.brace {
  color: var(--theme-text);
  font-weight: 600;
}

/* Desktop Navigation */
.main-nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 3rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--theme-text-secondary, var(--color-grey));
  transition: all var(--transition-normal);
  padding: 0.5rem;
  position: relative;
}

.nav-link:hover,
.nav-link.active {
  color: var(--theme-text, var(--color-black));
}

.nav-number {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-lime);
  margin-bottom: 0.25rem;
  font-family: var(--font-family-mono, monospace);
}

.nav-text {
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.nav-link.active .nav-text {
  color: var(--theme-text, var(--color-black));
}

/* Animated underline */
.nav-link::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 30px;
  height: 2px;
  background: var(--color-lime);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: 1px;
}

.nav-link.active::after,
.nav-link:hover::after {
  transform: translateX(-50%) scaleX(1);
}

/* Right controls */
.external-links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 1001;
}

.theme-toggle {
  background: none;
  border: 1px solid var(--theme-border, rgba(0, 0, 0, 0.1));
  border-radius: 10px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
  color: var(--theme-text-secondary, var(--color-grey));
}

.theme-toggle:hover {
  border-color: var(--color-lime);
  background: rgba(156, 220, 8, 0.08);
  color: var(--theme-text);
}

.theme-icon {
  width: 18px;
  height: 18px;
  transition: transform var(--transition-normal);
}

.theme-toggle:hover .theme-icon {
  transform: scale(1.1);
}

/* Hamburger button — hidden on desktop */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: 1px solid var(--theme-border, rgba(0, 0, 0, 0.1));
  border-radius: 10px;
  cursor: pointer;
  padding: 8px;
  transition: all var(--transition-normal);
}

.hamburger-btn:hover {
  border-color: var(--color-lime);
  background: rgba(156, 220, 8, 0.08);
}

.hamburger-line {
  width: 18px;
  height: 2px;
  background: var(--theme-text);
  border-radius: 1px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: center;
}

/* Hamburger animation */
.hamburger-btn.open .hamburger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger-btn.open .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger-btn.open .hamburger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile backdrop */
.mobile-backdrop {
  display: none;
}

/* ========================================
   MOBILE STYLES
   ======================================== */
@media (max-width: 768px) {
  .header-inner {
    padding: 0 1rem;
  }

  .hamburger-btn {
    display: flex;
  }

  /* Mobile nav — slide-out drawer */
  .main-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: var(--theme-header-bg, rgba(255, 255, 255, 0.98));
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    flex-direction: column;
    justify-content: center;
    padding: 4rem 2rem;
    transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 1000;
    border-left: 1px solid var(--theme-border);
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
  }

  .dark-mode .main-nav {
    background: rgba(15, 23, 42, 0.98);
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.4);
  }

  .main-nav.nav-open {
    right: 0;
  }

  .nav-list {
    flex-direction: column;
    gap: 0;
    width: 100%;
  }

  .nav-link {
    flex-direction: row;
    gap: 1rem;
    padding: 1rem 0.5rem;
    border-bottom: 1px solid var(--theme-border);
    justify-content: flex-start;
  }

  .nav-link::after {
    display: none;
  }

  .nav-link.active {
    background: rgba(156, 220, 8, 0.06);
    border-radius: 8px;
    border-bottom-color: transparent;
  }

  .nav-number {
    font-size: 0.8rem;
    margin-bottom: 0;
    min-width: 24px;
  }
  
  .nav-text {
    font-size: 1rem;
    font-weight: 500;
  }

  /* Mobile backdrop */
  .mobile-backdrop {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .mobile-backdrop.active {
    opacity: 1;
    pointer-events: auto;
  }

  .brand {
    font-size: 1.2rem;
  }
}

@media (max-width: 600px) {
  /* On very small screens, numbers are still visible in the drawer */
  .nav-number {
    font-size: 0.75rem;
  }
}
</style>
