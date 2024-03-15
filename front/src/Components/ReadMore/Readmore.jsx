import React from 'react';
import Button from '../Buttons/Button';
import hero2 from '../../assets/hero2.png';
import couple from '../../assets/asian-couple.png'
const Readmore = () => {
    return (
        <div className='bg-white w-full'>

            <div className="xs:mt-5 md:mt-0 md:grid grid-cols-2 grid-rows-1 gap-4 xs:flex flex-col">

                <div className='xs:h-1/2 md:h-screen flex items-center justify-center'>
                    <img src={couple} className='xs:w-1/2 md:w-[86%]' alt="Product" />
                </div>
                <div className='xs:h-1/2 md:h-screen items-center justify-start flex'>
                    <div data-aos="fade-left" className='mx-auto xs:space-y-5 md:space-y-10 text-black'>
                        <p className='uppercase xs:mt-4 md:mt-0'>summer 2024</p>
                        <h1 className='text-5xl font-bold'>Part of the Natural <br/> Universe </h1>
                        <p className=''>Laboris id aliqua consequat officia <br />sint aliqua qui mollit voluptate amet aute non ipsum.</p>
                        <div className='flex gap-5'>
                           
                            <Button title="Add to Cart" color="#2BB770" />
                            <Button title="Read More" textColor="white" color="#2BB770"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Readmore;
