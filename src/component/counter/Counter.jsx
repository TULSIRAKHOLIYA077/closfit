import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <div className="flex gap-2">
        <button className="border p-1" onClick={()=>setCount(count - 1)}>Decrease </button>
        <p className="border p-1">{count}</p>
        <button className="border p-1" onClick={()=>setCount(count + 1)}>Increase  </button>
      </div>
    </div>
  )
}

export default Counter;