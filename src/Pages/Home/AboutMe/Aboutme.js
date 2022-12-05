import React from 'react';

const Aboutme = () => {
    return (
        <div data-aos-duration="10000" data-aos="zoom-in-up" className='my-10 flex-col md:flex-row justify-center mx-auto flex px-4 md:px-20'>
            <div>
                <h1 className='text-center font-semibold text-3xl'>About ME</h1>
                <p className='md:w-96 w-80  mx-auto my-5  font-semibold break-all '>
                    My name is Robert Json. I am a photographer,cinematographer. I am taking photos for like 10 years now. I shoot wedding,Birhtday,Journal etc. I use cannon R5 for my main camera & R6 for secondry camera.My main lens is 70-200 f2.8 and second lens is 18-35mm 2.8mm
                </p>
            </div>
            <div>
                <img className='rounded md:w-3/4  w-full md:px-0 px-4 mx-auto' src="https://st4.depositphotos.com/13194036/22993/i/450/depositphotos_229931354-stock-photo-smiling-young-photographer-using-desktop.jpg" alt="" />
            </div>
        </div>
    );
};

export default Aboutme;