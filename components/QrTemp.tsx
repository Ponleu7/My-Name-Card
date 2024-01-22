import { QrCodePopUp, useQrCodeLogic } from "./QrCodePopUp";


const QrTemp: React.FC = () => {
  const {
    showQrCode,
    qrCodeImageUrl,
    handleButtonClick,
    handleCloseQrCodePopUp,
  } = useQrCodeLogic();

  return (
    <div className="">
      <h1 className="text-xl font-bold mb-4 text-green-500">Click and Scan it for my smile /: </h1>
      <button onClick={handleButtonClick} className="bg-pink-400 text-gray-700 py-2 px-4 rounded hover:bg-pink-600 hover:text-white">
        Show My Smile
      </button>

      <QrCodePopUp show={showQrCode} handleClose={handleCloseQrCodePopUp} imageUrl={qrCodeImageUrl} />
    </div>
  );
};

export default QrTemp;
