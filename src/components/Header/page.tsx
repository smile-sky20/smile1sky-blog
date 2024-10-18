'use client'
import Links from './links'
import TitleLeft from './titleLeft'
import TitleRight from './titleRight'

export default function Header() {
  return (
    <div
      className={`sticky top-0 flex items-center px-6 border-b border-accents2 bg-background`}
      style={{ backdropFilter: 'saturate(180%)' }}
    >
      <div className="flex-1 flex items-center">
        <TitleLeft />

        <Links />
      </div>

      <TitleRight></TitleRight>
    </div>
  )
}
