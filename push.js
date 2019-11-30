var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BCpkCym0lErdYEpttkPO6X7CYLjxbEDHqe1VaG4fvdmu_7BMkiiOIbOSnKoHxDXraqa_JetN8BU1gIdvKL30s1E",
   "privateKey": "0wMtWIpcZzAcca6ceWRjOeMoJjrHx_zB55hodLySpZc"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": " https://fcm.googleapis.com/fcm/send/cVh8WQHs47s:APA91bE2slWf8tDtNvMtA2R3Qi2PJRkxT66v4Dg5wgbdpMcfrYRX18Du1rZcy347dBzUV59evzK1k8U10QsuQPNMgURLq-zWGWlajkMSe7yjNoGdcRpgQxtTbkgJUskbpgQPi02bjQ1O",
   "keys": {
       "p256dh": "BIf8DUjAhmtWiSpn9i9s+m7qSYvRFQrwJsBR1v+gw6MdxmKuvQsE4I58hIJzgWipcPFcYyrGedHpwL3/SUtRJok=",
       "auth": "ui+G/ZbioKsfv+mHzH4tmw=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '493859514517',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);