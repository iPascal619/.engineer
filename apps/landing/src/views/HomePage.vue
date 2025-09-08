<template>
  <div class="homepage">
    <!-- Section Une (Pitch) -->
    <section id="une" class="section pitch-section" data-section="une">
      <div class="section-inner">
        <div class="pitch-content">
          <div class="pitch-text">
            <h1 class="pitch-heading">
              <span class="line">Software</span>
              <span class="line">Engineer</span>
              <span class="period">.</span>
            </h1>
            
            <div class="cavalier">
              <p class="pitch-description">
                I craft robust solutions across web, mobile, and blockchain platforms with expertise in multiple programming languages and frameworks.
              </p>
            </div>
            
            <ul class="highlights" aria-label="Highlights">
              <li>
                Full-stack developer with expertise in web (PHP, JavaScript), mobile (Flutter), and blockchain (Solidity) technologies.
              </li>
              <li>
                Experienced in building everything from responsive frontends to smart contracts and native applications.
              </li>
            </ul>
          </div>
          
          <div class="pitch-visual">
            <img :src="astroImage" alt="Astronaut" class="astro-image" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section Deux (Cornerstone) -->
    <section id="deux" class="section cornerstone-section" data-section="deux">
      <div class="section-inner">
        <div class="cornerstone-content">
          <div class="cornerstone-text">
            <h2 class="section-title">
              <span class="section-number">02</span>
              <span class="title-text">Cornerstone</span>
            </h2>
            
            <div class="cornerstone-description">
              <p>
                I am a versatile software engineer with expertise spanning web development, mobile applications, and blockchain technology.
                From building responsive frontends to developing smart contracts, I deliver comprehensive solutions across multiple platforms.
              </p>
            </div>
            
            <div class="skills-grid">
              <div class="skill-item">
                <h3>Frontend</h3>
                <p>JavaScript, Vue.js, React, Next.js, Angular, TypeScript</p>
              </div>
              <div class="skill-item">
                <h3>Backend</h3>
                <p>Node.js, Python, PHP, Go, API Development</p>
              </div>
              <div class="skill-item">
                <h3>Mobile & Native</h3>
                <p>Flutter, C Programming</p>
              </div>
              <div class="skill-item">
                <h3>Blockchain</h3>
                <p>Solidity, Smart Contracts</p>
              </div>
              <div class="skill-item">
                <h3>Tools & DevOps</h3>
                <p>Git, Docker, Vite, VS Code</p>
              </div>
              <div class="skill-item">
                <h3>Databases</h3>
                <p>MySQL, MongoDB, PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Trois (Experience) -->
    <section id="trois" class="section experience-section" data-section="trois">
      <div class="section-inner">
        <div class="experience-content">
          <h2 class="section-title">
            <span class="section-number">03</span>
            <span class="title-text">Experience</span>
          </h2>
          
          <div class="experience-timeline">
            <div class="experience-item">
              <div class="experience-period">Aug 2024 - Present</div>
              <div class="experience-details">
                <h3>Chief Technology Officer</h3>
                <p class="company">Think Green Afrika</p>
                <p class="description">
                  Started as a Software Engineer doing full-stack development with a frontend focus after a two-month internship. Promoted to Lead Software Engineer and then to CTO, now focusing on software consulting and strategic technology leadership. Currently building a platform serving over 1,500+ students and early professionals that connects TGA-trained talent to employers.
                </p>
              </div>
            </div>
            
            <div class="experience-item">
              <div class="experience-period">2023 - 2024</div>
              <div class="experience-details">
                <h3>Software Engineer</h3>
                <p class="company">Puzzle Labs</p>
                <p class="description">
                  Developed scalable web applications for clients across fintech, health, and logistics using Node.js, Express, React, and Redux. Built RESTful APIs and microservices while creating responsive user interfaces with TailwindCSS. Optimized MongoDB queries improving performance by 20% and applied Agile methodologies with Git/GitHub workflows.
                </p>
              </div>
            </div>
            
            <!-- View More Experience Button -->
            <div class="view-more-experience">
              <a href="/Resume-Pascal-Onuoha.pdf" target="_blank" class="view-more-btn">
                <span>View Full Experience</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7 7H17V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Quatre (Carriageway - Projects) -->
    <section id="quatre" class="section carriageway-section" data-section="quatre">
      <div class="section-inner">
        <div class="carriageway-content">
          <h2 class="section-title">
            <span class="section-number">04</span>
            <span class="title-text">Carriageway</span>
          </h2>
          
          <div class="projects-grid">
            <div class="project-card" v-for="(project, index) in projects" :key="index">
              <div class="project-image-container">
                <img :src="getProjectImage(project)" :alt="project.title" class="project-screenshot" />
              </div>
              
              <div class="project-info">
                <h3 class="project-title">{{ project.title }}</h3>
                <div class="project-actions">
                  <a :href="project.liveDemo" target="_blank" class="project-btn primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15 3H21V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    View Project
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
          
          <div class="more-projects-section">
            <router-link to="/projects" class="more-projects-btn">
              <span>More Projects</span>
              <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 7H17V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Cinq (Contact) -->
    <section id="cinq" class="section contact-section" data-section="cinq">
      <div class="section-inner">
        <div class="contact-content">
          <div class="contact-wrapper">
            <h2 class="section-title">
              <span class="section-number">05</span>
              <span class="title-text">Contact</span>
            </h2>
            
            <div class="contact-intro">
              <h3 class="contact-heading">Let's work together</h3>
              <p class="contact-description">
                I'm always interested in new opportunities and collaborations.
                Whether you have a project in mind or just want to chat about technology,
                I'd love to hear from you.
              </p>
            </div>
            
            <div class="contact-grid">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pascalonuoha324@gmail.com&su=Hello%20Pascal!&body=Hi%20Pascal,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect..." target="_blank" class="contact-card email-card">
                <div class="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="contact-details">
                  <h4>Email</h4>
                  <p>pascalonuoha324@gmail.com</p>
                </div>
              </a>
              
              <a href="https://github.com/iPascal619" target="_blank" class="contact-card github-card">
                <div class="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19C4 20.5 4 16.5 2 16M22 16V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H16C15.4696 21 14.9609 20.7893 14.5858 20.4142C14.2107 20.0391 14 19.5304 14 19V17.5C14 16.5 14.1 16.1 14.5 15.5C11.7 15.2 8.5 14.1 8.5 9.5C8.5 8.3 9 7.3 9.8 6.5C9.6 5.8 9.6 4.8 9.8 4C9.8 4 10.8 3.7 13 5.3C14.1 5 15.4 5 16.5 5C17.6 5 18.9 5 20 5.3C22.2 3.7 23.2 4 23.2 4C23.4 4.8 23.4 5.8 23.2 6.5C24 7.3 24.5 8.3 24.5 9.5C24.5 14.1 21.3 15.2 18.5 15.5C18.9 15.9 19 16.5 19 17.5V19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="contact-details">
                  <h4>GitHub</h4>
                  <p>@iPascal619</p>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/pascal-onuoha/" target="_blank" class="contact-card linkedin-card">
                <div class="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="2" y="9" width="4" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="contact-details">
                  <h4>LinkedIn</h4>
                  <p>Pascal Onuoha</p>
                </div>
              </a>
              
              <a href="https://twitter.com/iPascal619" target="_blank" class="contact-card twitter-card">
                <div class="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.957 14.8821 3.28445C14.0247 3.6119 13.2884 4.19439 12.773 4.95372C12.2575 5.71305 11.9877 6.61232 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39624C5.36074 6.60667 4.01032 5.43666 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.943 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="contact-details">
                  <h4>Twitter</h4>
                  <p>@iPascal619</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Elegant Footer Section -->
    <footer id="footer" class="elegant-footer" :class="{ 'visible': footerVisible }">
      <!-- Back Up Button -->
      <button 
        class="back-up-button" 
        @click="scrollToTop"
        :class="{ 'visible': showBackUpButton }"
      >
        <span>↑ Back to top</span>
      </button>

      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-brand">
            <h2 class="footer-logo">Pascal Onuoha</h2>
            <p class="footer-tagline">Software Engineer</p>
          </div>
          
          <div class="footer-links">
            <a href="mailto:pascalonuoha324@gmail.com" class="footer-link">Email</a>
            <a href="https://www.linkedin.com/in/pascal-onuoha/" target="_blank" class="footer-link">LinkedIn</a>
            <a href="https://github.com/iPascal619" target="_blank" class="footer-link">GitHub</a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} Pascal</p>
          <p>Built with Vue 3 & TypeScript</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useAppStore } from '../stores/app'
