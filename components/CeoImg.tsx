import React from 'react';

const CeoImg = () => {
  const imageUrl = './Jan.png';
  //const targetUrl = 'https://i.insider.com/639f2ba50675db0018b35975?width=1136&format=jpeg'; // Replace with your target URL

  return (
    <div className='col-span-1'>
      <img 
        src={imageUrl} 
        alt="Description of the image" 
        className="object-center h-48 w-auto rounded-xl"
      />
    </div>
  );
};

export default CeoImg;
