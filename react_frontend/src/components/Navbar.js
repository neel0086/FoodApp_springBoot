import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Transition } from '@headlessui/react';
import { HiOutlineX, HiMenuAlt3 } from 'react-icons/hi'

import logo from "../assets/logo.png";
// import ColorIcon from "../assets/color.png";




const Navbar = () => {
    const closeWindow = () => {
        window.close();
    };
    const [isOpen, setIsOpen] = useState(false);
    const [boxDataOpen, setBoxDataOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState(() => {
        // Retrieve the color from local storage, or use a default value
        return localStorage.getItem('selectedColor') || '#2C2C2A';
      });

    const handleColorChange = (event) => {
        const color = event.target.value;
        setSelectedColor(color);
        localStorage.setItem('selectedColor', color);
        console.log(color)
    };

    return (
        <nav style={{background:`${selectedColor}`}} className=" fixed shadow-md shadow-slate-600 w-screen text-white backdrop-blur-lg z-50 py-3">
            <div className="flex items-center justify-between  px-10">
                <div className="flex space-x-10 align-center">
                    <Link to="/" className="flex gap-2 text-2xl font-Roboto text-white text-lg  items-center sm:flex ">
                        <img className='w-16 mr-2 ' alt='logo' src={logo} />
                        <span>Smart Rate</span>
                    </Link>
                    <ul className="hidden  items-center md:flex text-lg tracking-widest ">
                        {/* <li className='hover:invert-0.4'>
                            <Link className='mx-1 px-2 font-Roboto text-white text-lg' to='/rate_calculator'>Rate Calculator</Link>
                        </li>
                        <li className='hover:invert-0.4'>
                            <Link className='mx-1 px-2 font-Roboto text-white text-lg' to='/data_search'>Data Search</Link>
                        </li> */}
                        


                    </ul>



                </div>

                <div className=" flex items-center" onClick={() => setIsOpen(!isOpen)}>
                    <button className="outline-none p-2  md:hidden mobile-menu-button bg-slate-500/30 rounded-full border-1 border-gray-500 select-none focus:bg-slate-800">
                        {isOpen ? <HiOutlineX className='text-2xl text-gray-200' /> :
                            <HiMenuAlt3 className='text-2xl text-gray-200' />
                        }
                    </button>
                    {/* onClick={()=>closeWindow()} */}
                    
                    
                </div>



            </div>
            {/* Menu  Mobile*/}
            <Transition show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {
                    (ref) => (
                        <div className="md:hidden " id="mobile-menu">
                            {/* <div
                                ref={ref}
                                className="dark:bg-transparent dark:text-white mx-4 pt-4 pb-4 space-y-1"
                            >
                                <Link
                                    to="/"
                                    className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Calculator
                                </Link>

                                <Link
                                    to="/data_seacrh"
                                    className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    DataSearch
                                </Link>
                                
                            </div> */}
                        </div>
                    )
                }
            </Transition>
        </nav >
    )
}

export default Navbar