import { storeToRefs } from 'pinia'
import astroImage from '../assets/astro.jpg'
import simbaImage from '../assets/simbaaa.png'

// Import project images from public directory
const aetherflowImage = '/img/Aetherflow.jpg'

const store = useAppStore()
const { contactClickedFromNav } = storeToRefs(store)

// Project data
const projects = ref([
  {
    id: 1,
    title: "Simba Supermarket Redesign",
    description: "Modern e-commerce platform with intuitive user experience",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/iPascal619/Simba-supermarket-online-store-redesign",
    liveDemo: "https://simba-supermarket-online-store-rede.vercel.app/",
    features: ["Product Browsing", "Search Functionality", "Shopping Cart", "Checkout Process", "User Authentication"]
  },
  {
    id: 2,
    title: "AetherFlow",
    description: "AI-powered healthcare platform for sickle cell crisis prediction",
    technologies: ["Electron", "JavaScript", "Python", "FastAPI", "Machine Learning"],
    github: "https://github.com/iPascal619/Aetherflow_Final-BUILD",
    liveDemo: null,
    features: ["Crisis Prediction", "Patient Management", "Offline Functionality", "AI Analytics", "Healthcare Dashboard"]
  },
  {
    id: 3,
    title: "Simba Supermarket Redesign",
    description: "Modern e-commerce platform with intuitive user experience",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/iPascal619/Simba-supermarket-online-store-redesign",
    liveDemo: "https://simba-supermarket-online-store-rede.vercel.app/",
    features: ["Product Browsing", "Search Functionality", "Shopping Cart", "Checkout Process", "User Authentication"]
  }
])

