import React, { useEffect, useState } from 'react';
import male from '../../assets/editors/m-cover.png';
import man2 from '../../assets/editors/man2.png';
import accessorie1 from '../../assets/editors/accessories1.png';
import Kids from '../../assets/editors/kids1.png';
import Woman2 from '../../assets/editors/woman2.png';
import Button from '../Buttons/Button';

const Editors = () => {
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const isMobile = windowWidth >= 768;

    return (
        <div className='flex items-center justify-center xs:mb-20 md:mb-2'>
            <div className='mt-10 md:items-center justify-center space-y-10'>
                <div className='space-y-1'>
                    <h3 className='text-2xl flex justify-center items-center uppercase font-bold'>editor's pick</h3>
                    <h6 className='flex justify-center items-center text-center text-xl font-light mx-auto'>Problems trying to resolve the conflict between.</h6>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 grid-rows-2 gap-2">

                    {isMobile ? (
                        <div data-aos-delay="100" data-aos="fade-right" className="col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 mx-auto relative">
                            <img src={male} alt="Male Editor" className="md:w-full object-cover mx-auto" />
                            <div className='absolute top-3/4 left-1/2 transform -translate-x-1/2'>
                                <Button title="Men" textColor="black" color="white" />
                            </div>
                        </div>
                    ) : (
                        <div data-aos-delay="100" data-aos="fade-left" className="col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 mx-auto relative justify-center flex items-center">
                            <img src={man2} alt="Male Editor" className="md:w-full h-[500px] md:h-full object-cover mx-auto" />
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <Button title="Men" textColor="black" color="white" />
                            </div>
                        </div>
                    )}

                    <div data-aos-delay="100" data-aos="fade-down" className="md:w-full col-span-1 mb-2 mx-auto md:mt-0 sm:col-start-3 row-span-1 sm:row-span-2 relative">
                        <img src={Woman2} alt="Female Editor" className="w-full object-cover" />
                        <div className='absolute top-3/4 left-1/2 transform -translate-x-1/2'>
                            <Button title="Women" textColor="black" color="white" />
                        </div>
                    </div>

                    <div data-aos-delay="100" data-aos="fade-left" className="col-span-1 md:col-start-4 w-[80%] mx-auto md:w-full relative">
                        <img src={accessorie1} alt="Accessory 1" className="w-full object-cover mx-auto md:w-full" />
                        <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2'>
                            <Button title="Accessories" textColor="black" color="white" />
                        </div>
                    </div>

                    <div data-aos-delay="10" data-aos="fade-left" className="col-span-1 md:col-start-4 row-span-1 sm:row-start-2 w-[80%] md:w-full mx-auto relative">
                        <img src={Kids} alt="Accessory 2" className="w-full object-cover md:w-full mx-auto" />
                        <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2'>
                            <Button title="Kids" textColor="black" color="white" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Editors;
