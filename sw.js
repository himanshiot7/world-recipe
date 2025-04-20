self.addEventListener('install', event => {
    console.log(' Service Worker Installing...');
    self.skipWaiting();
  });
  
  self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    event.respondWith(fetch(event.request));
  });
  