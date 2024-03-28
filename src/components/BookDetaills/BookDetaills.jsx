import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookRead, saveBookWish, getStoredBookRead, getStoredBookWish } from "../../utility/localstorage";
// import { saveBookRead, saveBookWish, getStoredBookRead } from "../../utility/localstorage";


const BookDetaills = () => {
        

    const books = useLoaderData();
    const { bookId, image } = useParams();
    const idInt = parseInt(bookId);
    const book = books.find((book) => book.bookId === idInt);

    // console.log(book);
    // console.log(book.bookName);

    const handleRead =() => {
        // saveBookRead(bookId);
          const storedBookRead = getStoredBookRead();
          console.log(storedBookRead);
        if (!storedBookRead.includes(idInt)) {
            saveBookRead(idInt);
            toast.success('Book added to Read List');
        } else {
            toast.warning('Book already in Read List');
        }
    }
    
    // const handleWish =() => {
    //     toast('Books added to WishList'); 
    //     saveBookWish(idInt);
    // }

    // recent commented

    // const handleWish = () => {
    //     toast('Book added to Wishlist');
    //     saveBookWish(idInt); // Use idInt instead of bookId
    // };

    const handleWish = () => {
        const storedBookRead = getStoredBookRead();
        const storedBookWish = getStoredBookWish();
        console.log(storedBookWish);
        if (storedBookRead.includes(idInt)) {
            toast.warn('Book is already in Read List');
        } else {
            if (!storedBookWish.includes(idInt)) {
                saveBookWish(idInt);
                toast.success('Book added to Wishlist');
            } else {
                toast.warn('Book is already in Wishlist');
            }
        }
    };
    

    return (
        <div>
            <div className="text-center text-[32px] font-bold my-4">
                <h2>Book Details</h2>
            </div>
            {/* <div className="flex flex-col md:flex-row md:w-[1800px] mx-auto  gap-10"> */}
            <div className="md:w-[1800px] flex flex-col md:flex-row gap-10 mx-auto md:mx-96 mb-10">
                <div className="w-[573px] h-[711px] rounded-2xl bg-[#1313130D] p-20">
                    <img className="w-[425px] h-[564px]" src={book.image} alt="" />
                </div>
                <div className="w-[700px]">
                    <h2 className="text-[40px] font-bold">{book.bookName}</h2>
                    <p className="text-[20px]">By: {book.author}</p>
                    <div className="border-b-2 my-3"></div>
                    <p className="my-6">{book.category}</p>
                    <div className="border-b-2 my-3"></div>
                    <p> <span className="font-bold">Review</span> {book.review}</p>
                    <div className="flex gap-4 my-4">
                        <p className="font-bold">Tag:</p>
                        <p className="bg-[#23BE0A0D] w-[100px] rounded-2xl text-[#23BE0A] text-center"># {book.tags[0]}</p>
                        <p className="bg-[#23BE0A0D] w-[100px] rounded-2xl text-[#23BE0A] text-center"># {book.tags[1]}</p>
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