<template>
  <div id="app">
    <SkipLink to="#section-nav" v-if="showHeader" />
    <AppHeader 
      v-if="showHeader"
      :compact="headerCompact"
      :current-section="currentSection"
    />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from './stores/app'
import SkipLink from './components/SkipLink.vue'
import AppHeader from './components/AppHeader.vue'

const store = useAppStore()
const route = useRoute()

const currentSection = computed(() => store.currentSection)
const headerCompact = computed(() => store.headerCompact)

// Show header only on homepage
const showHeader = computed(() => route.path === '/')

// Initialize theme on app mount
onMounted(() => {
  console.log('App mounted, initializing theme...')
  const { initializeTheme } = store
  initializeTheme()
})
</script>

<style>
/* Global styles are imported in main.ts */
#app {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

main {
  width: 100%;
  min-height: 100vh;
}

/* Ensure smooth scrolling behavior */
html {
  scroll-behavior: smooth;
}

/* Hide scrollbar on desktop for full-screen effect like Olaolu's - but only on homepage */
@media (min-width: 769px) {
  html::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  
  /* Show scrollbar on projects page */
  body:has(.projects-page) html::-webkit-scrollbar {
    width: 6px;
  }
}

/* Custom scrollbar for better UX on supporting browsers */
html::-webkit-scrollbar {
  width: 6px;
}

html::-webkit-scrollbar-track {
  background: transparent;
}

html::-webkit-scrollbar-thumb {
  background: var(--color-lime);
  border-radius: 3px;
}

html::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 220, 8, 0.8);
}
</style>
