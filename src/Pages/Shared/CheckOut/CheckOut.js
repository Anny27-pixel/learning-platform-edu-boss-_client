import React from 'react';
import { useLoaderData } from 'react-router-dom';



const CheckOut = () => {

    const course = useLoaderData();
    console.log(course);

    return (

        <div>
            <h2>Checkout page</h2>
            <h2>{course.name}</h2>
        </div>


    );
};

export default CheckOut;