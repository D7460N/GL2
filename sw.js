// PWA Tutorial for Beginners https://www.youtube.com/watch?v=egmwY9n6qWY

// install service worker
self.addEventListener('install', evt => {
  console.log('service worker has been installed')
});

// activate event
self.addEventListener('activate', evt => {
  console.log('service worker has been activated')
});