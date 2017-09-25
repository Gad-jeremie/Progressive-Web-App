//Installing SW
self.addEventListener('install', function(event) {
    console.log('[SW] Installing Server Worker...', event);
});

//Activating SW
self.addEventListener('activate', function(event) {
    console.log('[SW] Activating Server Worker...', event);
    return self.clients.claim();
});

//Fetch Event
self.addEventListener('fetch', function(event) {
    console.log('[SW] Fetching Something...', event);
    event.respondWith(fetch(event.request));
});