import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {

    const data = useLoaderData()


    const handleFrom = e => {
        e.preventDefault()
        const form = e.target;
        const review = form.review.value;
        console.log(review);
        const body = {
            review: review
        }
        fetch(`https://assignment-11-server-gilt.vercel.app/review/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)

        })
            .then(result => {

                toast.success('Review Edited')
            })
            .catch(err => console.log(err))


    }

    return (
        <div className='h-screen my-10'>
            <h1 className='text-center font-semibold'>Edit your Review</h1>
            <form onSubmit={handleFrom} className='text-center flex items-center my-4 justify-center mx-auto'>
                <p className='font-semibold mr-2 '>
                    Your Review:
                </p>
                <input name='review' defaultValue={data?.review} type="text" placeholder="Type here" className="input mr-2 h-10 rounded input-bordered w-96 " />
                <button className="btn rounded btn-sm">Update</button>
            </form>
        </div>
    );
};

export default EditReview;