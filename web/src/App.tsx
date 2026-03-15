import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import type { NavItem } from './components/layout/types';
import { Landing } from './components/Landing';
import { Concerts } from './components/concerts/Concerts';
import { Merch } from './components/Merch';
import { Contact } from './components/Contact';
import { CookieBanner } from './components/CookieBanner';

function App() {
  const [activeTab, setActiveTab] = useState<NavItem>('Landing');

  const renderContent = () => {
    switch (activeTab) {
      case 'Landing':
        return <Landing />;
      case 'Concerts':
        return <Concerts />;
      case 'Merch':
        return <Merch />;
      case 'Contact':
        return <Contact />;
      default:
        return <Landing />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-white flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow pt-24 pb-12 w-full max-w-7xl mx-auto">
        {renderContent()}
      </main>

      <footer className="py-8 text-center text-brand-light-gray text-xs uppercase tracking-widest border-t border-brand-dark-gray">
        &copy; {new Date().getFullYear()} TwofacedHK. All rights reserved.
      </footer>

      <CookieBanner />
    </div>
  );
}

export default App;
