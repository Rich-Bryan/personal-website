import React from 'react'
import { ThreeDCardDemo } from './Card'
import Title from './Title'
import { ProjectsData } from '@/lib/data'

const Projects = () => {
  return (
    <div id='projects'>
        <Title title="Projects" />


          <div className='flex flex-wrap justify-center space-x-8'>
            {ProjectsData.map((item, index)=>(
              <ThreeDCardDemo 
                  key={index}
                  title={item.title} 
                  description={item.description}
                  image={item.image}
                  githubLink={item.githubLink}
             />)

            )}

            
            {/* make the props as constants in the data.tsx */}

          </div>
       

    </div>
  )
}

export default Projects