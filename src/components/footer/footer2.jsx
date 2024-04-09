import React, { useState } from 'react';

const SignUpPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='max-w-5xl mx-auto py-10 px-4 '>
    <div className="flex flex-col items-start justify-center min-h-screen ">
      <div className="flex flex-col sm:flex-row  w-full mb-8">
        <h1 className="text-5xl font-bold mb-4 sm:mb-0 sm:mr-4">Signup for free</h1>
        <p className="text-green-500 mt-4 sm:mt-0">* No credit card required</p>
      </div>

      <p className="text-2xl mb-10">
        Start building your own work and knowledge management hub
      </p>
      <button
        className={`bg-black text-2xl text-white px-6 py-3 mt-10 rounded-lg transition-all duration-300 ${
          isHovered ? 'hover:bg-gray-900 hover:scale-110' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Start your free trial
      </button>
      </div>
    </div>
  );
};

export default SignUpPage;
