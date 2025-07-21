import { useEffect, useState } from "react"

const TimerEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() =>{
    const intervalId = setInterval(()=>{
      setCount(prev => prev + 1)
    },1000)
    return () => clearInterval(intervalId);
  },[])
  return (
    <div>{count}</div>
  )
}

export default TimerEffect