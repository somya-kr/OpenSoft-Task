import React, { useState, useEffect } from 'react';
import './GoUpArrow.css'; // Import your CSS file

const GoUpArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the "Go Up" arrow when scrolling down
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`go-up-arrow ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <i class="fa-solid fa-arrow-up"></i>
    </div>
  );
};

export default GoUpArrow;