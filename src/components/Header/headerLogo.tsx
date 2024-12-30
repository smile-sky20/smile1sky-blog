import { siYuan } from '@/assets/font'
import SplitLineSvg from '@/assets/svg/splitLine'
import VercelLogo from '@/assets/svg/vercelLogo'
import Link from 'next/link'

export function TitleLeft() {
  return (
    <Link href={'/'} className={`mr-6 flex justify-between items-center gap-x-1 ${siYuan}`}>
      <VercelLogo height={22}></VercelLogo>
      <SplitLineSvg height={32} width={32}></SplitLineSvg>
      <div className='tracking-wider'>Smile1sky.</div>
    </Link>
  )
}
export default TitleLeft
