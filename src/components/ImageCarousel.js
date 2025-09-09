import React, { useRef } from "react";
import "./ImageCarousel.css";

const ImageCarousel = ({ images = [] }) => {
  const carouselRef = useRef(null);

  const defaultImages = [
    { src: "/buddha.jpg", alt: "Buddha Park", caption: "Buddha Park" },
    { src: "/museum.jpg", alt: "Museum", caption: "Museum" },
    { src: "/theatre.jpg", alt: "180-Deg Theatre", caption: "180-Deg Theatre" },
    { src: "/cottage.jpg", alt: "Cottage", caption: "Cottage" },
    { src: "/lake.jpg", alt: "Lake View", caption: "Lake View" },
    { src: "/garden.jpg", alt: "Botanical Garden", caption: "Botanical Garden" }
  ];

  const carouselImages = images.length > 0 ? images : defaultImages;

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -window.innerWidth * 0.6, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: window.innerWidth * 0.6, behavior: "smooth" });
  };

  return (
    <div className="carousel-wrapper">
      <button className="carousel-arrow left" onClick={scrollLeft}>
        ❮
      </button>

      <div className="carousel-container" ref={carouselRef}>
        {carouselImages.map((image, index) => (
          <div className="carousel-card" key={index}>
            <img src={image.src} alt={image.alt} className="carousel-img" />
            <div className="carousel-caption">{image.caption}</div>
          </div>
        ))}
      </div>

      <button className="carousel-arrow right" onClick={scrollRight}>
        ❯
      </button>
    </div>
  );
};

export default ImageCarousel;
