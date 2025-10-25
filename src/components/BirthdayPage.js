import React, { useEffect, useRef, useState } from 'react';
import './BirthdayPage.css';
import ImageCarousel from './ImageCarousel';

const BirthdayPage = ({ onSurpriseClick }) => {
  const audioRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [showLetter, setShowLetter] = useState(false); // 🧡 for letter open/close

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => {
        console.log('Auto-play prevented:', e);
      });
    }
  }, []);

  const carouselImages = [
    { src: '/r-3.jpg', alt: 'Birthday Memory 1', caption: 'Rahul, your smile brightens every room ✨' },
    { src: '/r-7.jpg', alt: 'Birthday Memory 2', caption: 'Wishing Rahul endless happiness today 💕' },
    { src: '/r-9.jpg', alt: 'Birthday Memory 3', caption: 'Rahul, you make every moment unforgettable 🌟' },
    { src: '/r-11.jpg', alt: 'Birthday Memory 4', caption: 'Cheers to Rahul’s amazing journey 🎉' },
    { src: '/r-12.jpg', alt: 'Birthday Memory 5', caption: 'Rahul, you deserve all the joy in the world 🥳' },
    { src: '/r-13.jpg', alt: 'Birthday Memory 6', caption: 'Happy moments always follow Rahul 🌈' },
    { src: '/r-15.jpg', alt: 'Birthday Memory 7', caption: 'Rahul, your kindness inspires everyone 💖' },
    { src: '/r-16.jpg', alt: 'Birthday Memory 8', caption: 'Rahul, keep shining like a star ⭐' },
    { src: '/r-18.jpg', alt: 'Birthday Memory 9', caption: 'Celebrating Rahul’s special day with love 🎂' },
    { src: '/r-19.jpg', alt: 'Birthday Memory 10', caption: 'Rahul, you are truly one of a kind 🙌' },
    { src: '/r-20.jpg', alt: 'Birthday Memory 11', caption: 'Wishing Rahul success, joy, and laughter 🌟' },
    { src: '/r-21.jpg', alt: 'Birthday Memory 12', caption: 'Rahul, you make life brighter 🌞' },
    { src: '/r-22.jpg', alt: 'Birthday Memory 13', caption: 'Here’s to Rahul’s dreams coming true 💫' },
    { src: '/r-23.jpg', alt: 'Birthday Memory 14', caption: 'Rahul, you deserve nothing but the best 🎁' },
    { src: '/r-25.jpg', alt: 'Birthday Memory 15', caption: 'Happy Birthday Rahul 🎉 You’re special today & always ❤️' }
  ];

  return (
    <div className={`birthday-page ${animate ? "page-enter-active" : "page-enter"}`}>
      <audio ref={audioRef} loop>
        <source src="/audio/tu-de-de-mera-saath.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="animated-background"></div>

      <div className="confetti-container">
        {[...Array(50)].map((_, i) => (
          <div key={i} className={`confetti confetti-${i % 5}`}></div>
        ))}
      </div>

      <div className="hearts-container">
        <div className="heart heart-0">❤️</div>
        <div className="heart heart-1">💖</div>
        <div className="heart heart-2">💕</div>
        <div className="heart heart-3">💞</div>
        <div className="heart heart-4">❤️</div>
        <div className="heart heart-5">💗</div>
      </div>

      <div className="balloons-container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`balloon balloon-${i % 3}`}></div>
        ))}
      </div>

      <div className="content">
        <h1 className="birthday-message">Happy Birthday Virat 🎉</h1>

        <div className="celebration-text">
          <p>
            Hope your special day is filled with happiness, love, and wonderful surprises!
          </p>
        </div>

        {/* 🐼 Panda Section */}
        <div className="panda-section" onClick={() => setShowLetter(true)}>
          <img
            src="/panda-holding-letter.png"
            alt="Cute Panda Holding a Letter"
            className="panda-image"
          />
          <p className="panda-text">
            Click me to open your letter 💌
          </p>
        </div>

        {/* 💌 Letter Popup */}
        {showLetter && (
          <div className="letter-popup" onClick={() => setShowLetter(false)}>
            <div className="letter-content">
              <h3>Dear Rahul 💖</h3>
              <p>
                You are one of the most beautiful souls I’ve ever known — kind, honest, and full of love.
                On your special day, I just want to remind you how truly amazing you are, not only for what you do but for the wonderful person you are inside.
                <br /><br />
                The way you care for your family, support your friends, and spread happiness is rare and precious.
                You always put others before yourself, and I truly believe the world needs more people like you.
                God has made you one of His best creations — a son, a friend, and a human being to be proud of 💌.
                <br /><br />
                Rahul, you inspire everyone with your kindness and strength.
                You might not say much, but your actions show the depth of your heart ❤️🎂✨.
                May this birthday bring you endless happiness, success, and peace.
                <br /><br />
                Never stop being the amazing person you are — you’re truly one in a million.
                Happy Birthday, Rahul 🎂✨💖
                You mean so much to me — today and always. 💞
              </p>
              <span className="close-note">(Click anywhere to close 💌)</span>
            </div>
          </div>
        )}


        {/* ✅ Special Message Section
        <div className="special-message">
          <h2>A Special Message for You 💌</h2>
          <p>
            Rahul, you're not just an incredible person, you're the one who makes my heart smile every day.
            On your birthday, I wish you endless happiness, love, and all the success in the world.
            May your dreams come true, and may this year be filled with unforgettable moments—especially the ones we share together.
          </p>
        </div> */}

        <button className="surprise-btn" onClick={onSurpriseClick}>
          🎁 Click for Surprise! 🎁
        </button>

        {/* ✅ Image Carousel Section */}
        <ImageCarousel
          images={carouselImages}
          autoPlay={true}
          autoPlayInterval={4000}
        />



        <div className="hearts-container">
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i} className="heart">❤️</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdayPage;
