import { useState } from "react"

export const UseStateComponent = () => {

  const [count, setCount] = useState(0)

  const setCounter = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>FirstCounter Count: {count}</h1>
      <button onClick={setCounter}>Plus 1</button>
    </div>
  )
}
