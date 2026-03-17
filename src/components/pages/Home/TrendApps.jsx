import React, { Suspense } from 'react';
import TrendApp from './TrendApp';

const TrendApps = ({appsData}) => {
  


    return (
        <div className='text-center mt-18'>
            <h1 className="text-5xl font-bold">Trending Apps</h1>
            <p className="text-xl text-[#627382] py-5 ">Explore All Trending Apps on the Market developed by us</p>


            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8"> 
              <Suspense fallback={<span>loading.....</span>}> 
              {
                appsData.map(appdata=><TrendApp appdata={appdata} key={appdata.id}></TrendApp>)
              }

              </Suspense>

            </div> 

            <button className='btn btn-primary text-white'>See All</button>
            
        </div>
    );
};

export default TrendApps;