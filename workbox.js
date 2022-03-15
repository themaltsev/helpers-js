
/// Полная работа в оффлайн, подрузка динамически данных и их использование [[$dnow]] заменить на своё типо версия


importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([
    
  'img/logos/logo.svg', 
  'img/icons/send_w.svg',  
  'img/svg/search.svg',  
  '/img/icons/dark-ligth.svg',  
  'img/icons/phone.svg',  
  'img/icons/play_button.svg',  
  'img/icons/instagram.svg',  
  'img/icons/telegram_app.svg',  
  'img/icons/whatsapp.svg',  
  
  
  {url: 'assets/main.min.css?v=[[$dnow]]', revision: '[[$dnow]]'},
  {url: 'assets/scripts.min.js?v=[[$dnow]]', revision: '[[$dnow]]'},
  {url: '/offline', revision: '[[$dnow]]'},
  {url: 'fonts/Gilroy/Gilroy-Bold/Gilroy-Bold.woff2', revision: '[[$dnow]]'},
  {url: 'fonts/Gilroy/Gilroy-Medium/Gilroy-Medium.woff2', revision: '[[$dnow]]'},
],

    {
        offlinePage: '/offline', 
    }

);



workbox.routing.registerRoute(
    new RegExp('/core/'),
    new workbox.strategies.NetworkOnly()
);

workbox.routing.registerRoute(
    new RegExp('/manager/'),
    new workbox.strategies.NetworkOnly()
);


workbox.routing.registerRoute(
    new RegExp('/api/'),
    new workbox.strategies.NetworkOnly()
);


workbox.routing.registerRoute(
    new RegExp('/assets/'),
    new workbox.strategies.NetworkOnly()
);


workbox.routing.registerRoute(
    new RegExp('/connectors/'),
    new workbox.strategies.NetworkOnly()
);




workbox.routing.setCatchHandler(({ event }) => {
    return caches.match(workbox.precaching.getCacheKeyForURL('offline')) 
})




workbox.routing.registerRoute(
    new RegExp('/'),
    new workbox.strategies.StaleWhileRevalidate()
);



workbox.googleAnalytics.initialize();



