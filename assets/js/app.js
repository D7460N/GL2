// PWA Tutorial for Beginners https://www.youtube.com/watch?v=egmwY9n6qWY
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('assets/js/sw.js')
    .then((reg) => console.log('service worker registered', reg))
    .catch((err) => console.log('service worker not registered', err))
}