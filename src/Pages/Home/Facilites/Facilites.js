import React from 'react';
import { FaCheck } from "react-icons/fa";
const Facilites = () => {
    return (
        <div data-aos-duration="10000" data-aos="zoom-in-up" className='my-20 px-3 md:px-20'>
            <h1 className='text-center font-semibold text-3xl text-gray-700'>Our Facilites</h1>
            <div className='grid my-5 grid-cols-1 md:grid-cols-2'>
                <div className='px-4 md:px-32 '>
                    <div>
                        <div className='flex gap-2 font-semibold text-xl items-center'>
                            <FaCheck></FaCheck>
                            <p>Fast Delivery</p>
                        </div>
                        <p className='pl-6 text-gray-500 my-2'>I ensure that after the shoot I deliver the product as soon as possible .I normally take 2-3 day for delivery</p>
                    </div>
                    <div>
                        <div className='flex gap-2 font-semibold text-xl items-center'>
                            <FaCheck></FaCheck>
                            <p>24/7 customer service</p>
                        </div>
                        <p className='pl-6 text-gray-500 my-2'>
                            I have a dedicated person for cutomer service so that any of you need any help you can contact any time.
                        </p>
                    </div>
                </div>
                <div className='px-4 md:px-32 '>
                    <div>
                        <div className='flex gap-2 font-semibold text-xl items-center'>
                            <FaCheck></FaCheck>
                            <p>Quality Product</p>
                        </div>
                        <p className='pl-6 text-gray-500 my-2'>I use the latest equipment for the shoot.So that I can get the highest quality possible.</p>
                    </div>
                    <div>
                        <div className='flex gap-2 font-semibold text-xl items-center'>
                            <FaCheck></FaCheck>
                            <p>Customer Satisfaction</p>
                        </div>
                        <p className='pl-6 text-gray-500 my-2'>
                            I always try my best for the customer staisfaction.I do my best to take some of the best photos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilites;