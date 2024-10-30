import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa"
import About from './About'

const Home = () => {
  return (
   <div>
     <div className="hero-section  px-6 sm:px-6 lg:px-40 py-12 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="hero-content w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 ">
              Explore the World, One Country at a Time.
            </h1>
            <p className="text-zinc-300 mb-6">
              Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 text-white  rounded-full border-[1px] border-white hover:bg-white hover:text-black transition-colors duration-300">
              Start Exploring
              <FaLongArrowAltRight className="ml-2" />
            </button>
          </div>
          <div className="hero-img w-full lg:w-1/2">
            <img 
              src="/images/world.png" 
              alt="World map illustration" 
              className="w-full h-auto max-w-md mx-auto lg:max-w-full"
            />
          </div>
        </div>
      </div>
      
    </div>
    <div className='mt-10 '>
        <About/>
    </div>
   </div>
  )
}

export default Home