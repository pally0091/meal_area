import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex lg:flex-row md:flex-row sm:flex-col min-[320px]:flex-col justify-between px-8 py-4 bg-gradient-to-r from-lime-500 via-rose-200 to-violet-500 items-center shadow-xl shadow-yellow-300 mb-5 '>
            <div>
                <h1 className='text-5xl italic font-semibold'>Meals In <span className='text-violet-500 font-bold'>Area</span></h1>
                <p className='text-center text-lg' id='slogan'>Find meals where you at</p>
            </div> 
            <div className='mt-5'>
                <NavLink className='text-gray-900 bg-gradient-to-r from-rose-500 via-white to-violet-300 hover:bg-gradient-to-br  shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg px-5 py-2.5 text-center m-3 text-xl  ' to='/'>Home</NavLink>
                <NavLink className='text-gray-900 bg-gradient-to-r from-rose-500 via-white to-violet-300 hover:bg-gradient-to-br  shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg px-5 py-2.5 text-center m-3 text-xl ' to='/blogs'>Blogs</NavLink>
            </div>
        </div>
    );
};

export default Navbar;