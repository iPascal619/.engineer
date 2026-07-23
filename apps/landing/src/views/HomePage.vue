<template>
  <div class="homepage">
    <!-- Section Une (Pitch) -->
    <section id="une" class="section pitch-section grid-pattern" data-section="une">
      <div class="section-inner">
        <div class="pitch-content">
          <div class="pitch-text">
            <!-- Name greeting + heading + role — tight block -->
            <p class="pitch-greeting" data-reveal>Hi, I'm</p>
            <h1 class="pitch-heading" data-text-reveal>
              <span class="line name-line">Pascal Onuoha</span>
              <span class="line role-line">Software Engineer</span>
              <span class="period">.</span>
            </h1>
            
            <div class="cavalier" data-reveal data-reveal-delay="600">
              <p class="pitch-description glass">
                Like an astronaut exploring new worlds, I thrive on navigating the complexities of modern technology to build what's next—from the server to the screen.
              </p>
            </div>
            
            <ul class="highlights" aria-label="Highlights" data-reveal data-reveal-delay="800">
              <li>
                Full-stack developer with expertise in web (PHP, JavaScript), mobile (Flutter), and blockchain (Solidity) technologies.
              </li>
              <li>
                I build everything from responsive frontends to smart contracts and native applications.
              </li>
            </ul>
          </div>
          
          <div class="pitch-visual" data-reveal="right" data-reveal-delay="300">
            <div class="astro-glow-wrapper">
              <img :src="astroImage" alt="Astronaut illustration" class="astro-image" />
            </div>
          </div>
        </div>


      </div>
    </section>

    <!-- Section Deux (Cornerstone) -->
    <section id="deux" class="section cornerstone-section" data-section="deux">
      <div class="section-inner">
        <div class="cornerstone-content">
          <h2 class="section-title" data-reveal>
            <span class="section-number">02</span>
            <span class="title-text">Cornerstone</span>
          </h2>
          
          <div class="cornerstone-description" data-reveal data-reveal-delay="200">
            <p>
              I am a versatile software engineer with expertise spanning web development, mobile applications, and blockchain technology.
              From building responsive frontends to developing smart contracts, I deliver comprehensive solutions across multiple platforms.
            </p>
          </div>
          
          <div class="skills-grid" data-reveal-stagger>
            <div class="skill-card glass-card reveal-child" v-for="(skill, index) in skills" :key="index">
              <div class="skill-icon" v-html="skill.icon"></div>
              <h3>{{ skill.title }}</h3>
              <p>{{ skill.items }}</p>
              <div class="skill-level">
                <div class="skill-bar" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Trois (Experience - Interactive Showcase) -->
    <section id="trois" class="section showcase-section" data-section="trois">
      <div class="section-inner showcase-inner">
        <h2 class="section-title text-center" data-reveal>
          <span class="section-number">03</span>
          <span class="title-text">Experience</span>
        </h2>
        
        <div class="showcase-container" data-reveal="scale">
          
          <!-- Left Sidebar (Companies) -->
          <div class="showcase-sidebar glass-card-premium">
            <button 
              v-for="(exp, index) in experiences" 
              :key="index"
              class="showcase-tab"
              :class="{ 'active': activeExperience === index }"
              @click="activeExperience = index"
            >
              <span class="tab-indicator"></span>
              <div class="tab-icon" v-html="exp.icon"></div>
              <span class="tab-name">{{ exp.shortName }}</span>
            </button>
            
            <a href="/Resume-Pascal-Onuoha.pdf" target="_blank" class="view-resume-link">
              <span>Full Resume</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 7H17V17" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>

          <!-- Right Display Panel -->
          <div class="showcase-display glass-card-premium">
            <Transition name="fade-slide" mode="out-in">
              <div :key="activeExperience" class="showcase-content">
                <div class="showcase-header">
                  <div class="exp-period">{{ experiences[activeExperience].period }}</div>
                  <h3>{{ experiences[activeExperience].role }}</h3>
                  <p class="company">{{ experiences[activeExperience].company }}</p>
                </div>
                
                <div class="showcase-body">
                  <p class="showcase-description">
                    {{ experiences[activeExperience].description }}
                  </p>
                </div>
              </div>
            </Transition>
          </div>

        </div>
      </div>
    </section>

    <!-- Section Quatre (Carriageway - Projects) -->
    <section id="quatre" class="section carriageway-section" data-section="quatre">
      <div class="section-inner">
        <div class="carriageway-content">
          <h2 class="section-title" data-reveal>
            <span class="section-number">04</span>
            <span class="title-text">Carriageway</span>
          </h2>
          
          <div class="projects-grid" data-reveal-stagger>
            <div
              class="project-card reveal-child"
              v-for="(project, index) in projects"
              :key="index"
              @mousemove="handleTilt($event, index)"
              @mouseleave="resetTilt(index)"
              :ref="el => { if (el) projectCardRefs[index] = el as HTMLElement }"
            >
              <div class="project-image-container">
                <img :src="getProjectImage(project)" :alt="project.title" class="project-screenshot" />
                <div class="project-image-overlay">
                  <p class="overlay-desc">{{ project.description }}</p>
                </div>
              </div>
              
              <div class="project-info">
                <h3 class="project-title">{{ project.title }}</h3>
                <div class="project-tags">
                  <span class="tech-tag" v-for="tech in project.technologies.slice(0, 3)" :key="tech">{{ tech }}</span>
                </div>
                <div class="project-actions">
                  <a v-if="project.liveDemo" :href="project.liveDemo" target="_blank" class="project-btn primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15 3H21V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    View Project
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
          
          <div class="more-projects-section" data-reveal data-reveal-delay="400">
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
            <h2 class="section-title" data-reveal>
              <span class="section-number">05</span>
              <span class="title-text">Contact</span>
            </h2>
            
            <div class="contact-intro" data-reveal data-reveal-delay="200">
              <h3 class="contact-heading">Let's Build Something Together</h3>
              <p class="contact-description">
                I'm always interested in new opportunities and collaborations.
                Whether you have a project in mind or just want to chat about technology,
                I'd love to hear from you.
              </p>
            </div>
            
            <div class="contact-grid" data-reveal-stagger>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pascalonuoha324@gmail.com&su=Hello%20Pascal!&body=Hi%20Pascal,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect..." target="_blank" class="contact-card email-card glass-card reveal-child">
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
              
              <a href="https://github.com/iPascal619" target="_blank" class="contact-card github-card glass-card reveal-child">
                <div class="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 1C19.91 1 18.73 0.650001 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.650001 5.09 1 5.09 1C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="contact-details">
                  <h4>GitHub</h4>
                  <p>@iPascal619</p>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/pascal-onuoha/" target="_blank" class="contact-card linkedin-card glass-card reveal-child">
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
              
              <a href="https://twitter.com/iPascal619" target="_blank" class="contact-card twitter-card glass-card reveal-child">
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
          <p>Built with Vue 3 &amp; TypeScript</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive } from 'vue'
