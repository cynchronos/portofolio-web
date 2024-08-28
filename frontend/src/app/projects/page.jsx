'use client';
import React from 'react'
import MainContent from '@/components/mainContent'
import Cards from '@/components/cards'
import projects from '@/data/projects.json'

const Projects = () => {
  return (
    <MainContent title={'Projects'}>
      <span className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 md:px-12 pb-5">
        {
          projects.map((project, index) => {
            return (
              <Cards
                key={index}
                cardName={project.name}
                description={project.description}
                images={project.images}
              />
            )
          })
        }
          
     </span>
    </MainContent>
  )
}

export default Projects