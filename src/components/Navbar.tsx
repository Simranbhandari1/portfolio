'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-5 flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 backdrop-blur-xl">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-widest text-white"
        >
          Simran
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-10 text-sm font-medium text-gray-300 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="transition duration-300 hover:text-sky-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="hidden rounded-full bg-sky-500 px-6 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-sky-400 md:block"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mx-4 mt-3 rounded-2xl border border-white/10 bg-[#0F172A]/95 p-6 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-gray-300 transition hover:text-sky-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <a
              href="/resume.pdf"
              download
              className="rounded-full bg-sky-500 py-3 font-semibold text-white"
            >
              Resume
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
