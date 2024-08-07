import Image from "next/image";
import shortBio from "../data/shortBio.json";
import React from 'react'

const Sidebar = () => {
  return (
    <aside className="flex bg-[#272727] flex-auto w-2/12 rounded-2xl justify-center bg-opacity-80">
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
      </span>
    </aside>
  )
}

export default Sidebar