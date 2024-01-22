import React from 'react';
import { ButtonIcon, CeoImg } from '.';
import { MdMailOutline, MdOutlinePhoneInTalk } from 'react-icons/md';

const Hero = () => {
  return (
    <div>
      <h1 className='primaryColor text-2xl font-bold py-5'>Hey, <br/> It's me Mateo</h1>
      <div className="mb-6 text-black grid grid-cols-2 bg-gray-200 rounded-2xl shadow-lg p-8">
         <div>
          <CeoImg />
         </div>

        <div>
            <h1 className="text-2xl font-bold mb-2 text-green-500">Firdirico Sa</h1>
            <h2 className="text-l font-bold mb-2 text-gray-700">Chief Operation Officer</h2>
            <div className='flex flex-cols-2  pb-2'>
              <div className='text-white bg-green-500 rounded-full w-6 h-6 mr-3 pt-1'><MdOutlinePhoneInTalk className='ml-1'/></div>
              <div className='text-sm'>Phone: (855) 123-4567</div>
            </div>

            <div className='flex flex-cols-2'>
              <div className='text-white bg-green-500 rounded-full w-6 h-6 mr-3 pt-1'><MdMailOutline className='ml-1'/></div>
              <div className='text-sm'>Email: pam@example.com</div>
            </div>
           
        </div>
        </div>
        <ButtonIcon />
        </div>
  );
};

export default Hero;
