
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Areas = () => {
    const [areas, setAreas] = useState();
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
            .then(res => res.json())
            .then(data => setAreas(data?.meals))
    }, []);
    console.log(areas);
    return (
        <div className='flex flex-col p-4 overflow-scroll h-[40%] overflow-x-hidden'>
            {
                areas?.map(area => (
                    <NavLink
                        
                        key={area?.strArea}
                        to={`/${area?.strArea}`}
                        className='text-lg bg-gradient-to-r from-blue-400 to-green-300 my-1 p-2 rounded-e-full text-center focus:ring-white area-name '
                    >
                        
                    { area?.strArea}
                    </NavLink>
               ))
            }
        </div>
    );
};

export default Areas;