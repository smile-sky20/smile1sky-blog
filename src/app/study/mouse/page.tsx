'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'

import useFollowPointer from './useFllowPointer'

export function MouseComp() {
  const ref = useRef(null)
  const { x, y } = useFollowPointer(ref as any)

  return (
    <>
      <motion.div
        ref={ref}
        className="w-12 h-12 rounded-full bg-red-300 fixed"
        style={{ x, y: y }}
      />
      {/* <motion.div
        ref={ref}
        className="w-12 h-12 rounded-full bg-red-500 fixed"
        style={{ x, y }}
      />
      <motion.div
        ref={ref}
        className="w-12 h-12 rounded-full bg-red-500 fixed"
        style={{ x, y }}
      />
      <motion.div
        ref={ref}
        className="w-12 h-12 rounded-full bg-red-500 fixed"
        style={{ x, y }}
      /> */}
    </>
  )
}

export default MouseComp
