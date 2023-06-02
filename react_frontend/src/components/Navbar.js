import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Transition } from '@headlessui/react';
import { HiOutlineX, HiMenuAlt3 } from 'react-icons/hi'
import logo from "../assets/logo.png";




const Navbar = () => {
    const closeWindow = () => {
        window.close();
    };
    const [isOpen, setIsOpen] = useState(false);
    const [boxDataOpen, setBoxDataOpen] = useState(false);
    const [navOpen,setNavOpen] = useState("")
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
        <nav  className=" fixed  w-screen text-black bg-whitesmoke z-50 py-3">
            <div className="flex items-center justify-between  px-10">
                <div className="flex justify-between w-full space-x-10 align-center">
                    <Link to="/" className="flex align-items justify-center gap-2 text-2xl font-serif text-black text-xl leading-9  items-center sm:flex ">
                        <img className='w-16 mr-2 ' alt='logo' src={logo} />
                        <span><h1 className='font-bold text-3xl sm:text-4xl lg:text-4xl '>Eatify</h1></span>
                    </Link>
                    <ul className="hidden  items-center md:flex text-lg tracking-widest ">
                        <li onClick={()=>setNavOpen("Home")} className={`${"Home"==navOpen ? "bg-blue-800 text-white":"none"}  px-1  mr-2 hover:bg-blue-900 hover:text-white rounded-lg`}>
                            <Link className='mx-1 px-2 font-serif  text-xl leading-9' to='/'>Home</Link>
                        </li>
                        <li onClick={()=>setNavOpen("Admin")} className={`${"Admin"==navOpen ? "bg-blue-800 text-white":"none"}  px-1  mr-2 hover:bg-blue-900 hover:text-white rounded-lg`}>
                            <Link className='mx-1 px-2 font-serif  text-xl leading-9' to='/admin'>Admin</Link>
                        </li>
                        <li onClick={()=>setNavOpen("company_admin")} className={`${"company_admin"==navOpen ? "bg-blue-800 text-white":"none"}  px-1  mr-2 hover:bg-blue-900 hover:text-white rounded-lg`}>
                            <Link className='mx-1 px-2 font-serif  text-xl leading-9' to='/company_admin'>Company Admin</Link>
                        </li>
                        <li onClick={()=>setNavOpen("register_company")} className={`${"register_company"==navOpen ? "bg-blue-800 text-white":"none"}  px-1  mr-2 hover:bg-blue-900 hover:text-white rounded-lg`}>
                            <Link className='mx-1 px-2 font-serif  text-xl leading-9' to='/register_company'>Register Company</Link>
                        </li>
                    </ul>



                </div>

                <div className=" flex items-center" onClick={() => setIsOpen(!isOpen)}>
                    <button className="outline-none p-2  md:hidden mobile-menu-button bg-slate-500/30 rounded-full border-1 border-gray-500 select-none focus:bg-slate-800">
                        {isOpen ? <HiOutlineX className='text-2xl text-gray-200' /> :
                            <HiMenuAlt3 className='text-2xl text-gray-200' />
                        }
                    </button>
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
                            <div
                                ref={ref}
                                className="dark:bg-transparent dark:text-black mx-4 pt-4 pb-4 space-y-1"
                            >
                                <Link
                                    to="/"
                                    className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </Link>

                                <Link
                                    to="/admin"
                                    className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Admin
                                </Link>
                                <Link
                                    to="/box_rate"
                                    className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Box Rate
                                </Link>
                                <Link
                                    to="/company_admin"
                                    className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Comapany Admin
                                </Link>
                                <Link
                                    to="/register_company"
                                    className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Register Company
                                </Link>
                            </div>
                        </div>
                    )
                }
            </Transition>
        </nav >
    )
}

export default Navbar