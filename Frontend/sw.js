self.addEventListener('install', () => {});
self.addEventListener('fetch', () => {});
self.addEventListener('activate', () => {});

self.addEventListener('push', (e) => {
    const data = e.data.json();
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: './AOT.png'
    });
});
