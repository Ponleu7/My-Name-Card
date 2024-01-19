import React, { useState, useEffect} from 'react';
import QrCodePopUp from './QrCodePopUp';

const Qr: React.FC = () => {
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
  }, 20000);

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

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Next.js Qr Page</h1>
      <button onClick={handleButtonClick} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 duration-4">
        Show QR Code
      </button>

      <QrCodePopUp show={showQrCode} handleClose={handleCloseQrCodePopUp} imageUrl={qrCodeImageUrl} />
    </div>
  );
};

export default Qr;
