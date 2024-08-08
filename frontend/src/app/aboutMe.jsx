import React from 'react'
import Image from 'next/image';
import aboutMe from '@/data/aboutMe.json';

const AboutMe = () => {
  return (
    <span className="flex flex-col px-12 pb-5">
      <p className="text-justify text-lg font-medium whitespace-pre-line">{aboutMe.description}</p>
      <p className="text-3xl font-bold mt-16">What I'm Doing</p>
      <div className="flex w-full justify-center">
        <span className="grid grid-cols-2 gap-y-9 gap-x-12 w-11/12 mt-10">
          {aboutMe.offers.map((item, index) => (
            <div className="relative overflow-visible" key={item}>
              <div className="absolute inset-0 bg-gray-200 rounded-2xl h-30 blur"></div>
              <span key={index} className="block relative bg-[#2F2F2F] rounded-2xl h-30">
                <span className="flex flex-1 w-full p-7 gap-4">
                  <span className="block h-full">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={48}
                      height={48}
                    />
                  </span>
                  <div className="flex flex-1 flex-col">
                    <p className="text-2xl font-bold">{item.title}</p>
                    <p className="text-lg font-light mt-2">{item.description}</p>
                  </div>
                </span>
              </span>
            </div>
          ))}
        </span>
      </div>
    </span>
  )
}

export default AboutMe;