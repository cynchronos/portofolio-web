import { useEffect, useState } from 'react'
import { getAllProjects } from '@/lib/api/project';
import { getUrlProjectsImagesProduction } from '@/lib/firebase/storageFunction';



export const fetchImagesProduction = async (filename) => {
  // console.log(filename)
  try {
    const responses = await Promise.all(
      filename.map(async (file) => {
        return await getUrlProjectsImagesProduction(file)
      })
    );


    return responses
  } catch (error) {
    return error
  }
}

export const useFetchProjects = (params = null) => {
  const [projects, setProjects] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  async function fetchProjects() {
    try {
      let response;
      if (params && params.slug) {
        response = await getAllProjects(params.slug)
      } else {
        response = await getAllProjects()
      }

      if (response.success === false) {
        throw response;
      }

      const imagesDownload = async (data) => {
        const images = await fetchImagesProduction(data.assets)
        return { ...data, assets: images }
      }

      const updatedData = Array.isArray(response.data)
        ? await Promise.all(response.data.map(imagesDownload))
        : await imagesDownload(response.data)

      setProjects(updatedData)
    } catch (errorFetch) {
      setError(errorFetch)
      setIsLoaded(true)
    }
  }

  useEffect(() => {

    if (projects.length === 0 && !error) {
      fetchProjects()
    } else {
      setIsLoaded(true)
    }

  }, [projects, isLoaded, error])

  return { projects, isLoaded, error }
}