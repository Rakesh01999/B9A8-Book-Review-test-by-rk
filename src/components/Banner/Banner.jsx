import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/banner.png';

const Banner = () => {
    
    return (
        <div>
            {/* <h2>Banner section</h2> */}
            <div className='w-[500px] h-[700px] md:h-[554px] md:w-[1540px] mx-auto bg-[#1313130D] p-10 md:p-32 flex flex-col md:flex-row items-center'>
                <div className='w-[200px] h-[] md:w-[526px] md:h-[282px]'>
                    <h2 className='text-[30px] md:text-[56px] font-bold'>Books to freshen up your bookshelf</h2>
                    <Link to="/listedBooks">
                        <button className='btn bg-[#23BE0A] md:w-[189px] md:h-[66px] text-[20px] text-white mt-3 md:mt-12'>View The List</button>
                    </Link>
                </div>
                <div className='md:ml-32'>
                    <img src={banner} alt="book cover" />
                </div>
            </div>
        </div>
    );
};
 
export default Banner;