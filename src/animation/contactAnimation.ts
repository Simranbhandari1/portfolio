import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const contactAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 75%',
      toggleActions: 'restart none restart none',
    },
  });

  // Heading
  tl.from('.contact-heading', {
    y: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power3.out',
  })

    // Description
    .from(
      '.contact-description',
      {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
      },
      '-=0.3',
    )

    // Main Card
    .from(
      '.contact-card',
      {
        scale: 0.97,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.2',
    )

    // Contact Cards
    .from(
      '.contact-item',
      {
        y: 35,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power3.out',
      },
      '-=0.3',
    )

    // Icons
    .from(
      '.contact-icon',
      {
        scale: 0,
        opacity: 0,
        duration: 0.35,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      },
      '-=0.4',
    )

    // Social Buttons
    .from(
      '.contact-social',
      {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.15,
        ease: 'power3.out',
      },
      '-=0.2',
    );
};
