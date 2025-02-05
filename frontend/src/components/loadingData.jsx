'use client'
import React, { useEffect, useRef } from 'react'
import loadingData from '@/data/loadingData.json'
import { typeWriterLoadingTitle, typeWriterLoadingSubtitle } from '@/components/animations/loadingAnimation'

const LoadingData = () => {
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
      <div className="flex flex-col w-full h-full items-center justify-center gap-y-7">
        <div className="flex gap-x-4" ref={titleRef}>
          {
            loadingData.romaji.split('').map((char, index) => (
              <p key={index} className="loading-title text-xl md:text-2xl opacity-0 bg-gradient-to-b from-[#00AEEF] to-[#0033A0] bg-clip-text inline-block text-transparent">{char}</p>
            ))
          }
        </div>
        <div className="flex gap-x-2" ref={subtitleRef}>
          {
            loadingData.plainText.split('').map((char, index) => (
              <p key={index} className="text-md md:text-xl font-medium opacity-0">{char}</p>
            ))
          }
        </div>
      </div>
  )
}

export default LoadingData;