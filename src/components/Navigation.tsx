"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TQ</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TerraQuest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-accent transition-colors">
              Team
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-accent focus:outline-none focus:text-accent"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/team" 
                className="text-gray-700 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
