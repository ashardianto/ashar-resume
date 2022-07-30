import React, { useEffect, useState, useRef } from 'react'
import onProgess from '../images/on-progress.jpg'
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'

const featuredMarketplace = [
  "../images/portfolio-ecomurz-home.png",
  "../images/portfolio-ecomurz-home-2.png",
  "../images/portfolio-ecomurz-home-4.png",
  "../images/portfolio-ecomurz-catalog-info.png",
  "../images/portfolio-ecomurz-shopping-cart.png",
]

const featuredGamePage = [
  "../images/portfolio-binar-homepage.png",
  "../images/portfolio-binar-user-dashboard.png",
  "../images/portfolio-binar-game-choice.png",
]

let countMP = 0
let countGP = 0

const Works = () => {

  const [currIndexMP, setCurrIndexMP] = useState(0)
  const [currIndexGP, setCurrIndexGP] = useState(0)

  const slideRefMP = useRef()
  const slideRefGP = useRef()

  const removeAnimationMP = () => {
    slideRefMP.current.classList.remove('fade-anim')
  }

  const removeAnimationGP = () => {
    slideRefGP.current.classList.remove('fade-anim')
  }

  useEffect(() => {
    slideRefMP.current.addEventListener('animationend', removeAnimationMP)
    slideRefGP.current.addEventListener('animationend', removeAnimationGP)
    // startSliderMP()
    // startSliderGP()
  }, [])

  const startSliderMP = () => {
    setInterval(() => {
      handleNextMP()
    }, 3000)
  }
  const startSliderGP = () => {
    setInterval(() => {
      handleNextGP()
    }, 3000)
  }

  const handleNextMP = () => {
    countMP = (countMP + 1) % featuredMarketplace.length
    setCurrIndexMP(countMP)
    slideRefMP.current.classList.add('fade-anim')
  }
  const handlePrevMP = () => {
    const featuredLength = featuredMarketplace.length
    countMP = (currIndexMP + featuredLength - 1) % featuredLength
    setCurrIndexMP(countMP)
    slideRefMP.current.classList.add('fade-anim')
  }
  const handleNextGP = () => {
    countGP = (countGP + 1) % featuredGamePage.length
    setCurrIndexGP(countGP)
    slideRefGP.current.classList.add('fade-anim')
  }
  const handlePrevGP = () => {
    const featuredLength = featuredGamePage.length
    countGP = (currIndexGP + featuredLength - 1) % featuredLength
    setCurrIndexGP(countGP)
    slideRefGP.current.classList.add('fade-anim')
  }

  return (
    <div id='works' className="max-w-screen-lg mx-auto p-8 mt-32 flex flex-col justify-center w-full h-full">
      <section className="w-full">
        <div>
          <p className='text-5xl text-red font-bold border-b-4 inline'>Works</p>
          <p className='py-6 text-cream font-medium'>Projects I've made during bootcamp or individual projects</p>
        </div>

        <div ref={slideRefMP} className='relative'>
          <div className='mt-12 text-center'>
            <p className='text-3xl sm:text-xl text-red font-bold border-b-4 inline'>Marketplace</p>
          </div>
          <div className='mt-6'>
            <img className='w-5/6 sm:h-48 md:h-96 m-auto' src={featuredMarketplace[currIndexMP]} alt='' />
          </div>

          <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
            <button onClick={handlePrevMP}><MdArrowBackIosNew /></button>
            <button onClick={handleNextMP}><MdArrowForwardIos /></button>

          </div>
        </div>

        <div ref={slideRefGP} className='relative'>
          <div className='mt-20 text-center'>
            <p className='text-3xl sm:text-xl text-red font-bold border-b-4 inline'>Online Game Page</p>
          </div>
          <div className='mt-6'>
            <img className='w-5/6 sm:h-48 md:h-96 m-auto' src={featuredGamePage[currIndexGP]} alt='' />
          </div>

          <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
            <button onClick={handlePrevGP}><MdArrowBackIosNew /></button>
            <button onClick={handleNextGP}><MdArrowForwardIos /></button>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Works
