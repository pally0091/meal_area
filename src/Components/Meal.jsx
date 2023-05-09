import React from 'react';

const Meal = ({ meal }) => {
    const { strMeal, idMeal, strMealThumb } = meal;
    return (
        <div className='border'>
            <h1>{ strMeal}</h1>
        </div>
    );
};

export default Meal;