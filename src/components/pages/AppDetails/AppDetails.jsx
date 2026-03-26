import React, { useEffect, useState } from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { FaDownload, FaStar } from 'react-icons/fa';
import logo from "../../../assets/logo.png"
import { Link, useLoaderData } from 'react-router';
import { useParams } from 'react-router';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { addToStoredDB, getStoredApp } from '../../../utility/addToDB';
 import { ToastContainer, toast } from 'react-toastify';


const AppDetails = () => {
    const[loading,setLoading]=useState(false)
    const [isInstall,setIsInstall] =useState(false);
    const {id}=useParams();
    const appId=parseInt(id);
    const appData = useLoaderData();
     const singleApp = appData.find(app=> app.id === appId);

         
    useEffect(() => {
       const storedApps = getStoredApp();
        if (storedApps.includes(appId)){
        setIsInstall(true);
      }
       setLoading(true);
        const timer = setTimeout(() => {
          setLoading(false);
            }, 500); 
           
        return () => clearTimeout(timer);


   
   
}, [appId]);


     const handleInstalled = () => {

        toast("Installation Successfully!")
        if (!isInstall) {
            addToStoredDB(id);
            setIsInstall(true);
        } else {
            setIsInstall(false);
          
        }
    }; 


     const {image,title,companyName,downloads,ratingAvg,reviews,size,ratings,description,subtitle}=singleApp;
         



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
            <div className=' flex-cols-1 md:flex  gap-28 max-w-7xl mx-auto  '>
                <div className='bg-gray-100 w-[260px] h-[250px] p-3 rounded-xl '>
                    <img src={image} alt="" className='w-[260px] h-[225px]   object-cover rounded-sm  pl-0 pt-0 hover:scale-105 duration-500 ' />
                </div>
                <div className=' '>
                    <h1 className='text-2xl font-bold'>{title}{subtitle}</h1>
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
           <button onClick={handleInstalled} disabled={isInstall}
           className={`btn ${isInstall ? "bg-gray-300 w-34 text-lg " : "bg-green-400 text-lg "} text-white`}>
           {
            isInstall
            ? "Uninstall"
            : `Install Now (${size}) MB`
            }
          </button>
          <ToastContainer />
            </div>
                  
                </div> 
             
    
            </div> 

          <div className=' border-t-1 border-gray-300 mb-5 mt-5 w-full'> </div>

                <div>

        <div className="  md:max-w-7xl mx-auto  h-[500px] p-4 bg-base-200 rounded-2xl shadow-md ml-32 ">
        <h2 className="text-xl font-semibold mb-4 text-left pt-5 pb-6">Ratings</h2>
        <ResponsiveContainer width={780} height={380}>
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

            <div className=' border-t-1 border-gray-300 mb-5 mt-5 w-400'> </div>
     <h2 className="text-xl font-medium mt-16 text-[#001931] max-w-8xl mx-auto">Description</h2>
      <p className="mt-7 max-w-8xl mx-auto  mb-17 text-[#627382] text-base">{description}</p>
    
            
        </div>
            )
        }

       </div>
    );
};

export default AppDetails;