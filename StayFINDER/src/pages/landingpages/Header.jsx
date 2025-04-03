import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow py-4 sticky top-0 w-full z-50 px-6">
      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold text-[#2A6BFF]">StayFINDER</h1>

        <nav className="hidden md:flex space-x-6 pr-6">
          <Link
            to="/"
            className={`text-base text-[#2A6BFF] hover:text-blue-600 
              ${location.pathname === '/' ? 'font-bold text-blue-700' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={(e) => {
              e.preventDefault();
              alert('This option will be added in a later version');
            }}
            className={`text-base text-[#2A6BFF] hover:text-blue-600 
              ${location.pathname === '/about' ? 'font-bold text-blue-700' : ''}`}
          >
            About
          </Link>
        </nav>

        <button
          className="md:hidden text-2xl text-white bg-[#2A6BFF] p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-md p-4 md:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                to="/"
                className="text-base text-[#2A6BFF] hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-base text-[#2A6BFF] hover:text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  alert('This option will be added in a later version');
                  setIsOpen(false);
                }}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
