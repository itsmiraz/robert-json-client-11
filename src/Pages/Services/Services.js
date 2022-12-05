import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import useTitle from '../../Hooks/useTitle';
import { SyncLoader } from 'react-spinners';


const Services = () => {
    const [services, setServices] = useState([])

    useTitle('Services')

    useEffect(() => {
        fetch('https://assignment-11-server-gilt.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])

    if (services.length === 0) {
        return <div className='flex justify-center my-80 md:m-80'><SyncLoader
            color="#080813"
            size={15}
        /></div>
    }



    return (
        <div>
            <div className=' my-10 '>
                <h2 className='text-center my-10 font-semibold text-4xl text-gray-800'>All Services</h2>
                <div className='grid px-4 md:px-20 gap-5 grid-cols-1 md:grid-cols-3'>

                    {

                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }

                </div>

            </div>
        </div>
    );
};

export default Services;