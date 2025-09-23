// public/sw.js

self.addEventListener('install', (event) => {
  console.log('[SW] Instalado')
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  console.log('[SW] Ativado')
})

self.addEventListener('fetch', (event) => {
  // Exemplo: responder apenas com cache (você pode usar estratégias Workbox aqui)
  // event.respondWith(caches.match(event.request).then(...))
})
