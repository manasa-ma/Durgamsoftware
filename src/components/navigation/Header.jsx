import React from 'react';
import { Navbar } from './Navbar';
export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md">
      <Navbar />
    </header>
  );
};
export default Header;
