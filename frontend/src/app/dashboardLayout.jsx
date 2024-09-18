import React from 'react'
import Sidebar from "@/components/sidebar";
import MainContent from '@/components/mainContent';

const DashboardLayout = ({ title = 'About Me', children }) => {
  return (
    <main>
      <div className="relative flex h-screen w-screen items-start lg:items-center justify-normal lg:justify-between text-white">
        <div className="flex lg:block justify-center items-center w-screen h-screen lg:w-4/5 lg:h-4/5 mx-auto my-auto overflow-y-auto" >
          <div className="block lg:flex lg:flex-row gap-x-16 w-full h-full lg:items-stretch mx-auto">
            <Sidebar />
            <MainContent title={title}>
              {children}
            </MainContent>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DashboardLayout