import React, { useState, useEffect } from 'react';
import { QrCodePopUpProps } from '@/types';

const useQrCodeLogic = () => {
  const [showQrCode, setShowQrCode] = useState(false);
  const [qrCodeImageUrl, setQrCodeImageUrl] = useState('');
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const handleButtonClick = () => {
    // Fetch or set the QR code image URL here
    const imageUrl = './QrABA.png';
    setQrCodeImageUrl(imageUrl);
    setShowQrCode(true);
  };

  setTimeout(() => {
    setShowQrCode(false);
  }, 30000);

  const handleCloseQrCodePopUp = () => {
    setShowQrCode(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return {
    showQrCode,
    qrCodeImageUrl,
    handleButtonClick,
    handleCloseQrCodePopUp,
  };
};

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

export { useQrCodeLogic, QrCodePopUp };
