import NextJsSvg from '@/ui/svg/nextJs'
import SplitLineSvg from '@/ui/svg/splitLine'
import VercelLogo from '@/ui/svg/vercelLogo'
import Link from 'next/link'

export function TitleLeft() {
  return (
    <Link href={'/'} className="mr-6 flex justify-between items-center gap-x-1">
      <VercelLogo height={22}></VercelLogo>
      <SplitLineSvg height={32} width={32}></SplitLineSvg>
      <NextJsSvg width={90} height={18}></NextJsSvg>
    </Link>
  )
}
export default TitleLeft
