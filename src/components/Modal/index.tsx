import { FC } from 'react'

interface ModalProps {
  children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <div className="bg-background border border-accents2 rounded-md shadow-lg">
      {children}
    </div>
  )
}

export default Modal
