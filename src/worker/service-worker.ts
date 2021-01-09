const CACHE_NAME = "cache-v1"
const urlsToCache = ["/", "/styles/main.css", "/script/main.js"]
self.addEventListener("install", (e: any) => {
  console.log("install Event")
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("open cache")
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener("activate", e => {
  console.log("activate Event", e.type)
})

self.addEventListener("fetch", (e: any) => {
  console.log("fetch event")
  e.respondWith(
    caches.match(e.request).then(response => {
      if (response) {
        console.log("from cache.")
        return response
      }
      console.log("no cache, request")
      return fetch(e.request)
    })
  )
})
