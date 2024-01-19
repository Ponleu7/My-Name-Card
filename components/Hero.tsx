import React from 'react';
import { ButtonIcon, CeoImg } from '.';

const Hero = () => {
  return (
    <div>
      <h1 className='text-green-500 text-2xl font-bold py-5'>Hey, <br/> It's me Mateo</h1>
      <div className="mb-6 text-black grid grid-cols-2 bg-gray-200 rounded-2xl shadow-lg p-8">
         <div>
          <CeoImg />
         </div>

        <div>
            <h1 className="text-2xl font-bold mb-2 text-green-500">Contact Information</h1>
            <h2 className="text-l font-bold mb-2">CEO</h2>
            <p>Email: pam@example.com</p>
            <p>Phone: +1 (555) 123-4567</p>
        </div>
        </div>
        <ButtonIcon />
        </div>
  );
};

export default Hero;
