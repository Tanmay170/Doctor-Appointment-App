import React from 'react'
import SignupImg from '../assets/signup.gif'
import avatar from '../assets/doctor-img03.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {


  const [SelectedFile,SetSelectedFile] = useState(null);
  const [PreviewURL,SetPreviewURL] = useState("");

  const[FormData,SetFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: SelectedFile,
    gender: '',
    role: 'patient'
  });

  const handleInputChange = e=> {
    SetFormData({...FormData,[e.target.name]:e.target.value})
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  const SubmitHandler = async event => {
    event.preventDefault()
  }

  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={SignupImg} alt="" className='w-full rounded-l-lg' />
            </figure>
          </div>
          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
              Create an <span className='text-primaryColor'>account</span>
            </h3>
            <form onSubmit={SubmitHandler}>
              <div className='mb-5'>
                <input type="text" placeholder='Full Name' name='name' value={FormData.name} onChange={handleInputChange} required className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' />
              </div>
              <div className='mb-5'>
                <input type="email" placeholder='Enter your Email' name='email' value={FormData.email} onChange={handleInputChange} required className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' />
              </div>
              <div className='mb-5'>
                <input type="password" placeholder='Password' name='password' value={FormData.password} onChange={handleInputChange} required className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer' />
              </div>
              <div className='mb-5 flex items-center justify-between'>
                <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
                  Are you a:
                  <select name="role" value={FormData.role} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
                  Gender
                  <select name="role" value={FormData.gender} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <div className='mb-5 flex items-center gap-3'>
                <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                  <img src={avatar} alt="" className='w-full rounded-full' />
                </figure>
                <div className='relative w-[130px] h-[50px]'>
                  <input type="file" name='photo' onChange={handleFileInputChange} id='customFile' accept='.jpg, .png, .jpeg, .webp, .svg' className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
                  <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>Upload Photo</label>
                </div>
              </div>
              <div>
          <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>Sign Up</button>
        </div>
        <p className='mt-5 text-textColor text-center'>Already have an account?<Link to='/login' className='text-primaryColor font-medium ml-1'>Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup