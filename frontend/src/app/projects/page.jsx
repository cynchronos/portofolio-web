import React from 'react'
import DashboardLayout from '../dashboardLayout';
import ProjectsCard from '@/components/projectsCard';

const Projects = () => {
  return (
    <DashboardLayout title={'Projects'}>
      <ProjectsCard />
    </DashboardLayout>
  )
}

export default Projects