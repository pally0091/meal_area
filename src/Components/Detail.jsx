import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Detail = () => {
    const data = useLoaderData();
    const detail = (data.meals[0]);
    // console.log(detail)
    return (
        <div className='lg:w-[75%] sm:w-[98%] min-[320px]:w-[98%] mx-auto border p-4 shadow-inner shadow-amber-700'>
            <h1 className='text-center text-4xl border-4 rounded-full border-double'>{detail.strMeal}</h1>
            
            <div className='flex flex-row items-center mt-2'>
                <div className='w-1/2 border p-1'>
                    <img className='w-full' src={detail.strMealThumb} alt="" />
                    <p>Type : { detail.strTags}</p>
                </div>
                <div className='w-1/2'>
                    <h4 className='text-right my-1 italic text-lg font-semibold'>Meal from <Link className='text-red-600 hover:text-white' to={`/${detail.strArea}`}>{detail.strArea}</Link> region</h4>
                    <h4 className='text-right my-1 italic text-lg font-semibold'>Meal Category : <Link className='bg-yellow-200 p-1 rounded-md hover:bg-white' to={`/category/${detail.strCategory}`}>{detail.strCategory}</Link></h4>
                    <a href={detail.strYoutube} target='_blank'>
                        <h4 className='text-right my-1 italic text-lg font-semibold hover:text-blue-700'>Recipe video</h4>
                    </a>
                </div>
            </div>
            <p className='p-4 text-justify bg-white opacity-60 rounded-lg my-2'>{detail.strInstructions}</p>
            
        </div>
    );
};

export default Detail;