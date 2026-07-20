'use client';
import { Heart } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useFooterAnimation } from '../hook/useAnimation';
export default function Footer() {
  useFooterAnimation();
  return (
    <footer className="footer-section border-t border-gray-800 bg-[#030712] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        {/* Left */}

        <div className="footer-left">
          <h2 className="text-2xl font-bold tracking-wide">Simran</h2>

          <p className="footer-text mt-2 text-sm text-gray-400">
            MERN Stack Developer • Building modern web experiences.
          </p>
        </div>

        {/* Center */}

        <div className="footer-icon flex items-center gap-6 text-gray-400">
          <a
            href="https://github.com/Simranbhandari1"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-sky-400"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-sky-400"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="YOUR_INSTAGRAM_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-sky-400"
          >
            <FaInstagram size={22} />
          </a>
        </div>

        {/* Right */}

        <div className="footer-copy text-sm text-gray-400">
          © {new Date().getFullYear()} Simran. All rights reserved.
        </div>
      </div>

      {/* Bottom */}

      <div className="footer-bottom mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        Designed & Developed with{' '}
        <Heart
          size={15}
          className="mx-1 inline text-red-500"
          fill="currentColor"
        />{' '}
        by <span className="font-medium text-white">Simran</span>
      </div>
    </footer>
  );
}
