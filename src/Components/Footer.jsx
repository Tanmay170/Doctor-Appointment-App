import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { CiGlobe } from "react-icons/ci";

const sociallinks = [
  {
    path: "https://portfolio-website-lugk.vercel.app/",
    icon: <CiGlobe className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "https://github.com/Tanmay170",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "https://www.linkedin.com/in/tanmay-bansal-3b17a8247/",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "https://www.instagram.com/tanmay__170/",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />
  }
];

const quicklinks1 = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/",
    display: "About Us"
  },
  {
    path: "/services",
    display: "Services"
  },
  {
    path: "/",
    display: "Blog"
  }
];
const quicklinks2 = [
  {
    path: "/find-a-doctor",
    display: "Find a doctor"
  },
  {
    path: "/",
    display: "Request an appointment"
  },
  {
    path: "/",
    display: "Find a location"
  },
  {
    path: "/",
    display: "Get a opinion"
  }
];
const quicklinks3 = [
  {
    path: "/",
    display: "Donate"
  },
  {
    path: "/contact",
    display: "Contact Us"
  }
];


const Footer = () => {

  const year = new Date().getFullYear

  return (
    <footer className='pb-16 pt-10'>
    <div className='container'>
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
        <div>
          <img src={Logo} className='w-40' alt="" />
          <p className='text-[16px] leading-7 font-[400] text-textColor mt-3'>Copyright {year} developed by Tanmay Bansal all rights reserved.</p>
          <div className='flex items-center gap-3 mt-4'>
            {sociallinks.map((link,index) => <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none' >
            {link.icon}
            </Link>)}
          </div>
        </div>
        <div className='mt-10'>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick Links</h2>
          <ul>{quicklinks1.map((item,index)=> <li key={index} className='mb-4 hover:underline'><Link className='text-[16px] leading-7 font-[400] text-textColor hover:text-black' to={item.path}>{item.display}</Link></li>)}</ul>
        </div>
        <div className='mt-10'>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>I want to:</h2>
          <ul>{quicklinks2.map((item,index)=> <li key={index} className='mb-4 hover:underline'><Link className='text-[16px] leading-7 font-[400] text-textColor hover:text-black' to={item.path}>{item.display}</Link></li>)}</ul>
        </div>
        <div className='mt-10'>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Support</h2>
          <ul>{quicklinks3.map((item,index)=> <li key={index} className='mb-4 hover:underline'><Link className='text-[16px] leading-7 font-[400] text-textColor hover:text-black' to={item.path}>{item.display}</Link></li>)}</ul>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer