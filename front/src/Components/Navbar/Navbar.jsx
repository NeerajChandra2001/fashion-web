import React, { useState, useEffect } from 'react';
import { MdOutlinePerson } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`w-full p-5 mx-auto border-b bg-white flex md:mx-auto justify-between ${isSticky ? 'sticky top-0 z-50' : ''}`}>
        <div className='items-center flex xl:space-x-32 w-full'>
          <div className=' md:w-1/6 logo mdtext-darkBlue font-Montserrat font-bold '>
            Bandage
          </div>
          <div className={`nav-items sm:flex gap-5 md:w-2/4 md:gap-5 md:text-[16px]  ${showMenu ? 'hidden' : 'hidden'}`}>
            <a href=''>Home</a>
            <a href=''>Shop</a>
            <a href=''>About</a>
            <a href=''>Blog</a>
            <a href=''>Contact</a>
            <a href=''>Pages</a>
          </div>
        </div>
        <div className='flex items-center gap-8 text-lightBlue md:w-1/4'>
          <div className='sm:flex hidden md:text-[16px] items-center gap-3 font-semibold '>
            <MdOutlinePerson size={25}/>Login/Register
          </div>

          <div className='flex items-center gap-2  '>
            <CiSearch size={25} /><CiShoppingCart size={25} /><CiHeart size={25} />
          </div>
          {/* Render menu icon only for small screens */}
          <div className={`sm:hidden ${showMenu ? 'hidden' : 'block'} items-center`}>
            <button onClick={toggleMenu}><CiMenuFries size={20}/></button>
          </div>
          {/* Render close menu icon for small screens when menu is open */}
          {showMenu && (
            <div className="sm:hidden">
              <button onClick={toggleMenu} size={25}><AiOutlineClose /></button>
            </div>
          )}
        </div>
      </div>
       {/* Render menu items for small screens */}
       <div className={`sm:hidden ${showMenu ? 'block' : 'hidden'}`}>
          {/* Render your menu items here for smaller screens */}
          <div className='flex flex-col items-center justify-center space-y-2 p-2 font-Montserrat text-gray-500'>
          <a href=''>Home</a>
          <a href=''>Product</a>
          <a href=''>Pricing</a>
          <a href=''>Contact</a>
          </div>
        </div>
    </>
  );
};

export default Navbar;
