import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center my-60'>
            <p className='text-2xl font-bold'> Oops !!! </p>
            <p className='text-2xl font-bold'> 404 route/not found</p>
            <Link to="/">Go back to <span className='text-3xl bg-slate-400 italic font-extrabold'> Home </span> </Link>
        </div>
    );
};

export default ErrorPage;