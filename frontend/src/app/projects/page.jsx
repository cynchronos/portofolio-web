'use client';
import React from 'react'
import MainContent from '@/components/mainContent'
import Cards from '@/components/cards'

const Projects = () => {
  return (
    <MainContent title={'Projects'}>
     <span className="block h-4/5 max-h-full overflow-y-auto px-12 pb-5">
     <Cards />
     </span>
    </MainContent>
  )
}

export default Projects