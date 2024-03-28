import React, { useState, useEffect } from 'react';
import { getStoredBookRead } from '../../utility/localstorage';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const PagesToRead = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);

    // Fetch read books from loacal storage
    useEffect(() => {
        const storedBookIds = getStoredBookRead();
        if (books.length > 0) {
            const bookRead = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    bookRead.push(book);
                }
            }
            setReadBooks(bookRead);
        }
    }, [books]);

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const Phones = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="mx-10 md:mx-96 mt-10">
            <h1 className="text-2xl font-bold text-center">Chart</h1>
            <BarChart
                // width={1500} 
                width={window.innerWidth > 1500 ? 768  : window.innerWidth - 80} // Adjusting  width for mobile view
                    
                height={600}
                data={readBooks}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 50,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<Phones />} label={{ position: 'top' }}>
                    {readBooks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;