// Function to get project image
const getProjectImage = (project: any) => {
  switch (project.title) {
    case 'AetherFlow':
      return aetherflowImage
    case 'Simba Supermarket Redesign':
      return simbaImage
    default:
      return simbaImage
  }
}

// Function to handle project details viewing
const openProjectDetails = (project: any) => {
  // For now, just log the project or you can implement a modal
  console.log('Opening project details:', project)
  // You can implement a modal or redirect to project detail page here
  window.open(project.github, '_blank')
}

// Reactive state for interactive elements
const footerVisible = ref(false)
const showBackUpButton = ref(false)

let observer: IntersectionObserver | null = null
let footerObserver: IntersectionObserver | null = null

// Interactive functions
const scrollToFooter = () => {
  const footer = document.getElementById('footer')
  if (footer) {
    footer.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      footerVisible.value = true
      setTimeout(() => {
        showBackUpButton.value = true
      }, 500)
    }, 800)
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  showBackUpButton.value = false
  footerVisible.value = false
  store.setContactClickedFromNav(false) // Reset navigation tracking via store
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    // Track navigation via store
    store.handleNavigation(sectionId as keyof typeof store.SECTION_MAP)
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Set up intersection observer for section tracking
  const sections = document.querySelectorAll('[data-section]')
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute('data-section')
        if (sectionId) {
          store.setCurrentSection(sectionId)
        }
      }
    })
  }, { 
    threshold: 0.5,
    rootMargin: '-10% 0px -10% 0px'
  })

  sections.forEach((section) => observer?.observe(section))

  // Set up footer observer
  const footer = document.getElementById('footer')
  if (footer) {
    footerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          store.setContactClickedFromNav(false) // Reset navigation tracking via store
          footerVisible.value = true
          setTimeout(() => {
            showBackUpButton.value = true
          }, 500)
        } else {
          // If footer is not visible, reset footer state
          footerVisible.value = false
          showBackUpButton.value = false
        }
      })
    }, { 
      threshold: 0.1 
    })

    footerObserver.observe(footer)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
  if (footerObserver) {
    footerObserver.disconnect()
  }
})
</script>

<style scoped>
.homepage {
  position: relative;
}

