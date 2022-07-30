import React from 'react'
import ProfilePicture from '../images/profile-image.png'

const AboutMe = () => {
  return (
    <div id='aboutme' name="aboutme" className='container justify-between h-screen w-full mx-auto'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full lg:flex-row'>
        <div className='py-0 sm:py-10'>
          <img src={ProfilePicture} alt='' className='lg:w-3/4 md:w-full justify-center border-4 rounded-xl' />
        </div>
        <div className='flex flex-col justify-center h-full'>
          <span className='font-light text-red lg:text-left sm:text-center sm:text-xl lg:text-2xl'>Hello! I'm</span>
          <h2 className='font-bold text-4xl md:text-4xl md:mx-auto lg:text-6xl text-center md:text-left text-red'><b>Ashar</b> Ardianto</h2>
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
