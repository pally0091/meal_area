import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { strMeal, idMeal, strMealThumb } = meal;
    return (
        <div id='meal-card' className='border rounded-t-lg h-fit hover:border-black hover:bg-white hover:shadow-xl hover:shadow-amber-300 transition duration-700 '>
            <h1 className='text-xl font-semibold text-center'>{strMeal}</h1>
            <div className='w-[90%] mx-auto rounded-lg border-2 border-black p-1'>
                <img className='w-full h-full rounded-lg' src={strMealThumb} alt="meal image" />
            </div>
            <Link className='w-full ' to={`/meal/${idMeal}`}><button className='bg-gradient-to-t from-blue-400 to-lime-300 w-full mt-2 p-2 hover:from-lime-300 hover:to-blue-400 '>See More</button></Link>
        </div>
    );
};

export default Meal;