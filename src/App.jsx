import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import EnquiryModal from './components/layout/EnquiryModal';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Students from './pages/Students';
import Contact from './pages/Contact';

export function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const location = useLocation();

  const handleOpenEnquire = (courseName = '') => {
    setSelectedCourse(courseName);
    setEnquiryOpen(true);
  };

  return (
    <div className="artshine-app">
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

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultCourse={selectedCourse}
      />
    </div>
  );
}

export default App;
