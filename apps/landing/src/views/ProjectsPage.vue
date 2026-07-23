<template>
  <div class="projects-page">
    <!-- Minimal Header with Theme Toggle + Back Link -->
    <div class="minimal-header">
      <router-link to="/" class="back-home-link">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Home</span>
      </router-link>
      <button class="theme-toggle" @click="toggleTheme">
        <svg v-if="!isDarkMode" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Header Section -->
    <section class="projects-header">
      <div class="section-inner">
        <div class="header-content">
          <div class="page-title">
            <h1 class="projects-heading" data-text-reveal>
              <span class="line">My</span>
              <span class="line">Projects</span>
              <span class="period">.</span>
            </h1>
            <p class="projects-description" data-reveal>
              A collection of projects I've built using various technologies including web development, 
              mobile applications, and blockchain solutions.
            </p>
          </div>

          <!-- Filter Tags -->
          <div class="filter-tags" data-reveal data-reveal-delay="200">
            <button 
              class="filter-tag" 
              :class="{ active: activeFilter === 'all' }"
              @click="setFilter('all')"
            >All</button>
            <button 
              class="filter-tag" 
              :class="{ active: activeFilter === 'web' }"
              @click="setFilter('web')"
            >Web</button>
            <button 
              class="filter-tag" 
              :class="{ active: activeFilter === 'ai' }"
              @click="setFilter('ai')"
            >AI</button>
            <button 
              class="filter-tag" 
              :class="{ active: activeFilter === 'blockchain' }"
              @click="setFilter('blockchain')"
            >Blockchain</button>
            <button 
              class="filter-tag" 
              :class="{ active: activeFilter === 'backend' }"
              @click="setFilter('backend')"
            >Backend</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid Section -->
    <section class="projects-showcase">
      <div class="section-inner">
        <div class="projects-grid" data-reveal-stagger>
          <div 
            class="project-card reveal-child" 
            v-for="(project, index) in filteredProjects" 
            :key="project.id"
          >
            <div class="project-image-container">
              <img :src="getProjectImage(project)" :alt="project.title" class="project-screenshot" />
              <div class="project-overlay">
                <div class="overlay-top">
                  <div class="project-tech-tags">
                    <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
                  </div>
                </div>
                <div class="overlay-bottom">
                  <div class="overlay-content">
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="project-info">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>
              <div class="project-actions">
                <a v-if="project.liveDemo" :href="project.liveDemo" target="_blank" class="project-btn primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 3H21V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  View Project
                </a>
                <a v-else :href="project.github" target="_blank" class="project-btn primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 1C19.91 1 18.73 0.650001 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.650001 5.09 1 5.09 1C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  View Code
                </a>
                <a :href="project.github" target="_blank" class="project-btn secondary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 1C19.91 1 18.73 0.650001 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.650001 5.09 1 5.09 1C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Back to Portfolio Section -->
    <section class="back-to-portfolio">
      <div class="section-inner">
        <div class="cta-content" data-reveal>
          <h2>Time to head back, but come around again - I'm always coding! LOL</h2>
          <button class="back-portfolio-btn" @click="goBack">
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Back to Portfolio</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '../stores/app'
import { useSEO } from '../composables/useSEO'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useTextReveal } from '../composables/useTextReveal'

// SEO optimization for projects page
useSEO({
  title: 'Pascal Onuoha - Software Projects Portfolio | AI, Blockchain & Web Apps',
  description: 'Explore Pascal Onuoha\'s software development projects including Synapse AI fraud detection, Banking API, CryptoDash trading platform, AetherFlow healthcare app, and more innovative solutions.',
  keywords: 'Pascal Onuoha projects, software portfolio, AI projects, blockchain apps, web development, NestJS API, React apps, Vue.js projects, cryptocurrency platform, healthcare technology',
  canonical: 'https://p4sca1.tech/projects'
})

// Animation composables
useScrollReveal()
useTextReveal()

// Import project images
const simbaImage = '/img/simbaaa.png'
const cryptodashImage = '/img/cryptodash.png'
const stembuddyImage = '/img/Stembuddy.jpg'
const tokenswiftImage = '/img/Tokenswift.jpg'
const aetherflowImage = '/img/Aetherflow.jpg'
const astroImage = '/img/astro.jpg'

const router = useRouter()
const store = useAppStore()

// Theme management
const isDarkMode = computed(() => store.isDarkMode)

const toggleTheme = () => {
  store.toggleTheme()
}

// Filter state
const activeFilter = ref('all')

const setFilter = (filter: string) => {
  activeFilter.value = filter
}

