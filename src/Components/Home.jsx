import React from 'react';
import Areas from './Areas';
import Meals from './Meals';

const Home = () => {
    return (
        <div className='flex flex-row justify-between'>
            <div className='w-[15%]'>
                <Areas></Areas>
            </div>
            <div className='w-[85%]'>
                <Meals></Meals>
            </div>
        </div>
    );
};

export default Home;