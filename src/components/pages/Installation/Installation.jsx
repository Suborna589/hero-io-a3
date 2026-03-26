import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import Installed from './Installed';
import { useState } from 'react';
import { getStoredApp, removeToStoreDB} from '../../../utility/addToDB';
import logo from "../../../assets/logo.png"
 import {ToastContainer ,  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notFound  from "../../../assets/App-Error.png"

const Installation = () => { 
    const app = useLoaderData(); 
    const[installed , setInstalled]=useState([]);
    const [sortSize,setSortSize]=useState('') ;
     const[loading,setLoading]=useState(false)
   
  
  

    useEffect(()=>{
        const storedAppDAta = getStoredApp();
        const convertStoredApp = storedAppDAta.map(id=>parseInt(id))
        const installedList = app.filter(app=>convertStoredApp.includes(app.id));
        setInstalled(installedList); 


         setLoading(true);
           const timer = setTimeout(() => {
             setLoading(false);
           }, 500); 
       
           return () => clearTimeout(timer);

        

    },[app])  


    const sortedItem = ( () =>{
      if(sortSize === 'size-asc'){
        return [...installed].sort((h,l) => h.size - l.size)
      }
      else if(sortSize === 'size-desc'){
        return[...installed].sort((h,l)=> l.size - h.size)
        
      }else{
        return installed;
      }
    }
  ) ()  
  
  
 


  const handleRemoveApp = (id) => {

  removeToStoreDB(id);

 toast.success("App Uninstalled Successfully!", {
    position: "top-right",
    autoClose: 2000,
  });
  const updated = installed.filter(app => app.id !== id);
  setInstalled(updated); 

}; 


    return (
        <div className=' max-w-[580px] md:max-w-[1600px]    mx-auto  min-h-screen'> 

             <ToastContainer />
        <div className='text-center mt-12 '>
         <h1 className='text-5xl font-bold my-4'>Your Installed Apps</h1>
         <p className='text-xl text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
        </div> 

       <div className='flex justify-between space-y-8 mt-12'>

        <div>
            <h1 className='text-2xl font-semibold'>{sortedItem.length} Apps Found</h1>
        </div>

     <label className='form-control w-full max-w-xs'>

      < select value={sortSize}
                onChange={(e)=>setSortSize(e.target.value)}
                className="select select-bordered">
   
        <option className='text-base text-[#627382]' value=''>Sort by size</option>  
        <option  value='size-asc'>High-Low </option>
        <option  value='size-desc'>Low-High</option>
 
      </select>

     </label>



       </div>



{ 

     !loading && sortedItem.length === 0 ? 

      <div className="flex flex-col items-center justify-center mt-20 mb-20">
      <img src={notFound} alt="Not Found" className="w-[400px]" />

      <h2 className="text-3xl  uppercase font-bold mt-6">
      Opps!! App Not Found
      </h2>

      <p className="text-gray-500 mt-2">
       The app you are requesting is not found on our system.please try another apps
      </p>

      <Link to="/" className=" ml-45 md:ml-[6px] mt-5 mb-6 text-white btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] mb-4">Go Back!</Link>

    </div> 

    :  
    ('')


}

          { 

          loading ? (<div className="flex justify-center items-center py-20">
                  
                     <div className="fixed inset-0 flex items-center justify-center bg-white/60 z-50">
                     <img src={logo} alt="" className="w-24 animate-spin " /> <span className='text-2xl text-[#632ee3] ml-3 font-bold'>Loading Spinner...</span>
                
                </div>
              </div>) : (

            <div>

              
              {
                sortedItem.map(appSingle =><Installed key={appSingle.id}
                 appSingle={appSingle}
                 handleRemoveApp ={handleRemoveApp} >

                 </Installed>)
                 }

                 </div>
                 
            
              )
            
          
          }

     
            
        </div>
    );
};

export default Installation;