<template>
  <header class="app-header" :class="{ 'compact': compact }">
    <div class="header-inner">
      <!-- Logo/Brand -->
      <div class="brand">
        <span class="brand-text">
          <span class="brace">{</span><span class="logo-p">P</span>ascal<span class="brace">}</span>
        </span>
      </div>
      
      <!-- Navigation -->
      <nav class="main-nav" id="section-nav">
        <ul class="nav-list">
          <li class="nav-item">
            <a 
              href="#une" 
              class="nav-link"
              :class="{ active: currentSection === 'une' }"
              @click="scrollToSection('une')"
            >
              <span class="nav-number">01</span>
              <span class="nav-text">Pitch</span>
            </a>
          </li>
          <li class="nav-item">
            <a 
              href="#deux" 
              class="nav-link"
              :class="{ active: currentSection === 'deux' }"
              @click="scrollToSection('deux')"
            >
              <span class="nav-number">02</span>
              <span class="nav-text">Cornerstone</span>
            </a>
          </li>
          <li class="nav-item">
            <a 
              href="#trois" 
              class="nav-link"
              :class="{ active: currentSection === 'trois' }"
              @click="scrollToSection('trois')"
            >
              <span class="nav-number">03</span>
              <span class="nav-text">Experience</span>
            </a>
          </li>
          <li class="nav-item">
            <a 
              href="#quatre" 
              class="nav-link"
              :class="{ active: currentSection === 'quatre' }"
              @click="scrollToSection('quatre')"
            >
              <span class="nav-number">04</span>
              <span class="nav-text">Carriageway</span>
            </a>
          </li>
          <li class="nav-item">
            <a 
              href="#cinq" 
              class="nav-link"
              :class="{ active: currentSection === 'cinq' }"
              @click="scrollToSection('cinq')"
            >
              <span class="nav-number">05</span>
              <span class="nav-text">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
      
      <!-- Theme Toggle -->
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
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
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

const handleThemeToggle = () => {
  console.log('Theme toggle button clicked')
  toggleTheme()
}

const scrollToSection = (sectionId: string) => {
  // Track navigation in store
  handleNavigation(sectionId as keyof typeof appStore.SECTION_MAP)
  
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--theme-header-bg, rgba(255, 255, 255, 0.95));
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--theme-border, rgba(0, 0, 0, 0.1));
  transition: all var(--transition-normal);
  padding: 1rem 0;
}

.compact {
  padding: 0.5rem 0;
  background: var(--theme-header-bg, rgba(255, 255, 255, 0.98));
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--theme-text);
}

.brand-text {
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
}

.logo-p {
  color: var(--color-lime);
}

.brace {
  color: var(--theme-text);
  font-weight: 600;
}

.brand-text::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-lime);
  transform: scaleX(0);
  transition: transform var(--transition-normal);
}

.brand:hover .brand-text::after {
  transform: scaleX(1);
}

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
}

.nav-text {
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.nav-link.active .nav-text {
  color: var(--theme-text, var(--color-black));
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 30px;
  height: 2px;
  background: var(--color-lime);
  transition: transform var(--transition-normal);
}

.nav-link.active::after,
.nav-link:hover::after {
  transform: translateX(-50%) scaleX(1);
}

.external-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  background: none;
  border: 1px solid var(--theme-border, rgba(0, 0, 0, 0.2));
  border-radius: 8px;
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
  background: rgba(156, 220, 8, 0.1);
  color: var(--theme-text, var(--color-black));
}

.theme-toggle:hover {
  border-color: var(--color-lime);
  background: rgba(156, 220, 8, 0.1);
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

/* Mobile Navigation */
@media (max-width: 768px) {
  .header-inner {
    padding: 0 1rem;
  }
  
  .nav-list {
    gap: 1.5rem;
  }
  
  .nav-number {
    font-size: 0.7rem;
  }
  
  .nav-text {
    font-size: 0.8rem;
  }
  
  .brand {
    font-size: 1.2rem;
  }
}

@media (max-width: 600px) {
  .nav-text {
    display: none;
  }
  
  .nav-link {
    flex-direction: row;
    gap: 0.5rem;
  }
  
  .nav-number {
    margin-bottom: 0;
  }
}
</style>
