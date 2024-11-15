import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

const FooterSection = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='border-b border-gray-200'>
            {/* Accordion Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='w-full flex justify-between items-center py-2 text-xl font-semibold text-gray-700'
            >
                {title}
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <IoMdArrowDropdown />
                </span>
            </button>
            
            {/* Accordion Content */}
            <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'h-auto' : 'h-0'}`}
                style={{ maxHeight: isOpen ? '500px' : '0' }}
            >
                <ul className="pl-4 py-2 space-y-1 text-sm text-gray-700">
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FooterSection;