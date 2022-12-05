import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext/UserContext';
import { useState } from 'react';
import { useEffect } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import toast from 'react-hot-toast';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../Hooks/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ServiceDetail = () => {
    const data = useLoaderData()
    const { title, details, image_url, price, _id } = data
    useTitle('Service Detail')


    const { user } = useContext(AuthContext)

    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch(` https://assignment-11-server-gilt.vercel.app/allreview`)
            .then(res => res.json())
            .then(data => {

                const servicewise = data.filter(d => d.serviceID === _id)

                setReview(servicewise)

            })
    }, [reviews, _id])

    const date = new Date().getTime()


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const reviewMessage = form.review.value

        const review = {
            serviceID: _id,
            customerName: user?.displayName,
            customerEmail: user?.email,
            customer: user?.photoURL,
            review: reviewMessage,
            time: date,

        }

        fetch('https://assignment-11-server-gilt.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(result => {

                toast.success('Review Added')
                form.reset()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='px-4 md:px-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 mb-5 mt-10'>
                <div>
                    <PhotoProvider>
                        <PhotoView src={image_url}>
                            <img src={image_url} alt="" className="object-cover object-center w-full rounded-md h-11/12  bg-gray-500" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className='ml-3 md:ml-10'>
                    <h1 className='text-4xl font-bold'>{title}</h1>
                    <p className='font-semibold my-6'>{details}</p>
                    <div className='flex mb-4 items-center'>
                        Ratings : <FaStar className='text-orange-400 mx-2'></FaStar> 4.5
                    </div>
                    <p className='text-xl font-semibold'>Price:$ {price}</p>
                    <button type="button" className="px-4 mx-auto my-3 py-2 font-semibold rounded  border border-purple-500 hover:border-gray-00 bg-purple-500 hover:bg-white text-white transition  hover:text-purple-500">Book Service</button>


                </div>

            </div>
            <div className=''>
                <div>
                    <h1 className='text-2xl font-semibold'>Reviews</h1>
                </div>
                <div>
                    {
                        reviews.map(rev => <ReviewCard
                            key={rev._id}
                            rev={rev}
                        ></ReviewCard>)
                    }
                </div>

                {
                    user?.uid ?
                        <>
                            <form onSubmit={handleSubmit} className='flex  gap-3 my-10 items-center'>
                                <img className='w-12 rounded-full' src={user?.photoURL} alt="" />
                                <input name='review' type="text" placeholder="Type here" className="input input-bordered w-60 md:w-96" />
                                <button type='submit'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 hover:text-gray-700 text-gray-900 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                </button>

                            </form>
                        </>
                        :
                        <>
                            <p className="font-semibold my-10 ">

                                Please <Link className='underline' to='/login'>Login</Link> to add a review
                            </p>

                        </>
                }
            </div>
        </div>
    );
};

export default ServiceDetail;