import React from 'react';

const CompanyImg = () => {
  //const imageUrl = 'https://bongsrey.sgp1.digitaloceanspaces.com/library/34813/images/63e36d3cb3fe8.png';
  const targetUrl = 'https://bongsrey.sgp1.digitaloceanspaces.com/library/34813/images/63e36d3cb3fe8.png'; // Replace with your target URL

  return (
    <a >
      <img src={targetUrl} alt="Description of the image" className="h-20 w-auto rounded-xl"/>
    </a>
  );
};

export default CompanyImg;
