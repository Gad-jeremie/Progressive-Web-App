var defferedPrompt;

//Check if the browser support service worker and register it
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/serviceworker.js')
        .then(function() {
            console.log('Service Worker Registered!');
        });
}

//Chrome will prompt the user to add the app to home screen. But we will prevent it
//so that we can show it when we want i.e. after the user clicks the '+' button
window.addEventListener('beforeinstallprompt', function(event) {
    console.log('Before add to homescreen event fired by chrome');

    //prevent chrome from showing add app to home screen banner
    event.preventDefault();

    //store the event so that we can show it when we want
    defferedPrompt = event;

    return false;
});