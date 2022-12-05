import React, { useState } from 'react';
import { NavLink, } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const Header = () => {
    const { user, logOut, } = useContext(AuthContext)


    const handlelogOut = () => {
        logOut()
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }
    const [open, setOpen] = useState(false)
    return (
        <div className='  bg-gray-800 sticky top-0 shadow z-50  text-white items-center md:px-10 px-4 py-3 flex justify-between w-full'>

            <h1 className='text-3xl z-20 font-bold'>Robert Json</h1>

            <div>
                <ul className={`md:flex right-0 rounded-lg pb-3 md:pb-0 z-10 bg-gray-800 w-full items-center text-white text-center justify-center md:static duration-200 ease-in-out absolute ${open ? 'top-12' : 'top-[-250px]'}`}>
                    <li className='font-semibold mr-4'>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'underline ease-linear duration-100 ' : 'undefined'} onClick={() => setOpen(!open)} to='/'>Home</NavLink>
                    </li>
                    <li className='font-semibold mr-4'>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'underline ' : 'undefined'} onClick={() => setOpen(!open)} to='/service'>Services</NavLink>
                    </li>
                    <li className='font-semibold mr-4'>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'underline ' : 'undefined'} onClick={() => setOpen(!open)} to='/blogs'>Blogs</NavLink>
                    </li>


                    {
                        user?.uid ?
                            <>
                                <li className='font-semibold mr-4'>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? 'underline ' : 'undefined'} onClick={() => setOpen(!open)} to='/myreviews'>My Reviews</NavLink>
                                </li>
                                <li className='font-semibold mr-4'>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? 'underline ' : 'undefined'} onClick={() => setOpen(!open)} to='/addservice'>Add services</NavLink>
                                </li>
                                <li onClick={() => setOpen(!open)} >
                                    <button onClick={handlelogOut} type="button" className="px-4 py-2 mr-4 font-semibold rounded-full border border-white  text-white-800">Log out</button>

                                </li>
                            </>
                            :
                            <>
                                <li className='font-semibold mr-4'>
                                    <NavLink onClick={() => setOpen(!open)} to='/login'>
                                        <button type="button" className="px-4 py-2 md:my-0 my-2 font-semibold rounded-full border border-white  text-white-800">Sign In</button>

                                    </NavLink>
                                </li>
                                <li className='font-semibold mr-4'>

                                    <NavLink onClick={() => setOpen(!open)} to='/register'>

                                        <button type="button" className="px-4 py-2 font-semibold rounded-full  bg-purple-500  text-gray-100">Sign Up</button>

                                    </NavLink>
                                </li>
                            </>
                    }

                </ul>
                <div onClick={() => setOpen(!open)} className="h-6  bg-gray-800 text-white w-6 md:hidden" >
                    {open ? <XMarkIcon />
                        : <Bars3Icon />
                    }
                </div>
            </div>
        </div >
    );
};

export default Header;