import Image from "next/image";
import shortBio from "../data/shortBio.json";
import React from 'react'

const Sidebar = () => {
  return (
    <aside className="flex flex-auto w-full lg:w-3/12  justify-center my-6 lg:my-0 px-4 md:px-10 lg:px-0">
      <div className="flex flex-col bg-[#272727] w-full items-center rounded-2xl bg-opacity-85 overflow-auto scrollbar-none">
        <span className="flex flex-col w-3/4 h-full items-center">
          <div className="inline-block mt-14 mb-5 w-36 h-36">
            <Image
              src="/assets/images/profile.jpg"
              alt="Profile Picture"
              width={160}
              height={160}
              className="rounded-full"
            />
          </div>
          <p className='text-2xl font-semibold'>Dimas Rizqi</p>
          <p className='text-md font-light'>Developer</p>
          <span className="block bg-[#3D3E3E] w-full h-px mt-8 mb-16 bg-opacity-80"></span>
          <div className="grid grid-cols-2 lg:contents lg:gap-x-4">
            {
              shortBio.map((bio, index) => {
                return (
                  <span key={index} className="flex w-full h-8 mb-10 items-center">
                    <span className='block flex-auto w-2/12'>
                      <Image
                        src={bio.icon}
                        alt={bio.title}
                        width={25}
                        height={25}
                      />
                    </span>
                    <span className='block flex-auto w-10/12'>
                      <p className='text-md font-medium'>{bio.title}</p>
                      {bio.images == ""
                        ? <p className='text-md font-light overflow-hidden text-ellipsis'>{bio.content}</p>
                        : <div className="flex flex-wrap gap-3">
                          {bio.images.map((image, index) => {
                            return (
                              <Image
                                key={index}
                                src={image}
                                alt={bio.title}
                                width={18}
                                height={18}
                              />
                            )
                          }
                          )}
                        </div>
                      }
                    </span>
                  </span>
                )
              })
            }
          </div>
        </span>
      </div>
    </aside>
  )
}

export default Sidebar