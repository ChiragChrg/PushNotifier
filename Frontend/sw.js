self.addEventListener('install', () => {});
self.addEventListener('activate', () => {});
self.addEventListener('fetch', () => {});

self.addEventListener('push', (e) => {
    const data = e.data.json();
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: './AOT.png'
    });
});