self.addEventListener('push', () => {
    self.registration.sendNotification('New Push Notification', {
        body: 'This is a new push notification',
        icon: 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png'
    });
})