import React from 'react';
import FooterSection from './FooterSection';
import { FooterData, FooterSections } from '../../data/footerData';
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterMobile = () => {
    return (
        <div className='md:hidden space-y-6'>
            {/* Contact */}
            <div className='text-sm text-gray-700'>
                <h2 className='font-semibold text-2xl mb-4'>Kontakt</h2>
                <div className='flex items-center space-x-4 text-lg ml-3'>
                    <FaPhoneAlt />
                    <p>22 444 33 33</p>
                </div>
                <div className='mt-2'>
                    <div className='flex items-center space-x-3 ml-2'>
                        <IoIosMail className='text-2xl' />
                        <p className='text-lg'>x-technology@xtech.com</p>
                    </div>
                    <div className='flex items-center space-x-3 ml-2 mt-2'>
                        <IoLocationSharp className='text-2xl' />
                        <p className='text-lg'>Punkty X-Technology</p>
                    </div>
                </div>
                <div className='flex space-x-4 text-2xl mt-8 ml-2'>
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
            {/* Orders */}
            <div className='space-y-2 text-sm text-gray-700'>
                {FooterSections.map((section, index) => (
                    <FooterSection key={index} title={section.title} items={section.items} />
                ))}
            </div>
            {/* Logos */}
            <div className="mt-8 pt-4 flex justify-center space-x-4">
                {FooterData.map((item, index) => (
                    <img
                        key={index}
                        src={item.image}
                        alt={item.title} 
                        className='h-8'  
                    />
                ))}
            </div>
            {/* Copyright */}
            <div className="text-center text-gray-500 text-xs mt-4">
                &copy; x-technology 2024
            </div>
        </div>
    );
};

export default FooterMobile;