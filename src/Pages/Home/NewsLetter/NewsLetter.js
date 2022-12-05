import React from 'react';

const NewsLetter = () => {
    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" className='flex md:flex-row flex-col my-10 mx-4 md:mx-20 p-10 md:p-20 bg-gray-200 gap-10 border items-center justify-center'>
            <div>
                <h1 className='text-3xl font-bold text-gray-800'>
                    Subscirebe for E-mail NewsLetter
                </h1>
                <p className='w-full'>
                    We daily send a news letter about the current photograohy affairs.
                </p>
            </div>
            <div className='flex md:flex-row flex-col'>



                <input type="email" name="Search" placeholder="Subscribe" className="w-48 h-10 my-auto  md:w-80 pl-3 text-sm rounded mr-4 focus:outline-none border  text-gray-800  " />


                <button type="button" className="px-4 mx-auto my-3 py-2 font-semibold rounded  border hover:border-purple-500 border-gray-900 hover:bg-purple-500 hover:text-white transition  text-gray-800">Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;