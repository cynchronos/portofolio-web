import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FcLike } from 'react-icons/fc'
import MainContent from '@/components/mainContent'
import ContactCards from '@/components/contactCards'
import contactsData from '@/data/contactsData.json'

const Contacts = () => {
  return (
    <MainContent title={'Contacts'}>
      <span className="flex flex-col px-6 md:px-12 pb-5">
        <span className="flex flex-col w-full justify-center items-center pt-5">
          <p className=" text-4xl md:text-5xl font-extrabold text-slate-200">Let&apos;s Collaborate!</p>
          <div className="w-full md:w-9/12 lg:w-7/12 grid grid-cols-2 gap-8 m-14">
            {
              contactsData.map((contact, index) => {
                return (
                  <Link key={index} href={contact.link} target="_blank">
                    <ContactCards
                      icon={contact.icon}
                      borderColor={contact.borderColor}
                      backgroundHover={contact.backgroundHover}
                    />
                  </Link>
                )
              })
            }
          </div>
        </span>
        <div className="flex justify-center items-center mt-0 lg:mt-16 gap-x-2 text-sm md:text-lg">
          <p>Created with</p>
          <FcLike className="size-6" />
          <p>by</p>
          <Link href={contactsData[2].link}>
            <Image
              src="/assets/images/profile.jpg"
              alt="Next.js"
              width={40}
              height={40}
              className="rounded-full w-7 md:w-10"
            />
          </Link>
          <p>x</p>
          <Image
            src="/assets/images/kafka.png"
            alt="Next.js"
            width={40}
            height={40}
            className="rounded-full w-7 md:w-10"
          />
          <p>using</p>
          <Link href="https://tailwindcss.com/">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="Next.js"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </span>
    </MainContent>
  )
}

export default Contacts