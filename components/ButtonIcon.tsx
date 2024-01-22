import React from 'react'
import { IoQrCodeOutline, IoShare } from 'react-icons/io5'
import { MdMailOutline, MdOutlineMoreHoriz } from 'react-icons/md'
import { QrCodePopUp, useQrCodeLogic } from './QrCodePopUp'
import { useState } from 'react'
import SocialMediaPopup from './SocialMediaPopup'

const ButtonIcon : React.FC = () => {
  const {
    showQrCode,
    qrCodeImageUrl,
    handleButtonClick,
    handleCloseQrCodePopUp,
  } = useQrCodeLogic();

  {/* Media Cost*/}

  const [showSocialMediaPopup, setShowSocialMediaPopup] = useState(false);

  const handleSocialMediaButtonClick = () => {
    setShowSocialMediaPopup(true);
  };

  const handleCloseSocialMediaPopup = () => {
    setShowSocialMediaPopup(false);
  };
  return (
    <>
          <div className="px-4 py-4 bg-gray-200 rounded-3xl mb-7">
              <div className='flex space-x-5'>
                <button
                    onClick={handleButtonClick}
                    className="flex flex-col items-center justify-center h-28 w-28 bg-white text-gray-700 rounded-3xl 
                    focus:outline-none hover:bg-green-600 focus:ring-4 focus:ring-red-300 dark:bg-white dark:hover:bg-gray-100 dark:focus:ring-gray-100
                    "
                    >
                    <div className="bg-green-500 rounded-xl p-1 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1.5 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <IoQrCodeOutline />
                      </svg>
                    </div>
                    <div className='text-sm'>QR Code</div>
                  </button>
                  <QrCodePopUp show={showQrCode} handleClose={handleCloseQrCodePopUp} imageUrl={qrCodeImageUrl} />


                  <button 
                    className="flex flex-col items-center justify-center h-28 w-28 bg-white text-gray-700 rounded-3xl 
                    focus:outline-none hover:bg-green-600 focus:ring-4 focus:ring-red-300 dark:bg-white dark:hover:bg-gray-100 dark:focus:ring-gray-100
                    ">
                    <div className="bg-green-500 rounded-xl p-1 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1.5 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <IoShare />
                      </svg>
                    </div>
                    <div className='text-sm'>Share</div>
                  </button>

                  <button 
                    className="flex flex-col items-center justify-center h-28 w-28 bg-white text-gray-700 rounded-3xl 
                    focus:outline-none hover:bg-green-600 focus:ring-4 focus:ring-red-300 dark:bg-white dark:hover:bg-gray-100 dark:focus:ring-gray-100
                    ">
                    <div className="bg-green-500 rounded-xl p-1 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1.5 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <MdMailOutline />

                      </svg>
                    </div>
                    <div className='text-sm'>Email</div>
                  </button>

                  <button 
                    onClick={handleSocialMediaButtonClick}
                    className="flex flex-col items-center justify-center h-28 w-28 bg-white text-gray-700 rounded-3xl 
                    focus:outline-none hover:bg-green-600 focus:ring-4 focus:ring-red-300 dark:bg-white dark:hover:bg-gray-100 dark:focus:ring-gray-100
                    ">
                    <div className="bg-green-500 rounded-xl p-1 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1.5 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <MdOutlineMoreHoriz />

                      </svg>
                    </div>
                    <div className='text-sm'>Social media</div>
                  </button>
                  {showSocialMediaPopup && <SocialMediaPopup handleClose={handleCloseSocialMediaPopup} />}

                  


                  
              </div>
           </div>
                

    </>
  )
}

export default ButtonIcon