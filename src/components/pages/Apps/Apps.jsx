import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import App from './App';

const Apps = () => {
    const apps = useLoaderData();
    console.log(apps);
    return (
        <div className='max-w-[1600px] mx-auto '> 
       <div className='text-center mt-10'>
             <h1 className='text-5xl font-bold'>Our All Applications</h1>
            <p className='text-xl text-[#627382] py-5 '>Explore All Apps on the Market developed by us. We code for Millions</p> 
            
       </div> 

       <div className='flex justify-between ml-7'>
        <h1>({apps.length}) Apps Found</h1>
        <input type="text" placeholder='search Apps' />
       </div> 

       <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 mt-9'>
        <Suspense fallback={<span>Loading....</span>}> 
        {
            apps.map(appSingle=><App appSingle={appSingle} key={appSingle.id}></App>)
        }

        </Suspense>
       </div>
            
        </div>
    );
};

export default Apps;