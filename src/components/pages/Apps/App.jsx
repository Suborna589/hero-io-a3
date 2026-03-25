import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const App = ({appSingle}) => {
    const {image,title,companyName,downloads,ratingAvg,id}=appSingle;
    return (
      <Link to={`/appDetails/${id}`}> 
         <div className="card bg-base-100 w-72 md:w-[370px] shadow-sm h-100">
       <figure className='bg-gray-100 h-[290px]'>
         <img className='md:w-62  object-cover  hover:scale-105 duration-500 '
           src={image}
           alt="Shoes" />
       </figure>
       <div className="card-body">
         <h2 className="card-title text-xl font-medium">
          {title}
           <div className="">- {companyName}</div>
         </h2>
        
         <div className="card-actions justify-between">
           <div className="badge text-[#39CC39] bg-gray-100"><FaDownload />{downloads}</div>
           <div className="badge text-[#F54927] bg-gray-100"><FaStar />{ratingAvg}</div>
         </div>
       </div>
     </div>
      
      
      
      
       </Link>
    );
};

export default App;