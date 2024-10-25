import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from '../Pages/Home.jsx'
import Login from '../Pages/Login.jsx'
import Signup from '../Pages/Signup.jsx'
import Services from '../Pages/Services.jsx'
import Contact from '../Pages/Contact.jsx'
import Doctors from '../Pages/Doctors/Doctors.jsx'
import DoctorsDetails from '../Pages/Doctors/DoctorDetails.jsx'



const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/doctors/:id" element={<DoctorsDetails />} />
    </Routes>
  )
}

export default Routers