import React from "react"
import Counter from "./Counter"
import Display from "./Display"
import Logo from "../../icon/192_logo.svg"

const App: React.FC<{}> = () => {
  return (
    <>
      <div>
        {/* <Logo /> */}
        <h1>{"React PWA"}</h1>
      </div>
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
