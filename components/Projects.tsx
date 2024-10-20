import React from 'react'
import { ThreeDCardDemo } from './Card'
import Title from './Title'

const Projects = () => {
  return (
    <div id='projects'>
        <Title title="Projects" />
          <div className='flex flex-wrap justify-center space-x-8'>
            <ThreeDCardDemo 
              title="Temple Trading Hub" 
              description="a place for temple students to trade stuff safely" 
              image="/project_one.png" 
              githubLink='https://github.com/cis3296s24/tth' 
             />
            <ThreeDCardDemo title="XFire" 
              description="Hackathon winner" 
              image="/xfire.png"
              githubLink="https://github.com/timo1k/renren" 
            />
            <ThreeDCardDemo title="memer.ai" 
              description="Hackathon winner" 
              image=""
              githubLink="" 
            />
            
            
            {/* make the props as constants in the data.tsx */}

          </div>
       

    </div>
  )
}

export default Projects