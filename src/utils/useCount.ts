import { useEffect, useState } from "react";

export function useCount() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);

    return () => clearInterval(timerId);
  }, [count])

  return { count, setCount }
}