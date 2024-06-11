import React, { useState } from 'react';

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute z-30">
      <button 
        onClick={handleOpen} 
        className="p-4 focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="space-y-2">
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
        </div>
      </button>

      <div 
        className={`fixed top-0 left-0 h-full bg-red-300 transition-transform duration-300 ease-out ${isOpen ? 'w-64 transform translate-x-0' : 'w-0 transform -translate-x-full'}`}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold">Sliding Menu</h2>
          <p>This menu slides in from the left when the burger icon is clicked.</p>
        </div>
      </div>
    </div>
  );
}
