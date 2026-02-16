import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer style={{ padding: '50px 0', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '50px' }}>
        <p>&copy; {new Date().getFullYear()} Vyshnavi C S. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
