import { frame, useMotionValue, useSpring } from 'framer-motion'
import { RefObject, useEffect } from 'react'

// damping：阻尼值，值越大，回归原位摇晃数越少，1-10
// stiffness：刚度，值越大，回归原位速度越快，1-100
// mass：聚集值，越大，回归原位越快
const spring = { damping: 8, stiffness: 50, mass: 0.8 }
export default function useFllowPointer(ref: RefObject<HTMLElement>) {
  const xPoint = useMotionValue(0)
  const yPoint = useMotionValue(0)
  const x = useSpring(xPoint, spring)
  const y = useSpring(yPoint, spring)

  useEffect(() => {
    if (!ref || !ref.current) return

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!

      frame.read(() => {
        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2)
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2)
      })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])
  return { x, y }
}
