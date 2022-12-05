import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const photoURL = form.photourl.value;
        const details = form.details.value;
        console.log(title, price, photoURL, details)

        const service = {
            title: title,
            image_url: photoURL,
            price: price,
            details: details
        }

        fetch('https://assignment-11-server-gilt.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(result => {
                console.log(result);
                form.reset()
                toast.success('SuccessFully Added a new service')
            })

            .then(err => console.log(err))
    }

    return (
        <div className='px-4 md:px-48'>
            <h1 className='text-2xl md:text-4xl font-bold text-center my-4'>Add Your Service</h1>
            <form onSubmit={handleSubmit} className=' mb-10 w-72 md:w-96 mx-auto justify-center flex flex-col'>
                <p className='font-semibold  my-2'>Service Name</p>
                <input name='title' type="text" placeholder="Service Name" className="input  w-72 md:w-96 input-bordered " />
                <p className='font-semibold my-2'>Service Price</p>
                <input name='price' type="text" placeholder="Service Price" className="input   w-72 md:w-96 input-bordered  " />
                <p className='font-semibold my-2'>Service Photo URL</p>
                <input name='photourl' type="text" placeholder="Service Photo URL" className="input   w-72 md:w-96 input-bordered  " />
                <p className='font-semibold my-2'>Service Details</p>
                <textarea name='details' className="textarea  w-72 md:w-96 textarea-bordered" placeholder="Details"></textarea>
                <button type='submit' className='bg-gray-700 px-4 py-3 font-semibold my-4 text-white rounded'>Upload</button>
            </form>
        </div>
    );
};

export default AddService;