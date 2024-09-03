'use client';
import React from 'react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import MainContent from '@/components/mainContent'
import projects from '@/data/projects.json'
import { AiFillOpenAI } from "react-icons/ai";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

// export async function generateStaticParams({ params }) {
//   try {
//     params = useParams()
//     const project = await projects.find(project => project.slug === context.params.slug)

//   return {
//     props: {
//       content : project
//     }
//   }
//   } catch (error) {
//     return {
//       notFound: true,
//     } 
//   }
// }

const page = ({ params }) => {
  const project = projects.find(project => project.slug === params.slug)

  if (!project) {
    redirect('/404')
  }

  return (
    <MainContent title="Projects">
      <div className="flex flex-col px-6 md:px-12 pb-10">
        <div className="flex flex-col items-center pt-5 ">
          <h1 className="h-1 text-3xl md:text-4xl font-bold">{project.title}</h1>
        </div>
        <div className="relative overflow-visible">
          <div className="absolute inset-0 bg-gray-200 blur mx-5 md:mx-16 lg:mx-32 mb-10 mt-20"></div>
          <span className="block relative">
            <Image
              src={project.assets[0]}
              alt={project.title}
              width={1920}
              height={1080}
              layout="responsive"
              className="px-5 md:px-16 lg:px-32 pb-10 pt-20"
            />
          </span>
        </div>

        <p className="text-lg text-justify whitespace-pre-wrap">{project.description}</p>

        <div className="py-12">
          <p className="text-md text-justify whitespace-pre-wrap pb-2">Credits</p>
          <ul className="list-disc px-4">
            {
              project.credits ?
                project.credits.map((credit, index) => {
                  return (
                    <li key={index} className="text-md whitespace-pre-wrap">
                      <div className="flex items-center">
                        <span className="text-justify">
                          <Link href={credit.github} target="_blank">
                            <p className="text-md text-white hover:text-[#FF00CD] active:text-[#FFD700]">{credit.name}</p>
                          </Link>
                        </span>
                      </div>
                    </li>
                  )
                })
                :
                <li className="text-md">None</li>
            }
          </ul>
          <div className="flex pt-10 gap-x-2">
            <p className="text-md">Link/Url&apos;s:</p>
            {
              project.status === 'Active' ?
                <Link href={project.url}>
                  <p className="text-md text-white">{project.url}</p>
                </Link>
                :
                <p className="text-md text-gray-400">
                  <del>{project.url}</del> {project.status}!
                </p>

            }
          </div>
        </div>
        <div className="flex flex-col items-center py-5">
          <div className="animate-spin" style={{ animationDuration: '10s' }}>
            <AiFillOpenAI size={30} />
          </div>
          <p className="text-center text-2xl font-semibold pt-2">Galleries</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="w-6/12 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-0.5 my-3"></span>
        </div>

        {/* Image Slider */}
        <div className="flex w-full justify-center items-center pt-5 gap-x-5">
          <FaChevronLeft size={30} />
          <span className='w-9/12 md:w-10/12 lg:w-7/12 h-full bg-gradient-to-r from-inherit via-transparent via-[percentage:20%_80%] to-inherit'>
            <Swiper
              // navigation
              effect="coverflow"
              modules={[EffectCoverflow, Navigation]}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              className="h-full swiper-container"
            >
              {
                project.assets.map((asset, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Image
                        src={asset}
                        alt={project.title}
                        width={1920}
                        height={1080}
                        layout="cover"
                        className="h-full w-full object-cover"
                      />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </span>
          <FaChevronRight size={30} />
        </div>
      </div>
    </MainContent>
  )
}

export default page