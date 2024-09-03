import React from 'react'
import MainContent from '@/components/mainContent'
import Image from 'next/image'

const NotFound = () => {
  return (
    <MainContent title='Not Found'>
      <div className="flex flex-col py-16 h-full items-center">
        <Image
          src="/assets/icons/404.webp"
          width={512}
          height={512}
          alt="404"
          className="size-40 my-10"
        />
        <div className="flex gap-4">
          <p className="text-5xl font-bold text-[#d3c297]">404</p>
          <p className="text-5xl font-bold text-[#eeeeee]">Page not found</p>
        </div>
        <p className="text-lg font-bold p-4 text-[#959595]">The page you're searching for isn&apos;t available</p>
      </div>
    </MainContent>
  )
}

export default NotFound