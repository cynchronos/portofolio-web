import React from 'react'
import Image from 'next/image'
import MainContent from '@/components/mainContent'
import TimeLine from '@/components/timeline'
import Skill from '@/components/skill'
import resumeData from '@/data/resume.json'
import skillData from '@/data/skills.json'
const resume = () => {
  return (
    <MainContent title={'Resume'}>
      <span className="flex flex-col px-6 md:px-12 pb-5">
        <div className="flex gap-4 items-center mb-2">
          <Image
            src="/assets/icons/book.svg"
            alt="Book"
            width={25}
            height={35}
          />
          <p className="text-2xl font-semibold">Educations</p>
        </div>
        <div className="ml-1">
          <TimeLine data={resumeData.education} />
        </div>
        <div className="flex gap-4 items-center mb-2 mt-14">
          <Image
            src="/assets/icons/book.svg"
            alt="Book"
            width={25}
            height={35}
          />
          <p className="text-2xl font-semibold">Experiences</p>
        </div>
        <div className="flex flex-wrap ml-1 w-9/12">
          <TimeLine data={resumeData.experiences} />
        </div>
        <div className="flex gap-4 items-center mb-6 mt-14">
          <Image
            src="/assets/icons/book.svg"
            alt="Book"
            width={25}
            height={35}
          />
          <p className="text-2xl font-semibold">Languages</p>
        </div>
        <div className="flex flex-wrap ml-11 gap-4 w-1/2">
          {
            skillData.programmingLanguages.map((item, index) => (
              <Skill data={item} key={index} />
            ))
          }
        </div>
        <div className="flex gap-4 items-center mb-6 mt-14">
          <Image
            src="/assets/icons/book.svg"
            alt="Book"
            width={25}
            height={35}
          />
          <p className="text-2xl font-semibold">Frameworks</p>
        </div>
        <div className="flex flex-wrap ml-11 gap-4 w-1/2">
          {
            skillData.frameworks.map((item, index) => (
              <Skill data={item} key={index} />
            ))
          }
        </div>
        <div className="flex gap-4 items-center mb-6 mt-14">
          <Image
            src="/assets/icons/book.svg"
            alt="Book"
            width={25}
            height={35}
          />
          <p className="text-2xl font-semibold">Currently Learning</p>
        </div>
        <div className="flex flex-wrap ml-11 gap-4 w-1/2">
          {
            skillData.learning.map((item, index) => (
              <Skill data={item} key={index} />
            ))
          }
        </div>
      </span>
    </MainContent>
  )
}

export default resume