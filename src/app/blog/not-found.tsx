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
          className="text-9xl font-bold text-gray-800"
        >
          4
        </motion.div>

        <motion.div
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-9xl font-bold text-gray-800"
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
          className="text-9xl font-bold text-gray-800"
        >
          4
        </motion.div>
      </div>

      <div className="absolute mt-32 text-gray-600 text-xl">页面未找到</div>
    </div>
  )
}
