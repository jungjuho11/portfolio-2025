import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