/* Pitch Section (Une) */
.pitch-section {
  background: var(--theme-section-bg, linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%));
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;
}

/* Dark mode specific pitch background - slightly lighter */
.dark-mode .pitch-section {
  background: var(--theme-pitch-bg);
  border-bottom: 1px solid rgba(71, 85, 105, 0.2);
}

.pitch-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.pitch-heading {
  font-size: 5rem;
  font-weight: 300;
  line-height: 0.9;
  margin-bottom: 2rem;
  color: var(--theme-text);
}

.pitch-heading .line {
  display: block;
}

.pitch-heading .period {
  color: var(--color-lime);
  font-weight: 700;
}

.pitch-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.astro-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform var(--transition-normal);
}

.astro-image:hover {
  transform: translateY(-5px) scale(1.02);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.cavalier {
  margin-bottom: 3rem;
}

.pitch-description {
  font-size: 1.5rem;
  line-height: 1.4;
  color: var(--color-grey);
  max-width: 600px;
}

.highlights {
  list-style: none;
  padding: 0;
  margin: 0;
}

.highlights li {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-grey);
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1.5rem;
}

.highlights li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--color-lime);
  font-weight: bold;
}

/* Cornerstone Section (Deux) */
.cornerstone-section {
  background: var(--theme-cornerstone-bg);
  padding-top: 6rem;
}

@media (max-width: 768px) {
  .cornerstone-section {
    min-height: unset;
    height: auto;
    overflow: visible;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

/* Dark mode specific cornerstone background - slightly lighter */
.dark-mode .cornerstone-section {
  background: var(--theme-cornerstone-bg);
  border-bottom: 1px solid rgba(71, 85, 105, 0.2);
}

.cornerstone-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.section-number {
  font-size: 1rem;
  color: var(--color-lime);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.title-text {
  font-size: 3rem;
  font-weight: 300;
  color: var(--theme-text);
}

.cornerstone-description {
  margin-bottom: 4rem;
}

.cornerstone-description p {
  font-size: 1.3rem;
  line-height: 1.6;
  color: var(--color-grey);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.skill-item {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.skill-item h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--theme-text);
}

.skill-item p {
  color: var(--color-grey);
}

.dark-mode .skill-item p {
  color: var(--theme-text-secondary);
}

.dark-mode .skill-item {
  background: var(--theme-card-bg);
  border: 1px solid var(--theme-border);
}

/* Experience Section (Trois) */
.experience-section {
  background: var(--theme-section-bg, white);
  padding-top: 6rem;
}

/* Dark mode specific experience background - same as contact */
.dark-mode .experience-section {
  background: var(--theme-experience-bg);
  border-bottom: 1px solid rgba(71, 85, 105, 0.2);
}

.experience-content {
  max-width: 800px;
  margin: 0 auto;
}

.experience-timeline {
  margin-top: 4rem;
}

.experience-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #eee;
}

.experience-item:last-of-type {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.experience-period {
  font-size: 1rem;
  color: var(--color-lime);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.experience-details h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--theme-text);
}

.experience-details .company {
  font-size: 1.1rem;
  color: var(--color-lime);
  margin-bottom: 1rem;
  font-weight: 500;
}

.experience-details .description {
  color: var(--color-grey);
  line-height: 1.6;
}

/* View More Experience */
.view-more-experience {
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  text-align: center;
}

.view-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: transparent;
  color: var(--color-lime);
  border: 2px solid var(--color-lime);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.view-more-btn:hover {
  background: var(--color-lime);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(188, 223, 73, 0.3);
}

.view-more-btn svg {
  transition: transform 0.3s ease;
}

.view-more-btn:hover svg {
  transform: translate(2px, -2px);
}

/* Carriageway Section (Quatre) - Always Dark Theme */
.carriageway-section {
  background: var(--theme-carriageway-bg);
  color: white;
  border-bottom: 1px solid rgba(71, 85, 105, 0.2);
  padding-top: 6rem;
  padding-bottom: 6rem;
}

@media (max-width: 768px) {
  .carriageway-section {
    overflow: visible;
    min-height: unset;
    height: auto;
    padding-top: 2rem;
  }
}

.carriageway-section .section-title .title-text,
.carriageway-section .section-title .section-number {
  color: white;
}

.carriageway-section .section-number {
  color: var(--color-lime);
}

.carriageway-content {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
}

@media (max-width: 1200px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .project-card {
    padding: 1.2rem;
  }
  
  .project-image-container {
    height: 220px;
  }
  
  .project-actions {
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .project-btn {
    width: 100%;
    justify-content: center;
  }
}

.project-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: transform var(--transition-normal);
  padding: 1rem 1.2rem;
  min-height: 260px;
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
  height: 200px;
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
  transform: scale(1.02);
}

/* Project Info Section */
.project-info {
  padding: 1rem 0 0 0;
  color: white;
  text-align: center;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.project-actions {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
}

.project-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
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
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.project-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.9);
  color: var(--color-black);
  transform: translateY(-2px);
}

.project-btn svg {
  width: 16px;
  height: 16px;
}

.more-projects-section {
  margin-top: 3rem;
  text-align: center;
}

.more-projects-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1rem 2rem;
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  text-decoration: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  
  .arrow-icon {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }
  
  &:hover .arrow-icon {
    transform: translate(2px, -2px);
  }
}

