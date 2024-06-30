import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/cg-nav-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const prevScrollPos = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos.current > currentScrollPos) {
        // Show the navbar when scrolling up
        setIsNavbarVisible(true);
      } else if (currentScrollPos > 0) {
        // Hide the navbar when scrolling down
        setIsNavbarVisible(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition duration-500 ease-in-out ${isNavbarVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex justify-between items-center py-4 px-4 bg-gray-900 bg-opacity-40 backdrop-blur">
        <button className="text-white text-3xl lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
        <nav className="container mx-auto flex justify-between items-center py-4 px-4 lg:flex">
          <Link to="/" className="w-[250px] lg:block hidden"><img src={logo} alt='Logo' /></Link>
          <ul className="flex space-x-9 lg:flex hidden">
            <li>
              <Link to="/" className="text-white text-xl underline-on-hover active-underline">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white text-xl underline-on-hover active-underline">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="text-white text-xl underline-on-hover active-underline">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white bg-yellow-500 py-2 px-5 font-bold rounded-3xl md:py-5 md:px-12 text-base md:text-xl underline-on-hover active-underline">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md z-40"></div>
      )}
      <div className={`fixed top-0 left-0 h-full w-1/2 bg-gray-900 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 lg:hidden`}>
        <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setIsOpen(false)}>
          <i className="fas fa-times"></i>
        </button>
        <div className="flex flex-col items-center mt-12 px-4">
          <img src={logo} alt='Logo' className="w-[200px] mb-8 px-4" />
          <ul className="flex flex-col space-y-4">
            <li>
              <Link to="/" className="text-white text-xl underline-on-hover active-underline" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white text-xl underline-on-hover active-underline" onClick={() => setIsOpen(false)}>About Us</Link>
            </li>
            <li>
              <Link to="/services" className="text-white text-xl underline-on-hover active-underline" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white bg-yellow-500 py-3 px-6 font-bold rounded-3xl text-base underline-on-hover active-underline" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
