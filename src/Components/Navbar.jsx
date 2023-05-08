import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between px-8 py-4 bg-gradient-to-r from-rose-500  to-violet-300 items-center shadow-xl shadow-yellow-300 mb-5 '>
            <div>
                <h1 className='text-5xl italic font-semibold'>Meals In <span className='text-violet-500 font-bold'>Area</span></h1>
                <p className='text-center text-lg' id='slogan'>Fine meals where you at</p>
            </div> 
            <div>
                <NavLink className='text-gray-900 bg-gradient-to-r from-rose-500 via-white to-violet-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 text-xl active:bg-transparent ' to='/'>Home</NavLink>
                <NavLink className='text-gray-900 bg-gradient-to-r from-rose-500 via-white to-violet-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-500 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 text-xl ' to='/about'>About</NavLink>
            </div>
        </div>
    );
};

export default Navbar;