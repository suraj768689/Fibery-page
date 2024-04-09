import React from 'react';

const HomePage3 = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 mt-10 relative">
      <div className="w-full mx-auto"> {/* Adjust width based on screen size */}
        <h2 className='font-bold text-3xl text-left'>Radically honest warning:</h2>

        <div className="w-full mt-10 mx-auto"> {/* Adjust max width based on screen size */}
          <div className="max-w-4xl"> {/* Increase max width */}
            <div className="bg-pink-100 rounded-lg shadow-md p-6 pr-4"> {/* Added pr-4 for padding adjustment */}
              <p className="text-xl md:text-2xl text-left">Do you have the permission (or forgiveness) from your team to replace some of their tools?</p>
              <div className="flex justify-center md:justify-start mt-4"> {/* Adjust alignment based on screen size */}
                <button className="flex items-center bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-green-100 focus:outline-none mr-4">
                  <img src="https://fibery.io/img/emoji/thumbs-up.webp" className='h-5 w-5 mr-1' alt="" />235
                </button>
                <button className="flex items-center bg-white text-black px-4 py-2 rounded-md shadow-md focus:outline-none hover:bg-green-100">
                  <img src="https://fibery.io/img/emoji/weary-cat.webp" className='h-5 w-5 mr-1' alt="" />194
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="https://fibery.io/img/humans/mr-brainy/mr-brainy-hand.svg" className="hidden md:inline absolute bottom-0 right-0 mb-11 mr-12 cursor-pointer h-12 " alt="Shaking Hand"/> {/* Show on medium screens and above */}
      <img src="https://fibery.io/img/humans/mr-brainy/mr-brainy.svg" className="hidden md:inline absolute bottom-0 right-0 mb-10 mr-6 cursor-pointer h-12" alt="Shaking Hand"/> {/* Show on medium screens and above */}
       
    </div>
  );
};

export default HomePage3;
