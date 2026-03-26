import React, { Suspense} from 'react';
import TrendApp from './TrendApp';
import { Link } from 'react-router';



const TrendApps = ({appsData}) => { 
 
  const appsSlice =appsData.slice(0, 8);
  


    return (

        <div className='text-center mt-18  space-y-5 '>
            <h1 className="text-5xl font-bold">Trending Apps</h1>
            <p className="text-xl text-[#627382] py-5 ">Explore All Trending Apps on the Market developed by us</p>

      
            

        

             <Suspense fallback={<span>loading.....</span>}> 

            <div className="grid grid-cols-2   space-x-4 md:grid-cols-3   lg:grid-cols-4 gap-6"> 
             
              {
                appsSlice.map(appdata=><TrendApp appdata={appdata} key={appdata.id}></TrendApp>)
              }

            </div> 

              </Suspense>
        
   
        

            <Link to="/apps" className='btn bg-violet-600 text-white w-34 mt-5 mb-12'>Show All</Link>
            
        </div>
    );
};

export default TrendApps;