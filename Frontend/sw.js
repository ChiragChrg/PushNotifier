self.addEventListener('install', () => {});
self.addEventListener('activate', () => {});
self.addEventListener('fetch', () => {});

self.addEventListener('push', () => {
    self.registration.showNotification('test message');
  });