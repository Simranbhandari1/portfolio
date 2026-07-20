import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const heroAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top 25%',
      toggleActions: 'restart none restart none',
    },
  });

  // Top Content
  tl.from('.hero-top', {
    y: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power3.out',
  })

    // Role
    .from(
      '.hero-middle',
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.35',
    )

    // Description + Button
    .from(
      '.hero-bottom',
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      },
      '-=0.3',
    )

    // Skills
    .from(
      '.hero-skill',
      {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
      },
      '-=0.2',
    )

    // Image
    .from(
      '.hero-image',
      {
        scale: 0.85,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.6',
    );

  // Floating Effect
  gsap.to('.hero-image', {
    y: -12,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};
