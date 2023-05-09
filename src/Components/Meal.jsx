import React from 'react';

const Meal = ({ meal }) => {
    const { strMeal, idMeal, strMealThumb } = meal;
    return (
        <div>
            <h1>{ strMeal}</h1>
        </div>
    );
};

export default Meal;