import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const App = ({appSingle}) => {
    const {image,title,subtitle,downloads,ratingAvg,id}=appSingle;
    return (
      <Link to={`/appDetails/${id}`}> 
         <div className="card bg-base-100 w-72 md:w-[370px] shadow-sm h-100">
       <figure className='bg-gray-100 h-[290px]'>
         <img className='md:w-62  object-cover  hover:scale-105 duration-500 '
           src={image}
           alt="Shoes" />
       </figure>
       <div className="pl-4 pr-2 pt-5">
         <h2 className="card-title text-xl font-medium">
          {title}{subtitle}
          
         </h2>
        
         <div className="card-actions justify-between mt-5">
           <div className="badge text-[#39CC39] bg-gray-100"><FaDownload />{downloads}</div>
           <div className="badge text-[#F54927] bg-gray-100 mr-3"><FaStar />{ratingAvg}</div>
         </div>
       </div>
     </div>
      
      
      
      
       </Link>
    );
};

export default App;