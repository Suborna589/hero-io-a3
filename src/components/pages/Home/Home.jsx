import React, { useEffect, useState } from 'react';
import  googlePlay from "../../../assets/play-store.avif";
import Appstore from "../../../assets/App-store.avif"
import heroAPP from  "../../../assets/hero.png"
import TrendApps from './TrendApps';
import { useLoaderData } from 'react-router'; 
import logo from "../../../assets/logo.png"

const Home = () => {
    const appsData =useLoaderData(); 


     const[loading,setLoading]=useState(false)
   
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
                loading? ( <div className="flex justify-center items-center py-20">
                        
                           <div className="fixed inset-0 flex items-center justify-center bg-white/60 z-50">
                           <img src={logo} alt="" className="w-24 animate-spin " /> <span className='text-2xl text-[#632ee3] ml-3 font-bold'>Loading Spinner...</span>
                          

                      
                      </div>
                    </div>) : 
                         
             (<div>

 <div className='text-center mt-14'> 
            <h1 className='text-7xl font-bold '>We Build  <br />
            <span className=' text-violet-500 '>Productive</span>  Apps</h1>
            <p className='text-[#627382] py-5 text-sm'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='text-center flex items-center max-w-sm  mx-auto gap-7 my-6'>
                <button className=' btn py-5 flex items-center bg-white ' >
                    <img src={googlePlay} className="w-11 h-10" alt="" />
                    <span className='pr-4'>Google Play</span>
                </button>
                <button className='flex btn  py-5  items-center bg-white' >
                    <img src={Appstore} alt=""  className='  w-8  '/>
                    <span className='pr-3'>App Store</span>
                </button>
            </div>  

            <div className='max-w-sm  mx-auto'>
                <img src={heroAPP} alt="" />
            </div> 

            <div className='bg-gradient-to-r from-violet-500 to-indigo-500 md:h-96'>
                <h1 className='text-center text-white text-4xl py-10'>Trusted by Millions, Built for You</h1> 

                <div className='flex-1 md:flex  items-center text-white   md:max-w-2xl  mx-auto md:gap-9 py-8  '>
                    <div className='text-center space-y-6 '>
                        <span className='text-base '>Total Downloads</span>
                        <p className='text-5xl font-extrabold pt-6'>29.6M</p>
                        <h3 className='text-base'>21% More Than Last Month</h3>
                    </div>
                    <div className='text-center space-y-6'>
                        <span className='text-base'>Total Reviews  </span>
                        <p className='text-5xl font-extrabold pt-6'>906K</p>
                        <h3 className='text-base'>21% More Than Last Month</h3>
                    </div>
                    <div className='text-center space-y-6  '>
                        <span className='text-base'>Active Apps</span>
                        <p className='text-5xl font-extrabold pt-6'>132+</p>
                        <h3 className='text-base'>21% More Than Last Month</h3>
                    </div>
                </div>
            </div>


           </div> 

           <TrendApps appsData={appsData}></TrendApps>




             </div>)
        

                
                }


    

            
        </div>
    );
};

export default Home;