import React from 'react'

const Title = ({title}: Header) => {
  return (
    <div>
        <h1 className="relative text-2xl text-center uppercase tracking-widest text-blue-100 mb-8">{title}</h1>
    </div>
  )
}

export default Title