import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


export const Navbar: React.FC = () => {
    const title: React.ReactNode = <h1 className='w-full text-3xl font-bold text-emerald-400'>
        Reheb.
    </h1>;

    const [shouldShow, setShouldShow]: [Boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    const toggleMenu: () => void = () => {
        setShouldShow((old) => !old);
    };

    return (
        <div className='bg-emerald-900'>
            <div className='text-black flex justify-between items-center p-6 max-w-[1240px] mx-auto'>
                {title}
                <ul className='hidden md:flex text-gray-300'>
                    <li className='p-4 hover:text-gray-100 cursor-pointer'>Home</li>
                    <li className='p-4 hover:text-gray-100 cursor-pointer'>Subscriptions</li>
                    <li className='p-4 hover:text-gray-100 cursor-pointer'>Packages</li>
                    <li className='p-4 hover:text-gray-100 cursor-pointer'>Contacts</li>
                    <li className='p-4 hover:text-gray-100 cursor-pointer'>About</li>
                </ul>
                <AiOutlineMenu className='md:hidden cursor-pointer text-gray-100' size={20} onClick={toggleMenu} />
                <div className={`md:block fixed top-0 left-0 right-0 ease-linear ${(shouldShow ? 'visible' : 'delay-500 invisible')}`}>
                    <div className={`fixed top-0 w-full h-full bg-gray-900 bg-opacity-50 ease-in-out duration-500 ${(shouldShow ? 'opacity-100' : 'opacity-0')}`}>
                        <div className={`w-[60%] fixed top-0 p-4 h-full border-r border-r-gray-50 bg-white ease-in-out duration-500 ${(shouldShow ? 'left-0' : 'left-[-100%]')}`}>
                            <div className='flex justify-between items-center'>
                                {title}
                                <AiOutlineClose className='cursor-pointer text-gray-700' size={30} onClick={toggleMenu} />
                            </div>
                            <ul className='w-full h-full pt-6'>
                                <li className='p-6 border-b border-gray-50 hover:bg-gray-50 cursor-pointer rounded-lg'>Home</li>
                                <li className='p-6 border-b border-gray-50 hover:bg-gray-50 cursor-pointer rounded-lg'>Subscriptions</li>
                                <li className='p-6 border-b border-gray-50 hover:bg-gray-50 cursor-pointer rounded-lg'>Packages</li>
                                <li className='p-6 border-b border-gray-50 hover:bg-gray-50 cursor-pointer rounded-lg'>Contacts</li>
                                <li className='p-6 border-b border-gray-50 hover:bg-gray-50 cursor-pointer rounded-lg'>About</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