import { useAppStore } from '../stores/app'
import { storeToRefs } from 'pinia'
import { useSEO } from '../composables/useSEO'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useTextReveal } from '../composables/useTextReveal'
import { useParallax } from '../composables/useParallax'
import astroImage from '../assets/astro.jpg'
import simbaImage from '../assets/simbaaa.png'

// SEO optimization for homepage
useSEO({
  title: 'Pascal Onuoha - Full-Stack Software Engineer | AI & Blockchain Developer',
  description: 'Pascal Onuoha - Experienced Software Engineer specializing in full-stack development, AI fraud detection, blockchain applications, and mobile app development. View portfolio with 7+ projects including Synapse AI, Banking API, and CryptoDash.',
  keywords: 'Pascal Onuoha, Software Engineer, Full Stack Developer, AI Developer, Blockchain Developer, NestJS, React, Vue.js, TypeScript, JavaScript, Python, Solidity, Web3, Mobile Development, Portfolio',
  canonical: 'https://p4sca1.tech/'
})

// Animation composables
useScrollReveal()
useTextReveal()
const { parallaxStyle } = useParallax({ speed: 0.15 })

// Import project images from public directory
const aetherflowImage = '/img/Aetherflow.jpg'

const store = useAppStore()
const { contactClickedFromNav } = storeToRefs(store)

// Experience Interactive Showcase State
const activeExperience = ref(0)

