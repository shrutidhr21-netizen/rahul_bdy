import React, { useState } from 'react';
import './SurprisePage.css';

const SurprisePage = ({ onBack }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [mediaError, setMediaError] = useState(false);

  const imageCards = [
    { id: 1, type: 'text', title: 'Stay Happy Always', content: 'Rahul, your smile makes every moment brighter! 😊', image: '🎂' },
    { id: 2, type: 'text', title: 'Most Caring Soul', content: 'You care for everyone around you selflessly 💖', image: '🤗' },
    { id: 3, type: 'text', title: 'Best Friend Forever', content: 'Grateful to have you as a friend 🙌', image: '🎁' },
    { id: 4, type: 'text', title: 'Our Rockstar', content: 'Rahul, you shine wherever you go 🌟', image: '🎸' },
    { id: 5, type: 'text', title: 'Happiness Spreader', content: 'Your laughter is pure magic ✨', image: '😂' },
    { id: 6, type: 'text', title: 'The Most Caring Person', content: 'Always ready to help and support 💕', image: '🤝' },
    { id: 7, type: 'text', title: 'Bundle of Joy', content: 'Rahul, you bring joy to every gathering 🎊', image: '🥳' },
    { id: 8, type: 'text', title: 'Positive Vibes Only', content: 'Your positivity inspires everyone 🌈', image: '☀️' },
    { id: 9, type: 'text', title: 'True Inspiration', content: 'Rahul, you motivate us with your kindness ✨', image: '💡' },
    { id: 10, type: 'text', title: 'Forever Special', content: 'You’re one in a million, Rahul ❤️', image: '💝' }
  ];

  const flowerCards = [
    { id: 11, type: 'flower', title: 'Spread Love', content: 'Rahul, just like a rose, you spread love everywhere 🌹', flower: '🌹' },
    { id: 12, type: 'flower', title: 'Shine Bright', content: 'Your smile shines brighter than a sunflower, Rahul 🌻', flower: '🌻' },
    { id: 13, type: 'flower', title: 'Stay Elegant', content: 'Elegant and pure, Rahul, you’re as special as a tulip 🌷', flower: '🌷' },
    { id: 14, type: 'flower', title: 'Innocent Soul', content: 'Rahul, your innocence and kindness remind us of daisies 🌼', flower: '🌼' },
    { id: 15, type: 'flower', title: 'Pure Heart', content: 'Like lilies, Rahul, you bring peace and beauty to life 🌺', flower: '🌺' },
    { id: 16, type: 'flower', title: 'Be Unique', content: 'Rahul, rare and unique, just like a blooming orchid 🌸', flower: '🌸' },
    { id: 17, type: 'flower', title: 'Sweet Presence', content: 'Your presence, Rahul, is as soothing as jasmine fragrance 🤍', flower: '🤍' },
    { id: 18, type: 'flower', title: 'Stay Calm', content: 'Rahul, you calm every storm with your lavender-like vibes 💜', flower: '💜' },
    { id: 19, type: 'flower', title: 'Bring Hope', content: 'Rahul, like cherry blossoms, you make life beautiful and hopeful 🌸', flower: '🌸' },
    { id: 20, type: 'flower', title: 'Be Adventurous', content: 'Full of energy and adventure, Rahul, you’re our hibiscus 🌺', flower: '🌺' }
  ];



  const wishCards = [
    { id: 21, type: 'wish', title: 'Stay Joyful', content: 'Rahul, may your birthday be filled with endless joy and laughter! 🎉' },
    { id: 22, type: 'wish', title: 'Shine Bright', content: 'Wishing you a year ahead full of amazing adventures, Rahul! 🌟' },
    { id: 23, type: 'wish', title: 'Dream Big', content: 'Rahul, may all your dreams come true this year! ✨' },
    { id: 24, type: 'wish', title: 'Stay Happy', content: 'Hope your special day brings you happiness beyond measure, Rahul! 💖' },
    { id: 25, type: 'wish', title: 'Be Blessed', content: 'Rahul, may you be blessed with good health and prosperity! 🙏' },
    { id: 26, type: 'wish', title: 'Success Always', content: 'Wishing you success in everything you do, Rahul! 🏆' },
    { id: 27, type: 'wish', title: 'Love & Laughter', content: 'Rahul, may your heart be filled with love and your life with laughter! ❤️' },
    { id: 28, type: 'wish', title: 'Chase Goals', content: 'Hope this new year of life brings you closer to your goals, Rahul! 🎯' },
    { id: 29, type: 'wish', title: 'Keep Smiling', content: 'Rahul, may you always find reasons to smile and be happy! 😊' },
    { id: 30, type: 'wish', title: 'Forever Special', content: 'Wishing you a birthday as wonderful as you are, Rahul! 🌈' }
  ];


  const specialCards = [
    { id: 31, type: 'special', title: 'Joyful Soul', content: 'Rahul, your cheerful soul lights up every room you enter! 🌟' },
    { id: 32, type: 'special', title: 'True Friend', content: 'Rahul, your friendship is a treasure that lasts forever. You make bonds stronger with your caring heart! 👫' },
    { id: 33, type: 'special', title: 'Grateful Heart', content: 'Be grateful, Rahul, for another year of life and all the amazing experiences it brings you! 🙏✨' },
    { id: 34, type: 'special', title: 'Big Adventure', content: 'Rahul, may this year be your greatest adventure yet — keep exploring, discovering, and growing! 🗺️' },
    { id: 35, type: 'special', title: 'Loved Always', content: 'You are loved more than you know, Rahul. Happy Birthday to someone truly special! 💝' }
  ];


  const allCards = [...imageCards, ...flowerCards, ...wishCards, ...specialCards];

  // Random content arrays
  const randomTexts = [
    "🎉 Surprise! Hope your day is as amazing as you are!",
    "🌟 Another year of awesome adventures awaits you!",
    "💫 May this birthday bring you endless happiness!",
    "🎈 Celebrating you today and always!",
    "✨ Wishing you magic and wonder on your special day!",
    "🎂 Here's to another year of incredible memories!",
    "🌈 May your birthday be filled with rainbow moments!",
    "🎊 Party time! Let's celebrate your awesomeness!",
    "💖 Sending you love and birthday wishes!",
    "🎁 You deserve all the happiness in the world!"
  ];

  const randomImages = [
    "/both.jpeg",
    "/1.JPG",
    "/4 .JPG",
    "/8.PNG",
    "/r.jpg",
    "/r-1.jpg",
    "/r-2.jpg",
    "/r-3.jpg",
    "/r-4.jpg",
    "/r-5.jpg",
    "/r-6.jpg",
    "/r-7.jpg",
    "/r-8.jpg",
    "/r-9.jpg",
    "/r-10.jpg",
    "/r-11.jpg",
    "/r-12.jpg",
    "/r-13.jpg",
    "/r-14.jpg",
    "/r-15.jpg",
    "/r-16.jpg",
    "/r-17.jpg",
    "/r-18.jpg",
    "/r-19.jpg",
    "/r-20.jpg",
    "/r-21.jpg",
    "/r-22.jpg",
    "/r-23.jpg",
    "/r-24.jpg",
    "/r-25.jpg",
    "/r-26.jpeg",
    "/r-27.jpeg",
    "/r-28.jpeg",
    "/r-29.jpeg"
  ];

  const randomVideos = [
    "/1vid.mp4",
    "/2vid.mp4",
    "/3vid.mp4",
    "/4vid.mp4",
    "/5vid.mp4"

  ];

  const getRandomContent = () => {
    const contentTypes = ['text', 'image', 'video'];
    const randomType = contentTypes[Math.floor(Math.random() * contentTypes.length)];

    switch (randomType) {
      case 'text':
        return {
          type: 'text',
          content: randomTexts[Math.floor(Math.random() * randomTexts.length)]
        };
      case 'image':
        return {
          type: 'image',
          content: randomImages[Math.floor(Math.random() * randomImages.length)]
        };
      case 'video':
        return {
          type: 'video',
          content: randomVideos[Math.floor(Math.random() * randomVideos.length)]
        };
      default:
        return {
          type: 'text',
          content: randomTexts[0]
        };
    }
  };

  const handleCardClick = (card) => {
    const randomContent = getRandomContent();
    setSelectedCard({
      ...card,
      randomContent
    });
    setMediaError(false); // Reset media error state
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="surprise-page">
      <div className="surprise-header">
        <button className="back-btn" onClick={onBack}>
          ← Back to Birthday
        </button>
        <h1 className="surprise-title">🎁 Special Birthday Surprises for Rahul 🎁</h1>
        <p className="surprise-subtitle">
          Rahul, every card here holds a little love, laughter, and memory just for you 💖
          Click on any card to reveal your surprise!
        </p>

      </div>

      <div className="cards-grid">
        {allCards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.type}-card`}
            onClick={() => handleCardClick(card)}
          >
            <div className="card-front">
              <div className="card-icon">
                {card.image || card.flower || '🎁'}
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-type">{card.type.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-icon">
              {selectedCard.image || selectedCard.flower || '🎁'}
            </div>
            <h2 className="modal-title">{selectedCard.title}</h2>

            {/* Random Content Display */}
            <div className="modal-random-content">
              {selectedCard.randomContent?.type === 'text' && (
                <p className="modal-text random-text">{selectedCard.randomContent.content}</p>
              )}

              {selectedCard.randomContent?.type === 'image' && (
                <div className="modal-image-container">
                  {!mediaError ? (
                    <img
                      src={selectedCard.randomContent.content}
                      alt="Random surprise"
                      className="modal-image"
                      onError={() => setMediaError(true)}
                    />
                  ) : (
                    <div className="image-placeholder">
                      <div className="placeholder-icon">🖼️</div>
                      <p>Image placeholder - Add your images to /public/images/</p>
                    </div>
                  )}
                </div>
              )}

              {selectedCard.randomContent?.type === 'video' && (
                <div className="modal-video-container">
                  {!mediaError ? (
                    <video
                      controls
                      className="modal-video"
                      onError={() => setMediaError(true)}
                    >
                      <source src={selectedCard.randomContent.content} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="video-placeholder">
                      <div className="placeholder-icon">🎬</div>
                      <p>Video placeholder - Add your videos to /public/videos/</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <p className="modal-text original-content">{selectedCard.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurprisePage;