// All projects data (8 projects)
const allProjects = ref([
  {
    id: 8,
    title: "MineTech",
    description: "Mining operations intelligence platform with local AI workflows for incident triage and RAG knowledge base",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Ollama", "pgvector"],
    github: "https://github.com/iPascal619/Minetech-LLM-and-Traige-support",
    liveDemo: null,
    image: "minetech",
    category: "ai"
  },
  {
    id: 1,
    title: "Simba Supermarket Redesign",
    description: "Modern e-commerce platform with intuitive user experience and seamless shopping cart functionality",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/iPascal619/Simba-supermarket-online-store-redesign",
    liveDemo: "https://simba-supermarket-online-store-rede.vercel.app/",
    image: "simba",
    category: "web"
  },
  {
    id: 2,
    title: "STEM Buddy",
    description: "Educational platform for young learners to explore STEM subjects through interactive courses and activities",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/iPascal619/STEM-BUDDY",
    liveDemo: "https://stem-buddy.netlify.app/",
    image: "stembuddy",
    category: "web"
  },
  {
    id: 3,
    title: "TokenSwift",
    description: "Decentralized application for ERC-20 token transfers on Ethereum with wallet integration and transaction history",
    technologies: ["JavaScript", "Solidity", "Web3.js", "HTML", "CSS"],
    github: "https://github.com/iPascal619/Dapp-project",
    liveDemo: "https://tokenswift.netlify.app/",
    image: "tokenswift",
    category: "blockchain"
  },
  {
    id: 4,
    title: "AetherFlow",
    description: "AI-powered healthcare platform for sickle cell crisis prediction with patient management and offline functionality",
    technologies: ["Electron", "JavaScript", "Python", "FastAPI", "Machine Learning"],
    github: "https://github.com/iPascal619/Aetherflow_Final-BUILD",
    liveDemo: null,
    image: "aetherflow",
    category: "ai"
  },
  {
    id: 5,
    title: "CryptoDash",
    description: "Professional cryptocurrency trading platform with real-time market data and secure payment processing",
    technologies: ["Node.js", "Express", "MongoDB", "JavaScript", "Stripe", "TradingView", "Binance API"],
    github: "https://github.com/iPascal619/Crypto-dash",
    liveDemo: "https://cryptodash.tech/",
    image: "cryptodash",
    category: "web"
  },
  {
    id: 6,
    title: "Synapse AI",
    description: "AI-powered fraud detection platform with real-time monitoring, 99.5% accuracy, and advanced behavioral analytics for enterprise security",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "AI/ML", "Vercel"],
    github: "https://github.com/iPascal619/Synapse-AI",
    liveDemo: "https://synapse-ai-omega-one.vercel.app/",
    image: "synapse-ai",
    category: "ai"
  },
  {
    id: 7,
    title: "Banking API",
    description: "Comprehensive banking system with double-entry ledger accounting, JWT authentication, and secure transaction management",
    technologies: ["NestJS", "TypeScript", "TypeORM", "SQLite", "JWT", "Swagger"],
    github: "https://github.com/iPascal619/banking-API",
    liveDemo: null,
    image: "banking-api",
    category: "backend"
  }
])

// Filtered projects
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return allProjects.value
  return allProjects.value.filter(p => p.category === activeFilter.value)
})

// Function to get project image
const getProjectImage = (project: any) => {
  switch (project.image) {
    case 'minetech':
      return 'https://raw.githubusercontent.com/iPascal619/Minetech-LLM-and-Traige-support/main/soda.svg'
    case 'simba':
      return simbaImage
    case 'cryptodash':
      return cryptodashImage
    case 'stembuddy':
      return stembuddyImage
    case 'tokenswift':
      return tokenswiftImage
    case 'aetherflow':
      return aetherflowImage
    case 'banking-api':
      return '/img/api-integration.webp'
    case 'synapse-ai':
      return '/img/synapse AI.jpg'
    case 'astro':
      return astroImage
    default:
      return simbaImage
  }
}

// Navigation functions
const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
/* Ensure scrolling works on projects page */
:deep(html), :deep(body) {
  overflow-y: auto !important;
}

:deep(html::-webkit-scrollbar) {
  width: 6px !important;
}

.projects-page {
  min-height: 100vh;
  background: var(--theme-bg);
  color: var(--theme-text);
  overflow-y: auto;
  position: relative;
  height: auto;
}

/* Minimal Header with Theme Toggle + Back Link */
.minimal-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--theme-header-bg, rgba(255, 255, 255, 0.85));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--theme-border);
}

.back-home-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--theme-text);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--theme-border);
  transition: all var(--transition-normal);
}

