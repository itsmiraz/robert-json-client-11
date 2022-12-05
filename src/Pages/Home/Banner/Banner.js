import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div >
            <div className='justify-items-center my-20 mb-10 px-10 md:px-20 grid grid-cols-1 md:grid-cols-2'>
                <div data-aos-duration="10000" data-aos="zoom-in-down">
                    <img className='w-full' src='https://img.freepik.com/premium-vector/male-photographer-holding-highend-camera-long-lens-photographing-distant-birds-animals-flat-style-cartoon-vector-illustration_610956-231.jpg?w=2000' alt="" />
                </div>
                <div data-aos-duration="10000" data-aos="zoom-in-left" className='text-gray-800 md:text-start text-center mt-5 md:mt-20'>
                    <h1 className='text-6xl  font-bold'>Hi There!</h1>
                    <h1 className='text-4xl   font-bold'>
                        My Name is Robert
                    </h1>
                    <p className='my-2 text-gray-600 font-semibold'>
                        I am a Proffesional Photographer.I have been a photogrpher since 2012.I did many photography projects.If need any help please feel free to contact.
                    </p>

                    <Link to='/blogs'>
                        <button type="button" className="px-4 mx-auto my-3 py-2 font-semibold rounded  border border-purple-500 hover:border-gray-00 bg-purple-500 hover:bg-white text-white transition  hover:text-purple-500">Read Our Blogs</button>

                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Banner;