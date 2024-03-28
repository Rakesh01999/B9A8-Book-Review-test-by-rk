import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, image, tags, bookName, author, category, rating } = book;
    return (
        <div className="my-10">
            <Link to={`/book/${bookId}`}>
                <button>
                    <div className="card bg-base-100 w-[374px] md:w-[504px] shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={image} alt="Book" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <div className="flex gap-4">
                                <p className="bg-[#23BE0A0D] rounded-2xl w-[40px] text-[#23BE0A] ">{tags[0]}</p>
                                <p className="bg-[#23BE0A0D] rounded-2xl w-[40px] text-[#23BE0A] ">{tags[1]}</p>
                            </div>
                            <h2 className="card-title text-[24px] mx-auto font-bold my-4">{bookName}</h2>
                            <p className="text-[16px] ">By : {author}</p>
                            <div className="border-b-2 my-4"></div>
                            <div className="card-actions">
                                <p>{category}</p>
                                <div className="flex items-center gap-1">
                                    <p>{rating}</p>
                                    <FaRegStar />
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
            </Link>

            {/* <h1>{bookId}</h1> */}


        </div>

        // <div>
        //     <Link>
        //         <div className="card bg-base-100 w-[374px] shadow-xl">
        //             <figure className="px-10 pt-10">
        //                 <img src={image} alt="Book" className="rounded-xl" />
        //             </figure>
        //             <div className="card-body">
        //                 <div className="flex gap-4">
        //                     <p className="bg-[#23BE0A0D] rounded-2xl w-[40px] text-[#23BE0A] ">{tags[0]}</p>
        //                     <p className="bg-[#23BE0A0D] rounded-2xl w-[40px] text-[#23BE0A] ">{tags[1]}</p>
        //                 </div>
        //                 <h2 className="card-title text-[24px] font-bold my-4">{bookName}</h2>
        //                 <p className="text-[16px] ">By : {author}</p>
        //                 <div className="border-b-2 my-4"></div>
        //                 <div className="card-actions">
        //                     <p>{category}</p>
        //                     <div className="flex items-center gap-1">
        //                         <p>{rating}</p>
        //                         <FaRegStar />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </Link>
        // </div>

    );
};

export default Book;