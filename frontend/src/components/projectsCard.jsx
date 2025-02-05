'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Cards from '@/components/cards'
import projectss from '@/data/projects.json'
import LoadingData from './loadingData'
import { useFetchProjects } from '@/hooks/project'

const ProjectsCard = () => {
  const { projects: initProject, isLoaded: projectsLoaded, error: projectsError } = useFetchProjects()
  const [projects, setProjects] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(null)

  const fetchAllData = async () => {
    if (initProject && projectsLoaded && !projectsError) {
      try {
        setProjects(initProject)
        setIsLoaded(true)
      } catch (error){
        setIsError(error)
        setIsLoaded(true)
      }
    }
  }

  useEffect(() => {
    if (!projects || projects.length === 0) {
      fetchAllData()
    }else{
      setIsLoaded(true)
    }
  }, [projectsLoaded, projects])
  
  const allLoaded = projectsLoaded && isLoaded

  return allLoaded && !isError ? (
    <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 px-6 md:px-12 pb-5 gap-6 mt-7">
      <ul>
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
    </div>
  ) : (
    <LoadingData />
  )
}

export default ProjectsCard