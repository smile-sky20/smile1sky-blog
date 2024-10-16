import Link from 'next/link'
import styles from './index.module.css'

export default function Links() {
  const linksArr = [
    { name: 'HomePage', url: '/' },
    { name: 'Blog', url: '/blog', svg: true },
    { name: 'Article', url: '/article', svg: true },
    { name: 'About', url: '/about' },
  ]

  return (
    <>
      {linksArr.map((link, index) => (
        <div className={`relative`}>
          <Link
            key={index}
            href={link.url}
            className="mr-8 h-16 flex items-center text-sm text-gray-600 transition-colors hover:text-black  active:bg-blue-300"
          >
            {link.name}
          </Link>
          {link.svg && (
            <svg
              aria-hidden="true"
              className={styles.svgClass}
              height="7"
              viewBox="0 0 6 6"
              width="7"
            >
              <path d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"></path>
            </svg>
          )}
        </div>
      ))}
    </>
  )
}
