<template>
  <div class="projects-page">
    <!-- Minimal Header with Theme Toggle -->
    <div class="minimal-header">
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
            <h1 class="projects-heading">
              <span class="line">My</span>
              <span class="line">Projects</span>
              <span class="period">.</span>
            </h1>
            <p class="projects-description">
              A collection of projects I've built using various technologies including web development, 
              mobile applications, and blockchain solutions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid Section -->
    <section class="projects-showcase">
      <div class="section-inner">
        <div class="projects-grid">
          <div class="project-card" v-for="(project, index) in allProjects" :key="index">
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
                    <path d="M9 19C4 20.5 4 16.5 2 16M22 16V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H16C15.4696 21 14.9609 20.7893 14.5858 20.4142C14.2107 20.0391 14 19.5304 14 19V17.5C14 16.5 14.1 16.1 14.5 15.5C11.7 15.2 8.5 14.1 8.5 9.5C8.5 8.3 9 7.3 9.8 6.5C9.6 5.8 9.6 4.8 9.8 4C9.8 4 10.8 3.7 13 5.3C14.1 5 15.4 5 16.5 5C17.6 5 18.9 5 20 5.3C22.2 3.7 23.2 4 23.2 4C23.4 4.8 23.4 5.8 23.2 6.5C24 7.3 24.5 8.3 24.5 9.5C24.5 14.1 21.3 15.2 18.5 15.5C18.9 15.9 19 16.5 19 17.5V19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  View Code
                </a>
                <a :href="project.github" target="_blank" class="project-btn secondary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19C4 20.5 4 16.5 2 16M22 16V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H16C15.4696 21 14.9609 20.7893 14.5858 20.4142C14.2107 20.0391 14 19.5304 14 19V17.5C14 16.5 14.1 16.1 14.5 15.5C11.7 15.2 8.5 14.1 8.5 9.5C8.5 8.3 9 7.3 9.8 6.5C9.6 5.8 9.6 4.8 9.8 4C9.8 4 10.8 3.7 13 5.3C14.1 5 15.4 5 16.5 5C17.6 5 18.9 5 20 5.3C22.2 3.7 23.2 4 23.2 4C23.4 4.8 23.4 5.8 23.2 6.5C24 7.3 24.5 8.3 24.5 9.5C24.5 14.1 21.3 15.2 18.5 15.5C18.9 15.9 19 16.5 19 17.5V19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
        <div class="cta-content">
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

// Import project images - using the images from landing/public/img
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

// All projects data (7 projects)
const allProjects = ref([
  {
    id: 1,
    title: "Simba Supermarket Redesign",
    description: "Modern e-commerce platform with intuitive user experience and seamless shopping cart functionality",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/iPascal619/Simba-supermarket-online-store-redesign",
    liveDemo: "https://simba-supermarket-online-store-rede.vercel.app/",
    image: "simba"
  },
  {
    id: 2,
    title: "STEM Buddy",
    description: "Educational platform for young learners to explore STEM subjects through interactive courses and activities",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/iPascal619/STEM-BUDDY",
    liveDemo: "https://stem-buddy.netlify.app/",
    image: "stembuddy"
  },
  {
    id: 3,
    title: "TokenSwift",
    description: "Decentralized application for ERC-20 token transfers on Ethereum with wallet integration and transaction history",
    technologies: ["JavaScript", "Solidity", "Web3.js", "HTML", "CSS"],
    github: "https://github.com/iPascal619/Dapp-project",
    liveDemo: "https://tokenswift.netlify.app/",
    image: "tokenswift"
  },
  {
    id: 4,
    title: "AetherFlow",
    description: "AI-powered healthcare platform for sickle cell crisis prediction with patient management and offline functionality",
    technologies: ["Electron", "JavaScript", "Python", "FastAPI", "Machine Learning"],
    github: "https://github.com/iPascal619/Aetherflow_Final-BUILD",
    liveDemo: null,
    image: "aetherflow"
  },
  {
    id: 5,
    title: "CryptoDash",
    description: "Professional cryptocurrency trading platform with real-time market data and secure payment processing",
    technologies: ["Node.js", "Express", "MongoDB", "JavaScript", "Stripe", "TradingView", "Binance API"],
    github: "https://github.com/iPascal619/Crypto-dash",
    liveDemo: "https://crypto-dash-psi.vercel.app/",
    image: "cryptodash"
  },
  {
    id: 6,
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization and reporting features",
    technologies: ["Angular", "PHP", "MySQL", "Chart.js"],
    github: "https://github.com/iPascal619/social-media-analytics",
    liveDemo: null,
    image: "astro"
  },
  {
    id: 7,
    title: "Banking API",
    description: "Comprehensive banking system with double-entry ledger accounting, JWT authentication, and secure transaction management",
    technologies: ["NestJS", "TypeScript", "TypeORM", "SQLite", "JWT", "Swagger"],
    github: "https://github.com/iPascal619/banking-API",
    liveDemo: null,
    image: "banking-api"
  }
])

// Function to get project image
const getProjectImage = (project: any) => {
  switch (project.image) {
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
      return '/img/banking-api.jpg'
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

/* Minimal Header with Theme Toggle */
.minimal-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 2rem;
}

.theme-toggle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: var(--theme-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
  position: relative;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.dark-mode .theme-toggle {
  background: rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .theme-toggle:hover {
  background: rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.2);
}

/* Header Section */
.projects-header {
  background: var(--theme-section-bg, linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%));
  padding: 8rem 0 4rem;
  border-bottom: 1px solid rgba(71, 85, 105, 0.1);
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
}

.projects-heading .line {
  display: block;
}

.projects-heading .period {
  color: var(--color-lime);
  font-weight: 700;
}

.projects-description {
  font-size: 1.3rem;
  line-height: 1.6;
  color: var(--color-grey);
  max-width: 600px;
  margin: 0 auto;
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
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: transform var(--transition-normal);
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.project-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
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
  background: rgba(255, 255, 255, 0.1);
  transition: transform var(--transition-normal);
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
  background: var(--color-lime);
  color: var(--color-black);
  padding: 0.2rem 0.6rem;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 500;
}

.view-more-btn {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);
  align-self: flex-start;
  text-decoration: none;
  display: inline-block;
}

.view-more-btn:hover {
  background: var(--color-lime);
  color: var(--color-black);
  border-color: var(--color-lime);
  transform: translateY(-1px);
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
}

.project-desc {
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
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
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
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
  box-shadow: 0 4px 12px rgba(168, 224, 47, 0.3);
}

.project-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
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
  border-top: 1px solid rgba(71, 85, 105, 0.1);
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
}

.back-portfolio-btn {
  background: var(--color-lime);
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-family: var(--font-primary);
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
  box-shadow: 0 8px 32px rgba(168, 224, 47, 0.3);
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
}

@media (max-width: 480px) {
  .projects-header {
    padding: 4rem 0 3rem;
  }
  
  .projects-showcase {
    padding: 4rem 0;
  }
  
  .back-button {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
}
</style>
