import { Mekuri, MekuriContext, useMekuri } from '@funtech-inc/mekuri'
import { useGSAP } from '@gsap/react'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'

export const AnimateComp = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname()
  return (
    <MekuriContext trigger={pathName}>
      <MekuriAnimation>
        <Mekuri>
          <div className="">{children}</div>
        </Mekuri>
      </MekuriAnimation>
    </MekuriContext>
  )
}

export const MekuriAnimation = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { contextSafe } = useGSAP({ scope: ref })
  useMekuri({
    onEveryEnter: contextSafe(() => {
      gsap.to(ref.current, {
        opacity: 1,
      })
    }),
    onEveryLeave: contextSafe(() => {
      gsap.to(ref.current, {
        opacity: 0,
      })
    }),
  })
  return <div ref={ref}>{children}</div>
}
