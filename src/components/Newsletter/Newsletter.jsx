import React from 'react';
import newsletter from '../../assets/NewsletterAssets/newsletter.png';

const Newsletter = () => {
  return (
    <div className='bg-gray-100 pb-12'>
        <div className='container mx-auto bg-white rounded-lg shadow-md'>
            <div className='grid grid-cols-2'>
                {/* Left Side */}
                <div className='flex flex-col justify-center px-6'>
                    <h2 className='text-2xl font-semibold mb-1'>
                        Zapisz się do newslettera
                    </h2>
                    <p className='text-lg mb-4'>
                        Zdobywaj dodatkowe rabaty i nie przegap żadnej promocji
                    </p>
                    <div className='flex space-x-2'>
                        <input
                            type="email"
                            placeholder='Adres e-mail...'
                            className='w-[75%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 mb-4'
                        />
                        <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300 mb-4'>
                            Zapisz się
                        </button>
                    </div>
                    <p className='text-gray-500 text-sm'>
                        Potrzebujemy Twoich danych aby wysłać newsletter. Administratorem danych osobowych jest x-technology.
                    </p>
                </div>
                {/* Right Side */}
                <div className='flex items-center justify-center'>
                    <img
                        src={newsletter}
                        alt="newsletter image"
                        className='w-full h-auto rounded-r-lg'    
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Newsletter;