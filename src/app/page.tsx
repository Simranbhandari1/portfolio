import About from '../components/About';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skill from '../components/Skill';
import Experience from '../components/Experienece';
import Achievements from '../components/Acheivements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      {/* <h1>Portfolio</h1> */}
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
