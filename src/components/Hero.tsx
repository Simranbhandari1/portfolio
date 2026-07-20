'use client';
import Image from 'next/image';
import { useHeroAnimation } from '../hook/useAnimation';

export default function Hero() {
  useHeroAnimation();
  return (
    <section className="hero-section relative min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/15 blur-[180px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 pt-28 lg:flex-row lg:px-10">
        {/* Left Side */}
        <div className="max-w-xl text-center lg:text-left">
          {/* Status Badge */}
          <span className="hero-top inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-5 py-2 text-sm font-medium text-sky-400">
            Available for Internship & Full-Time
          </span>

          {/* Greeting */}
          <p className=" hero-top mt-8 text-xl text-gray-400">Hello, I'm</p>

          {/* Name */}
          <h1 className="hero-top mt-2 text-7xl font-black leading-none tracking-tight md:text-8xl">
            SIMRAN
          </h1>

          {/* Role */}
          <h2 className="hero-image mt-6 text-3xl font-semibold text-sky-400">
            MERN Stack Developer
          </h2>

          {/* Description */}
          <p className="hero-bottom mt-6 text-lg leading-8 text-gray-400">
            I build modern, scalable and user-focused web applications using
            React, Next.js, Node.js and MongoDB.
          </p>

          {/* Buttons */}
          <div className="hero-bottom mt-10 flex flex-wrap justify-center gap-5 lg:justify-start">
            <button className="rounded-xl bg-sky-500 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-sky-400">
              <a href="#projects">Explore Projects</a>
            </button>

            <button className=" rounded-xl border border-gray-700 px-7 py-4 font-semibold transition duration-300 hover:border-sky-500 hover:bg-sky-500/10">
              <a download href="/resume.pdf">
                Resume ↓
              </a>
            </button>
          </div>

          <div className="hero-skill mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
            {['React', 'Next.js', 'Node.js', 'MongoDB', 'Express.js'].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-700 px-5 py-2 text-sm text-gray-300 transition hover:border-sky-500 hover:text-sky-400"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-3xl" />

          {/* Profile Image */}
          <div className="hero-image relative h-[360px] w-[360px] overflow-hidden rounded-full border-2 border-sky-500/40 bg-[#111827] shadow-[0_0_50px_rgba(14,165,233,0.15)] md:h-[430px] md:w-[430px]">
            <Image
              src="/profile.jpg"
              alt="Simran"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
