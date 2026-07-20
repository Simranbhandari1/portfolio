import gsap from 'gsap';

export const navbarAnimation = () => {
  gsap.from('.nav-logo, .nav-item, .nav-resume', {
    opacity: 0,
    y: -20,
    duration: 0.9,
    stagger: 0.08,
    ease: 'power3.out',
  });
};
