import Image from "next/image";
import shortBio from "../data/shortBio.json";
import React from 'react'

const Sidebar = () => {
  return (
    <aside className="flex flex-auto w-full lg:w-1/5  justify-center my-6 lg:my-0 px-4 md:px-10 lg:px-0">
      <div className="flex flex-col bg-[#272727] w-full items-center rounded-2xl bg-opacity-85 overflow-y-auto no-scrollbar overflow-x-hidden scrollbar-none px-8 lg:px-5 py-10">
        <div className="inline-block mb-5 size-36">
          <Image
            src="/assets/images/profile.jpg"
            alt="Profile Picture"
            width={160}
            height={160}
            className="rounded-full"
          />
        </div>
        <p className='lg:text-xl xl:text-2xl font-semibold'>Dimas Rizqi</p>
        <p className='text-md font-light'>Developer</p>
        <div className="block bg-[#3D3E3E] w-full h-px mt-8 mb-16 bg-opacity-80"></div>
        <div className="flex flex-col w-full items-center lg:items-start">
          <div className="grid grid-cols-2 w-fit lg:flex h-full lg:flex-col gap-x-4 lg:gap-x-0 gap-y-8">
            {
              shortBio.map((bio, index) => {
                return (
                  <div key={index} className="flex w-full lg:w-auto h-fit items-center gap-x-4">
                    <div className='block flex-init'>
                      <Image
                        src={bio.icon}
                        alt={bio.title}
                        width={25}
                        height={25}
                        className="size-6"
                      />
                    </div>
                    <div className='flex flex-col w-full overflow-x-hidden'>
                      <p className='text-xs sm:text-sm lg:text-md font-medium'>{bio.title}</p>
                      {bio.images == ""
                        ? <p className='text-xs sm:text-sm lg:text-md w-full font-light truncate'>{bio.content}</p>
                        : <div className="flex flex-wrap gap-3 ">
                          {bio.images.map((image, index) => {
                            return (
                              <Image
                                key={index}
                                src={image}
                                alt={bio.title}
                                width={18}
                                height={18}
                                className="size-4"
                              />
                            )
                          }
                          )}
                        </div>
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar