'use client';
import {
  Trophy,
  Medal,
  Award,
  BadgeCheck,
  GraduationCap,
  Code,
} from 'lucide-react';
import { useAchievementsAnimation } from '../hook/useAnimation';
const achievements = [
  {
    icon: Trophy,
    title: 'Top 5 - ByteVerse 1.0 Hackathon',
    description:
      'Competed in a web development focused hackathon organized by CT College (2025).',
  },
  {
    icon: Medal,
    title: '1st Place - Logic Whirlpool',
    description:
      'Won the logical reasoning competition at Lyallpur Khalsa College (2024).',
  },
  {
    icon: BadgeCheck,
    title: 'React (Basic) Certification',
    description:
      'Earned the HackerRank React (Basic) Skill Certification demonstrating React fundamentals.',
  },
  {
    icon: Award,
    title: 'CodeCrafter Hackathon',
    description:
      'Participated in problem-solving and software development challenges at CT University (2025).',
  },
  {
    icon: Code,
    title: 'Webmania Competition',
    description:
      'Participated in a web development and design competition at Lyallpur Khalsa College (2024).',
  },
  {
    icon: GraduationCap,
    title: 'Summer Training',
    description:
      'Completed C++ programming and software fundamentals training at AIMETC (2024).',
  },
  {
    icon: Award,
    title: 'Web Development Internship',
    description:
      'Successfully completed Web Development Internship at PENNEP using Next.js, MongoDB and Tailwind CSS (2025).',
  },
  {
    icon: Trophy,
    title: 'Academic Excellence',
    description:
      'Consistently ranked among the top students across Semester 1 to Semester 5.',
  },
];

export default function Achievements() {
  useAchievementsAnimation();
  return (
    <section
      id="achievements"
      className="achievements-section bg-[#030712] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="achievements-heading font-medium text-sky-400">
          Achievements
        </p>

        <h2 className="achievements-heading mt-3 text-5xl font-bold">
          Awards & Certifications
        </h2>

        <p className="achievements-description mt-4 max-w-2xl text-gray-400">
          A few milestones that reflect my learning journey, competitive spirit
          and continuous growth as a developer.
        </p>

        <div className="achievement-card mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-800 bg-[#111827] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/60"
              >
                <div className="achievement-icon  flex h-14 w-14 items-center justify-center rounded-xl bg-sky-500/10">
                  <Icon className="h-7 w-7 text-sky-400" />
                </div>

                <h3 className="achievement-title mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="achievement-text mt-3 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
