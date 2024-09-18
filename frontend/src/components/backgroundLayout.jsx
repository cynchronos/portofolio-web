'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

const BackgroundLayout = () => {
  const pathname = usePathname()

  if (pathname.includes('/admin')) {
    return null;
  }else {
    return (
      <video className="absolute w-screen h-screen object-cover" src="/assets/media/background.webm" autoPlay loop muted></video>
    )
  }
}

export default BackgroundLayout