import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LatestCreation from './components/LatestCreation';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <LatestCreation />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
}
