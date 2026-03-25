
import React, { useEffect, useState } from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
// import ErrorPage from '../ErrorPage/ErrorPage'; 
import logo from '../../assets/logo.png'

const Root = () => {
    const[loading , setLoading]=useState(false)

     useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 500); 
    
        return () => clearTimeout(timer);
      }, []);
    return (



        <div>
             {
            loading ? ( <div className="flex justify-center items-center py-20">
                    
                       <div className="fixed inset-0 flex items-center justify-center bg-white/60 z-50">
                       <img src={logo} alt="" className="w-24 animate-spin " /> <span className='text-2xl text-[#632ee3] ml-3 font-bold'>Loading Spinner...</span>
                      
                 
                  
                  </div>
                </div>) :
                 <div className='  max-w-[580px] md:max-w-[1600px]    mx-auto '> 
       
            <Navbar></Navbar> 
            <Outlet></Outlet> 
        
            <Footer></Footer>
         
            
        </div>
        
        }




        </div>
       
    );
};

export default Root;