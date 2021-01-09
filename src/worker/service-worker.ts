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

self.addEventListener("fetch", e => {
  console.log("fetch event")
})
