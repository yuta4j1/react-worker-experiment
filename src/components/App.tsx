import React from "react"
import Counter from "./Counter"

const App: React.FC<{}> = () => {
  return (
    <>
      <h1>{"Hello, World!"}</h1>
      <Counter initialValue={0} />
      <button
        onClick={() => {
          fetch("./app.js").then(res => {
            console.log(res)
          })
        }}
      >
        {"fetch event"}
      </button>
    </>
  )
}

export default App
