import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { HeroData } from '../../data/heroData';

const Hero = () => {
    return (
        <section className="mt-2">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                navigation={false}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className=""
            >
                {HeroData.map((item) => (
                    <SwiperSlide key={item.title}>
                        <div className='h-[50vh] flex items-center text-white'>
                            <div
                                className='absolute inset-0 bg-center bg-cover'
                                style={{
                                    backgroundImage: `url(${item.backgroundImage})`
                                }}
                            />
                            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                            <div className='relative w-[35vw] ml-20'>
                                <h1 className='mb-2 text-xl lg:text-3xl font-bold uppercase'>
                                    {item.title}
                                </h1>
                                <p className='lg:text-xl'>
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;