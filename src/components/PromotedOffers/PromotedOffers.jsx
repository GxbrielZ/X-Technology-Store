import React from 'react';
import OfferOfTheDay from "../../assets/PromotedOffersAssets/offerOfTheDay.jpg";
import {PromotedOffersData} from "../../data/promotedOffersData";

const PromotedOffers = () => {
    return (
        <div className='bg-gray-100 py-12'>
            <div className='flex space-x-4 container mx-auto'>
                {/* Left Side */}
                <div className='bg-white p-4 rounded-lg shadow-md'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-bold mb-2'>Oferta Dnia</h1>
                        <p className='text-sm text-gray-500 mb-4 p-2 border rounded-md'>
                            Oszczędź 500 zł
                        </p>
                    </div>
                    <div>
                        <img
                            src={OfferOfTheDay}
                            alt="Lenovo Yoga Tab 13" 
                            className='w-full rounded-lg'
                        />
                    </div>
                    <p className="text-lg font-semibold mb-1">
                        Lenovo Yoga Tab 13
                    </p>
                    <p className="text-gray-500 mb-1">
                        8GB/128GB/Android 11/WiFi
                    </p>
                    <p className="text-red-600 font-bold text-xl mb-2">
                        1 199,00 zł
                    </p>
                    <p className="text-gray-400 line-through">
                        1 499,00 zł
                    </p>
                    <p className="text-gray-400 text-xs">
                        najniższa cena z 30 dni przed obniżką
                    </p>
                    <div className="mt-4 text-red-500 font-bold">Wyprzedany</div>
                    <div className="mt-6">
                        <p className="text-sm text-gray-600 mb-1">
                            Następny Produkt:
                        </p>
                        <div className="flex space-x-2">
                            <div className="text-center">
                                <p className="text-lg font-semibold">
                                    04
                                </p>
                                <p className="text-xs text-gray-500">
                                    godz.
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-semibold">
                                    50
                                </p>
                                <p className="text-xs text-gray-500">
                                    min
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-semibold">49</p>
                                <p className="text-xs text-gray-500">sek.</p>
                            </div>
                        </div>
                        <button className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg">
                            Kup teraz
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <div className='bg-white p-4 rounded-lg shadow-md'>
                    <h1 className='text-2xl font-semibold mb-4'>
                        Polecane
                    </h1>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                        {PromotedOffersData.map((product, index) => (
                            <div
                                key={index}
                                className='bg-white rounded-lg hover:shadow-md transition border p-4 cursor-pointer'
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='object-cover'
                                />
                                <h2 className='mt-3 text-lg font-medium'>
                                    {product.name}
                                </h2>
                                <p className='text-xl font-bold text-gray-800 mt-2'>
                                    {product.price}
                                </p>
                                {product.badge && (
                                    <span className="inline-block mt-2 text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                                        {product.badge}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromotedOffers;