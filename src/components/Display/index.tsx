import React, { useState } from "react"

const plusText = (text: string): string => {
    console.log("plusText proccessed")
    return text + " : ok"
}

const Display: React.FC<{}> = ({}) => {
  const [text, setText] = useState("")

  return (
    <div>
      <p>{plusText(text)}</p>
      <button onClick={() => setText("hoge")}>{"変更"}</button>
    </div>
  )
}

export default Display
