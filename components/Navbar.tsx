'use client';
import { useState } from 'react';
import Link from 'next/link';
import { navbarLinks } from '@/constant/index';
import { Menu, X } from 'react-feather';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white border-b-2 bottom-0 border-black py-6">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-4xl font-bold">
          <Link href="/">
            Portfolio
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className={`space-x-6 text-xl md:flex ${isOpen ? 'block' : 'hidden'}`}>
          {navbarLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
