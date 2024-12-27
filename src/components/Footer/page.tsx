'use client'
import DayNight from './dayNight'

export default function Footer() {
  return (
    <div
      className={`px-12 border-t border-accents2 bg-background`}
    >
      <div className="intro my-2 flex justify-between items-center">
        <div className="copy-right text-accents5">
          Copyright © 2024-2025 smile1sky
        </div>
        <DayNight></DayNight>
      </div>
    </div>
  )
}
