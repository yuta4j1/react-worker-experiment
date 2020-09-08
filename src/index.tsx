import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

ReactDOM.render(<App />, document.getElementById("app"))

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) => {
        console.log("register Successful!! scope: ", reg.scope)
      })
      .catch((err) => {
        console.log("Service Worker registration failed", err)
      })
  })
}
