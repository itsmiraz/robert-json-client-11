import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../../Components/ServiceCard/ServiceCard';
import useTitle from '../../../Hooks/useTitle';
import Aboutme from '../AboutMe/Aboutme';
import Banner from '../Banner/Banner';
import Facilites from '../Facilites/Facilites';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    useTitle('Home')

    const services = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className=' my-20 '>
                <h2 className='text-center my-10 font-semibold text-4xl text-gray-800'>Feteared Services</h2>
                <div data-aos-duration="10000" data-aos="zoom-in-up" className='grid px-4 md:px-20 gap-5 grid-cols-1 md:grid-cols-3'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }

                </div>
                <div className='text-center mt-5'>
                    <Link to='/service'>
                        <button type="button" className="px-8 py-2 mr-4 font-semibold rounded-full border hover:border-purple-500 border-gray-900 hover:bg-purple-500 hover:text-white transition  text-gray-800">See All</button>

                    </Link>
                </div>
            </div>
            <NewsLetter ></NewsLetter>
            <Facilites></Facilites>
            <Aboutme></Aboutme>

        </div >
    );
};

export default Home;