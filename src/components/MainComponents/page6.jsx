import React from 'react';

const HomePage6 = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 mt-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-end mb-6">
         <h1 className="text-4xl md:text-7xl font-semibold font-sans mb-6 order-2 md:order-1">Extract insights from all kinds of data</h1>
         <img src="https://fibery.io/img/emoji/crystal-ball.webp" alt="logo" className="md:mb-12 md:mb-0 bg-blue-500 rounded-full h-20 w-20 order-1 md:order-2" />
      </div>
      <p className="text-black-600 text-lg md:text-2xl">Charts & reports are weak in almost all work management tools.</p>
      <p className="text-black-600 text-lg md:text-2xl mb-4">If they're available at all.</p>

      <div className="flex flex-col md:flex-row justify-center items-left  rounded-lg px-4 py-8 md:py-12 lg:py-16">
        <div className="w-full md:w-2/5 flex flex-col justify-center mb-4 md:mb-0 md:mr-4">
          <h2 className="text-xl md:text-2xl font-semibold text-left mb-4">Fibery has <span className="font-bold bg-green-200">Powerful Tableau-like reports</span> - in the <span className="italic bg-green-400 rounded-full pr-1 pl-1">same context</span> where the rest of your work and knowledge lives.</h2>
        </div>
        
        <div className="w-full md:w-3/5 flex justify-center items-center ">
          <img src="https://images-temp.fibery.io/website-static/index-v2/same-context.webp" alt="Image" className="h-auto w-auto md:ml-4" />
        </div>
     </div>

     

    </div>
  );
};

export default HomePage6;  
