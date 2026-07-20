import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const footerAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer-section',
      start: 'top 85%',
      toggleActions: 'restart none restart none',
    },
  });

  // Left
  tl.from('.footer-left', {
    x: -30,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out',
  })

    // Social Icons
    .from(
      '.footer-icon',
      {
        y: 20,
        opacity: 0,
        duration: 0.35,
        stagger: 0.12,
        ease: 'power3.out',
      },
      '-=0.3',
    )

    // Copyright
    .from(
      '.footer-copy',
      {
        x: 30,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
      },
      '-=0.3',
    )

    // Bottom Text
    .from(
      '.footer-bottom',
      {
        y: 15,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
      },
      '-=0.2',
    );
};