const experiences = [
  {
    company: 'Africa To Silicon Valley (A2SV)',
    shortName: 'A2SV',
    role: 'Software Engineer',
    period: 'Dec 2025 - May 2026',
    description: 'Elevated overall software reliability and sprint delivery timelines within an Agile framework. Delivered core full-stack features using Next.js and Go, while optimizing internal CI/CD engineering workflows to enforce strict Silicon Valley code quality standards.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>'
  },
  {
    company: 'ThinkGreen-Afrika',
    shortName: 'ThinkGreen',
    role: 'CTO & Lead Full Stack Developer',
    period: 'Aug 2024 - Dec 2025',
    description: 'Spearheaded front-end development and served as CTO for a startup platform serving 1500+ active users. Architected responsive UI components using React.js, orchestrated seamless third-party API integrations, and established strict Git workflows and unit testing strategies.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>'
  },
  {
    company: 'Puzzle Labs',
    shortName: 'Puzzle Labs',
    role: 'Full Stack Developer',
    period: 'May 2023 - Sep 2024',
    description: 'Collaborated with cross-functional teams to design and deploy scalable web applications for fintech, health, and logistics clients. Built RESTful APIs in Node.js, developed responsive interfaces with React and TailwindCSS, and optimized MongoDB architectures.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>'
  },
  {
    company: 'Mira Technologies',
    shortName: 'Mira Tech',
    role: 'Software Engineer, Data Tools',
    period: 'Dec 2022 - Feb 2024',
    description: 'Designed and maintained internal web-based data annotation tools using Python (FastAPI) and React. Automated data ingestion workflows for machine learning models, and managed the deployment of these tools using Docker and Kubernetes on GCP.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>'
  },
  {
    company: 'Pahylcon Tech',
    shortName: 'Pahylcon',
    role: 'Web Development Intern',
    period: 'Feb 2021 - Apr 2021',
    description: 'Developed and deployed full-stack web applications using modern JavaScript frameworks. Contributed to the redesign of the company\'s client portal, optimized database queries, and implemented comprehensive unit testing strategies.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>'
  }
]

// Skills data with icons
const skills = ref([
  {
    title: 'Frontend',
    items: 'JavaScript, Vue.js, React, Next.js, Angular, TypeScript',
    level: 95,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
  },
  {
    title: 'Backend',
    items: 'Node.js, Python, PHP, Go, API Development',
    level: 90,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1" fill="currentColor"/><circle cx="6" cy="18" r="1" fill="currentColor"/></svg>'
  },
  {
    title: 'Mobile & Native',
    items: 'Flutter, C Programming',
    level: 75,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>'
  },
  {
    title: 'Blockchain',
    items: 'Solidity, Smart Contracts',
    level: 80,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>'
  },
  {
    title: 'Tools & DevOps',
    items: 'Git, Docker, Vite, VS Code',
    level: 85,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>'
  },
  {
    title: 'Databases',
    items: 'MySQL, MongoDB, PostgreSQL',
    level: 85,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>'
  }
])

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
    title: "Synapse AI",
    description: "AI-powered fraud detection platform with real-time monitoring and 99.5% accuracy",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "AI/ML"],
    github: "https://github.com/iPascal619/Synapse-AI",
    liveDemo: "https://synapse-ai-omega-one.vercel.app/",
    features: ["Real-time Fraud Detection", "Behavioral Analytics", "Risk Scoring", "Compliance Automation", "Multi-channel Protection"]
  }
])

// Function to get project image
const getProjectImage = (project: any) => {
  switch (project.title) {
    case 'AetherFlow':
      return aetherflowImage
    case 'Simba Supermarket Redesign':
      return simbaImage
    case 'Synapse AI':
      return '/img/synapse AI.jpg'
    default:
      return simbaImage
  }
}

// Project card tilt effect
const projectCardRefs = reactive<Record<number, HTMLElement>>({})

