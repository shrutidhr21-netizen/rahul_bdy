import React, { useState } from 'react';
import './App.css';
import BirthdayPage from './components/BirthdayPage';
import SurprisePage from './components/SurprisePage';
import LovePopup from './components/LovePopup';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [showBirthday, setShowBirthday] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  const handleLoveResponse = (response) => {
    if (response === 'yes') {
      setShowPopup(false);
      setShowBirthday(true);
    } else {
      alert('BYE BYE');
      window.close();
    }
  };

  const handleSurpriseClick = () => {
    setShowBirthday(false);
    setShowSurprise(true);
  };

  const handleBackToBirthday = () => {
    setShowSurprise(false);
    setShowBirthday(true);
  };

  return (
    <div className="App">
      {showPopup && <LovePopup onResponse={handleLoveResponse} />}
      {showBirthday && <BirthdayPage onSurpriseClick={handleSurpriseClick} />}
      {showSurprise && <SurprisePage onBack={handleBackToBirthday} />}
    </div>
  );
}

export default App;

