// SocialMediaButton.tsx
import React, { useState } from 'react';
import SocialMediaPopup from './SocialMediaPopup';

const SocialTemp: React.FC = () => {
  const [showSocialMediaPopup, setShowSocialMediaPopup] = useState(false);

  const handleSocialMediaButtonClick = () => {
    setShowSocialMediaPopup(true);
  };

  const handleCloseSocialMediaPopup = () => {
    setShowSocialMediaPopup(false);
  };

  return (
    <div>
      {/* Your other content */}
      <button
        onClick={handleSocialMediaButtonClick}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Social Media
      </button>
      {showSocialMediaPopup && <SocialMediaPopup handleClose={handleCloseSocialMediaPopup} />}
    </div>
  );
};

export default SocialTemp;