.back-home-link:hover {
  border-color: var(--color-lime);
  background: rgba(156, 220, 8, 0.08);
  color: var(--color-lime);
}

.theme-toggle {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: none;
  border: 1px solid var(--theme-border);
  color: var(--theme-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
}

.theme-toggle:hover {
  border-color: var(--color-lime);
  background: rgba(156, 220, 8, 0.08);
}

/* Header Section */
.projects-header {
  background: var(--theme-section-bg, linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%));
  padding: 8rem 0 4rem;
  border-bottom: 1px solid var(--theme-border);
  width: 100%;
}

.dark-mode .projects-header {
  background: var(--theme-pitch-bg);
  border-bottom: 1px solid rgba(71, 85, 105, 0.2);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

.page-title {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

.projects-heading {
  font-size: 4rem;
  font-weight: 300;
  line-height: 0.9;
  margin-bottom: 2rem;
  color: var(--theme-text);
  font-family: var(--font-family-heading, 'Montserrat', sans-serif);
}

.projects-heading .line {
  display: block;
}

.projects-heading .period {
  color: var(--color-lime);
  font-weight: 700;
}

.projects-description {
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--theme-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* Filter Tags */
.filter-tags {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}

.filter-tag {
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  border: 1px solid var(--theme-border);
  background: transparent;
  color: var(--theme-text-secondary);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-normal);
  font-family: inherit;
}

.filter-tag:hover {
  border-color: var(--color-lime);
  color: var(--color-lime);
}

.filter-tag.active {
  background: var(--color-lime);
  color: var(--color-black);
  border-color: var(--color-lime);
}

/* Projects Showcase Section */
.projects-showcase {
  background: var(--theme-carriageway-bg);
  color: white;
  padding: 6rem 0;
  min-height: auto;
  width: 100%;
}

.section-inner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

@media (max-width: 1200px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

.project-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.project-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(156, 220, 8, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.project-image-container {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}

.project-screenshot {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.06);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: 12px;
}

.project-card:hover .project-screenshot {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.3) 30%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity var(--transition-normal);
  border-radius: 12px;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-top {
  display: flex;
  justify-content: flex-end;
}

.overlay-bottom {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.overlay-content {
  color: white;
  width: 100%;
}

.overlay-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.overlay-content p {
  font-size: 0.85rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.project-tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: rgba(156, 220, 8, 0.15);
  color: var(--color-lime);
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 500;
  border: 1px solid rgba(156, 220, 8, 0.2);
}

/* Project Info Section */
.project-info {
  padding: 1rem 0 0 0;
  color: white;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: white;
  font-family: var(--font-family-heading, 'Montserrat', sans-serif);
}

.project-desc {
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.project-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.project-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: all var(--transition-normal);
  cursor: pointer;
  border: none;
  font-family: inherit;
}

.project-btn.primary {
  background: var(--color-lime);
  color: var(--color-black);
}

.project-btn.primary:hover {
  background: #b8f534;
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(156, 220, 8, 0.3);
}

.project-btn.secondary {
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.project-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.85);
  color: var(--color-black);
  transform: translateY(-2px);
}

.project-btn svg {
  width: 16px;
  height: 16px;
}

/* Back to Portfolio Section */
.back-to-portfolio {
  background: var(--theme-section-bg, white);
  padding: 6rem 0;
  text-align: center;
  border-top: 1px solid var(--theme-border);
}

.dark-mode .back-to-portfolio {
  background: var(--theme-experience-bg);
  border-top: 1px solid rgba(71, 85, 105, 0.2);
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: var(--theme-text);
  font-family: var(--font-family-heading, 'Montserrat', sans-serif);
}

.back-portfolio-btn {
  background: var(--color-lime);
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-black);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
}

.back-portfolio-btn:hover {
  background: #b8f534;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(156, 220, 8, 0.3);
}

.arrow-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.back-portfolio-btn:hover .arrow-icon {
  transform: translateX(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .projects-heading {
    font-size: 3rem;
  }
  
  .projects-description {
    font-size: 1.1rem;
  }
  
  .header-content {
    padding: 0 1rem;
  }
  
  .projects-grid {
    padding: 0 1rem;
  }
  
  .project-card {
    padding: 1.2rem;
  }
  
  .project-image-container {
    height: 200px;
  }
  
  .project-actions {
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .project-btn {
    width: 100%;
    justify-content: center;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }

  .minimal-header {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .projects-header {
    padding: 6rem 0 3rem;
  }
  
  .projects-showcase {
    padding: 4rem 0;
  }
  
  .filter-tags {
    gap: 0.5rem;
  }

  .filter-tag {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
  }
}
</style>
