import React from 'react'
import about from '../assets/about.png'
import aboutCard from '../assets/about-card.png'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
    <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row' >
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
            <img src={about} alt="" />
            <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                <img src={aboutCard} alt="" />
            </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className='heading'>Proud to be one of the nations best </h2>
            <p className='text__para'>For 30 years in a row, India's news and world report has recognized us as one of the best publics hospitals in the nation.</p>
            <p className='text__para mt-[30px]'>Our best is something we strive each day, caring for our patients-not looking back at what we accomplished but towards what we can do tommorow. Providing the best.</p>
            <Link to="/">
            <button className='btn'>Learn more</button>
            </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default About