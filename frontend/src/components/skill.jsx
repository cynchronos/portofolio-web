import React from 'react'
import Image from 'next/image'

const Skill = (props) => {
  return (
    <span key={props} className="flex h-6 w-fit items-center px-2 py-4 border border-inherit rounded-lg gap-2">
      <Image
        src={props.data.icon}
        alt="Skill"
        width={20}
        height={20}
      />
      <p className="text-md">{props.data.name}</p>
    </span>
  )
}

export default Skill