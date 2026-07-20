'use client';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useProjectsAnimation } from '../hook/useAnimation';
const projects = [
  {
    featured: true,
    title: 'AI Resume Analyzer',
    description:
      'AI-powered resume analyzer with interview reports and personalized feedback using Gemini AI.',
    image: '/AI-resume-analyzer.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    live: 'https://ai-resume-analyzer-smoky-eight.vercel.app',
    github: 'https://github.com/Simranbhandari1/AI-Resume-Analyzer',
  },
  {
    featured: true,
    title: 'GymQuest',
    description:
      'Fitness platform with AI diet plans, workout tracking and authentication.',
    image: '/gymquest.png',
    tech: ['Next.js', 'MongoDB', 'Tailwind', 'JWT'],
    live: 'https://project-gym-quest.vercel.app',
    github: 'https://github.com/Simranbhandari1/Project-GymQuest',
  },
  {
    featured: true,
    title: 'HealWell',
    description:
      'Healthcare platform focused on drug addiction awareness and recovery.',
    image: '/healwell.png',
    tech: ['React', 'Node.js', 'MongoDB'],
    live: 'https://healwellcare.vercel.app',
    github: 'https://github.com/Charanjot9037/healtcare',
  },

  {
    featured: false,
    title: 'Tic Tac Toe',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/tic tac toe.png',
    live: 'https://tictactoesimran.netlify.app',
    github: '#',
  },
  {
    featured: false,
    title: 'Expense Tracker',
    tech: ['React', 'CSS'],
    image: '/expense tracker.png',
    live: '#',
    github: 'https://js-expense-webapp.netlify.app',
  },
  {
    featured: false,
    title: 'Weather App',
    tech: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    image: '/weather.png',
    live: 'http://weather-tracker-js.netlify.app',
    github: '#',
  },
  {
    featured: false,
    title: 'Currency Converter',
    tech: ['HTML', 'CSS', 'JavaScript', 'Exchange Rate API'],
    image: '/currency converter.png',
    live: 'https://currency-exchanger-js.netlify.app',
    github: '#',
  },
  {
    featured: false,
    title: 'Todo App',
    tech: ['React', 'Local Storage'],
    image: '/todo.png',
    live: 'https://focus-board-js.netlify.app',
    github: '#',
  },
];

export default function Projects() {
  useProjectsAnimation();
  return (
    <section
      id="projects"
      className="projects-section bg-[#030712] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="projects-heading font-medium text-sky-400">
          Featured Projects
        </p>

        <h2 className="projects-heading mt-3 text-5xl font-bold">
          Things I've Built
        </h2>

        <p className="projects-description mt-4 max-w-2xl text-gray-400">
          Full-stack applications built with modern technologies, focusing on
          performance and user experience.
        </p>

        <div className="project-card mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-800 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/60"
            >
              {/* Project Image */}

              <div className="project-image relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}

              <div className="p-5">
                <h3 className="project-title text-xl font-bold">
                  {project.title}
                </h3>

                <p className="project-description mt-3 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="project-tech mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="project-buttons mt-6 flex items-center justify-between border-t border-gray-800 pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-sky-400 transition hover:text-sky-300"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
