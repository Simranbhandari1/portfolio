import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const skillsAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.skills-section',
      start: 'top 75%',
      toggleActions: 'restart none restart none',
    },
  });

  // Heading
  tl.from('.skills-heading', {
    y: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power3.out',
  })

    // Description
    .from(
      '.skills-description',
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.3',
    )

    // Cards
    .from(
      '.skill-card',
      {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      },
      '-=0.3',
    )

    // Icons
    .from(
      '.skill-icon',
      {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        stagger: 0.15,
      },
      '-=0.4',
    )

    // Technology Badges
    .from(
      '.skill-badge',
      {
        scale: 0.8,
        opacity: 0,
        duration: 0.25,
        stagger: 0.03,
        ease: 'back.out(1.7)',
      },
      '-=0.3',
    );
};
