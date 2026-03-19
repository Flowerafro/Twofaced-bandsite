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
    <div className="min-h-screen bg-brand-red text-brand-black flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow pt-24 pb-12 w-full max-w-7xl mx-auto">
        {renderContent()}
      </main>

     <footer className="py-12 text-center text-brand-black text-xs uppercase tracking-widest flex flex-col gap-3">

      <h4 className="font-medium">
        &copy; {new Date().getFullYear()} TwofacedHK. All rights reserved.
      </h4>

      <p className="lowercase tracking-normal opacity-70 text-[10px]">
        <a href="https://inlinedesign.no/" target="_blank" rel="noopener noreferrer">
          Designed by <span className="hover:opacity-100 transition-opacity cursor-pointer">InlineDesign</span>
        </a>
      </p>
</footer>

      <CookieBanner />
    </div>
  );
}

export default App;
