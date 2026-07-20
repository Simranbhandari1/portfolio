'use client';
import { Code2, Database, Wrench, Layers3 } from 'lucide-react';
import { useSkillsAnimation } from '../hook/useAnimation';

const skills = [
  {
    title: 'Frontend',
    icon: <Code2 className="h-6 w-6 text-sky-400" />,
    technologies: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Backend',
    icon: <Database className="h-6 w-6 text-sky-400" />,
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'],
  },
  {
    title: 'Tools',
    icon: <Wrench className="h-6 w-6 text-sky-400" />,
    technologies: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel'],
  },
  {
    title: 'Other',
    icon: <Layers3 className="h-6 w-6 text-sky-400" />,
    technologies: ['Cloudinary', 'Gemini AI'],
  },
];

export default function Skills() {
  useSkillsAnimation();
  return (
    <section
      id="skills"
      className="skills-section bg-[#030712] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="skills-heading text-sky-400 font-medium">My Skills</p>

        <h2 className="skills-heading mt-3 text-5xl font-bold">
          Technologies I Work With
        </h2>

        <p className="skills-description mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          I enjoy building modern full-stack applications using the MERN stack
          while continuously exploring new tools and technologies.
        </p>

        <div className="skill-card mt-16 grid gap-8 md:grid-cols-2">
          {skills.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-gray-800 bg-[#111827] p-8 transition duration-300 hover:border-sky-500 hover:-translate-y-1"
            >
              <div className="skill-icon flex items-center gap-3">
                {category.icon}

                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="skill-badge mt-8 flex flex-wrap gap-3">
                {category.technologies.map((skill) => (
                  <span
                    key={skill}
                    className=" rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:border-sky-500 hover:text-sky-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
