'use client';
import React from 'react'
import MainContent from '@/components/mainContent'
import Cards from '@/components/cards'

const Projects = () => {
  return (
    <MainContent title={'Projects'}>
     <span className="flex flex-col px-12 pb-5">
     <Cards />
     </span>
    </MainContent>
  )
}

export default Projects