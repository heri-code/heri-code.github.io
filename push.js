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
   "endpoint": " https://fcm.googleapis.com/fcm/send/fQZ82_3aHkY:APA91bF2Nsw7ha5swJ99ka_1gKkXGFzUSg4l5GYghdEfN0SPcdubkbkFD1xEvUCBrQlzna-WpoX2WvuwnakrGJHJ2Fpu3h-ws_NnEBNbNID2OMeBUZ3W3OdNiWAP2OpSwSbR4-W7UJzI",
   "keys": {
       "p256dh": "BNNm2g2mLbgOQyxz2eIE8XHbl3uPRK/Ri1rDD4aVK7HR/P1QPA6ZewUezU5AwA7lGI8U+kfHqb0/fBGs2XrxZVI=",
       "auth": "kteNDsmerC1WikbOWBpUXA=="
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