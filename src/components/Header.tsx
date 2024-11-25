import React from 'react';
import '../index.css'
import {  RiServerLine, RiSunLine } from 'react-icons/ri';



const Header: React.FC = () => {
  return (
    <header className="text-center px-6 py-5 bg-gray-800">
      <nav className='flex justify-between'>
        <div className='flex gap-2 items-center'>
            <RiServerLine  color='blue' size={30}/>
            <h2 className='text-2xl font-semibold text-blue-500'>ServerPro</h2>
        </div>
        <button className='bg-gray-600 p-2 rounded-lg'>
          <RiSunLine />
        </button>
      </nav>
    </header>
  );
};

export default Header;
