import React, { useState } from 'react'
import Image from 'next/image'

const Cards = () => {
  const [isHover, setIsHover] = useState(false)
  const handleHover = () => {
    setIsHover(!isHover)
  }
  return (
    <div className="relative mt-7">
      {
        isHover ?
        <div className="absolute transition ease-in-out inset-0 bg-white w-3/12 rounded-lg h-64 blur scale-105"></div>
        : null
      }
      <span
      className="block transition ease-in-out relative w-3/12 h-64 bg-[#2F2F2F] rounded-lg hover:scale-105"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      >
        <div className="relative w-full h-40">
          <Image
            src="/assets/images/messenger-app-1.png"
            alt="Kafka"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg p-2"
          />
        </div>
        <div className="flex-wrap">
          <p className="text-xl font-bold text-white pl-4 pt-1">Messenger App</p>
        </div>
      </span>
    </div>
  )
}

export default Cards