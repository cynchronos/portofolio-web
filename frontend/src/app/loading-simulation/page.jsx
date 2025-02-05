'use client'
import React, { useEffect, useRef } from 'react'
import DashboardLayout from '@/app/dashboardLayout'
import loadingData from '@/data/loadingData.json'
import { typeWriterLoadingTitle, typeWriterLoadingSubtitle } from '@/components/animations/loadingAnimation'

const Page = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {

    if (titleRef.current) {
      const titleChars = titleRef.current.querySelectorAll('.loading-title')
      typeWriterLoadingTitle(titleChars, 0.4)
    }

    if (subtitleRef.current) {
      const subtitleChars = subtitleRef.current.querySelectorAll('.font-medium')
      typeWriterLoadingSubtitle(subtitleChars, 0.2)
    }
  }, [])

  return (
    <DashboardLayout title='loading'>
      <div className="flex flex-col w-full h-full items-center justify-center gap-y-7">
        <div className="flex gap-x-4" ref={titleRef}>
          {
            loadingData.romaji.split('').map((char, index) => (
              <p key={index} className="loading-title text-4xl opacity-0">{char}</p>
            ))
          }
        </div>
        <div className="flex gap-x-2" ref={subtitleRef}>
          {
            loadingData.plainText.split('').map((char, index) => (
              <p key={index} className="text-xl font-medium opacity-0">{char}</p>
            ))
          }
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Page