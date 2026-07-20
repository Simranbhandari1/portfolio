'use client';
import { Briefcase, Calendar } from 'lucide-react';

import { useExperienceAnimation } from '../hook/useAnimation';
const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'PENNEP',
    duration: 'October 2025 – March 2026',
    description:
      'Worked on production-grade web applications, developing responsive interfaces and implementing scalable frontend solutions.',

    achievements: [
      'Developed responsive UI components using Next.js, TypeScript and ShadCN UI.',
      'Built dynamic forms using Formik and Yup for client applications.',
      'Integrated GraphQL APIs to fetch and manage application data.',
      'Debugged production issues and implemented new features for live projects.',
    ],

    technologies: ['Next.js', 'TypeScript', 'GraphQL', 'ShadCN UI'],
  },

  {
    role: 'Web Development Intern',
    company: 'PENNEP',
    duration: 'June 2025 – July 2025',
    description:
      'Contributed to frontend and full-stack development while working on real-world projects.',

    achievements: [
      'Developed GymQuest, a full-stack fitness application with authentication and MongoDB integration.',
      'Built responsive interfaces using Next.js and Tailwind CSS.',
    ],

    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS'],
  },
];

export default function Experience() {
  useExperienceAnimation();
  return (
    <section
      id="experience"
      className="bg-[#030712] experience-section py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="experience-heading font-medium text-sky-400">
          Experience
        </p>

        <h2 className="experience-section mt-3 text-5xl font-bold">
          My Professional Journey
        </h2>

        <p className="experience-description mt-4 max-w-2xl text-gray-400">
          Professional experience gained while building modern web applications
          and collaborating on production projects.
        </p>

        <div className="experience-card relative mt-16 border-l border-gray-700 pl-8">
          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Timeline Dot */}

              <div className="experience-dot absolute -left-[42px] flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#030712] bg-sky-500">
                <Briefcase size={12} />
              </div>

              {/* Card */}

              <div className="experience-box rounded-2xl border border-gray-800 bg-[#111827] p-8 transition duration-300 hover:border-sky-500/60">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="experience-role text-2xl font-bold">
                      {experience.role}
                    </h3>

                    <p className="experience-company mt-1 text-sky-400">
                      {experience.company}
                    </p>
                  </div>

                  <div className="experience-duration flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    {experience.duration}
                  </div>
                </div>

                <p className="experience-text mt-6 leading-7 text-gray-400">
                  {experience.description}
                </p>

                <ul className="experience-achievement mt-6 space-y-3">
                  {experience.achievements.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-400"></span>

                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="experience-tech mt-8 flex flex-wrap gap-3">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-sky-500/10 px-4 py-2 text-sm text-sky-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
