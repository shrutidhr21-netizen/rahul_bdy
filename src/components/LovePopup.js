import React, { useState } from 'react';
import './LovePopup.css';

const LovePopup = ({ onResponse }) => {
  const [animate, setAnimate] = useState(false);

  const handleYesClick = () => {
    setAnimate(true); // ✅ animation start hoga
    setTimeout(() => {
      onResponse('yes'); // ✅ thoda delay ke baad next page open hoga
    }, 1200); // animation ke duration ke hisaab se delay
  };

  return (
    <div className={`popup-overlay ${animate ? "fade-out" : ""}`}>
      <div className={`popup-container ${animate ? "zoom-out" : ""}`}>
        <div className="popup-content">
          <h2 className="popup-question">Do you Love Shruti?</h2>
          <div className="popup-buttons">
            <button className="popup-btn yes-btn" onClick={handleYesClick}>
              Yes ❤️
            </button>
            <button className="popup-btn no-btn" onClick={() => onResponse('no')}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LovePopup;
