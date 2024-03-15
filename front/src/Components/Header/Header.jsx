import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TiSocialTwitter } from "react-icons/ti";
import { RiFacebookBoxFill } from "react-icons/ri";

const Header = () => {
    return (
        <div className='w-full bg-darkBlue p-2 hidden sm:flex justify-between'>
            <div className='flex space-x-5'>
                <div className=' flex pl-3'>
                    <div className='text-white flex gap-3 items-center'>
                        <FaPhoneAlt size={12} />
                        <h3 className=' text-[12px] font-normal'>(225)555-0118</h3>
                    </div>
                </div>

                <div className=' flex pl-3 sm:hidden'>
                    <div className='text-white flex gap-1 items-center'>
                        <IoIosMail size={12} />
                        <h3 className=' text-[13px] font-normal'>michile@gmail.com</h3>
                    </div>
                </div>
            </div>
            {/* ---------------------------------------------- */}
            <div className='text-white text-[13px] flex font-semibold'>
                <h3>Follow us and get a chance to win 80% off</h3>
            </div>
            <div className=' flex gap-4'>
          {/* ----------------------------- */}

                <div className='text-white text-[13px]   flex items-center  gap-3 pr-3'>
                    <h3>Follow us :</h3>
                    <div className='flex gap-4'>
                        <PiInstagramLogoFill size={18} />
                        <TiSocialTwitter size={20} />
                        <RiFacebookBoxFill size={18} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header