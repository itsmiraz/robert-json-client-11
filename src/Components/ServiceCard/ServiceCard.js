import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link, } from 'react-router-dom';
const ServiceCard = ({ service }) => {

    const { image_url, _id, price, title, details } = service;

    return (
        <div>
            <div style={{ height: '500px' }} className="relative bg-gray-200 hover:bg-gray-300 border-none hover:border border-orange-500 hover:shadow-2xl  shadow-lg   text-gray-900">
                <img src={image_url} alt="" className="object-cover object-center w-full  h-72 bg-gray-400 hover:bg-gray-500" />
                <div className="flex flex-col justify-between  space-y-8">
                    <div className="space-y-2 p-2">
                        <h2 className="text-xl font-bold tracking-wide">{title.slice(0, 30)}</h2>
                        <p className="text-gray-600">{details.slice(0, 100)}...</p>
                        <div className='text-orange-400   '>
                            <div className='flex my-2 justify-between '>

                                <div className='flex'>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                </div>
                                <div >
                                    <p className='font-semibold text-gray-900'>Price:${price}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Link to={`/service/${_id}`}>
                        <button type="button" className="flex  w-full absolute bottom-0 items-center justify-center  p-3 font-semibold tracking-wide  bg-gray-800  text-white">View Details</button>

                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;