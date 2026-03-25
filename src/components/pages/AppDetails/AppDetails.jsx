import React, { useEffect, useState } from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { FaDownload, FaStar } from 'react-icons/fa';
import logo from "../../../assets/logo.png"
import { Link, useLoaderData } from 'react-router';
import { useParams } from 'react-router';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { addToStoredDB } from '../../../utility/addToDB';
import  notFound from  "../../../assets/App-Error.png"


const AppDetails = () => {
    const[loading,setLoading]=useState(false)
    const {id}=useParams();
    const appId=parseInt(id);
    const appData = useLoaderData();
     const singleApp = appData.find(app=> app.id === appId);
     const {image,title,companyName,downloads,ratingAvg,reviews,size,ratings,description}=singleApp;




            useEffect(() => {
               setLoading(true);
               const timer = setTimeout(() => {
                 setLoading(false);
               }, 500); 
           
               return () => clearTimeout(timer);
             }, []);


const handleInstalled = (id) => {
    addToStoredDB(id);

}



 if (!singleApp)
    return (
      <div className="flex-1">
        <img
          src={notFound}
          alt="Not Found"
          className="w-[430px] h-[350px] md:ml-[630px] md:mt-[65px] mb-8"
        />
        <h2 className="text-center text-5xl font-medium mb-4">
          OOPS!! APP NOT FOUND
        </h2>
        <p className="text-center font-normal text-xl text-[#627382] mb-6">
          The App you are requesting is not found on our system. Please try
          another app.
        </p>
        <Link
          to="/"
          className="ml-35 md:ml-[790px] text-white btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] mb-28"
        >
          Go Back!
        </Link>
      </div>
    ); 





       








    return (
       <div> 


        {
            loading? (<div className="flex justify-center items-center py-20">
                                    
                                       <div className="fixed inset-0 flex items-center justify-center bg-white/60 z-50">
                                       <img src={logo} alt="" className="w-24 animate-spin " /> <span className='text-2xl text-[#632ee3] ml-3 font-bold'>Loading Spinner...</span>
                                      
                                 
                                  
                                  </div>
                                </div>) : 
            
            
            
            (
                 <div className='mt-11 mb-14'> 
            <div className='flex  gap-28 max-w-7xl mx-auto '>
                <div className='bg-gray-100 w-[260px] h-[250px] p-3 rounded-xl '>
                    <img src={image} alt="" className='w-[260px] h-[225px]   object-cover rounded-sm  pl-0 pt-0 hover:scale-105 duration-500 ' />
                </div>
                <div className=' '>
                    <h1 className='text-3xl font-bold'>{title}</h1>
                    <p>Developed by <span className='text-indigo-600'>{companyName}</span></p>
                    <div className=' border-t-1 border-gray-300 mb-5 mt-5 w-124'> </div>
                       <div className='flex gap-8'>
                         <div>  
                            <FaDownload className='text-[#39CC39] text-2xl'></FaDownload>
                            <p >Downloads</p>
                            <span className='text-4xl font-extrabold'>{downloads}</span>

                        </div>
                        <div>
                            <FaStar className='text-[#F54927] text-2xl'></FaStar>
                            <p >Average Ratings</p>
                            <span className='text-4xl font-extrabold'>{ratingAvg}</span>
                        </div>
                        <div>
                           <BiSolidLike className='text-indigo-700 text-2xl' />
                            <p>Total Reviews</p>
                            <span className='text-4xl font-extrabold'>{reviews}</span>
                        </div>
                       </div>


                <div className='mt-10'>
                <button onClick={()=>handleInstalled(id)} className='btn bg-green-400 text-white'>
                    Install Now ({size}) MB
                </button>

            </div>
                  
                </div> 
             
    
            </div> 

          <div className=' border-t-1 border-gray-300 mb-5 mt-5 w-400'> </div>

                <div>

        <div className=" max-w-7xl mx-auto  h-[500px] p-4 bg-base-200 rounded-2xl shadow-md ml-32 ">
        <h2 className="text-xl font-semibold mb-4 text-left pt-5 pb-6">Ratings</h2>
        <ResponsiveContainer width={680} height={380}>
          <BarChart data={ratings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="category" dataKey="name" />
            <YAxis type="number" dataKey="count" />
            <Tooltip />
            <Bar dataKey="count" fill="#ff8811" barSize={45} />
          </BarChart>
        </ResponsiveContainer>
      </div>
             </div>


     <h2 className="text-xl font-medium mt-16 text-[#001931] max-w-8xl mx-auto">Description</h2>
      <p className="mt-7 max-w-8xl mx-auto  mb-17 text-[#627382] text-base">{description}</p>
    
            
        </div>
            )
        }











       </div>
    );
};

export default AppDetails;