import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredBookRead, getStoredBookWish } from '../../utility/localstorage';
import { CiLocationOn } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const ListedBooks = () => {
    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);
    const [wishBooks, setWishBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);
    const [displayWishBooks, setDisplayWishBooks] = useState([]);


    // orderly
    // const handleBookFilter = filter => {
    //     let filteredBooks = [...readBooks];
    //     if (filter === 'Rating') {
    //         filteredBooks.sort((a, b) => b.rating - a.rating);
    //     } else if (filter === 'Number of Pages') {
    //         filteredBooks.sort((a, b) => a.totalPages - b.totalPages);
    //     } else if (filter === 'Publishing Year') {
    //         filteredBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
    //     } else {
    //         // Default: 'all' or invalid filter
    //         filteredBooks = [...readBooks];
    //     }
    //     setDisplayBooks(filteredBooks);
    // }

    // descending order
    const handleBookFilter = filter => {
        let filteredBooks = [...readBooks];
        let filteredWishBooks = [...wishBooks];
        if (filter === 'Rating') {
            filteredBooks.sort((a, b) => b.rating - a.rating);
            filteredWishBooks.sort((a, b) => b.rating - a.rating);
        } else if (filter === 'Number of Pages') {
            filteredBooks.sort((a, b) => b.totalPages - a.totalPages);
            filteredWishBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (filter === 'Publishing Year') {
            filteredBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            filteredWishBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        } else {
            // Default: 'all' or invalid filter
            filteredBooks = [...readBooks];
            filteredWishBooks = [...wishBooks];
        }
        setDisplayBooks(filteredBooks);
        setDisplayWishBooks(filteredWishBooks);
    }
    

    // console.log(books.length)

    // read
    useEffect(() => {
        const storedBookIds = getStoredBookRead();
        if (books.length > 0) {
            // const bookRead = books.filter(book => storedBooks.includes(book.id))

            const bookRead = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    bookRead.push(book);
                }
            }
            setReadBooks(bookRead);
            setDisplayBooks(bookRead);
            // console.log(books, storedBookIds, bookRead);
        }
    }, [books])

    // wish
    useEffect(() => {
        const storedBookIds = getStoredBookWish();
        if (books.length > 0) {
            const bookWish = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    bookWish.push(book);
                }
            }
            setWishBooks(bookWish);
            setDisplayWishBooks(bookWish);
        }
    }, [books])

    // const handleWish = bookId => {
    //     saveBookWish(bookId);
    //     const book = books.find(book => book.bookId === bookId);
    //     if (book) {
    //         setWishBooks(prevWishBooks => [...prevWishBooks, book]);
    //     }
    // }

    return (
        <div>
            <div className='bg-[#1313130D] md:w-[1900px] h-[100px] mx-28 p-6 text-center'>
                <h2 className='text-[28px] font-bold'>Listed Books</h2>
            </div>

            {/* dropdown */}
            <div className='text-center'>
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] w-[145px] h-[52px] text-white text-[18px] my-4">Sort By <span className="text-3xl"> <RiArrowDropDownLine /> </span> </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        {/* <li><a onClick={handleBookFilter('all')}>all</a></li>
                        <li><a>Rating</a></li>
                        <li><a>Number of Pages</a></li>
                        <li><a>Publishing Year</a></li> */}

                        <li><a onClick={() => handleBookFilter('all')}>all</a></li>
                        <li><a onClick={() => handleBookFilter('Rating')}>Rating</a></li>
                        <li><a onClick={() => handleBookFilter('Number of Pages')}>Number of Pages</a></li>
                        <li><a onClick={() => handleBookFilter('Publishing Year')}>Publishing Year</a></li>

                    </ul>
                </details>
            </div>

            <div className='md:w-[1900px] mx-28 p-6 text-center mt-6'>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

                        <div>
                        <h2 className='text-[28px] font-bold'>Read Books: {readBooks.length}</h2>
                            {
                                displayBooks.map(book => <div key={book.bookId}>
                                    {/* <span>{book.bookName}</span> */}

                                    <div className="shadow-xl h-[278px] flex gap-6 p-6 mt-4">
                                        <div className='w-[150px] h-[200px]'>
                                            <img src={book.image} alt="Book" />
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <h2 className="text-[24px] font-bold">{book.bookName}</h2>
                                            <p className='text-[16px] font-semibold'>By: {book.author}</p>
                                            <div className="flex items-center gap-4">
                                                <div className='flex gap-4'>
                                                    <p className='text-[16px] font-bold'>Tag</p>
                                                    <p className='bg-[#23BE0A0D] text-[#23BE0A] text-[16px]'>{book.tags[0]}</p>
                                                    <p className='bg-[#23BE0A0D] text-[#23BE0A] text-[16px]'>{book.tags[1]}</p>
                                                </div>
                                                <div className='flex gap-4 items-center'>
                                                    <CiLocationOn />
                                                    <span>Year of Publishing: {book.yearOfPublishing}</span>
                                                </div>
                                            </div>
                                            <div className='flex gap-4'>
                                                <div className='flex items-center gap-4'>
                                                    <IoPeople />
                                                    <p>Publisher: {book.publisher}</p>
                                                </div>
                                                <div className='flex items-center gap-4'>
                                                    <MdOutlineFindInPage />
                                                    <p>Page: {book.totalPages}</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-4'>
                                                <p className='bg-[#328EFF26] rounded-2xl text-[#328EFF] text-[16px] w-[174px]'>Category: {book.category}</p>
                                                <p className='bg-[#FFAC3326] rounded-2xl text-[#FFAC33] text-[16px] w-[174px]'>Rating: {book.rating}</p>
                                                <button className='btn w-[150px] h-[] bg-[#23BE0A] rounded-3xl text-white text-[18px]'>View Details</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>)
                            }
                        </div>

                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        {/* Wishlist Books:{bookWish.length} */}

                            {/* wish books */}
                        <div>
                        <h2 className='text-[28px] font-bold'>Wishlist Books:{wishBooks.length}</h2>
                            {
                                displayWishBooks.map(book => <div key={book.bookId}>
                                    {/* <span>{book.bookName}</span> */}

                                    <div className="shadow-xl h-[278px] flex gap-6 p-6 mt-4">
                                        <div className='w-[150px] h-[200px]'>
                                            <img src={book.image} alt="Book" />
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <h2 className="text-[24px] font-bold">{book.bookName}</h2>
                                            <p className='text-[16px] font-semibold'>By: {book.author}</p>
                                            <div className="flex items-center gap-4">
                                                <div className='flex gap-4'>
                                                    <p className='text-[16px] font-bold'>Tag</p>
                                                    <p className='bg-[#23BE0A0D] text-[#23BE0A] text-[16px]'>{book.tags[0]}</p>
                                                    <p className='bg-[#23BE0A0D] text-[#23BE0A] text-[16px]'>{book.tags[1]}</p>
                                                </div>
                                                <div className='flex gap-4 items-center'>
                                                    <CiLocationOn />
                                                    <span>Year of Publishing: {book.yearOfPublishing}</span>
                                                </div>
                                            </div>
                                            <div className='flex gap-4'>
                                                <div className='flex items-center gap-4'>
                                                    <IoPeople />
                                                    <p>Publisher: {book.publisher}</p>
                                                </div>
                                                <div className='flex items-center gap-4'>
                                                    <MdOutlineFindInPage />
                                                    <p>Page: {book.totalPages}</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-4'>
                                                <p className='bg-[#328EFF26] rounded-2xl text-[#328EFF] text-[16px] w-[174px]'>Category: {book.category}</p>
                                                <p className='bg-[#FFAC3326] rounded-2xl text-[#FFAC33] text-[16px] w-[174px]'>Rating: {book.rating}</p>
                                                <button className='btn w-[150px] h-[] bg-[#23BE0A] rounded-3xl text-white text-[18px]'>View Details</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>)
                            }
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default ListedBooks;