/* Contact Section (Cinq) */
.contact-section {
  background: #a8e02f; /* Brighter lime green instead of var(--color-lime) */
  color: var(--color-black);
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 4rem;
}

@media (max-width: 768px) {
  .contact-section {
    padding-top: 2rem;
  }
  .not-done-btn {
    display: none !important;
  }
}

@media (min-width: 769px) {
  .not-done-btn {
    display: inline-flex !important;
  }
}

@media (max-width: 768px) {
  .contact-section {
    overflow: visible;
    min-height: unset;
    height: auto;
    display: block;
    align-items: unset;
    padding-top: 2rem;
  }
}

.dark-mode .contact-section {
  background: var(--theme-contact-bg);
  color: var(--theme-text);
}

.contact-section .section-title .title-text {
  color: var(--color-black);
}

.contact-section .section-title .section-number {
  color: var(--color-black);
}

/* Dark mode contact title colors */
.dark-mode .contact-section .section-title .title-text,
.dark-mode .contact-section .section-title .section-number {
  color: var(--theme-text);
}

.contact-content {
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

.contact-wrapper {
  display: grid;
  gap: 4rem;
  margin-top: 3rem;
}

.contact-intro {
  text-align: center;
  max-width: 600px;
  margin: 0.75rem auto 0 auto;
}

.contact-heading {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: var(--color-black);
}

/* Dark mode contact heading */
.dark-mode .contact-heading {
  color: var(--theme-text);
}

.contact-description {
  font-size: 1.2rem;
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 0;
}

/* Dark mode contact description */
.dark-mode .contact-description {
  color: var(--theme-text-secondary);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 2rem 0;
}

.contact-card {
  background: rgba(250, 248, 255, 0.95); /* Slightly purple tint instead of white */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(232, 226, 240, 0.8); /* Slightly purple border */
  border-radius: 12px;
  padding: 1.5rem 1rem;
  text-decoration: none;
  color: var(--theme-contact-card-text, #334155);
  transition: all var(--transition-normal);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  min-height: 140px;
}

/* Dark mode contact card enhancements */
.dark-mode .contact-card {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(71, 85, 105, 0.4);
}

.dark-mode .contact-card:hover {
  background: var(--theme-contact-card-bg);
  border-color: var(--color-lime);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  transform: translateY(-8px);
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: transparent;
  transition: background var(--transition-normal);
}

.contact-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--color-lime);
}

.email-card:hover::before {
  background: linear-gradient(90deg, #ea4335, #fbbc05);
}

.github-card:hover::before {
  background: linear-gradient(90deg, #333, #666);
}

.linkedin-card:hover::before {
  background: linear-gradient(90deg, #0077b5, #00a0dc);
}

.twitter-card:hover::before {
  background: linear-gradient(90deg, #1da1f2, #0d95e8);
}

.contact-icon {
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all var(--transition-normal);
}

.contact-card:hover .contact-icon {
  background: rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
}

.contact-icon svg {
  color: var(--theme-text);
  opacity: 0.8;
  width: 20px;
  height: 20px;
}

.contact-card:hover .contact-icon svg {
  opacity: 1;
}

.contact-details {
  flex: 1;
}

.contact-details h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--theme-text);
}

.contact-details p {
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
  line-height: 1.3;
}

/* Responsive Design */

/* Tablet responsiveness - 4 columns but smaller */
@media (max-width: 1024px) {
  .contact-grid {
    gap: 0.8rem;
  }
  
  .contact-card {
    padding: 1.2rem 0.6rem;
    min-height: 130px;
  }
  
  .contact-details h4 {
    font-size: 0.95rem;
  }
  
  .contact-details p {
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  .pitch-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
  
  .pitch-text {
    order: 2;
  }
  
  .pitch-visual {
    order: 1;
  }
  
  .astro-image {
    max-width: 300px;
  }
  
  .pitch-heading {
    font-size: 4rem;
  }
  
  .experience-item {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .section-title {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .title-text {
    font-size: 2rem !important;
  }
  
  .contact-heading {
    font-size: 2rem;
  }
  
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .contact-card {
    padding: 1.2rem 0.8rem;
    min-height: 120px;
  }
  
  .contact-icon {
    width: 36px;
    height: 36px;
  }
  
  .contact-icon svg {
    width: 18px;
    height: 18px;
  }
  
  .cta-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  
  .contact-card {
    padding: 1rem;
    min-height: 100px;
  }
  
  .contact-icon {
    width: 32px;
    height: 32px;
  }
  
  .contact-icon svg {
    width: 16px;
    height: 16px;
  }
  
  .contact-details h4 {
    font-size: 0.9rem;
  }
  
  .contact-details p {
    font-size: 0.8rem;
  }
  
  .contact-description {
    font-size: 1.1rem;
  }
  
  .contact-wrapper {
    gap: 2rem;
  }
}

/* Elegant Footer Styles */
.elegant-footer {
  background: var(--theme-bg);
  border-top: 1px solid rgba(71, 85, 105, 0.1);
  padding: 3rem 0 2rem;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.elegant-footer.visible {
  opacity: 1;
  transform: translateY(0);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Back Up Button */
.back-up-button {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: var(--theme-bg);
  color: var(--theme-text);
  border: 1px solid rgba(71, 85, 105, 0.2);
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  opacity: 0;
  transition: all 0.4s ease;
  z-index: 10;
}

.back-up-button.visible {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}

.back-up-button:hover {
  background: var(--color-lime);
  color: var(--color-black);
  border-color: var(--color-lime);
}

/* Footer Content */
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(71, 85, 105, 0.1);
}

.footer-brand {
  text-align: left;
}

.footer-logo {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-lime);
  margin-bottom: 0.5rem;
}

.footer-tagline {
  font-size: 1rem;
  color: var(--theme-text-secondary);
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.footer-link {
  color: var(--theme-text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--color-lime);
}

/* Footer Bottom */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--theme-text-tertiary);
}

.footer-bottom p {
  margin: 0;
}

/* Dark mode adjustments */
.dark-mode .elegant-footer {
  border-top-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .footer-content {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .back-up-button {
  border-color: rgba(255, 255, 255, 0.2);
}

.dark-mode .back-up-button:hover {
  background: var(--color-lime);
  color: var(--color-black);
}

/* Responsive Footer */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
  
  .footer-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
  
  .back-up-button {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    margin-bottom: 1rem;
  }
  
  .back-up-button.visible {
    transform: none;
  }
}

@media (max-width: 768px) {
  .discovery-button {
    bottom: 4rem;
    right: 16px;
    padding: 10px 16px;
    border-radius: 12px;
    max-width: 160px;
  }
  
  .discovery-text {
    font-size: 0.8rem;
  }
  
  .discovery-action {
    font-size: 0.7rem;
  }
  
  .back-up-button {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    margin-bottom: 2rem;
  }
  
  .back-up-button.visible {
    transform: none;
  }
}

@media (max-width: 480px) {
  .discovery-content {
    font-size: 0.8rem;
  }
  
  .footer-logo {
    font-size: 2rem;
  }
  
  .footer-tagline {
    font-size: 1rem;
  }
  
  .easter-egg-content h3 {
    font-size: 1.1rem;
  }
}
</style>
