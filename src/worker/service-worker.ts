self.addEventListener("install", e => {
  console.log("install Event")
})

self.addEventListener("activate", e => {
  console.log("activate Event", e.type)
})

self.addEventListener("fetch", e => {
  console.log("fetch event")
})
