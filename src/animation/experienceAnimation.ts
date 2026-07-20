import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const experienceAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.experience-section',
      start: 'top 75%',
      toggleActions: 'restart none restart none',
    },
  });

  // Heading
  tl.from('.experience-heading', {
    y: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power3.out',
  })

    // Description
    .from(
      '.experience-description',
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.3',
    )

    // Timeline Cards
    .from(
      '.experience-card',
      {
        x: -60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.25,
        ease: 'power3.out',
      },
      '-=0.2',
    )

    // Timeline Dots
    .from(
      '.experience-dot',
      {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.25,
        ease: 'back.out(1.7)',
      },
      '-=0.6',
    )

    // Role
    .from(
      '.experience-role',
      {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2,
      },
      '-=0.5',
    )

    // Company
    .from(
      '.experience-company',
      {
        opacity: 0,
        duration: 0.3,
        stagger: 0.2,
      },
      '-=0.3',
    )

    // Duration
    .from(
      '.experience-duration',
      {
        x: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2,
      },
      '-=0.3',
    )

    // Description
    .from(
      '.experience-text',
      {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2,
      },
      '-=0.2',
    )

    // Achievements
    .from(
      '.experience-achievement',
      {
        y: 15,
        opacity: 0,
        duration: 0.3,
        stagger: 0.08,
      },
      '-=0.3',
    )

    // Tech Tags
    .from(
      '.experience-tech',
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
