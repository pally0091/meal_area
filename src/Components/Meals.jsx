import React, { useEffect, useState } from 'react';
import Areas from './Areas';
import { useLoaderData } from 'react-router-dom';
import Meal from './Meal';

const Meals = () => {
    const data = useLoaderData();
    const meals = data.meals;
    // console.log(meals)
    
    return (
        <div className='flex flex-row  '>
            <div className='lg:w-[15%] sm:w-[35%] min-[320px]:w-[35%] h-screen sticky top-0'>
                <Areas></Areas>
            </div>
            <div className='lg:w-[85%] sm:w-[65%] min-[320px]:w-[65%] grid lg:grid-cols-3 sm:grid-cols-1 min-[320px]:grid-cols-1 gap-4 p-5'>
                {
                    meals.map(meal => (<Meal
                        key={meal.strMeal}
                        meal={meal}
                    ></Meal>))
                }
            </div>
        </div>
    );
};

export default Meals;