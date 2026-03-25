const CACHE_NAME = "doc-editor-cache-v1";

self.addEventListener("install", (event) => {
  self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
  });
  event.waitUntil(caches.open(CACHE_NAME));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    }),
  );
});
