import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const Footer6 = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleImagesPerRow, setVisibleImagesPerRow] = useState(4); // Default number of images per row

  const images = [
    { url: "https://fibery.io/_next/image?url=https%3A%2F%2Fimages-temp.fibery.io%2Fwebsite-static%2Ffooter-photo-line%2Fimage1.webp&w=640&q=75", name: "Douglas Engelbart", destination: "engineer and inventor" },
    { url: "https://fibery.io/_next/image?url=https%3A%2F%2Fimages-temp.fibery.io%2Fwebsite-static%2Ffooter-photo-line%2Fimage2.webp&w=384&q=75", name: "Bret Victor", destination: "interface designer" },
    { url: "https://fibery.io/_next/image?url=https%3A%2F%2Fimages-temp.fibery.io%2Fwebsite-static%2Ffooter-photo-line%2Fimage3.webp&w=640&q=75", name: "Alan Kay", destination: "computer scientist" },
    { url: "https://fibery.io/_next/image?url=https%3A%2F%2Fimages-temp.fibery.io%2Fwebsite-static%2Ffooter-photo-line%2Fimage4.webp&w=384&q=75", name: "Wassily Kandinsky", destination: "painter and art theorist" },
    { url: "https://fibery.io/_next/image?url=https%3A%2F%2Fimages-temp.fibery.io%2Fwebsite-static%2Ffooter-photo-line%2Fimage5.webp&w=640&q=75", name: "Margaret Hamilton", destination: "software engineer" },
    { url: "https://fibery.io/_next/image?url=https%3A%2F%2Fimages-temp.fibery.io%2Fwebsite-static%2Ffooter-photo-line%2Fhickey.webp&w=384&q=75", name: "Rich Hickey", destination: "creator of Clojure" },
    // Add more image objects as needed
  ];

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of visible images per row based on screen width
      if (window.innerWidth >= 1024) {
        setVisibleImagesPerRow(4);
      } else if (window.innerWidth >= 768) {
        setVisibleImagesPerRow(3);
      } else {
        setVisibleImagesPerRow(2);
      }
    };

    // Call the handleResize function initially to set the correct number of visible images per row
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showNext = () => {
    if (startIndex + visibleImagesPerRow < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const showPrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="mt-4 max-w-5xl mx-auto py-10 px-4 mt-12 relative">
      <h1 className="text-2xl font-bold mb-8">Inspired by inventors</h1>
      <div className="relative overflow-hidden">
        <div className="flex items-center transition-transform duration-300" style={{ transform: `translateX(calc(-${startIndex * (100 / visibleImagesPerRow)}%))` }}>
          {images.slice(startIndex, startIndex + visibleImagesPerRow).map((image, index) => (
            <div key={index} className={`mx-2 w-full md:w-1/${visibleImagesPerRow}`} style={{ position: 'relative' }}>
              <div className="relative" style={{ paddingBottom: '100%' }}>
                <img
                  src={image.url}
                  alt={`Image ${startIndex + index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-md transition-transform transform-gpu duration-300 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-md opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-bold">{image.name}</p>
                  <p className="text-xs">{image.destination}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        {images.length > visibleImagesPerRow && (
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
            <button onClick={showPrevious} disabled={startIndex === 0} className="bg-gray-300 p-2 rounded-full">
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button onClick={showNext} disabled={startIndex + visibleImagesPerRow >= images.length} className="bg-gray-300 p-2 rounded-full">
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default Footer6;
