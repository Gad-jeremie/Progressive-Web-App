//Check if the browser support service worker and register it
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/serviceworker.js')
        .then(function() {
            console.log('Service Worker Registered!');
        });
}