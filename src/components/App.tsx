import React from "react"
import Counter from "./Counter"
import Display from "./Display"

const App: React.FC<{}> = () => {
  return (
    <>
      <h1>{"React PWA"}</h1>
      <Counter initialValue={0} />
      <Display />
      <button
        onClick={() => {
          fetch("./app.js").then(res => {
            console.log(res)
          })
        }}
      >
        {"app.js fetch"}
      </button>
      <button
        onClick={() => {
          fetch("./").then(res => {
            console.log(res)
          })
        }}
      >
        {"/ fetch"}
      </button>
    </>
  )
}

export default App
