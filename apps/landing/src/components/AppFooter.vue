<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Your Portfolio</h3>
          <p>Modern developer portfolio built with Vue 3 + Vite</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Connect</h4>
          <div class="social-links">
            <a href="#" aria-label="GitHub">GitHub</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Your Portfolio. Modernized from Olaolu.dev template.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface Props {
  currentSection?: string
}

defineProps<Props>()
</script>

<style scoped>
.app-footer {
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
  color: var(--color-text);
}

.footer-section p {
  color: var(--color-text-light);
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: var(--color-text-light);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-section a:hover {
  color: var(--color-primary);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  color: var(--color-text-light);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>
