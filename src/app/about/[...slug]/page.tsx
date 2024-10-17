'use client'

import { useEffect } from "react"

export default function AboutRelated(props: any) {
  const { params } = props

  useEffect(()=>{
    console.log(params);
        
  },[])
  return (
    <>
      <div className="text-3xl">AboutRelated</div>

      <div className="text-red-300 text-2xl">{}</div>
    </>
  )
}
