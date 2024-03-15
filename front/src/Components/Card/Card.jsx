import React from 'react'
import scene1 from '../../assets/cards/scene1.png'
import { CiAlarmOn } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";

const Card = () => {
    return (
        <div className='  border shadow-2xl w-[80%] h-auto bg-white'>
            <div className='image'>
                <img src={scene1} />
            </div>
            <div className='p-3 space-y-2'>
                <div className='card-nav text-xs gap-2 flex'>
                    <a className='text-sky-600' href=''>Google</a>
                    <a href=''>Trending</a>
                    <a href=''>New</a>
                </div>
                <div className=' space-y-3'>
                    <h3 className='text-md font-semibold tracking-tighter l leading-tight'>
                        Pariatur duis irure exercitation voluptate #1
                    </h3>
                    <p className='text-xs tracking-tighter l leading-tight text-gray-400'>Deserunt laboris proident exercitation deserunt pariatur id pariatur.</p>
                </div>
                <div className=' flex justify-between'>
                    <div className='flex '>
                        <CiAlarmOn className='text-sky-500' /> <span className='text-xs font-normal'>22 SEP 2023</span>
                    </div>
                    <div className='flex'>
                        <CiChat1  className='text-green'/><span className='text-xs font-normal'>Comments</span>
                    </div>
                </div>
                <div className=''>
                    <p className='text-xs flex items-center  font-normal'>Learn More<span><MdKeyboardArrowRight size={15}/></span></p>
                </div>
            </div>

        </div>
    )
}

export default Card