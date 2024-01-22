// components/Service.jsx
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

interface ServiceProps {
  title: string;
  description: string;
}

const Services: React.FC<ServiceProps> = ({ title, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="mb-2 text-gray-700">
      <div className="flex items-center justify-between bg-gray-200 p-4 cursor-pointer" onClick={() => setShowDetails(!showDetails)}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className='text-sm'>{showDetails ? <ImCross /> : <FaPlus /> }</span>
      </div>
      {showDetails && (
        <div className="bg-white p-4 mt-2">
          <p className="text-gray-700">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Services;
