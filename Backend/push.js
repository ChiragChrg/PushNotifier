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