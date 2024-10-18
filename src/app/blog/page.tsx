import { lusitana } from '@/ui/font'
import styles from './index.module.css'
import Link from 'next/link'
const linksArr = [
  { name: 'HomePage', url: '/' },
  { name: 'Blog', url: '/blog', svg: true },
  { name: 'Article', url: '/article', svg: true },
  { name: 'About', url: '/about' },
]
export default function Blog() {
  return (
    <div className={`${lusitana.className} ${styles.back} text-2xl`}>
      <div className="card-warpper">
        <div className="card-tabs">
          {linksArr.map((link, index) => (
            <Link
              href={link.url}
              className={`mr-8 h-16 flex items-center text-sm text-accents4 hover:text-accents8 transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="card-box">
          
        </div>
      </div>
    </div>
  )
}
