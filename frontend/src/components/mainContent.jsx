import React from 'react'
import Link from 'next/link'
import navMenu from '../data/navMenu.json'
import AboutMe from '@/app/aboutMe'

const MainContent = ({ title = 'About Me', children }) => {
  return (
    <aside className="block bg-[#272727] flex-auto w-9/12 rounded-2xl bg-opacity-70 overflow-visible">
      <span className="flex sticky bg-[#313131] w-5/12 h-16 float-end rounded-tr-2xl rounded-bl-2xl justify-center items-center gap-8 bg-opacity-60">
        {navMenu.map((menu, index) => {
          return (
            <Link key={index} href={menu.url}>
              <p className={`button text-lg font-semibold ${title == menu.name ? null : 'hover:text-[#FF00CD]'} ${title == menu.name ? 'text-[#FFD700]' : 'text-white'}`}>{menu.name}</p>
            </Link>
          )
        }
        )}
      </span>
      <span className="block w-full h-full mx-auto">
        <div className="px-12">
          <p className="text-3xl font-bold mt-16">{title}</p>
          <span className="block w-7 bg-[#FFD700] h-1 mt-5 mb-3"></span>
        </div>
        {
          title == 'About Me' ? <AboutMe /> : children

        }
      </span>
    </aside>
  )
}

export default MainContent