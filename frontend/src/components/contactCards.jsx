import React from 'react'
import Image from 'next/image'

const ContactCards = ({icon, borderColor, backgroundHover}) => {
  return (
    <span className={
        `flex h-32 w-full items-center justify-center border-2 border-[${borderColor}] hover:bg-[${backgroundHover}] rounded-lg transition ease-in-out hover:scale-110` 
    }    
    >
      <Image
        src={icon}
        alt="Skill"
        width={100}
        height={100}
      />
    </span>
  )
}

export default ContactCards