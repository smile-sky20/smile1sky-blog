import { linksArr } from '@/components/Header/links'
import Link from 'next/link'
import Modal from '@/components/Modal'
import Hamburge from '@/ui/svg/hamburge'
import { useState } from 'react'

import styles from './index.module.css'

export function Hambur() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="relative max-lg:block sm:hidden">
      <div onClick={handleClick}>
        <Hamburge width={24} height={24}></Hamburge>
      </div>
      {isOpen && (
        <div className={`${styles.modalClass} absolute top-8 right-6`}>
          <Modal>
            {linksArr.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className={`p-2 block text-sm text-accents6 hover:text-accents8 transition-colors border-b border-accents2 last:border-b-0`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </Modal>
        </div>
      )}
    </div>
  )
}
export default Hambur
