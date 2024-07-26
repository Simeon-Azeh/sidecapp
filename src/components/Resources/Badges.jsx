import React from 'react';
import badgeImage from '../../../public/images/awardone.png'; // Adjust the path as necessary

function Badges() {
  return (
    <div className='w-full bg-white rounded-md border h-72 px-8 py-2'>
           <h1 className='text-xl font-semibold text-[#404660]'>New Badge</h1>
             <div className='  flex justify-center items-center '>
          <div className=" flex justify-center items-center bg-[#9835ff] w-60 h-60 rounded-full shadow-md  hover:scale-105 duration-300">
      <img src={badgeImage} alt="Badge" className="w-full mt-5 object-cover rounded-full opacity-80" />
    </div>
    </div>
 
    </div>
   
  );
}

export default Badges;
