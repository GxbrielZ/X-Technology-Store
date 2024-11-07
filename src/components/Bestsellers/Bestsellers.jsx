import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { BestsellersData } from '../../data/bestsellersData';

const Bestsellers = () => {
    return (
        <div className='bg-gray-100 pb-12'>
            <div className='container mx-auto bg-white rounded-lg shadow-md pt-6 pb-8 px-6'>
                <h2 className='text-2xl font-bold mb-4'>Bestsellery</h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={true}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                    }}
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {BestsellersData.map((item) => (
                        <SwiperSlide key={item.title} className='flex flex-col items-center'>
                            <div className='bg-white hover:shadow-md transition border p-4 cursor-pointer rounded-lg w-full'>
                                {item.banner && (
                                    <span className='absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded'>
                                        {item.banner}
                                    </span>
                                )}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-40 mx-auto mb-4 object-contain"
                                />
                                <h3 className="text-sm font-semibold text-gray-800 truncate w-full">
                                    {item.title}
                                </h3>
                                <p className="text-lg font-bold text-gray-900">
                                    {item.price}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-pagination flex justify-center mt-6"></div>
            </div>
        </div>
    );
};

export default Bestsellers;