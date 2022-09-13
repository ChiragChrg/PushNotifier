const push = require('web-push');

const vapidKeys = {
    publicKey: 'BJsSOM9uE_Wu_j-CdJXcRrr96NBmJi2S1b57ZLQuvvBxBMIv5umfLH3U3RoEBXJU_0NXrG1peCeQlpFTG75SBoE',
    privateKey: '1mDFP0uEVUYq_21CZgqx035vThkicgoCJ4YiWKdqytU'
}

push.setVapidDetails(
    'mailto: adad@sddf.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/c9H9sN5smTo:APA91bHoySChnBvwVBeQqEJAvwvKwfaNsBxvQL8uaW50ip03LO1BK-w7G_mz9mdhnbbUdVjdqv_ubgQmF-9fPxXBetmtNjr4CGUNWgAwjqbG0MIP3b91WK1qKax7XXHcdqFWBLy76bJe","expirationTime":null,"keys":{"p256dh":"BHD8y4zAfbtER2z50fRbgLqNWdyfrRxBWTJd93nxNCUCjj1oSk0xg9mNO12V6o3t7hSdSQoEq3y_9u8UqmkMfz0","auth":"wIiJaWTv1vqEsaWhIPfwVA"}}

push.sendNotification(sub, 'test message');