import React from 'react'
import DashboardLayout from '@/app/dashboardLayout'
import Image from 'next/image'

const NotFound = () => {
  return (
    <DashboardLayout title='Not Found'>
      <div className="flex flex-col py-0 lg:py-16 h-full items-center justify-center lg:justify-normal">
      <Image
          src="/assets/icons/mhz.png"
          width={512}
          height={512}
          alt="404"
          className="size-36 md:size-52 my-10 animate-[spin_20s_linear_infinite]"
        />
        <div className="flex gap-4">
          <p className="text-3xl md:text-5xl font-bold text-[#eeeeee]">404 Content not found</p>
        </div>
        <p className="text-sm md:text-lg font-bold p-4 text-[#959595]">The content you&apos;re searching for isn&apos;t available</p>
      </div>
    </DashboardLayout>
  )
}

export default NotFound