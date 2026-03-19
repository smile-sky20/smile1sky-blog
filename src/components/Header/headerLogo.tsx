import { siYuan } from '@/assets/font'
import SplitLineSvg from '@/assets/svg/splitLine'
import VercelLogo from '@/assets/svg/vercelLogo'
import Link from 'next/link'

export function TitleLeft() {
  return (
    <Link href={'/'} className={`mr-6 flex justify-between items-center gap-x-2 ${siYuan.className}`}>
      <VercelLogo height={22}></VercelLogo>
      <SplitLineSvg height={32} width={32}></SplitLineSvg>
      <div className='tracking-wider font-medium text-accents8'>Smile &frac12; sky.</div>
    </Link>
  )
}
export default TitleLeft
