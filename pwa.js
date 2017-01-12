if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(() => {
    console.log('Service Worker Registered');
  });
}

// sw.js
// 放置在根目录下！！！

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('cacheName').then((cache) => {
      cache.addAll([]);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(

  );
});


self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});


// main.js
if ('caches' in window) {
  caches.match('url').then(response => {
    if (response) {
      response.json().then(() => {
        // TO do update
      })
    }
  })
}

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Codelab';
  const options = {
    body: 'Yay it works.',
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
