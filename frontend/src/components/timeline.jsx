import React from 'react'

const TimeLine = (props) => {
  return (
    <ul>
      <span className="block ml-1.5 w-1 h-10 bg-[#3D3E3E]"></span>
      {
        props.data.map((item, index) => (
          <li key={index} className="relative flex gap-10 pb-8">
        <div className="before:absolute before:h-full before:left-1.5 before:w-1 before:bg-[#3D3E3E]">
          <span className="top-1.5 absolute bg-white w-4 rounded-full h-4 blur"></span>
          <span className="top-1.5 absolute w-4 h-4 rounded-full bg-gradient-radial from-white via-[#FFE052] to-[#FFE052]"></span>
        </div>
        <div>
          <p className="font-semibold text-white text-lg">{item.place}</p>
          <p className="font-medium text-[#BBBBBB] text-md">{item.position}</p>
          <p className="font-light text-[#F9DB51] text-md">{item.year}</p>
          {
            item.description != ""
              ? <p className="font-light text-white text-md mt-3 whitespace-pre-line">{item.description}</p>
              : ""
          }
        </div>
      </li>
        ))
      }
    </ul>
  )
}

export default TimeLine