var webPush = require('web-push');
     
const vapidKeys = {
   "publicKey": "BDmPwcLe78KoImfr66bGGo3TDslUJ-GYacJkp7FuoYX3xjkanbYbs6PabrVFXkKaamAv4a4v3l-3-i2GzyWrro0",
   "privateKey": "gTfYHGGaxVVhobvZ35oiFOajF60GbtpBy8DnqomwvyA"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": " https://fcm.googleapis.com/fcm/send/chtS0VJddoQ:APA91bFkPx8O5G8hq7DZNcNG86mWEpiQ-AZWNjyd9dhtQNXMtYMboK2JTtlCYp6Rpn4r__zkPa28CB9VPq_ZSVOSyh-hl97jTca4gE5MmO5g8eRLXmffc0dHQFmhuVySf1isN36QlKk2",
   "keys": {
       "p256dh": " BHDE1XOSq2fS6iG/s/pfB8lKUhtY1pHwDqClOvn0EigD7OgqjKCVhi3Pmxf97uu9DJ3mxNWmNUw30fBJuNYPbPI=",
       "auth": " jwDVI1F3Nx+imjMvDSPr+g=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '772441450869',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);