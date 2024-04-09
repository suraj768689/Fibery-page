import React from 'react';

const HomePage11 = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 mt-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-end mb-6">
         <h1 className="text-4xl md:text-7xl font-semibold font-sans mb-6 order-2 md:order-1">How Fibery helps you…</h1>
         <img src="https://fibery.io/img/emoji/crystal-ball.webp" alt="logo" className="md:mb-12 md:mb-0 bg-blue-500 rounded-full h-20 w-20 order-1 md:order-2" />
      </div>
      

      <div className="flex justify-center items-left  rounded-lg px-4 py-8 md:py-12 lg:py-16">
        <div className="w-full md:w-2/5 flex flex-col justify-center mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-left mb-4">Founders</h2>
          <p>Break down silos between your departments. Bridge the gap Between Strategy and execution. Validate ideas,research your market and get stuff done</p>
        </div>
        
        <div className="w-full md:w-3/5 flex justify-center items-center">
          <img src="https://images-temp.fibery.io/website-static/index-v2/same-context.webp" alt="Image" className="h-auto w-auto md:ml-4" />
        </div>
     </div>

     

    </div>
  );
};

export default HomePage11;  
