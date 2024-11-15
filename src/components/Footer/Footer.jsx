import React from 'react';
import FooterMobile from './FooterMobile';
import { FooterSections } from '../../data/footerData';
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className='shadow-md'>
            <div className='container mx-auto px-4 md:px-8 py-4'>
                {/* Desktop */}
                <div className='hidden md:flex justify-between'>
                    {FooterSections.map((section, index) => (
                        <div
                            key={index}
                            className='space-y-2 text-sm text-gray-700'
                        >
                            <h2 className='font-semibold text-xl'>
                                {section.title}
                            </h2>
                            {section.items.map((item, idx) => (
                                <p key={idx}>{item}</p>
                            ))}
                        </div>
                    ))}
                    {/* Contact */}
                    <div className='space-y-2 text-sm text-gray-700'>
                        <h2 className='font-semibold text-xl'>Kontakt</h2>
                        <div className='flex items-center space-x-4 text-lg ml-2'>
                            <FaPhoneAlt />
                            <p>22 444 33 33</p>
                        </div>
                        <div className='mt-2'>
                            <div className='flex items-center space-x-3 ml-2'>
                                <IoIosMail className='text-2xl' />
                                <p className='text-lg'>x-technology@xtech.com</p>
                            </div>
                            <div className='flex items-center space-x-3 ml-2 mt-2 mb-8'>
                                <IoLocationSharp className='text-2xl' />
                                <p className='text-lg'>Punkty X-Technology</p>
                            </div>
                        </div>
                        <div className='flex space-x-4 text-2xl ml-2'>
                            <a href="https://www.facebook.com/" aria-label='Facebook'>
                                <FaFacebook />
                            </a>
                            <a href="https://www.instagram.com/" aria-label='Instagram'>
                                <FaInstagram />
                            </a>
                            <a href="https://x.com/" aria-label='X'>
                                <FaXTwitter />
                            </a>
                            <a href="https://www.youtube.com/" aria-label='YouTube'>
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <FooterMobile />
            </div>
        </footer>
    );
};

export default Footer;