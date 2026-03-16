import React from 'react';
import  googlePlay from "../../../assets/play-store.avif";
import Appstore from "../../../assets/App-store.avif"

const Home = () => {
    return (
        <div>
            {/* Banner section */}
           <div className='text-center mt-14'> 
            <h1 className='text-7xl font-bold '>We Build  <br />
            <span className=' text-violet-500 '>Productive</span>  Apps</h1>
            <p className='text-[#627382] py-5 text-sm'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='text-center flex items-center max-w-sm  mx-auto gap-7 my-6'>
                <button className=' btn py-5 flex items-center bg-white ' >
                    <img src={googlePlay} className="w-12  h-10" alt="" />
                    <span>Google Play</span>
                </button>
                <button className='flex btn  py-5  items-center bg-white' >
                    <img src={Appstore} alt=""  className='w-8 '/>
                    <span className='text-center'>App Store</span>
                </button>
            </div>

           </div>
            
        </div>
    );
};

export default Home;