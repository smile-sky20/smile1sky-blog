'use client'
import DayNight from './dayNight'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={`px-6 md:px-12 py-6 border-t border-accents2 bg-background`}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="copy-right text-sm text-accents5">
          Copyright © 2024-{currentYear} Smile &frac12; sky. All rights reserved.
        </div>
        <DayNight />
      </div>
    </footer>
  )
}
