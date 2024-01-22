import React from 'react'
import { CompanyImg } from '.'
import { BiHomeCircle, BiWorld } from 'react-icons/bi'

const CompanyDescription = () => {
  return (
    <div>
      {/* Company description */}
      <div className="mb-6 text-black">
        <CompanyImg />
        <div className='pb-4 pt-3'>
         Hi company description goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ullam quidem aperiam eum. Quos dolores delectus distinctio vel quo, ducimus, ex beatae numquam sit iure labore deserunt consectetur, sapiente hic?
        </div>
          
          <div className='flex flex-cols-2 pb-2'>
             <div className='text-white bg-green-500 rounded-full w-6 h-6 mr-3 pt-1'><BiHomeCircle className='ml-1'/></div>
              <div className='text-sm'>The Bright Soho Tower National Assembly St.78 <br />Songkat Tonlebasacc Khan Camkarmon Phnom Penh</div>
          </div>

          <div className='flex flex-cols-2'>
              <div className='text-white bg-green-500 rounded-full w-6 h-6 mr-3 pt-1'><BiWorld  className='ml-1'/></div>
              <div className='text-sm text-blue-500'><a href="https://prometeus-kc.com/">https://prometeus-kc.com</a></div>
          </div>
        </div>

    </div>
  )
}

export default CompanyDescription