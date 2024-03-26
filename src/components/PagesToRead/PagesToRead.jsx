import React, { useState, useEffect } from 'react';
import { getStoredBookRead } from '../../utility/localstorage';
// import CustomShapeBarChart from './CustomShapeBarChart'; // Assuming you have a separate component for the Custom Shape Bar Chart


import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const PagesToRead = () => {

    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredBookRead();
        // Fetch book data based on stored IDs
        // For simplicity, I'll assume you have a function to fetch book data
        const fetchBookData = async () => {
            const bookData = await fetchBookDataFromAPI(storedBookIds);
            setReadBooks(bookData);
        };
        fetchBookData();
    }, []);

console.log(readBooks);

    return (
        <div>
             <h1>Pages to Read</h1>
            <div>
                {/* <CustomShapeBarChart data={readBooks} /> */}
            </div>
        </div>
    );
};

export default PagesToRead;