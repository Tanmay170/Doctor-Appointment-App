import React from 'react'
import { FormatDate } from '../../utils/FormatDate'

const DoctorAbout = () => {
    return (
        <div>
            <div>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of</h3>
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Dr. John Timber</span>
                <p className='text__para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aliquam magnam perferendis quae eligendi, sed, repellendus deleniti nemo quidem veniam natus sint dolorum laudantium sit dolore, adipisci molestias nam commodi.</p>
            </div>

            <div className='mt-12'>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>Education</h3>
                <ul className='pt-4 md:p-5'>
                    <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                        <div>
                            <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{FormatDate('09-13-2014')} - {FormatDate('09-13-2016')}</span>
                            <p className='text-[16px] leading-7 font-medium text-textColor'>PHD in Surgeon</p>
                        </div>
                        <p className='text-textColor text-[14px] leading-5 font-medium'> New Apollo hospital, New Delhi.</p>
                    </li>
                    <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                        <div>
                            <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{FormatDate('07-04-2010')} - {FormatDate('09-13-2014')}</span>
                            <p className='text-[16px] leading-7 font-medium text-textColor'>PHD in Surgeon</p>
                        </div>
                        <p className='text-textColor text-[14px] leading-5 font-medium'> New Apollo hospital, New Delhi.</p>
                    </li>
                </ul>
            </div>

            <div className='mt-12'>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>Education</h3>
                <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                    <li className='p-4 rounded bg-[#fff9ea]'>
                        <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{FormatDate('09-13-2014')} - {FormatDate('09-13-2016')}</span>
                        <p className='text-textColor text-[16px] leading-6 font-medium'>Sr. Surgeon</p>
                        <p className='text-textColor text-[14px] leading-5 font-medium'> New Apollo hospital, New Delhi.</p>
                    </li>
                    <li className='p-4 rounded bg-[#fff9ea]'>
                        <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{FormatDate('07-04-2010')} - {FormatDate('09-13-2014')}</span>
                        <p className='text-textColor text-[16px] leading-6 font-medium'>Sr. Surgeon</p>
                        <p className='text-textColor text-[14px] leading-5 font-medium'> New Apollo hospital, New Delhi.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DoctorAbout