import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import App from './App';
import { GoSearch } from 'react-icons/go';
import logo from "../../../assets/logo.png"


const Apps = () => { 
    const apps = useLoaderData(); 
   const [loading,setLoading]=useState(false)

    const [search, setSearch] = useState(' ')
    const term = search.trim().toLocaleLowerCase()

   useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, [search]);



    const searchApps = term? apps.filter(app => 
        app.title.toLocaleLowerCase().includes(term))

        : apps 
  
    return (
      

        <div className='max-w-[1600px] mx-auto  min-h-screen mb-9'> 
       <div className='text-center mt-10'>
             <h1 className='text-5xl font-bold'>Our All Applications</h1>
            <p className='text-xl text-[#627382] py-5 '>Explore All Apps on the Market developed by us. We code for Millions</p> 
            
       </div> 

       <div className='flex justify-between ml-7'>
        <h1 className='font-semibold text-2xl'>({searchApps.length}) Apps Found</h1>
       <label className='input' >
        <GoSearch  className='text-xl'/>
         <input 
         value={search}
         onChange={(e)=>setSearch(e.target.value)} 
         type="search" 
         placeholder='Search Apps' />
       </label>
       </div> 

       { 

       loading? (  <div className="flex justify-center items-center py-20">
        
           <div className="fixed inset-0 flex items-center justify-center bg-white/60 z-50">
           <img src={logo} alt="" className="w-24 animate-spin " /> <span className='text-2xl text-[#632ee3] ml-3 font-bold'>Loading Spinner...</span>
          
     
      
      </div>
    </div>) :

        <Suspense fallback={<span>Loading....</span>}> 

         <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 mt-9'>
       
         {
            searchApps.map(appSingle=><App appSingle={appSingle} key={appSingle.id}></App>)
         }
       
       </div>
       
        </Suspense>







       }

      
            
        </div>
       
       
       
       
       
       
       
       
       
       
      
    );
};

export default Apps;