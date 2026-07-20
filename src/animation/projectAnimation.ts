import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const projectsAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.projects-section',
      start: 'top 75%',
      toggleActions: 'restart none restart none',
    },
  });

  // Heading
  tl.from('.projects-heading', {
    y: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power3.out',
  })

    // Description
    .from(
      '.projects-description',
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
      '.project-card',
      {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.18,
        ease: 'power3.out',
      },
      '-=0.2',
    )

    // Images
    .from(
      '.project-image',
      {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power3.out',
      },
      '-=0.5',
    )

    // Titles
    .from(
      '.project-title',
      {
        x: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.12,
      },
      '-=0.4',
    )

    // Description
    .from(
      '.project-description',
      {
        y: 15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.12,
      },
      '-=0.3',
    )

    // Tech Tags
    .from(
      '.project-tech',
      {
        scale: 0.8,
        opacity: 0,
        duration: 0.25,
        stagger: 0.02,
        ease: 'back.out(1.7)',
      },
      '-=0.3',
    )

    // Buttons
    .from(
      '.project-buttons',
      {
        y: 15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.12,
      },
      '-=0.3',
    );
};
