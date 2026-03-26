
import { FaDownload, FaStar } from 'react-icons/fa';







const Installed = ({appSingle,handleRemoveApp }) => {


    const {image,subtitle,title,downloads,ratingAvg,size,id} =appSingle;

    


    return (
        <div className='bg-base-100 shadow-sm w-full h-36 rounded-xl  space-y-14 mt-4'> 

        <div className='flex justify-between items-center pl-8 pr-8'>

    <div className='flex items-center  gap-6 pt-3'>
               <div>
                 <img src={image} className='w-[125px] h-[120px] object-cover' alt="" /> 
               </div>

                <div >
                    <h1 className='font-medium text-xl pb-6'>{title}{subtitle}</h1>
                    <div className='flex gap-12'>
                      <span className="flex items-center gap-2  text-[#39CC39] font-bold"><FaDownload />{downloads}</span>
                         <span className="flex items-center gap-2  text-[#F54927]"><FaStar />{ratingAvg}</span>
                        <span  className=''>{size}MB</span>
                    </div>
                </div>


              


            </div> 

            <div className=''>
                <button onClick={()=>handleRemoveApp(id)} className='btn bg-green-400 text-white'>Uninstall</button>
                    
              </div>








        </div>


     
        </div>
   
    );
};

export default Installed;