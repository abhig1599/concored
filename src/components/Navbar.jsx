import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/cg-nav-logo.png"

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  let prevScrollPos = window.pageYOffset;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        // Show the navbar when scrolling up
        setVisible(true);
      } else if (currentScrollPos > 0) {
        // Hide the navbar when scrolling down
        setVisible(false);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-40 backdrop-blur transition duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link to="/" className="w-[250px] h-[]"><img src={logo} alt='Logo'/></Link>
        <ul className="flex space-x-9">
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
            <Link to="/contact" className="text-white bg-yellow-500 py-5 px-12 font-bold rounded-3xl underline-on-hover active-underline">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;