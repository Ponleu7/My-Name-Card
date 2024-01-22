import { SocialMediaPopupProps } from '@/types';
import React from 'react';
import { FaFacebook, FaLinkedin, FaTelegram} from "react-icons/fa";
import { ImCross } from "react-icons/im";




const SocialMediaPopup: React.FC<SocialMediaPopupProps> = ({handleClose}) => {

  const socialMediaLinks = [
    { name: 'Facebook', icon: <FaFacebook />, link: 'https://www.facebook.com/', style:'text-blue-600 hover:text-blue-700'},
    { name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://www.linkedin.com/', style:'text-blue-500 hover:text-blue-600'},
    { name: 'Telegram', icon: <FaTelegram />, link: 'https://t.me/' , style:'text-blue-400 hover:text-blue-500'},
  ];

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-9 w-1/3 h-72 rounded-lg">
        <div className="flex justify-between">
          <div className='text-xl text-gray-600 pb-3'> Social Media </div>
          <div>
          <button 
          onClick={handleClose}
          className="text-gray-500 hover:text-gray-700" >
           <div>
           <ImCross />
           </div>
          </button>
          </div>
        </div>
        
        <div className="mt-4">
          {socialMediaLinks.map((socialMedia, index) => (
            <a
              key={index}
              href={socialMedia.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex text-2xl items-center space-x-2 mb-2 gap-3 p-3 border-b-2 ${socialMedia.style}`}
              
            >
              {socialMedia.icon}
              <span className='text-gray-600 hover:text-gray-800 text-base'>{socialMedia.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPopup;
