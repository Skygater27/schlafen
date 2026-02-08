const cacheName = 'schlafen-app-v13';
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

// 1. Installation: Dateien speichern & nicht warten
self.addEventListener('install', (e) => {
  self.skipWaiting(); // Macht diesen SW sofort zum "Chef"
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('Caching assets...');
      return cache.addAll(assets);
    })
  );
});

// 2. Aktivierung: Alte Caches löschen
self.addEventListener('activate', (e) => {
  e.waitUntil(
    Promise.all([
      clients.claim(), // Übernimmt sofort die Kontrolle
      caches.keys().then((keys) => {
        return Promise.all(
          keys.map((key) => {
            if (key !== cacheName) {
              console.log('Lösche alten Cache:', key);
              return caches.delete(key);
            }
          })
        );
      })
    ])
  );
});

// 3. Fetch: Dateien aus dem Cache servieren
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});







