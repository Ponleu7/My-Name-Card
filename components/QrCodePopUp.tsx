import React from 'react';

interface QrCodePopUpProps {
  show: boolean;
  handleClose: () => void;
  imageUrl: string;
}

const QrCodePopUp: React.FC<QrCodePopUpProps> = ({ show, handleClose, imageUrl }) => {
  return (
    <div className={`fixed inset-0 ${show ? 'block' : 'hidden'} bg-gray-900 bg-opacity-50`}>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg max-w-md">
          <div className="flex justify-end">
            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
              Close
            </button>
          </div>
          <div className="mt-4">
            <img src={imageUrl} alt="QR Code" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCodePopUp;
