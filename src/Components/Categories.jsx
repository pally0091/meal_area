import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from './Meal';

const Categories = () => {
    const data = useLoaderData();
    const categories = data.meals;
    // console.log(categories)
    return (
        <div>
            <h1 className='text-2xl text-center font-semibold underline'>This category have {categories.length} recipes</h1> 
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 min-[320px]:grid-cols-1 my-5 gap-4 w-[95%] mx-auto'>
                {
                    categories.map((meal) => (
                        <Meal
                            key={meal.strMeal}
                            meal={meal}
                        ></Meal>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;