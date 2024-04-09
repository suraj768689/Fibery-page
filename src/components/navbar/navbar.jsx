import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };
  function toggleOffcanvas() {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  }
  function closeOffcanvas() {
    setIsOffcanvasOpen(false);
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        {/* Left side */}
        <div className="flex items-center">
          <a href="#" className="text-black text-lg font-bold ">
            Fibery
          </a>
          <img src="https://global.discourse-cdn.com/business7/uploads/fibery/original/2X/6/6cfd93782257bea97e161c9bc00d0ff9436cef37.png" alt="Fibery Logo" className="h-6" />
          <button className="text-green-500 font-bold focus:outline-none ml-4">
            +AI Now!
          </button>
        </div>

        {/* Center */}
        <div className="ml-6 hidden lg:flex flex-grow lg:flex lg:items-center ">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-black focus:outline-none hover:text-green-400"
              >
                Solution
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white border border-gray-300 rounded-lg mt-2 py-2 w-32 z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dropdown Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dropdown Item 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dropdown Item 3
                  </a>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleDropdown1}
                className="text-black focus:outline-none hover:text-green-400"
              >
                Product
              </button>
              {isDropdownOpen1 && (
                <div className="absolute bg-white border border-gray-300 rounded-lg mt-2 py-2 w-32 z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dropdown Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dropdown Item 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dropdown Item 3
                  </a>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleDropdown2}
                className="text-black focus:outline-none hover:text-green-400"
              >
                Resources
              </button>
              {isDropdownOpen2 && (
                <div className="absolute bg-white border border-gray-300 rounded-lg mt-2 py-2 w-32 z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dropdown Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dropdown Item 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dropdown Item 3
                  </a>
                </div>
              )}
            </div>
            <button className="text-black focus:outline-none hover:text-green-600">
              Pricing
            </button>
            <button className="text-black focus:outline-none hover:text-green-600 mb-2">
              . . .
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center lg:ml-auto">
          <div className="ml-6 hidden lg:flex">
            <button className=" text-black px-4 py-2  mr-4 hover:text-green-400">
              Login
            </button>
            <button className="border border-black text-black px-4 py-2  mr-4 hover:bg-green-400">
              Get a Demo
            </button>
            <button className="bg-black text-white px-4 py-2 hover:bg-gray-600">
              Sign Up
            </button>
          </div>
        </div>

        {/* Offcanvas menu */}
        <div className="relative">
          {/* Button to toggle offcanvas menu */}
          <button
            className="menu-toggle outline-none focus:outline-none lg:hidden fixed top-3 right-3"
            aria-expanded={isOffcanvasOpen}
            onClick={toggleOffcanvas}
            aria-label="Toggle navigation"
          >
            <span className="line block w-6 h-px bg-gray-800 mb-1"></span>
            <span className="line block w-6 h-px bg-gray-800 mb-1"></span>
            <span className="line block w-6 h-px bg-gray-800 mb-1"></span>
          </button>

          {/* Offcanvas menu */}
          <div
            className={`offcanvas fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg transform transition duration-300 ease-in-out ${
              isOffcanvasOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden`}
          >
            {/* Close button inside offcanvas menu */}
            <button
              type="button"
              className="close-button absolute top-3 right-3"
              onClick={closeOffcanvas}
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="offcanvas-header py-4 px-5 bg-gray-200">
              <h5 className="offcanvas-title text-lg font-semibold">Fibery</h5>
            </div>
            <div className=" p-4">
             <ul className="justify-content-end flex-grow-1 pe-3">
              <li className="mt-2">
                <button
                  onClick={toggleDropdown}
                  className="text-black focus:outline-none hover:text-green-400"
                >
                  Solution
                </button>
              </li>
              <li className="mt-2">
                <button
                  onClick={toggleDropdown1}
                  className="text-black focus:outline-none hover:text-green-400"
                >
                  Product
                </button>
              </li>
              <li className="mt-2">
                <button
                  onClick={toggleDropdown2}
                  className="text-black focus:outline-none hover:text-green-400"
                >
                  Resources
                </button>
              </li>
              <li className="mt-2">
                <button className="text-black focus:outline-none hover:text-green-600">
                  Pricing
                </button>
              </li>
              <li className="mt-2">
                <button className="text-black focus:outline-none hover:text-green-600 mb-2">
                . . .
                </button>
             </li>
             <li className="mt-2">
              <button className=" text-black text-px-4 py-2  mr-4 hover:text-green-400">
                Login
              </button>
             </li>
              <li className="mt-2">
               <button className="border border-black text-black px-4 py-2  mr-4 hover:bg-green-400">
                 Get a Demo
               </button>
              </li>
              <li className="mt-4">
               <button className="bg-black text-white px-4 py-2 hover:bg-gray-600">
                 Sign Up
                </button>
              </li>
             </ul>

            </div>
            
          </div>
        </div>        
      </div>
    </nav>
  );
};

export default Navbar;
