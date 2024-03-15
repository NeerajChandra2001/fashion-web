import React from 'react';
import Card from '../Card/Card';

const Featured = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='mx-auto w-[80%]'>
                <div className='pt-10 pb-10'>
                    <div className='text-center space-y-5'>
                        <p className='font-semibold text-sky-500'>Practice Advice</p>
                        <h1 className='font-bold text-3xl text-black'>Featured Post</h1>
                        <p className='text-black'>Nostrud laboris sit ipsum dolor.Aute eiusmod<br /> labore fugiat in elit sint nostrud non.</p>
                    </div>
                </div>
                <div className='flex justify-center w-full'> {/* Align the grid to the center */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div><Card /></div>
                        <div><Card /></div>
                        <div><Card /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
