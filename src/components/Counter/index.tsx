import React, { useState } from "react"

const Counter: React.FC<{ initialValue: number }> = (props) => {
  const [counter, setCounter] = useState(props.initialValue)

  return (
    <div>
      <button onClick={() => setCounter((v) => v + 1)}>{"＋"}</button>
      <span>{counter}</span>
      <button onClick={() => setCounter((v) => v - 1)}>{"ー"}</button>
    </div>
  )
}

export default Counter
