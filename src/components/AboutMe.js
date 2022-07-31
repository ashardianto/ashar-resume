import React from 'react'
import ProfilePicture from '../images/profile-image.png'

const AboutMe = () => {
  return (
    <div id='aboutme' name="aboutme" className='max-w-screen-lg mx-auto p-8 mt-32 flex flex-col justify-between w-full h-full'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
        <div className='py-0 sm:py-10'>
          <img src={ProfilePicture} alt='' className='md:w-600px lg:w-3/4 justify-center border-4 rounded-xl' />
        </div>
        <div className='flex flex-col justify-center h-full md:w-3/4 md:ml-20'>
          <span className='font-light text-red md:text-left sm:text-center sm:text-xl lg:text-2xl'>Hello! I'm</span>
          <h2 className='font-bold text-4xl md:text-4xl lg:text-6xl text-center md:text-left text-red'><b>Ashar</b> Ardianto</h2>
          <p className='text-cream font-medium py-12 max-w-md'><b>I'm a learner.</b> I'm a<b> Front-end Developer</b> who's
            constantly learning to develop my abilities and
            potential to deal with technological advances.
            I am very interested in a new challenge and always
            excited when there is an opportunity to work on a
            project around web development.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
