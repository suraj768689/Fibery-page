import React from 'react';

const HomePage1 = () => {
  return (
    <div className="max-w-5xl text-left mx-auto py-10 px-4 mt-8">
      <h1 className="text-4xl md:text-7xl font-semibold font-sans mb-2">Build your own</h1>
      <h1 className="text-4xl md:text-7xl font-semibold font-sans mb-6">work & Knowledge hub</h1>
      <p className="text-black-600 text-lg md:text-3xl mb-4">If you've outgrown Jira, Notion, Airtable, and ClickUp</p>
      <p className="text-black-600 text-lg md:text-3xl mb-8">- and are ready to replace them</p>

      <div className="flex flex-col md:flex-row items-center mb-4">
       <div className="mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
         <input type="email" placeholder="Enter your work email" className="bg-transparent border-b-2 border-black dark:border-gray-800 focus:outline-none focus:border-blue-500 w-full py-2 px-4 text-gray-800 dark:text-gray-200 "/>
       </div>
       <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none  md:ml-4 w-full md:w-auto">Sign up free</button>
       <div className="hidden md:inline mt-4 md:mt-0 ml-auto mr-4 cursor-pointer h-12 relative w-12 h-12">
         <img src="https://fibery.io/img/humans/mr-brainy/mr-brainy.svg" alt="Emoji" className="relative z-10" />
         <img src="https://fibery.io/img/humans/mr-brainy/mr-brainy-nocode.svg" className=' absolute bottom-3 right-6' alt="Emoji" />
       </div>
      </div>

      <p className='text-gray-500 text-xs md:text-sm text-left mb-8'>KEEP WORK AND LIFE SEPARATE BY USING YOUR WORK EMAIL</p>
    
      <div className="flex items-center justify-end mb-8">
        <img src="data:image/png;base64,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" className="mr-4 cursor-pointer h-7 w-auto bg-green-600 rounded-lg mx-auto "/>
      </div>

      <div className="flex justify-between flex-wrap mb-9">
        <p className="text-gray-600 mb-2 md:mb-0 md:mr-8">Be among 300+ cool companies</p>
        <p className="text-green-500 cursor-pointer">CHECK OUT ALL CUSTOMER STORIES -&gt;</p>
      </div>

     <div className="flex flex-wrap justify-center">
      {/* Replace the below placeholders with actual logos */}
      <div className="flex justify-center mb-4 md:mb-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
        <div className="bg-white rounded-lg shadow-md p-4 mx-2">
          <img src="https://fibery.io/img/other-tools-logo/lemonade.svg" alt="Logo 1" className="h-8 cursor-pointer"/>
        </div>
      </div>
      <div className="flex justify-center mb-4 md:mb-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
        <div className="bg-white rounded-lg shadow-md p-4 mx-2">
         <img src="https://fibery.io/img/other-tools-logo/kontur.svg" alt="Logo 2" className="h-7 cursor-pointer"/>
        </div>
      </div>
      <div className="flex justify-center mb-4 md:mb-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
        <div className="bg-white rounded-lg shadow-md p-4 mx-2">
          <img src="https://fibery.io/img/other-tools-logo/nzx.svg" alt="Logo 3" className="h-6 cursor-pointer"/>
        </div>
      </div>
      <div className="flex justify-center mb-4 md:mb-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
        <div className="bg-white rounded-lg shadow-md p-4 mx-2">
          <img src="https://fibery.io/img/other-tools-logo/neara.svg" alt="Logo 4" className="h-6 cursor-pointer"/>
       </div>
      </div>
      <div className="flex justify-center mb-4 md:mb-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
       <div className="bg-white rounded-lg shadow-md p-4 mx-2">
         <img src="https://fibery.io/img/other-tools-logo/optiv.svg" alt="Logo 5" className="h-8 cursor-pointer"/>
       </div>
       </div>
      <div className="flex justify-center mb-4 md:mb-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
         <div className="bg-white rounded-lg shadow-md p-4 mx-2">
           <img src="https://fibery.io/img/other-tools-logo/plex.svg" alt="Logo 6" className="h-8 cursor-pointer"/>
         </div>
      </div>
     </div>




    </div>
  );
};

export default HomePage1;
