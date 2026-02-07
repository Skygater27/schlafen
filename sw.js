const cacheName = 'schlafen-app-v2';
const assets = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './img/icon-180.png',
  './img/icon-192.png',
  './img/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('Caching assets...');
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});