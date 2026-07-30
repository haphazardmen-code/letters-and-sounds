// Minimal offline cache for the Letters & Sounds app shell.
// Note: the on-device text-to-speech voices Chrome uses (speechSynthesis)
// work fully offline already — this cache exists so the PAGE ITSELF loads
// without a connection. The Google Fonts request will fail offline and
// silently fall back to the system font, which is an acceptable, honest
// degradation rather than a broken experience.
const CACHE_NAME = 'letters-and-sounds-v1';
const APP_SHELL = [
  './book1-letters-and-sounds.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).catch(() => cached);
    })
  );
});
