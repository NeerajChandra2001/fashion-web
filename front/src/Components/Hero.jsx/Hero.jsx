import React from 'react';
import HERO from '../../assets/shop-hero-1-product-slide-1.jpg';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Button from '../Buttons/Button';

const Hero = () => {
    return (
        <div className='hero w-full'>
            <div className='w-full h-[600px] sm:h-[600px] lg:h-screen md:h-screen relative'>
                <img src={HERO} alt='hero' className='w-full h-full object-cover' />
                <div className='text-white absolute top-1/2 transform -translate-y-1/2 left-4 md:left-8'>
                <MdArrowBackIos size={30}/>
            </div>
            <div className='absolute top-1/2 transform -translate-y-1/2 right-4 md:right-8 text-white'>
                <MdArrowForwardIos size={30}/>
            </div>
              
                <div className="absolute inset-0 grid my-auto h-[50%]  mx-auto w-[80%]  sm:justify-center md:block">
                    
                    <div className='text-white space-y-8 items-center'>
                        <h6 className='text-md uppercase text-center md:text-left font-Montserrat font-bold'>Summer 2024</h6>
                        <h1 className='text-4xl text-center md:text-left sm:text-5xl uppercase font-bold '>New Collections</h1>
                        <p className='text-center md:text-left   md:left-0 '>Ad enim excepteur ex sint tempor reprehenderit  <br /> anim id mollit amet veniam nostrud.</p>
                        <div className=' text-center md:text-left'>
                           <Button title="Shop Now" textColor="black" color="white" data-aos="fade-right"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
