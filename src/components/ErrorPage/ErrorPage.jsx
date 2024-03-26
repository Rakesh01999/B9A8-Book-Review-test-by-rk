import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <p> 404 route/not found</p>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;