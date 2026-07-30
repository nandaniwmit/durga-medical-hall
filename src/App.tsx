import React, { useState, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { PlusCircle } from 'lucide-react';

function ScrollToTopOnPathChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Lazy Load Pages as required by routing guidelines
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center animate-spin">
        <PlusCircle className="w-7 h-7" />
      </div>
      <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">Loading Durga Medical Hall...</p>
    </div>
  );
}

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState('');

  const handleOpenOrderModal = (medicineName: string = '') => {
    setSelectedMedicine(medicineName);
    setOrderModalOpen(true);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTopOnPathChange />
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
          
          {/* Navigation Bar */}
          <Navbar onOpenOrderModal={() => handleOpenOrderModal('')} />

          {/* Main Route Content */}
          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route 
                  path="/" 
                  element={<Home onOpenOrderModal={handleOpenOrderModal} />} 
                />
                <Route 
                  path="/about" 
                  element={<About onOpenOrderModal={() => handleOpenOrderModal('')} />} 
                />
                <Route 
                  path="/services" 
                  element={<Services onOpenOrderModal={handleOpenOrderModal} />} 
                />
                <Route 
                  path="/gallery" 
                  element={<Gallery onOpenOrderModal={() => handleOpenOrderModal('')} />} 
                />
                <Route 
                  path="/contact" 
                  element={<Contact onOpenOrderModal={() => handleOpenOrderModal('')} />} 
                />
                {/* Fallback route */}
                <Route 
                  path="*" 
                  element={<Home onOpenOrderModal={handleOpenOrderModal} />} 
                />
              </Routes>
            </Suspense>
          </main>

          {/* Floating Action Buttons */}
          <FloatingCTA onOpenOrderModal={() => handleOpenOrderModal('')} />

          {/* WhatsApp Order Modal */}
          <WhatsAppOrderModal
            isOpen={orderModalOpen}
            onClose={() => setOrderModalOpen(false)}
            initialMedicineName={selectedMedicine}
          />

          {/* Global Footer with Tracking Hook */}
          <Footer />

        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
