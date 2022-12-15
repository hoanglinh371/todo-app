import React, { useState, useEffect } from 'react';

import iconSun from '../assets/icon-sun.svg';
import iconMoon from '../assets/icon-moon.svg';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className='flex items-center justify-between 2xl:mt-20'>
      <h1 className='text-xl font-bold tracking-widest text-white lg:text-4xl'>
        TODO
      </h1>
      <img
        src={darkMode ? iconSun : iconMoon}
        alt={darkMode ? 'icon-sun' : 'icon-moon'}
        className='h-5 w-5 cursor-pointer lg:h-7 lg:w-7'
        onClick={handleThemeToggle}
      />
    </div>
  );
};

export default Header;
