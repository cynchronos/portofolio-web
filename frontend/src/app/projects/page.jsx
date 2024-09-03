'use client';
import React from 'react'
import MainContent from '@/components/mainContent'
import Cards from '@/components/cards'
import projects from '@/data/projects.json'
import Link from 'next/link';

const Projects = () => {
  return (
    <MainContent title={'Projects'}>
      <ul className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 px-6 md:px-12 pb-5 gap-6 mt-7">
        {
          projects.map((project, index) => {
            return (
              <li key={index}>
                <Link href={`/projects/${project.slug}/content`}>
                  <Cards
                    cardName={project.title}
                    description={project.description}
                    images={project.assets}
                  />
                </Link>
              </li>
            )
          })
        }

      </ul>
    </MainContent>
  )
}

export default Projects