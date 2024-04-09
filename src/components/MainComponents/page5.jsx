import React from 'react';

const HomePage5 = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 mt-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-end mb-6">
         <h1 className="text-4xl md:text-7xl font-semibold font-sans mb-6 order-2 md:order-1">Flexibility to work your own way</h1>
         <img src="https://fibery.io/img/emoji/bento.webp" alt="logo" className="md:mb-12 md:mb-0 bg-blue-500 rounded-full h-20 w-20 order-1 md:order-2" />
      </div>
      <p className="text-black-600 text-lg md:text-2xl">Stop using workflows & terminologies defined by someone else… not</p>
      <p className="text-black-600 text-lg md:text-2xl mb-4">everything is an "issue" or a "task".</p>

      <div className="flex flex-col md:flex-row justify-center items-left  rounded-lg px-4 py-8 md:py-12 lg:py-16">
        <div className="w-full md:w-2/5 flex flex-col justify-center mb-4 md:mb-0 md:mr-4">
          <h2 className="text-xl md:text-2xl font-semibold text-left mb-4">Map your processes the way you want by using <span className="font-bold bg-green-200 rounded-full pr-1 pl-1">custom fields</span>, <span className="italic bg-green-400 rounded-full pr-1 pl-1">custom databasest</span> and <span className="font-bold bg-green-200 rounded-full pr-1 pl-1">custom relations</span>.</h2>
        </div>
        
        <div className="w-full md:w-3/5 flex justify-center items-center">
        <video controls className="h-auto w-auto md:ml-4">
            <source src="https://images-temp.fibery.io/website-static/index-v2/custom-databases.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
     </div>
    </div>
  );
};

export default HomePage5;  
