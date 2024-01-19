import React from 'react'
import { IoQrCodeOutline, IoShare } from 'react-icons/io5'
import { MdMailOutline, MdOutlineMoreHoriz } from 'react-icons/md'
import Qr from './Qr'

const ButtonIcon = () => {
  return (
    <>
          <div className="px-4 py-4 bg-gray-200 rounded-3xl mb-7">
              <div className='flex space-x-5'>
                <button 
                    className="flex flex-col items-center justify-center px-6 py-6 bg-white text-gray-700 rounded-3xl 
                    focus:outline-none hover:bg-green-600 focus:ring-4 focus:ring-red-300 dark:bg-white dark:hover:bg-gray-100 dark:focus:ring-gray-100
                    ">
                    <div className="bg-green-500 rounded-2xl p-1 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white ml-1.5 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <IoQrCodeOutline />
                      </svg>
                    </div>
                    <div className='text-sm'>QR Code</div>
                  </button>

                  <button 
                    className="flex flex-col items-center justify-center px-6 py-6 bg-white text-gray-700 rounded-3xl 
                    focus:outline-none hover:bg-green-600 focus:ring-4 focus:ring-red-300 dark:bg-white dark:hover:bg-gray-100 dark:focus:ring-gray-100
                    ">
                    <div className="bg-green-500 rounded-2xl p-1 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white ml-1.5 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <IoShare />
                      </svg>
                    </div>
                    <div className='text-sm'>Share</div>
                  </button>

                  <button 
                    className="flex flex-col items-center justify-center px-6 py-6 bg-white text-gray-700 rounded-3xl 
                    focus:outline-none hover:bg-green-600 focus:ring-4 focus:ring-red-300 dark:bg-white dark:hover:bg-gray-100 dark:focus:ring-gray-100
                    ">
                    <div className="bg-green-500 rounded-2xl p-1 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white ml-1.5 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <MdMailOutline />

                      </svg>
                    </div>
                    <div className='text-sm'>Email</div>
                  </button>

                  <button 
                    className="flex flex-col items-center justify-center px-6 py-6 bg-white text-gray-700 rounded-3xl 
                    focus:outline-none hover:bg-green-600 focus:ring-4 focus:ring-red-300 dark:bg-white dark:hover:bg-gray-100 dark:focus:ring-gray-100
                    ">
                    <div className="bg-green-500 rounded-2xl p-1 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white ml-1.5 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <MdOutlineMoreHoriz />

                      </svg>
                    </div>
                    <div className='text-sm'>Social media</div>
                  </button>
                  


                  
              </div>
           </div>
                

    </>
  )
}

export default ButtonIcon