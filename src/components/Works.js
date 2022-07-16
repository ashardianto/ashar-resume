import React from 'react'
import onProgess from '../images/on-progress.jpg'

const Works = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-8 mt-32 flex flex-col justify-center w-full h-full">
      <section className="w-full">
        <div>
          <p className='text-5xl text-red font-bold border-b-4 inline'>Works</p>
          <p className='py-6 text-cream font-medium'>Projects I've made during bootcamp or individual projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <img src={onProgess} alt='' />
          <img src={onProgess} alt='' />
          <img src={onProgess} alt='' />
          <img src={onProgess} alt='' />
          <img src={onProgess} alt='' />
          <img src={onProgess} alt='' />
        </div>
      </section>
    </div>
  )
}

export default Works
