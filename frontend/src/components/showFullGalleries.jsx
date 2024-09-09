import React, { useState, useContext } from 'react'
import Image from 'next/image';
import './styles/showFullGalleries.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { GalleryContext } from '@/app/projects/[slug]/content/page'

const ShowFullGalleries = ({ assets }) => {
  const [showGalleries, setShowGalleries] = useContext(GalleryContext)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  function handlePointerImage(e) {
    e.stopPropagation();
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-10" onClick={() => setShowGalleries(false)}>
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div className="flex w-10/12 lg:w-7/12 z-30" onClick={handlePointerImage}>
          <Swiper
            loop={true}
            modules={[Navigation, Thumbs, FreeMode]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            className="main-image rounded-xl"
          >
            {assets.map((asset, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={asset}
                  alt={`image ${index}`}
                  width={1920}
                  height={1080}
                  layout="cover"
                  className="h-full w-full object-cover rounded-xl"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex w-11/12 h-16 md:h-32 lg:w-10/12 lg:h-52 justify-center items-center mt-8" onClick={handlePointerImage}>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={20}
            slidesPerView={
              assets.length > 4 ? 4 : assets.length
            }
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs, Navigation]}
            className="thumb-image w-full h-full"
          >
            {assets.map((asset, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={asset}
                  alt={`image ${index}`}
                  width={1920}
                  height={1080}
                  layout="cover"
                  className={`h-full w-full object-cover rounded-lg`}
                  loading="lazy"
                />
              </SwiperSlide>
            )
            )}
          </Swiper>
        </div>
      </div>
    </div>
  )

}

export default ShowFullGalleries