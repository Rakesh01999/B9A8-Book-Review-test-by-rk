import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    
    return (
        <div>
            <div className="text-center my-14">
                <h2 className="text-[40px] font-bold">Books: {books.length}</h2>
            </div>
            <div className="md:w-[2000px] w-[500px] mx-20 md:mx-40 items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        books.map(book => <Book key={book.id} book={book}></Book>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Books;