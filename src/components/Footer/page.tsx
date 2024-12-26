'use client'
import DayNight from './dayNight'

export default function Footer() {
  return (
    <div
      className={`px-24 max-h-[240px] border-t border-accents2 bg-background`}
    >
      <div className="intro my-4 flex justify-between items-center">
        <div className="copy-right text-accents5">
          Copyright © 2021 smile1sky all rights reserved
        </div>
        <DayNight></DayNight>
      </div>
    </div>
  )
}
