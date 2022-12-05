import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MyReviewCard = ({ rev, handleDeleteReview }) => {

    const [service, setservice] = useState([])
    useEffect(() => {
        fetch('https://assignment-11-server-gilt.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                const commentedService = data.filter(d => d._id === rev.serviceID)
                setservice(commentedService)
            })
    }, [rev.serviceID])

    return (
        <div className=''>

            <div className='flex flex-col  md:flex-row relative bg-gray-300 rounded mb-5 items-center gap-4 font-semibold'>
                <img className='w-48 p-4  rounded' src={service[0]?.image_url} alt="" />
                <div className='flex flex-col md:flex-row text-center  gap-5 items-center'>
                    <Link to={`/service/${service[0]?._id}`}>
                        <div className='mr-7'>
                            <h1 className='text-xl'>{service[0]?.title}</h1>
                        </div>
                    </Link>
                    <div>
                        <p>Your Comment:</p>
                        <p className='w-60 break-all '>{rev.review}</p>
                    </div>
                </div>
                <div className='flex my-2 ml-0 md:ml-40'>

                    <Link to={`/editreview/${rev._id}`}>
                        <button type="button" className="px-4 py-2 mr-4 font-semibold rounded border bg-gray-700 text-white">Edit</button>

                    </Link>
                    <button onClick={() => handleDeleteReview(rev._id)} type="button" className="px-4 py-2 mr-4 font-semibold rounded border border-white text-white-800">Delete</button>

                </div>
            </div>

        </div>
    );
};

export default MyReviewCard;