/* Offline cache: app files are cached on install; fonts are cached the first time they load. */
const CACHE = 'prob-study-v19';
const FILES = [
  './', './index.html', './manifest.webmanifest',
  './assets/style.css', './assets/app.js',
  './data/lectures1.js', './data/lectures2.js', './data/lectures3.js',
  './data/exams.js', './data/bank.js', './data/extras.js', './data/bank2.js', './data/calc.js',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Network first (so edits show up right away), cache as the offline fallback.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok || res.type === 'opaque') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('./index.html')))
  );
});
