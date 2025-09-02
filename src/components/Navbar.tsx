import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-trinity-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-trinity-secondary rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-white font-bold text-xl">Trinity Band</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-trinity-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-trinity-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                About
              </Link>
              <Link to="/events" className="text-white hover:text-trinity-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Events
              </Link>
              <Link to="/donations" className="text-white hover:text-trinity-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Donations
              </Link>
              <Link to="/volunteers" className="text-white hover:text-trinity-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Volunteers
              </Link>
              <Link to="/store" className="text-white hover:text-trinity-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Store
              </Link>
              <Link to="/newsletter" className="text-white hover:text-trinity-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Newsletter
              </Link>
              <Link to="/sponsors" className="text-white hover:text-trinity-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Sponsors
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-trinity-secondary focus:outline-none focus:text-trinity-secondary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-trinity-primary-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:text-trinity-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-trinity-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
              About
            </Link>
            <Link to="/events" className="text-white hover:text-trinity-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
              Events
            </Link>
            <Link to="/donations" className="text-white hover:text-trinity-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
              Donations
            </Link>
            <Link to="/volunteers" className="text-white hover:text-trinity-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
              Volunteers
            </Link>
            <Link to="/store" className="text-white hover:text-trinity-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
              Store
            </Link>
            <Link to="/newsletter" className="text-white hover:text-trinity-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
              Newsletter
            </Link>
            <Link to="/sponsors" className="text-white hover:text-trinity-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
              Sponsors
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
