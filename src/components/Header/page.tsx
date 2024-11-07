'use client'
import Hambur from './hambur'
import Links from './links'
import HeaderLogo from './headerLogo'
import TitleRight from './titleRight'

export default function Header() {
  return (
    <div
      className={`sticky top-0 z-[1] h-16 flex items-center px-6 border-b border-accents2 bg-[background,0.75]`}
      style={{ backdropFilter: 'blur(16px) saturate(180%)' }}
    >
      <div className="flex-1 flex items-center">
        <HeaderLogo />
        <Links />
      </div>

      <TitleRight></TitleRight>

      <Hambur></Hambur>
    </div>
  )
}
