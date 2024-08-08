import React from 'react'
import Link from 'next/link'
import navMenu from '../data/navMenu.json'
import AboutMe from '@/app/aboutMe'

const MainContent = ({ title = 'About Me', children }) => {
  return (
    <aside className="block bg-[#272727] flex-auto w-full rounded-2xl bg-opacity-85">
        <div className="relative">
          <span className="flex absolute right-0 bg-[#313131] w-fit h-16 float-end rounded-tr-2xl rounded-bl-2xl justify-center items-center gap-8 bg-opacity-60 py-7 px-12">
            {navMenu.map((menu, index) => {
              return (
                <Link key={index} href={menu.url}>
                  <p className={`button text-lg font-semibold ${title == menu.name ? null : 'hover:text-[#FF00CD]'} ${title == menu.name ? 'text-[#FFD700]' : 'text-white'}`}>{menu.name}</p>
                </Link>
              )
            }
            )}
          </span>
        </div>
        <span className="flex flex-col w-full h-full mx-auto">
          <div className="px-12 pt-16">
            <p className="text-3xl font-bold pt-13">{title}</p>
            <span className="block w-7 bg-[#FFD700] h-1 mt-5 mb-3"></span>
          </div>
          <div className="overflow-y-auto scrollbar-none">
            {
              title == 'About Me' ? <AboutMe /> : children

            }
          </div>
        </span>
    </aside>
  )
}

export default MainContent