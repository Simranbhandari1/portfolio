import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const achievementsAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.achievements-section',
      start: 'top 75%',
      toggleActions: 'restart none restart none',
    },
  });

  // Heading
  tl.from('.achievements-heading', {
    y: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power3.out',
  })

    // Description
    .from(
      '.achievements-description',
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
      '.achievement-card',
      {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      },
      '-=0.2',
    )

    // Icons
    .from(
      '.achievement-icon',
      {
        scale: 0,
        opacity: 0,
        duration: 0.35,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      },
      '-=0.4',
    )

    // Titles
    .from(
      '.achievement-title',
      {
        y: 15,
        opacity: 0,
        duration: 0.35,
        stagger: 0.15,
      },
      '-=0.3',
    )

    // Descriptions
    .from(
      '.achievement-description',
      {
        y: 15,
        opacity: 0,
        duration: 0.35,
        stagger: 0.15,
      },
      '-=0.25',
    );
};
