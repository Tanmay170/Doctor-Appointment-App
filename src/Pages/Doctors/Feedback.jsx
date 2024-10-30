import React, { useState } from 'react'
import AvatarImg from '../../assets/avatar-icon.png'
import { FormatDate } from '../../utils/FormatDate'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'
const Feedback = () => {

    const[ShowFeedbackForm, SetShowFeedbackForm] = useState(false)

  return (
    <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>All reviews (272)</h4>
        <div className='flex justify-between gap-10 mb-[30px]'>
            <div className='flex gap-3'>
                <figure className='w-10 h-10 rounded-full'><img src={AvatarImg} alt="" /></figure>
                <div>
                    <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>Michael Cord</h5>
                    <p className='text-[14px] leading-6 text-textColor '>{FormatDate('02-14-2023')}</p>
                    <p className='text__para mt-3 font-medium text-[15px]'>Good Services, highly recommended</p>
                </div>
            </div>
            <div className='flex gap-1'>
                {[ ...Array(5).keys()].map((_,index) => ( <AiFillStar key={index} color='#0067FF' />))}
            </div>
        </div>
        {!ShowFeedbackForm && <div className='text-center'>
            <button className='btn' onClick={()=>SetShowFeedbackForm(true)}>Give Feedback</button>
        </div>}
        {ShowFeedbackForm &&  <FeedbackForm /> }
    </div>
  )
}

export default Feedback