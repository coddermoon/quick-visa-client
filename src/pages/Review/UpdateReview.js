import React from 'react';
import {useLoaderData} from 'react-router-dom'

const UpdateReview = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
           this is update review 
        </div>
    );
};

export default UpdateReview;