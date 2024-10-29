import Link from 'next/link'

export function arrowLeft() {
  return (
    <svg
      data-testid="geist-icon"
      height="16"
      stroke-linejoin="round"
      viewBox="0 0 16 16"
      width="16"
      className="w-3 h-3 text-accents5"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.46966 13.7803L6.99999 14.3107L8.06065 13.25L7.53032 12.7197L3.56065 8.75001H14.25H15V7.25001H14.25H3.56065L7.53032 3.28034L8.06065 2.75001L6.99999 1.68935L6.46966 2.21968L1.39644 7.2929C1.00592 7.68342 1.00592 8.31659 1.39644 8.70711L6.46966 13.7803Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export default function About() {
  const num = Math.floor(Math.random() * 5)

  const arrList = [
    '/about/a',
    '/about/a/b',
    '/about/a/b/c',
    '/about/a/b/c/d',
    '/about/a/b/c/d/e',
  ]

  const submitForm = () => {
    alert('submit')
  }
  return (
    <div className="mt-12">
      <div className="container">
        <div className="content-wrapper">
          <Link className="black flex" href={'/'}>
            {arrowLeft()}
            Back
          </Link>

          <div className="title">About The Smile &frac12; Sky</div>
        </div>
      </div>
    </div>
  )
}
