import React from 'react';
const HomePage2 = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 mt-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-end">
         <h1 className="text-4xl md:text-7xl font-semibold font-sans mb-6 order-2 md:order-1">Bring work and knowledge under the same roof</h1>
         <img src="https://fibery.io/img/emoji/handshake.webp" alt="logo" className="md:mb-12 md:mb-0 bg-blue-500 rounded-full h-20 w-20 order-1 md:order-2" />
      </div>

      <p className="text-black-600 text-lg md:text-2xl">One tool for documents, a second tool for task management and another</p>
      <p className='text-black-600 text-lg md:text-2xl mb-4'>for diagrams? The end result: 🚨 Poor connectivity.</p>
      <p className="text-black-600 text-lg md:text-2xl">Connect structured data (e.g. tables, kanban boards) with unstructured</p>
      <p className="text-black-600 text-lg md:text-2xl mb-8">data (e.g. documents) and always stay in context.</p>
    
      <img src="https://images-temp.fibery.io/website-static/index-v2/screen1.webp" alt="img" className='w-screen'/>
    </div>
  );
};

export default HomePage2;