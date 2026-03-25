import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import Installed from './Installed';
import { useState } from 'react';
import { getStoredApp, removeToStoreDB} from '../../../utility/addToDB';
import logo from "../../../assets/logo.png"

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

 
  const updated = installed.filter(app => app.id !== id);
  setInstalled(updated);
}; 




   
        useEffect(() => {
           setLoading(true);
           const timer = setTimeout(() => {
             setLoading(false);
           }, 500); 
       
           return () => clearTimeout(timer);
         }, []);


 




  

    return (
        <div> 
        <div className='text-center mt-12 '>
         <h1 className='text-5xl font-bold my-4'>Your Installed Apps</h1>
         <p className='text-xl text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
        </div> 

       <div className='flex justify-between'>

        <div>
            <h1>{sortedItem.length} Apps Found</h1>
        </div>

     <label className='form-control w-full max-w-xs'>

      < select value={sortSize}
                onChange={(e)=>setSortSize(e.target.value)}
                className="select select-bordered">
   
        <option value=''>Sort by size</option>  
        <option  value='size-asc'>High-Low </option>
        <option  value='size-desc'>Low-High</option>
 
      </select>





     </label>



       </div>

      

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
                 handleRemoveApp ={handleRemoveApp}
                 >

                  

                 </Installed>)
                 }

                 </div>
            
          
            
              )
            
            
            





          }

     
            
        </div>
    );
};

export default Installation;