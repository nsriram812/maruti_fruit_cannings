// SuccessPopup.js
import React from 'react';

const SuccessPopup = ({ message, onClose }) => {
  return (
    <div className="success-popup">
      <div className="success-popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessPopup;
