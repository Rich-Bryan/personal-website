import React from 'react'
import { ThreeDCardDemo } from './Card'
import Title from './Title'

const Projects = () => {
  return (
    <div id='about'>
        <Title title="Projects" />
        <ThreeDCardDemo title="Temple Trading Hub" description="a place for temple students to trade stuff safely" image="/project_one.png"  />
        <ThreeDCardDemo title="XFire" description="Hackathon winner" image="/xfire.png"  />
        {/* make the props as constants in the data.tsx */}
    </div>
  )
}

export default Projects