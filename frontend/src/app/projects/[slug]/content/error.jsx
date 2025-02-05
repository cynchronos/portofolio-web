'use client'
import { useEffect } from 'react'
import DashboardLayout from '@/app/dashboardLayout'
import Image from 'next/image'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  },[error])
  return (
    <DashboardLayout title='Error'>
      <div className="flex flex-col py-0 lg:py-12 h-full items-center justify-center lg:justify-normal">
        <Image
          src="/assets/images/oops.webp"
          width={512}
          height={512}
          alt="404"
          className="size-52 md:size-72"
        />

        <p className="text-3xl md:text-5xl font-bold text-[#eeeeee] mb-3 md:mb-5">Oops!</p>
        <p className="text-2xl md:text-5xl font-semibold text-[#eeeeee]">something went wrong</p>
        <p className="text sm md:text-lg font-medium p-2 text-[#959595]">Read console.log&#x276A;&#x276B; for more information</p>
      </div>
    </DashboardLayout>
  )

}
