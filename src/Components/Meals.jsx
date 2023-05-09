import React, { useEffect, useState } from 'react';
import Areas from './Areas';
import { useLoaderData } from 'react-router-dom';
import Meal from './Meal';

const Meals = () => {
    const data = useLoaderData();
    const meals = data.meals;
    console.log(meals)
    
    return (
        <div className='flex flex-row'>
            <div className='w-[15%] sticky top-0'>
                <Areas></Areas>
            </div>
            <div className='w-[85%] grid grid-cols-3 gap-4 p-5'>
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