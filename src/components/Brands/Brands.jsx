import React from 'react';
import { BrandsData } from '../../data/brandsData';

const Brands = () => {
    return (
        <div className='bg-gray-100 py-12'>
            <div className='bg-white py-4 px-12 shadow-md flex items-center justify-center justify-between space-x-6'>
                {BrandsData.map((brand) => (
                    <div key={brand.name} className=''>
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            className='h-8 md:h-12'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;