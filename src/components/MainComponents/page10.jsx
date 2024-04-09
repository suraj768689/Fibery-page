import React from 'react';

const HomePage10 = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 mt-10 relative">
      <h2 className='font-bold font text-3xl mb-8'>Some real feedback:</h2>

      {/* Card with feedback */}
      <div className="max mx-auto mt-10">
        <div className="bg-gray-200 rounded-lg shadow-md p-6 sm:flex items-center">
          <div className="flex-grow">
            <p className="text-xl">“Reports are great. You kinda need to get used to them for complex cases and set up your fields and entities properly, but when you do you can get so much information from your data.“</p>
            {/* Moved the card-related content inside this div */}
            <div className="flex flex-col sm:flex-row mt-6 items-center justify-between"> {/* Changed class here */}
              <div className="flex items-center mb-4 sm:mb-0"> {/* Added margin bottom */}
                <img src="https://fibery.io/_next/image?url=%2Fimg%2Fcase-studies%2Fupsilon%2Fupsilon-author.webp&w=128&q=75" className="rounded-full w-12 h-12" alt="Company Logo"/>
                <div className='ml-4'>
                  <p className="text-gray-600 font-semibold">Anton Oparienko</p>
                  <p className="text-gray-400">C O O</p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-end"> {/* Changed class here */}
                <img src="https://fibery.io/img/case-studies/upsilon/upsilon-logo-sm.svg" className="mb-4 sm:mb-0 w-12 h-12 self-center" alt="Logo"/> {/* Adjusted margin */}
              </div>
              <div className="flex sm:hidden mt-4 justify-center"> {/* Show only on small screens */}
                <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 focus:outline-none">
                  Check out customer story
                </button>
              </div>
              <div className="hidden sm:flex"> {/* Show only on large screens */}
                <button className="ml-4 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 focus:outline-none">
                  See full review
                </button>
              </div>
            </div>
            {/* End of moved content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage10;
