const CACHE_NAME = "v1"
const urlsToCache = [
  "/",
  "/app.js",
  "https://fonts.googleapis.com/css?family=M+PLUS+1p:300&display=swap",
]
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
