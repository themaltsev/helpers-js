importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');



workbox.precaching.precacheAndRoute([
    '/',
    '404',
    'offline',
]);




workbox.routing.registerRoute(
    new RegExp('/core/'),
    new workbox.strategies.NetworkOnly()
);

workbox.routing.registerRoute(
    new RegExp('/manager/'),
    new workbox.strategies.NetworkOnly()
);

workbox.routing.registerRoute(
    new RegExp('/video/'),
    new workbox.strategies.NetworkOnly()
);

workbox.routing.registerRoute(
    new RegExp('/connectors/'),
    new workbox.strategies.NetworkOnly()
);




workbox.routing.setCatchHandler(({ event }) => {
    return caches.match(workbox.precaching.getCacheKeyForURL('offline'))

})


const queue = new workbox.backgroundSync.Queue('zapros');

self.addEventListener('fetch', (event) => {
    // Clone the request to ensure it's safe to read when
    // adding to the Queue.
    const promiseChain = fetch(event.request.clone())
        .catch((err) => {
            return queue.pushRequest({ request: event.request });
        });

    event.waitUntil(promiseChain);
});



workbox.routing.registerRoute(
    new RegExp('/'),
    new workbox.strategies.StaleWhileRevalidate()
);






workbox.googleAnalytics.initialize();



