import React, { useState, useEffect } from 'react';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2">
      {isVisible && 
        <button onClick={scrollToTop} 
          className="bg-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-400 text-black" 
          title="Back to Top">
          {/* SVG for Arrow Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      }
    </div>
  );
};

export default GoToTop;
