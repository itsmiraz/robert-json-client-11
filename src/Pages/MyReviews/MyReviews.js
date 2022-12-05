import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/UserContext/UserContext';
import useTitle from '../../Hooks/useTitle';
import MyReviewCard from './MyReviewCard';
import './MyReview.css'


const MyReviews = () => {
    const { logOut } = useContext(AuthContext)
    useTitle('My Reviews')


    const { user } = useContext(AuthContext)
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(` https://assignment-11-server-gilt.vercel.app/review?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('RobertToken')}`
            }
        })
            .then(res => {

                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                const userBasedReview = data.filter(d => d.customerEmail === user?.email)
                setReview(userBasedReview)
            })
    }, [logOut, user?.email])

    const handleDeleteReview = (id) => {
        console.log(id)
        fetch(`https://assignment-11-server-gilt.vercel.app/review/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.error('Comment Deleted Successfully')
                    const remainingReviews = review.filter(rev => rev._id !== id)

                    setReview(remainingReviews)
                }
            })

    }

    return (
        <div className=' px-4 mb-60 md:px-48 my-10'>
            {
                review.length !== 0 ?
                    <>
                        {
                            review?.map(rev => <MyReviewCard
                                key={rev._id}
                                rev={rev}
                                handleDeleteReview={handleDeleteReview}
                            ></MyReviewCard>)
                        }
                    </>
                    :
                    <div className='text-nothing '>
                        <h1 className='md:text-4xl text-2xl font-bold text-center '> No reviews were added</h1>

                    </div>


            }
        </div>
    );
};

export default MyReviews;