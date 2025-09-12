import { onMounted } from 'vue'

export function useSEO(options: {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
}) {
  onMounted(() => {
    // Update page title
    if (options.title) {
      document.title = options.title
    }

    // Update meta description
    if (options.description) {
      updateMetaTag('description', options.description)
    }

    // Update meta keywords
    if (options.keywords) {
      updateMetaTag('keywords', options.keywords)
    }

    // Update canonical URL
    if (options.canonical) {
      updateCanonical(options.canonical)
    }
  })
}

function updateMetaTag(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', name)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

function updateCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}
