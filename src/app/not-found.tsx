'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <div className="flex items-center">
        <motion.div
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-9xl font-bold text-gray-800 pointer-events-none"
        >
          4
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95, rotateZ: -30 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
          drag
          className="text-9xl font-bold text-gray-800 cursor-pointer"
        >
          0
        </motion.div>

        <motion.div
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-9xl font-bold text-gray-800 pointer-events-none"
        >
          4
        </motion.div>
      </div>
    </div>
  )
}
