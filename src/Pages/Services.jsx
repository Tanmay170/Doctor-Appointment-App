import React from 'react'
import ServicesCard from '../Components/ServicesCard.jsx'
import { services } from '../data/services.js' 
const Services = () => {
  return (
    <section>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]'>
          {services.map((item, index) => (<ServicesCard item={item} index={index} key={index} />))}
        </div>
      </div>
    </section>
  )
}

export default Services