import React from 'react';
import { Navbar } from './Navbar';

export const Header: React.FC = () => {
  return (
    <header className="w-full">
      <Navbar />
    </header>
  );
};

export default Header;
