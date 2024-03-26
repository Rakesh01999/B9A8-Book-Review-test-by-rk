import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookRead, saveBookWish } from "../../utility/localstorage";

const BookDetaills = () => {
        

    const books = useLoaderData();
    const { bookId, image } = useParams();
    const idInt = parseInt(bookId);
    const book = books.find((book) => book.bookId === idInt);

    // console.log(book);
    // console.log(book.bookName);

    const handleRead =() => {
        // saveBookRead(bookId);
        saveBookRead(idInt);
        toast('Books added to Read List');
    }
    
    // const handleWish =() => {
    //     toast('Books added to WishList'); 
    //     saveBookWish(idInt);
    // }

    const handleWish = () => {
        toast('Book added to Wishlist');
        saveBookWish(idInt); // Use idInt instead of bookId
    };
    

    return (
        <div>
            <div className="text-center text-[32px] font-bold my-4">
                <h2>Book Details</h2>
            </div>
            <div className="flex flex-col md:flex-row md:w-[1900px] mx-32  gap-4">
                <div className="w-[573px] h-[711px] rounded-2xl bg-[#1313130D]">
                    <img className="w-[425px] h-[564px]" src={book.image} alt="" />
                </div>
                <div>
                    <h2 className="text-[40px] font-bold">{book.bookName}</h2>
                    <p>By: {book.author}</p>
                    <p className="my-9">{book.category}</p>
                    <p>{book.review}</p>
                    <div className="flex gap-4 my-4">
                        <p>Tag:</p>
                        <p className="bg-[#23BE0A0D] w-[100px] rounded-2xl text-[#23BE0A] text-center">{book.tags[0]}</p>
                        <p className="bg-[#23BE0A0D] w-[100px] rounded-2xl text-[#23BE0A] text-center">{book.tags[1]}</p>
                    </div>
                    <div className="border-b-2 my-3"></div>
                    <div className="flex gap-4">
                        <div>
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        <div>
                            <p className="text-[16px] font-semibold">{book.totalPages}</p>
                            <p className="text-[16px] font-semibold">{book.publisher}</p>
                            <p className="text-[16px] font-semibold">{book.yearOfPublishing}</p>
                            <p className="text-[16px] font-semibold">{book.rating}</p>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button onClick={handleRead} className="btn w-[128px] h-[57px] text-[18px]">Read</button>
                        <button onClick={handleWish} className="btn bg-[#50B1C9] text-white w-[128px] h-[57px] text-[18px]">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetaills;