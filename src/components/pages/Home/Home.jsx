import React from 'react';
import  googlePlay from "../../../assets/play-store.avif";
import Appstore from "../../../assets/App-store.avif"
import heroAPP from  "../../../assets/hero.png"
import TrendApps from './TrendApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const appsData =useLoaderData(); 
    console.log(appsData);
    return (
        <div>
            {/* Banner section */}
           <div className='text-center mt-14'> 
            <h1 className='text-7xl font-bold '>We Build  <br />
            <span className=' text-violet-500 '>Productive</span>  Apps</h1>
            <p className='text-[#627382] py-5 text-sm'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='text-center flex items-center max-w-sm  mx-auto gap-7 my-6'>
                <button className=' btn py-5 flex items-center bg-white ' >
                    <img src={googlePlay} className="w-11  h-10" alt="" />
                    <span className='pr-4'>Google Play</span>
                </button>
                <button className='flex btn  py-5  items-center bg-white' >
                    <img src={Appstore} alt=""  className='w-8 '/>
                    <span className='pr-3'>App Store</span>
                </button>
            </div>  

            <div className='max-w-sm  mx-auto'>
                <img src={heroAPP} alt="" />
            </div> 

            <div className='bg-gradient-to-r from-violet-500 to-indigo-500 h-70'>
                <h1 className='text-center text-white text-4xl py-6'>Trusted by Millions, Built for You</h1> 

                <div className='flex items-center text-white max-w-2xl  mx-auto md:gap-8 py-8 sapce-y-4 '>
                    <div className='text-center  '>
                        <span className='text-base '>Total Downloads</span>
                        <p className='text-5xl font-extrabold'>29.6M</p>
                        <h3 className='text-base'>21% More Than Last Month</h3>
                    </div>
                    <div className='text-center'>
                        <span className='text-base'>Total Reviews  </span>
                        <p className='text-5xl font-extrabold'>906K</p>
                        <h3 className='text-base'>21% More Than Last Month</h3>
                    </div>
                    <div className='text-center'>
                        <span className='text-base'>Active Apps</span>
                        <p className='text-5xl font-extrabold'>132+</p>
                        <h3 className='text-base'>21% More Than Last Month</h3>
                    </div>
                </div>
            </div>


           </div> 

           <TrendApps appsData={appsData}></TrendApps>

            
        </div>
    );
};

export default Home;