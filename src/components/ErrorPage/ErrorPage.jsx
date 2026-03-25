import React from 'react';
import errorImg from "../../assets/error-404.png"
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
                 <img src={errorImg} alt="" className='w-[430px]  h-[350px] md:ml-[630px] md:mt-[65px] mb-8' />
               <h2 className='text-center text-5xl font-medium mb-4'>Oops, page not found!</h2>  
               <p className='text-center font-normal text-xl text-[#627382] mb-6'>The page you are looking for is not available.</p>
                 <Link to="" className=" ml-45 md:ml-[790px] text-white btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] mb-28">Go Back!</Link>
            
        </div>
    );
};

export default ErrorPage;