import React, { useState } from 'react';
import Contanier from '../../container/Contanier';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white fixed w-full top-0 h-16 flex items-center justify-between px-10">
      <Contanier justify_between={`justify-between`} flex={`flex`}>

        <div className="text-xl font-bold">Logo</div>
        <div className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#home" className="font-medium hover:text-gray-400">Home</a>
          <a href="#products" className="font-medium hover:text-gray-400">Products</a>
          <a href="#about" className="font-medium hover:text-gray-400">About</a>
          <a href="#contact" className="font-medium hover:text-gray-400">Contact Us</a>
        </div>
      </Contanier>
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Open Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
