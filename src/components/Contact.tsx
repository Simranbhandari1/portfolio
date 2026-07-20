'use client';
import { Mail, Phone, MapPin, Briefcase, ArrowUpRight } from 'lucide-react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useContactAnimation } from '../hook/useAnimation';

export default function Contact() {
  useContactAnimation();
  return (
    <section
      id="contact"
      className="contact-section bg-[#030712] py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="contact-heading font-medium text-sky-400">Contact</p>

          <h2 className="contact-heading mt-3 text-4xl font-bold md:text-5xl">
            Let's Work Together
          </h2>

          <p className="contact-description mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-400">
            I'm currently open to internship and full-time opportunities.
            Whether you have a project, a job opportunity, or simply want to
            connect, I'd love to hear from you.
          </p>
        </div>

        {/* Contact Card */}
        <div className="contact-card mt-16 rounded-3xl border border-gray-800 bg-[#111827] p-8 md:p-12">
          {/* Info Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Email */}
            <a
              href="mailto:your@email.com"
              className=" group flex items-center gap-5 rounded-2xl border border-gray-800 p-6 transition-all duration-300 hover:border-sky-500 hover:bg-sky-500/5"
            >
              <div className="contact-item srounded-xl bg-sky-500/10 p-4">
                <Mail className="text-sky-400" size={28} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold transition group-hover:text-sky-400">
                  simran.bhandari.486@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+91XXXXXXXXXX"
              className=" group flex items-center gap-5 rounded-2xl border border-gray-800 p-6 transition-all duration-300 hover:border-sky-500 hover:bg-sky-500/5"
            >
              <div className="contact-item rounded-xl bg-sky-500/10 p-4">
                <Phone className="text-sky-400" size={28} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold transition group-hover:text-sky-400">
                  +91 XXXXX XXXXX
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="contact-item flex items-center gap-5 rounded-2xl border border-gray-800 p-6">
              <div className="rounded-xl bg-sky-500/10 p-4">
                <MapPin className="text-sky-400" size={28} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold">Punjab, India</p>
              </div>
            </div>

            {/* Availability */}
            <div className="contact-item flex items-center gap-5 rounded-2xl border border-gray-800 p-6">
              <div className="contact-icon rounded-xl bg-sky-500/10 p-4">
                <Briefcase className="text-sky-400" size={28} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Availability</p>
                <p className="font-semibold text-green-400">Open to Work</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-social mt-12 flex flex-wrap items-center justify-center gap-5">
            <a
              href="https://github.com/Simranbhandari1"
              target="_blank"
              rel="noopener noreferrer"
              className="  flex items-center gap-3 rounded-xl border border-gray-800 px-6 py-4 transition-all duration-300 hover:border-sky-500 hover:bg-sky-500/5"
            >
              <FaGithub size={22} />
              <span>GitHub</span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="  flex items-center gap-3 rounded-xl border border-gray-800 px-6 py-4 transition-all duration-300 hover:border-sky-500 hover:bg-sky-500/5"
            >
              <FaLinkedin size={22} />
              <span>LinkedIn</span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download
              className=" rounded-xl bg-sky-500 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
