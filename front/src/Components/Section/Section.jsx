import React from 'react';
import Button from '../Buttons/Button';
import hero2 from '../../assets/hero2.png';

const Section = () => {
    return (
        <div className='bg-[#23856D] w-full'>

            <div className="md:grid grid-cols-2 grid-rows-1 gap-4 xs:flex flex-col">
                <div className='xs:h-1/2 md:h-screen xs:items-center justify-start flex'>
                    <div data-aos="fade-left" className='mx-auto space-y-10 text-white'>
                        <p className='uppercase xs:mt-4 md:mt-0'>summer 2024</p>
                        <h1 className='text-5xl font-bold'>Vita Classic <br />Product</h1>
                        <p className=''>Laboris id aliqua consequat officia <br />sint aliqua qui mollit voluptate amet aute non ipsum.</p>
                        <div className='flex gap-5'>
                            <p className='font-bold text-xl items-center flex'>$ 12.46</p>
                            <Button title="Add to Cart" color="#2BB770" />
                        </div>
                    </div>
                </div>
                <div className='xs:h-1/2 md:h-screen flex items-center justify-center'>
                    <img src={hero2} className='xs:w-1/2 md:w-[50%]' alt="Product" />
                </div>
            </div>

        </div>
    );
}

export default Section;
