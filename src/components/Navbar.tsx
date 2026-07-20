'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavbarAnimation } from '../hook/useAnimation';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useNavbarAnimation();

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-5 flex h-14 max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#111827]/70 px-8 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
        {/* Logo */}
        <Link
          href="/"
          className="nav-logonav-logo text-2xl font-bold tracking-wide text-white transition hover:text-sky-400"
        >
          Simran
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-item hidden items-center gap-8 text-sm font-medium text-gray-300 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="relative transition-all duration-300 hover:text-sky-400"
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
          className="nav-logo hidden rounded-full bg-sky-500 px-7 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400 md:block"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="text-white transition hover:text-sky-400 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="nav-item mx-4 mt-3 rounded-2xl border border-white/10 bg-[#111827]/95 p-6 shadow-2xl backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 transition duration-300 hover:text-sky-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <a
              href="/resume.pdf"
              download
              className=" nav-resume rounded-full bg-sky-500 py-3 font-semibold text-white transition hover:bg-sky-400"
            >
              Download Resume
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
