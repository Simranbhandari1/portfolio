'use client';

import { useGSAP } from '@gsap/react';

import { navbarAnimation } from '../animation/NavbarAnimation';
import { heroAnimation } from '../animation/HeroAnimation';
import { aboutAnimation } from '../animation/aboutAnimation';
import { skillsAnimation } from '../animation/skillAnimation';
import { projectsAnimation } from '../animation/projectAnimation';
import { experienceAnimation } from '../animation/experienceAnimation';
import { achievementsAnimation } from '../animation/Achievements';
import { contactAnimation } from '../animation/contactAnimation';
import { footerAnimation } from '../animation/footerAnimation';

export const useNavbarAnimation = () => {
  useGSAP(() => {
    navbarAnimation();
  });
};

export const useHeroAnimation = () => {
  useGSAP(() => {
    heroAnimation();
  });
};

export const useAboutAnimation = () => {
  useGSAP(() => {
    aboutAnimation();
  });
};

export const useSkillsAnimation = () => {
  useGSAP(() => {
    skillsAnimation();
  });
};

export const useProjectsAnimation = () => {
  useGSAP(() => {
    projectsAnimation();
  });
};

export const useExperienceAnimation = () => {
  useGSAP(() => {
    experienceAnimation();
  });
};

export const useAchievementsAnimation = () => {
  useGSAP(() => {
    achievementsAnimation();
  });
};

export const useContactAnimation = () => {
  useGSAP(() => {
    contactAnimation();
  });
};
export const useFooterAnimation = () => {
  useGSAP(() => {
    footerAnimation();
  });
};
