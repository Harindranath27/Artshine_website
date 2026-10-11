import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from './components/common/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Students from './pages/Students';
import Contact from './pages/Contact';

export function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenEnquire = (courseName = '') => {
    navigate('/contact', { state: { selectedCourse: courseName, focusEnquiry: true } });
  };

  return (
    <div className="artshine-app">
      <ScrollToTop />
      <Header onOpenEnquire={handleOpenEnquire} />

      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home onOpenEnquire={handleOpenEnquire} />} />
              <Route path="/courses" element={<Courses onOpenEnquire={handleOpenEnquire} />} />
              <Route path="/students" element={<Students />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback route */}
              <Route path="*" element={<Home onOpenEnquire={handleOpenEnquire} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

    </div>
  );
}

export default App;
