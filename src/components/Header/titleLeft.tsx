import NextJsSvg from '@/ui/svg/nextJs'
import SplitLineSvg from '@/ui/svg/splitLine'
import VercelLogo from '@/ui/svg/vercelLogo'
import useThemeStore from '@/utils/useThemeStore'
import Link from 'next/link'

export function TitleLeft() {
  return (
    <Link href={'/'} className="mr-6 flex justify-between items-center gap-x-1">
      {VercelLogo({ height: 22 })}
      {SplitLineSvg({ width: 32, height: 32 })}
      {NextJsSvg({ width: 90, height: 18 })}
    </Link>
  )
}
export default TitleLeft
