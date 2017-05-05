var cacheName = "dafzv3";
var cacheWhitelist = [cacheName];
var itemsToCache = [
    "/404.html",
    "/index.html",
    "/style.css",
    "/images/logo-min.svg",
    "/images/avatar.jpg",
    "/images/icons/twitter.svg",
    "/images/icons/github.svg",
    "/about/index.html",
    "/now/index.html",
    "/work/index.html"
];

self.oninstall = event => {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(itemsToCache);
        })
    );
};

self.onactivate = event => {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
};

self.onfetch = event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            // Cache hit - return response
            if (response) return response;

            var fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(
                function(response) {
                    // Check if we received a valid response
                    if(!response || response.status !== 200 || response.type !== "basic") {
                        return response;
                    }

                    var responseToCache = response.clone();

                    caches.open(cacheName).then(function(cache) {
                        cache.put(event.request, responseToCache);
                    });

                    return response;
                }
            );
        })
    );
};
