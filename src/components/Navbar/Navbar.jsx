import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { path: '/laptops', label: 'Laptopy i komputery' },
        { path: '/smartphones', label: 'Smartfony i telefony komórkowe' },
        { path: '/components', label: 'Podzespoły komputerowe' },
        { path: '/gaming', label: 'Gaming i streaming' },
        { path: '/peripherals', label: 'Urządzenia peryferyjne' },
        { path: '/tv-audio', label: 'TV i audio' },
        { path: '/smartwatches', label: 'Smartwatche' },
        { path: '/accessories', label: 'Akcesoria' },
        { path: '/promotions', label: 'Promocje i nowości', special: true },
    ];

    return (
        <nav className='bg-white shadow-md p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                {/* Mobile Menu */}
                <button
                    className='lg:hidden text-2xl'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <IoMenu />
                </button>

                {/* Logo */}
                <div className='flex items-center'>
                    <Link
                        to="/"
                        className='text-2xl font-bold flex items-center'
                    >
                        <span className='text-red-500'>X</span>
                        <span>-TECHNOLOGY</span>
                    </Link>
                </div>

                {/* Search Field */}
                <div className='hidden w-[900px] lg:flex justify-center items-center'>
                    <input
                        type="text" 
                        placeholder='Znajdź produkt...'
                        className='w-full px-4 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500'
                    />
                    <IoMdSearch className='text-2xl ml-2 cursor-pointer' />
                </div>

                {/* Favourites And Cart */}
                <div className='flex items-center gap-2'>
                    <button
                        className='text-2xl'
                    >
                        <IoHeart />
                    </button>
                    <button
                        className='text-2xl'
                    >
                        <IoCart />
                    </button>
                </div>
            </div>

            {/* Desktop Menu Links */}
            <div className='hidden lg:flex justify-center mt-6 space-x-9'>
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`text-sm text-gray-700 hover:text-black ${link.special ? 'text-red-500 hover:text-red-700' : ''}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='lg:hidden bg-white'>
                    {/* Mobile Search Field */}
                    <div className='p-4'>
                        <input
                            type="text" 
                            placeholder='Znajdź produkt...'
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                        />
                    </div>
                    {/* Mobile Menu Links */}
                    <div className='space-y-2'>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`block px-4 py-2 text-gray-700 hover:text-black ${link.special ? 'text-red-500 hover:text-red-700' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;