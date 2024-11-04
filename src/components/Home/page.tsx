'use client'
import useThemeStore from '@/utils/useThemeStore'
import { theme } from '@/utils/useThemeStore'
import Link from 'next/link'

import { ImageComp } from '@/utils'

export default function Home() {
  const useTheme = useThemeStore()
  const changeTheme = (theme: theme) => {
    useTheme.setTheme(theme)
  }
  return (
    <div className="max-lg:p-24 lg:p-24 lg:py-12 max-sm:block lg:flex">
      <div className="flex items-center justify-center">
        <ImageComp src='/takeover.avif' width={480} height={280}></ImageComp>
      </div>
      <div className="min-h-[350px] grid items-center justify-items-center p-8 max-sm:py-4 sm:p-12 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <ol className="list-inside list-decimal text-sm text-center sm:text-left max-sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{' '}
              <code className="bg-black/[.05] dark:bg-accents2 px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li>Hello nextJs</li>
          </ol>

          <div className="flex gap-4 items-center">
            <div
              className="flex items-center justify-center bg-foreground rounded-full border border-solid border-transparent transition-colors  text-accents1 gap-2 hover:bg-accents7 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-12 max-sm:px-6 cursor-pointer"
              onClick={() => changeTheme('day')}
            >
              <ImageComp src='https://nextjs.org/icons/vercel.svg' width={20} height={20}></ImageComp>
              Day
            </div>
            <div
              className="flex items-center justify-center hover:bg-accents2 rounded-full border border-solid border-accents3 dark:border-white/[.145] transition-colors text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 max-sm:min-w-28 cursor-pointer"
              onClick={() => changeTheme('dark')}
            >
              Night
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageComp src='https://nextjs.org/icons/file.svg' width={16} height={16}></ImageComp>
            Learn
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageComp src='https://nextjs.org/icons/window.svg' width={16} height={16}></ImageComp>
            Examples
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageComp src='https://nextjs.org/icons/globe.svg' width={16} height={16}></ImageComp>
            Go to nextjs.org →
          </Link>
        </footer>
      </div>
    </div>
  )
}
