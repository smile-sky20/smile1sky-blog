'use client'
import Hambur from './hambur'
import Links from './links'
import HeaderLogo from './headerLogo'

export default function Header() {
  return (
    <div
      className={`sticky top-0 z-[1] border-b border-accents2 bg-background/75`}
      style={{ backdropFilter: 'blur(16px) saturate(180%)' }}
    >
      <div className="max-w-5xl mx-auto h-20 flex justify-between items-center px-6">
        <HeaderLogo />
        <Links />
        <Hambur />
      </div>
    </div>
  )
}
