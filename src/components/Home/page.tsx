'use client'
import Image from 'next/image'
import useThemeStore from '@/utils/useThemeStore'
import { theme } from '@/utils/useThemeStore'

export default function Home() {
  const useTheme = useThemeStore()
  const changeTheme = (theme: theme) => {
    useTheme.setTheme(theme)
  }
  const getImage = (
    src: string,
    width: number,
    height: number,
    isPriority: boolean
  ) => {
    return (
      <Image
        className={useTheme.activeTheme == 'day-theme' ? '' : 'invert'}
        src={src}
        alt="Next.js logo"
        width={width}
        height={height}
        priority={isPriority}
      />
    )
  }
  return (
    <div className="max-lg:p-24 lg:p-24 lg:py-12 max-sm:block lg:flex">
      <div className="flex items-center justify-center">
        {getImage('/takeover.avif', 480, 280, true)}
      </div>
      <div className="min-h-[350px] grid items-center justify-items-center p-8 max-sm:py-4 sm:p-12 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <ol className="list-inside list-decimal text-sm text-center sm:text-left max-sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{' '}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
            <li>Hello nextJs</li>
          </ol>

          <div className="flex gap-4 items-center">
            <div
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-accents1 gap-2 hover:bg-accents7 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-12 max-sm:px-6"
              onClick={() => changeTheme('day-theme')}
            >
              {getImage('https://nextjs.org/icons/vercel.svg', 20, 20, true)}
              Day
            </div>
            <div
              className="rounded-full border border-solid border-accents3 dark:border-white/[.145] transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 max-sm:min-w-28"
              onClick={() => changeTheme('dark-theme')}
            >
              Night
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {getImage('https://nextjs.org/icons/file.svg', 16, 16, true)}
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {getImage('https://nextjs.org/icons/window.svg', 16, 16, true)}
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {getImage('https://nextjs.org/icons/globe.svg', 16, 16, true)}
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </div>
  )
}
