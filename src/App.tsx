import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Pueblos } from './pages/Pueblos';
import { Cultura } from './pages/Cultura';
import { Tradiciones } from './pages/Tradiciones';
import { Gastronomia } from './pages/Gastronomia';
import { Galeria } from './pages/Galeria';
import { Mapa } from './pages/Mapa';

function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      // Convert e.g., #/gastronomia to /gastronomia
      const path = hash.startsWith('#') ? hash.slice(1) : '/';
      const validPaths = [
        '/',
        '/pueblos-nacionalidades',
        '/cultura-arqueologia',
        '/tradiciones-festividades',
        '/gastronomia',
        '/galeria',
        '/mapa',
      ];
      if (validPaths.includes(path)) {
        setCurrentPath(path);
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Trigger on initial mount
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home onNavigate={handleNavigate} />;
      case '/pueblos-nacionalidades':
        return <Pueblos />;
      case '/cultura-arqueologia':
        return <Cultura />;
      case '/tradiciones-festividades':
        return <Tradiciones />;
      case '/gastronomia':
        return <Gastronomia />;
      case '/galeria':
        return <Galeria />;
      case '/mapa':
        return <Mapa />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-paper text-ink">
      {/* Editorial Header */}
      <Header currentPath={currentPath} onNavigate={handleNavigate} />
      
      {/* Main content area */}
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
