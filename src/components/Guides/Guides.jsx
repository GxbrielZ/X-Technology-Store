import React from 'react';
import {GuidesData} from "../../data/guidesData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from "swiper/modules";

const Guides = () => {
    return (
        <div className='bg-gray-100 pb-12'>
            <div className='container mx-auto bg-white px-6 pt-6 pb-2 rounded-lg shadow-md'>
                <Swiper
                    breakpoints={{
                        340: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                        },
                        700: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                        },
                    }}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className=""
                >
                    {GuidesData.map((item) => (
                        <SwiperSlide key={item.title}>
                            <div className="flex items-end mb-12 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                
                                />
                                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 duration-500" />
                                <div className="relative flex flex-col">
                                    <h1 className="text-xl lg:text-2xl mb-2">
                                        {item.title}
                                    </h1>
                                    <p className="lg:text-lg">
                                        {item.badge}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Guides;