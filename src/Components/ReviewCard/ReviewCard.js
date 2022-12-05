import React from 'react';

const ReviewCard = ({ rev }) => {

    const { customer, customerName, review } = rev;
    return (
        <div className='my-4  relative  flex items-center gap-4'>
            <img className='w-10 absolute mb-4 block top-1 rounded-full' src={customer} alt="" />
            <div className='bg-slate-200 ml-12 rounded-lg px-3'>
                <h1 className='text-xl text-gray-800 font-semibold'>{customerName}</h1>
                <p className='my-0 w-60 md:w-80 py-2 break-all text-gray-700'>{review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;