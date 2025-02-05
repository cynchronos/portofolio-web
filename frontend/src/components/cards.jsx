'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Cards = ({ cardName, description, images }) => {
  const [isHover, setIsHover] = useState(false)
  const handleHover = () => {
    setIsHover(!isHover)
  }
  return (
    <div className="w-full">
      <span
        className="flex flex-col transition ease-in-out relative bg-[#2F2F2F] rounded-lg hover:scale-105 h-auto hover:shadow-neon"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className="relative w-full h-40">
          <Image
            src={images.length > 0 ? images[0] : images}
            alt="Kafka"
            layout="fill"
            objectFit={images[0] == '/assets/images/image-not-found.png' ? 'contain' : 'cover'}
            className="rounded-t-lg p-2"
          />
        </div>
        <div className="flex-wrap">
          <p className="text-xl font-bold text-white pl-4 pt-1">{cardName}</p>
        </div>
        <div className="flex-wrap">
          <p className="text-sm font-light text-white pl-4 pt-1 truncate ...">{description}</p>
        </div>
        <div className="flex justify-end p-4 pt-5">
          <p className={`text-md ${isHover ? 'text-[#FFD700] font-semibold':'text-white font-medium'}`}>More info &raquo;</p>
        </div>
      </span>
    </div>
  )
}

export default Cards