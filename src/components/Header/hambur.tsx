import { linksArr } from '@/components/Header/links'
import Link from 'next/link'
import Modal from '@/components/Modal'
import Hamburge from '@/assets/svg/hamburge'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export function Hambur() {
  const [isOpen, setIsOpen] = useState(false)
  const path = usePathname()
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative max-lg:block sm:hidden">
      <button
        onClick={handleClick}
        className="p-1 rounded-md hover:bg-accents1 transition-colors"
        aria-label="打开菜单"
      >
        <Hamburge width={24} height={24}></Hamburge>
      </button>
      {isOpen && (
        <div className="animate__animated animate__fadeIn absolute top-12 -right-2 z-10 min-w-32">
          <Modal>
            {linksArr.map((link, index) => {
              const isActive = path.includes(link.url)
              return (
                <Link
                  key={index}
                  href={link.url}
                  className={`px-4 py-3 block text-sm transition-colors border-b border-accents2 last:border-b-0
                    ${isActive
                      ? 'text-mocha font-medium'
                      : 'text-accents6 hover:text-accents8 hover:bg-accents1'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}
          </Modal>
        </div>
      )}
    </div>
  )
}
export default Hambur
