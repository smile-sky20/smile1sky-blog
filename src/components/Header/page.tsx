'use client'
import Hambur from './hambur'
import Links from './links'
import HeaderLogo from './headerLogo'

export default function Header() {

  return (
    <div
      className={`sticky top-0 z-[1] h-20 flex justify-between items-center px-6 border-b border-accents2 bg-[background,0.75]`}
      style={{ backdropFilter: 'blur(16px) saturate(180%)' }}
    >
      <HeaderLogo />
      <Links />

      <Hambur></Hambur>
    </div>
  )
}
