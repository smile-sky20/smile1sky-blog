'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { items, ItemProps } from './data'

function ModalItem({ fn }: { fn: () => void }) {
  return (
    <div onClick={() => fn()}>
      <motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        exit={{ scale: 0.2, opacity: 0 }}
        transition={{
          duration: 0.4,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
        }}
        className="mask w-full h-full fixed top-0 left-0 z-[1] bg-gray-900"
      ></motion.div>
      <motion.div
        className="fixed z-[2] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[480px] h-[120px] bg-sky-300 rounded-[24px]"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 2, opacity: 1 }}
        exit={{ scale: 0.2, opacity: 0 }}
        transition={{
          duration: 0.4,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        123
      </motion.div>
    </div>
  )
}
export function Item({
  id,
  item,
  clickFn,
}: {
  id: string
  item: ItemProps
  clickFn: (id: string) => void
}) {
  const handleClick = () => {
    console.log(123)

    clickFn(id)
  }
  return (
    <div className="cursor-pointer hover:brightness-75">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
        className="card-content-container open h-full relative block border rounded-[16px] pointer-events-none"
        onClick={handleClick} // 修复点：使用箭头函数包裹 clickFn(id)
      >
        <motion.div
          className="card-content p-4  h-[240px]"
          layoutId={`card-container-${id}`}
        >
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{item.category}</span>
            <h2>{item.title}</h2>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function StudyComp() {
  const [selectId, setSelectId] = useState<string>('')
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const handleClick = (id: string) => {
    console.log(`🧧🧨 → file: page.tsx:65 → id:`, selectId)
    setSelectId(id)
  }

  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <div className="card-container p-24">
      <AnimatePresence initial={false}>
        {modalVisible && <ModalItem fn={closeModal}></ModalItem>}
      </AnimatePresence>
      <motion.button
        onClick={openModal}
        whileTap={{ y: 1 }}
        className="mb-8 p-4 w-52 border-2 border-gray-400 bg-green-200 text-green-400 hover:bg-green-100 transition-colors hover:text-green-600"
      >
        {modalVisible ? 'Hide' : 'Show'}
      </motion.button>

      <div className=" flex  items-center flex-wrap gap-4">
        {items.map((item: ItemProps) => (
          <Item key={item.id} id={item.id} item={item} clickFn={handleClick} />
        ))}
      </div>
    </div>
  )
}
