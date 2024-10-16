import Links from './links'
import Image from 'next/image'
export default function Header() {
  return (
    <>
      <div className=" flex items-center px-6 bg-indigo-300">
        <Image
          className="dark:invert mr-12"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Links />
      </div>
    </>
  )
}
