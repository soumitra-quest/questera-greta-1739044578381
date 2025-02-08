import { HashRouter as Router } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Router>
      <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200`}>
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Projects />
          <Contact />
        </main>
      </div>
    </Router>
  );
}

export default App;