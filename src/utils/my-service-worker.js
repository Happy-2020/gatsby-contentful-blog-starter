importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js'
  )
  
  // The plugin will pass the files to cache here
  workbox.precaching.precacheAndRoute([])
  
  // Another things
  self.addEventListener('push', () => {
    // ...
    e.waitUntil(
        caches.open(cacheName).then(cache => {
          return cache.addAll([
            '/',
            /*
              DEAR READER,
              ADD A LIST OF YOUR ASSETS THAT
              YOU WANT TO WORK WHEN OFFLINE
              TO THIS ARRAY OF URLS
            */
          ]).then(() => self.skipWaiting());
        })
      );
  })