import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50  text-black">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 " >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <div className="col-span-1">
            <div className=''>
              <h3 className="text-lg font-semibold mb-2">Fibery</h3>
              <ul>
                <li className='mb-2'>Work & knowledge</li>
                <li className='mb-2'>management hub</li>
              </ul>
            </div>
            <div className='mt-8'>
              <h3 className="text-lg font-semibold mb-2">Section 2</h3>
              <ul>
                <li className='mb-2'>Rated 4.8 on</li>
                <li className='mb-2'> G2 and Capterra</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul>
              <li className='mb-2'>No code</li>
              <li className='mb-2'>Product management</li>
              <li className='mb-2'>User research</li>
              <li className='mb-2'>Startup</li>
              <li className='mb-2'>Software development</li>
              <li className='mb-2'>Digital agency</li>
              <li className='mb-2'>Template Library</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul>
              <li className='mb-2'>Features</li>
              <li className='mb-2'>Fibery AI</li>
              <li className='mb-2'>Pricing</li>
              <li className='mb-2'>Fibery vs. X</li>
              <i className='mb-2'>Customer stories</i>
              <li className='mb-2'>Integrations</li>
              <li className='mb-2'>Changelog</li>
              <li className='mb-2'>Partners program</li>
              <li className='mb-2'>Startup program</li>
              <li className='mb-2'>Anxiety</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul>
              <li className='mb-2'>Getting Started</li>
              <li className='mb-2'>Expert Help</li>
              <li className='mb-2'>Blog</li>
              <li className='mb-2'>User Guide</li>
              <li className='mb-2'>Community</li>
              <li className='mb-2'>Webinars & Tutorials</li>
              <li className='mb-2'>API</li>
              <li className='mb-2'>Status</li>
              <li className='mb-2'>Desktop App</li>
              <li className='mb-2'>Browser Extension</li>
              <li className='mb-2'>Security & Privacy</li>
              <li className='mb-2'>Cookie settings</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Team</h3>
            <ul>
              <li className='mb-2'>About us</li>
              <li className='mb-2'>Open startup</li>
              <li className='mb-2'>Startup diary</li>
              <li className='mb-2'>Careers</li>
            </ul>
          </div>
        </div>
        <div className="relative flex items-center justify-center mt-10">
            <input
             type="text"
             placeholder="Search for a template, space or integration..."
             className="bg-transparent border-b-2 border-black dark:border-gray-800 focus:outline-none focus:border-blue-500 w-2/3 py-2 px-4 text-gray-800 dark:text-gray-200"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between p-4 mt-10">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4">
            <span className="text-black text-lg mt-3.5">© Fibery Limited</span>
            <span className="text-gray-400">Terms</span>
            <span className="text-gray-400">Privacy Policy</span>
            <span className="text-gray-400">Cookies Policy</span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4">
            <div className="w-9 h-9 mt-3"><img src="https://img.freepik.com/premium-vector/mail-simple-icon-white-mail-icon-black-circle-vector-illustration-stock-image_797523-1729.jpg?w=740" alt="mail" /></div> {/* Mail Logo */}
            <div className="w-7 h-7"><img className='rounded-lg' src="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png?20230802142353" alt="X" /></div> {/* X Logo */}
            <div className="w-10 h-11"><img src="https://static.vecteezy.com/system/resources/previews/023/986/739/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" alt="youtube" /></div> {/* YouTube Logo */}
            <div className="w-8 h-9"><img src="https://banner2.cleanpng.com/20180518/yk/kisspng-computer-icons-linkedin-5aff0283a31f04.0344839015266617636682.jpg" alt="linkedin" /></div> {/* LinkedIn Logo */}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
