<template>
  <a
    :href="to"
    class="skip-link"
    @click="handleClick"
  >
    Skip to main content
  </a>
</template>

<script setup lang="ts">
interface Props {
  to: string
}

const props = defineProps<Props>()

const handleClick = (event: MouseEvent) => {
  event.preventDefault()
  const target = document.querySelector(props.to)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
    target.focus()
  }
}
</script>

<style scoped>
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--color-primary);
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
  transition: top 0.3s ease;
}

.skip-link:focus {
  top: 6px;
}
</style>
