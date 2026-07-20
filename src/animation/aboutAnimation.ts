import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const aboutAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 75%',
      toggleActions: 'restart none restart none',
    },
  });

  // Heading
  tl.from('.about-heading', {
    y: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power3.out',
  })

    // Left Content
    .from(
      '.about-content',
      {
        x: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      },
      '-=0.3',
    )

    // Right Cards
    .from(
      '.about-card',
      {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power3.out',
      },
      '-=0.4',
    );
};