const handleTilt = (event: MouseEvent, index: number) => {
  const card = projectCardRefs[index]
  if (!card) return

  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = ((y - centerY) / centerY) * -5
  const rotateY = ((x - centerX) / centerX) * 5

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`
}

const resetTilt = (index: number) => {
  const card = projectCardRefs[index]
  if (!card) return
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
}

// Function to handle project details viewing
const openProjectDetails = (project: any) => {
  console.log('Opening project details:', project)
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

/* ========================================
   PITCH SECTION (Hero)
   ======================================== */
.pitch-section {
  background: var(--theme-section-bg, linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%));
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
  overflow: hidden;
}

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

/* Greeting */
.pitch-greeting {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-lime);
  letter-spacing: 0.05em;
  margin-bottom: 0.4rem;
  font-family: var(--font-family-mono);
}

/* Heading */
.pitch-heading {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.05;
  margin-bottom: 1.5rem;
  color: var(--theme-text);
  font-family: 'Montserrat', var(--font-family-heading);
}

.pitch-heading .name-line {
  display: block;
}

.pitch-heading .role-line {
  display: block;
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--theme-text-secondary);
  margin-top: 0.3rem;
  letter-spacing: 0.02em;
}

.pitch-heading .period {
  color: var(--color-lime);
  font-weight: 800;
}


.role-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  border: 1px solid var(--color-lime);
  border-radius: 100px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-lime);
  letter-spacing: 0.03em;
  background: rgba(156, 220, 8, 0.06);
}

.dark-mode .role-badge {
  background: rgba(156, 220, 8, 0.1);
}

/* Astronaut visual */
.pitch-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.astro-glow-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.astro-glow-wrapper::before {
  content: '';
  position: absolute;
  width: 80%;
  height: 80%;
  background: radial-gradient(circle, var(--color-lime-glow) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(40px);
  animation: glowPulse 4s ease-in-out infinite;
  z-index: 0;
}

.astro-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  position: relative;
  z-index: 1;
  transition: transform var(--transition-normal);
}

.astro-image:hover {
  transform: translateY(-5px) scale(1.02);
}

/* Description */
.cavalier {
  margin-bottom: 2rem;
}

.pitch-description {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--theme-text-secondary);
  max-width: 600px;
  padding: 1.5rem;
}

/* Highlights */
.highlights {
  list-style: none;
  padding: 0;
  margin: 0;
}

.highlights li {
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--theme-text-secondary);
  margin-bottom: 0.75rem;
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

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--theme-text-secondary);
}

.scroll-text {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.scroll-arrow {
  animation: scrollBounce 2s ease-in-out infinite;
  color: var(--color-lime);
}

/* ========================================
   CORNERSTONE SECTION (Skills)
   ======================================== */
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

.dark-mode .cornerstone-section {
  background: var(--theme-cornerstone-bg);
  border-bottom: 1px solid rgba(71, 85, 105, 0.2);
}

.cornerstone-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

/* Section titles (shared) */
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
  font-family: var(--font-family-mono);
}

.title-text {
  font-size: 3rem;
  font-weight: 300;
  color: var(--theme-text);
  font-family: var(--font-family-heading);
}

.cornerstone-description {
  margin-bottom: 4rem;
}

.cornerstone-description p {
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--theme-text-secondary);
}

/* Skills grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 900px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .skill-card {
    padding: 1.2rem 0.8rem;
  }
  
  .skill-card h3 {
    font-size: 0.95rem;
  }
  
  .skill-card p {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  
  .skill-icon {
    width: 36px;
    height: 36px;
    margin-bottom: 0.75rem;
  }
}

.skill-card {
  text-align: center;
  padding: 2rem 1.5rem;
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-lime), transparent);
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.skill-card:hover::before {
  opacity: 1;
}

.skill-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 1.25rem;
  color: var(--color-lime);
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-icon svg {
  width: 100%;
  height: 100%;
}

.skill-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--theme-text);
  font-family: var(--font-family-heading);
}

.skill-card p {
  color: var(--theme-text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

/* Skill level bar */
.skill-level {
  width: 100%;
  height: 3px;
  background: rgba(156, 220, 8, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.skill-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--color-lime), rgba(156, 220, 8, 0.5));
  border-radius: 2px;
  transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

/* ========================================
   EXPERIENCE SECTION (Interactive Showcase)
   ======================================== */
.showcase-section {
  background: var(--theme-section-bg, white);
  padding: 6rem 0;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center; /* Center vertically to eliminate scrolling need */
}

.dark-mode .showcase-section {
  background: var(--theme-experience-bg);
}

.showcase-inner {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}

.showcase-container {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  margin-top: 3rem;
  align-items: stretch;
}

/* Sidebar Navigation */
.showcase-sidebar {
  display: flex;
  flex-direction: column;
  padding: 1.5rem !important; /* Override premium padding */
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.02) !important;
}

.dark-mode .showcase-sidebar {
  background: rgba(15, 23, 42, 0.3) !important;
}

.showcase-tab {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: transparent;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  color: var(--theme-text-secondary);
  font-family: var(--font-family-primary);
  font-size: 1.05rem;
  font-weight: 600;
  text-align: left;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.showcase-tab:hover {
  background: rgba(156, 220, 8, 0.05);
  color: var(--theme-text);
  transform: translateX(4px);
}

.showcase-tab.active {
  background: rgba(156, 220, 8, 0.1);
  color: var(--color-lime);
  transform: translateX(8px);
}

.tab-indicator {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--color-lime);
  opacity: 0;
  transform: scaleY(0);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 0 10px var(--color-lime-glow);
}

.showcase-tab.active .tab-indicator {
  opacity: 1;
  transform: scaleY(1);
}

.tab-name {
  position: relative;
  z-index: 2;
  letter-spacing: 0.02em;
}

.tab-icon {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
}

.tab-icon svg {
  width: 20px;
  height: 20px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.showcase-tab.active .tab-icon svg {
  opacity: 1;
}

.view-resume-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid var(--theme-border, rgba(255,255,255,0.1));
  color: var(--color-lime);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: opacity 0.3s ease;
}

.view-resume-link:hover {
  opacity: 0.8;
}

/* Display Panel */
.showcase-display {
  padding: 3.5rem !important;
  min-height: 450px; /* Ensure height doesn't jump */
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.showcase-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.showcase-header {
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--theme-border, rgba(255,255,255,0.1));
  padding-bottom: 2rem;
}

.showcase-header .exp-period {
  margin-bottom: 0.75rem;
}

.showcase-header h3 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.showcase-header .company {
  font-size: 1.25rem;
  margin-bottom: 0;
}

.showcase-description {
  color: var(--theme-text-secondary);
  line-height: 1.8;
  font-size: 1.15rem;
}

/* High-Fidelity Glassmorphic Experience Cards (Shared) */
.glass-card-premium {
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  border-left: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.dark-mode .glass-card-premium {
  background: rgba(30, 41, 59, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.exp-period {
  font-size: 0.95rem;
  color: var(--color-lime);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: var(--font-family-mono);
  margin-bottom: 0.8rem;
}

.glass-card-premium h3 {
  color: var(--theme-text);
  font-family: var(--font-family-heading);
  font-weight: 700;
  line-height: 1.3;
}

.glass-card-premium .company {
  color: var(--color-lime);
  font-weight: 500;
  opacity: 0.9;
}

/* Vue Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

/* Responsive Showcase */
@media (max-width: 900px) {
  .showcase-section {
    padding: 3rem 0;
    min-height: auto;
  }

  .showcase-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    min-width: 0;
    width: 100%;
  }
  
  .showcase-sidebar {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 1rem !important;
    gap: 0.75rem;
    border-radius: 16px;
    width: 100%;
    min-width: 0; /* Extremely important: allows grid item to shrink below content width */
    -webkit-overflow-scrolling: touch; /* Apple momentum scrolling */
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  .showcase-sidebar::-webkit-scrollbar {
    display: none;
  }
  
  .showcase-tab {
    white-space: nowrap;
    flex: 0 0 auto; /* Crucial: stops the buttons from shrinking */
    padding: 0.75rem 1.25rem;
    font-size: 0.95rem;
  }
  
  .showcase-tab:hover, .showcase-tab.active {
    transform: none;
  }
  
  .tab-indicator {
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: auto;
    height: 3px;
    transform: scaleX(0);
  }
  
  .showcase-tab.active .tab-indicator {
    transform: scaleX(1);
  }
  
  .view-resume-link {
    display: flex;
    white-space: nowrap;
    flex: 0 0 auto;
    align-items: center;
    margin-top: 0;
    padding-top: 0;
    border-top: none;
    border-left: 1px solid var(--theme-border, rgba(255,255,255,0.1));
    margin-left: 0.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    font-size: 0.95rem;
  }
  
  .showcase-display {
    padding: 2rem !important;
    min-height: auto;
  }
  
  .showcase-header {
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .showcase-header h3 {
    font-size: 1.6rem;
  }
  
  .showcase-description {
    font-size: 1.05rem;
  }
}

/* ========================================
   CARRIAGEWAY SECTION (Projects)
   ======================================== */
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

.carriageway-section .section-title .title-text {
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
  
  .carriageway-section .projects-grid {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 1rem;
    padding-bottom: 1rem;
    margin-top: 2rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin-left: -1rem;
    margin-right: -1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    min-width: 0;
  }
  
  .carriageway-section .projects-grid::-webkit-scrollbar {
    display: none;
  }
  
  .carriageway-section .project-card {
    flex: 0 0 85vw;
    max-width: 320px;
  }
}

.project-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.25rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              background 0.3s ease,
              border-color 0.3s ease,
              box-shadow 0.3s ease;
  will-change: transform;
}

.project-card:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(156, 220, 8, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.project-image-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 1.25rem;
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

/* Image overlay */
.project-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  padding: 1.25rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 12px;
}

.project-card:hover .project-image-overlay {
  opacity: 1;
}

.overlay-desc {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
}

/* Project Info */
.project-info {
  padding: 0.5rem 0 0;
  color: white;
  text-align: left;
}

.project-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: white;
  font-family: var(--font-family-heading);
}

/* Tech tags */
.project-tags {
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
  font-size: 0.72rem;
  font-weight: 500;
  border: 1px solid rgba(156, 220, 8, 0.2);
}

.project-actions {
  display: flex;
  gap: 0.8rem;
}

.project-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: white;
  padding: 0.55rem 1rem;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-normal);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.project-btn.primary {
  background: var(--color-lime);
  color: var(--color-black);
  border-color: var(--color-lime);
}

.project-btn.primary:hover {
  background: #b8f534;
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(156, 220, 8, 0.3);
}

.project-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.85);
  color: var(--color-black);
  transform: translateY(-2px);
}

.project-btn svg {
  width: 14px;
  height: 14px;
}

/* More projects */
.more-projects-section {
  margin-top: 3rem;
  text-align: center;
}

.more-projects-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 1rem 2rem;
  font-family: var(--font-family-primary);
  font-size: 1rem;
  font-weight: 500;
  color: white;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.more-projects-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(156, 220, 8, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.more-projects-btn .arrow-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.more-projects-btn:hover .arrow-icon {
  transform: translate(2px, -2px);
}

@media (max-width: 768px) {
  .project-card {
    padding: 1.1rem;
  }
  
  .project-image-container {
    height: 220px;
  }
  
  .project-actions {
    flex-direction: column;
    gap: 0.6rem;
  }
  
  .project-btn {
    width: 100%;
    justify-content: center;
  }
}

/* ========================================
   CONTACT SECTION
   ======================================== */
.contact-section {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #e2e8f0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 4rem;
  position: relative;
  overflow: hidden;
}

/* Subtle lime accent overlay */
.contact-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(156, 220, 8, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.light-mode .contact-section {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  color: #0f172a;
}

.dark-mode .contact-section {
  background: var(--theme-contact-bg, linear-gradient(135deg, #0f172a 0%, #1e293b 100%));
  color: var(--theme-text);
}

@media (max-width: 768px) {
  .contact-section {
    padding-top: 2rem;
    overflow: visible;
    min-height: unset;
    height: auto;
    display: block;
    align-items: unset;
  }
}

.contact-section .section-title .title-text {
  color: #e2e8f0;
}

.contact-section .section-number {
  color: var(--color-lime);
}

.light-mode .contact-section .section-title .title-text {
  color: #0f172a;
}

.contact-content {
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}

.contact-wrapper {
  display: grid;
  gap: 3rem;
  margin-top: 2rem;
}

.contact-intro {
  text-align: center;
  max-width: 600px;
  margin: 0.75rem auto 0 auto;
}

.contact-heading {
  font-size: 2.2rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: #e2e8f0;
  font-family: var(--font-family-heading);
}

.light-mode .contact-heading {
  color: #0f172a;
}

.dark-mode .contact-heading {
  color: var(--theme-text);
}

.contact-description {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #94a3b8;
  margin-bottom: 0;
}

.light-mode .contact-description {
  color: #64748b;
}

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
  padding: 1.5rem 1rem;
  text-decoration: none;
  color: #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  min-height: 140px;
}

.light-mode .contact-card {
  color: #334155;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: transparent;
  transition: background var(--transition-normal);
}

.contact-card:hover {
  transform: translateY(-6px);
}

/* Platform-specific colored tops */
.email-card:hover::before {
  background: linear-gradient(90deg, #ea4335, #fbbc05);
}

.github-card:hover::before {
  background: linear-gradient(90deg, #6e5494, #f0d9b5);
}

.linkedin-card:hover::before {
  background: linear-gradient(90deg, #0077b5, #00a0dc);
}

.twitter-card:hover::before {
  background: linear-gradient(90deg, #1da1f2, #0d95e8);
}

.contact-icon {
  width: 44px;
  height: 44px;
  background: rgba(156, 220, 8, 0.08);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all var(--transition-normal);
}

.contact-card:hover .contact-icon {
  background: rgba(156, 220, 8, 0.15);
  transform: scale(1.1);
}

/* Platform-specific icon colors on hover */
.email-card:hover .contact-icon { background: rgba(234, 67, 53, 0.15); }
.email-card:hover .contact-icon svg { color: #ea4335; }

.github-card:hover .contact-icon { background: rgba(110, 84, 148, 0.15); }
.github-card:hover .contact-icon svg { color: #a78bfa; }

.linkedin-card:hover .contact-icon { background: rgba(0, 119, 181, 0.15); }
.linkedin-card:hover .contact-icon svg { color: #0077b5; }

.twitter-card:hover .contact-icon { background: rgba(29, 161, 242, 0.15); }
.twitter-card:hover .contact-icon svg { color: #1da1f2; }

.contact-icon svg {
  color: var(--color-lime);
  width: 22px;
  height: 22px;
  transition: color var(--transition-normal);
}

.contact-details {
  flex: 1;
}

.contact-details h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: inherit;
  font-family: var(--font-family-heading);
}

.contact-details p {
  font-size: 0.85rem;
  color: #94a3b8;
  margin: 0;
  line-height: 1.3;
}

.light-mode .contact-details p {
  color: #64748b;
}

/* ========================================
   RESPONSIVE: Contact
   ======================================== */
@media (max-width: 1024px) {
  .contact-grid {
    gap: 0.8rem;
  }
  
  .contact-card {
    padding: 1.2rem 0.6rem;
    min-height: 130px;
  }
}

@media (max-width: 768px) {
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
}

@media (max-width: 480px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
  
  .contact-card {
    padding: 1rem 0.5rem;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .contact-details h4 {
    font-size: 0.95rem;
  }
  
  .contact-details p {
    font-size: 0.75rem;
    word-break: break-all;
  }
  
  .contact-description {
    font-size: 1.1rem;
  }
  
  .contact-wrapper {
    gap: 2rem;
  }
}

/* ========================================
   RESPONSIVE: Pitch
   ======================================== */
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
    padding-left: 2rem;
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

  .scroll-indicator {
    bottom: 1.5rem;
  }
}

/* ========================================
   FOOTER
   ======================================== */
.elegant-footer {
  background: linear-gradient(to bottom, transparent, rgba(156, 220, 8, 0.03));
  border-top: 1px solid var(--theme-border);
  padding: 4rem 0 2rem;
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

.back-up-button {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: var(--theme-bg);
  color: var(--theme-text);
  border: 1px solid var(--theme-border);
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

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--theme-border);
}

.footer-brand {
  text-align: left;
}

.footer-logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-lime);
  margin-bottom: 0.5rem;
  font-family: var(--font-family-heading);
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

/* Dark mode footer */
.dark-mode .elegant-footer {
  background: linear-gradient(to bottom, transparent, rgba(156, 220, 8, 0.05));
  border-top-color: rgba(255, 255, 255, 0.05);
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
    display: none !important;
  }
}

@media (max-width: 480px) {
  .footer-logo {
    font-size: 2rem;
  }
  
  .footer-tagline {
    font-size: 1rem;
  }
}
</style>
