import React from 'react';
import {FeaturesData} from "../../data/featuresData";

const Features = () => {
    return (
        <div className='bg-gray-100 pb-12'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
                    {FeaturesData.map((feature) => (
                        <div
                            key={feature.id}
                            className='flex flex-1 items-center bg-white shadow-md rounded-lg p-6'
                        >
                            <div>
                                <h3 className='text-xl font-semibold mb-2'>
                                    {feature.title}
                                </h3>
                                <p className='text-gray-600'>
                                    {feature.description}
                                </p>
                                <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300 mt-5 w-60'>
                                    {feature.buttonLabel}
                                </button>
                            </div>
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className='w-40 h-40'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;