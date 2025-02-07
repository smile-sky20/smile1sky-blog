import { RefObject, useEffect } from 'react'

// 当然也有对应的库：npm install react-intersection-observer --save

export function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, options?: IntersectionObserverInit) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            //为true则表示出现在视口，然后为其添加出现样式
          } else {
            //为flase则表示消失在视口，然后为其添加消失样式
            console.log('Element has left the viewport.')
            if (entry.boundingClientRect.top > 0) {
            }
          }
        })
      },
      options
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    // 清理函数
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return null
}
export default useIntersectionObserver
