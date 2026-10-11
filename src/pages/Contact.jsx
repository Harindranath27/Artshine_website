import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  Mail,
  Send,
} from 'lucide-react';
import SectionReveal from '../components/common/SectionReveal';
import PaintStroke from '../components/common/PaintStroke';
import OrganicBlob from '../components/common/OrganicBlob';
import { ARTSHINE_CONTACT, getEnquiryFormEmailUrl } from '../config/artshineContact';
import '../styles/contact.css';

/**
 * ARTSHINE — CONTACT PAGE
 *
 * Clean, warm, artistic communication experience.
 *
 * Exact 3-Part Architecture:
 * 1. HERO: Simple, text-led artistic introduction
 * 2. DIRECT CONTACT: WhatsApp / Phone / Email (3 cards with exactly equal dimensions)
 * 3. SIMPLE ENQUIRY FORM: Name, Phone, Email, Course, Mode
 *
 * Strict Terminology Rules:
 * - NO studio, in-studio, teachers, teaching team, curriculum, discipline, framework, etc.
 * - ONLY Artshine, students, children, classes, online classes, offline classes
 */
export const Contact = () => {
  const location = useLocation();
  const courseOptions = [
    'Drawing & Colouring',
    'Pencil Shading',
    'Colour Pencil Sketching',
    'Oil Pastels',
    'Doodle Art',
    'Mandala Art',
    'Madhubani Art',
    'Water Colour Painting',
    'Acrylic Painting',
  ];
  const selectedCourse = courseOptions.includes(location.state?.selectedCourse)
    ? location.state.selectedCourse
    : '';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: selectedCourse || 'Drawing & Colouring',
    mode: 'Online',
  });

  useEffect(() => {
    if (!location.state?.focusEnquiry) return;

    const formSection = document.getElementById('enquiry-form-section');
    if (!formSection) return;

    const timer = window.setTimeout(() => {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 400);
    return () => window.clearTimeout(timer);
  }, [location.key]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      course: selectedCourse || 'Drawing & Colouring',
    }));
  }, [selectedCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitted) return;

    window.location.href = getEnquiryFormEmailUrl(formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-page-viewport">
      {/* =========================================================================
          1. HERO — SIMPLE ARTISTIC INTRO
          ========================================================================= */}
      <section className="contact-intro-section">
        <OrganicBlob color="#FFB703" size={300} opacity={0.12} blur={55} style={{ top: '-10%', right: '8%' }} />

        <div className="container">
          <div className="contact-intro-grid">
            <motion.div
              className="contact-intro-copy"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="contact-intro-title">
                Let's Talk{' '}
                <span className="contact-highlight-text">
                  Art
                  <PaintStroke
                    variant="underline"
                    color="#FFB703"
                    style={{ position: 'absolute', bottom: '-6px', left: 0, width: '100%', height: '14px', zIndex: -1 }}
                  />
                </span>
              </h1>

              <p className="contact-intro-desc">
                Have a question about classes or learning options? We'd love to hear from you.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. DIRECT CONTACT METHODS (WhatsApp, Phone, Email - Exactly Equal Cards)
          ========================================================================= */}
      <section className="contact-channels-section">
        <div className="container">
          <SectionReveal>
            <div className="contact-channels-grid">
              {/* Channel 1: WhatsApp */}
              <div className="contact-channel-card channel-whatsapp">
                <div className="contact-washi-tape tape-teal" style={{ top: '-8px', right: '15%', width: '65px', transform: 'rotate(2deg)' }} />
                <div className="channel-card-top">
                  <div className="channel-icon-pill icon-whatsapp">
                    <MessageCircle size={22} />
                  </div>
                  <div className="channel-tag-eyebrow">Quick Messages</div>
                  <h2 className="channel-title">WhatsApp</h2>
                  <p className="channel-desc">
                    For quick questions and class enquiries.
                  </p>
                </div>
                <a
                  href={ARTSHINE_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-action-btn action-whatsapp"
                  aria-label="Chat with Artshine on WhatsApp"
                >
                  <MessageCircle size={15} /> Open WhatsApp
                </a>
              </div>

              {/* Channel 2: Phone */}
              <div className="contact-channel-card channel-phone">
                <div className="contact-washi-tape tape-coral" style={{ top: '-8px', left: '15%', width: '65px', transform: 'rotate(-2deg)' }} />
                <div className="channel-card-top">
                  <div className="channel-icon-pill icon-phone">
                    <Phone size={22} />
                  </div>
                  <div className="channel-tag-eyebrow">Direct Voice</div>
                  <h2 className="channel-title">Phone Call</h2>
                  <p className="channel-desc">
                    +91 755 007 8993
                  </p>
                </div>
                <a
                  href={`tel:${ARTSHINE_CONTACT.whatsappNumber.replace(/[^+\d]/g, '')}`}
                  className="channel-action-btn action-phone"
                  aria-label="Call Artshine directly"
                >
                  <Phone size={15} /> Call Artshine
                </a>
              </div>

              {/* Channel 3: Email */}
              <div className="contact-channel-card channel-email">
                <div className="contact-washi-tape tape-yellow" style={{ top: '-8px', right: '15%', width: '65px', transform: 'rotate(1deg)' }} />
                <div className="channel-card-top">
                  <div className="channel-icon-pill icon-email">
                    <Mail size={22} />
                  </div>
                  <div className="channel-tag-eyebrow">Written Notes</div>
                  <h2 className="channel-title">Email</h2>
                  <p className="channel-desc">
                    For detailed questions and enquiries.
                  </p>
                </div>
                {ARTSHINE_CONTACT.email ? (
                    <a
                      href={`mailto:${ARTSHINE_CONTACT.email}`}
                      className="channel-action-btn action-email"
                      aria-label="Email Artshine"
                    >
                      <Mail size={15} /> {ARTSHINE_CONTACT.email}
                    </a>
                  ) : (
                    <span className="channel-action-btn action-email" aria-label="Email enquiries coming soon">
                      <Mail size={15} /> Email enquiries coming soon
                    </span>
                )}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* =========================================================================
          3. SIMPLE ENQUIRY FORM
          Only: Name, Phone, Email, Course (exact list), Mode (Online/Offline)
          ========================================================================= */}
      <section className="contact-form-section" id="enquiry-form-section" tabIndex={-1}>
        <div className="container">
          <SectionReveal>
            <div className="contact-enquiry-sheet">
              <div className="contact-washi-tape tape-yellow" style={{ top: '-10px', right: '12%', width: '80px', transform: 'rotate(2.5deg)' }} />
              <div className="contact-washi-tape tape-coral" style={{ top: '-10px', left: '12%', width: '80px', transform: 'rotate(-2deg)' }} />

              {!submitted ? (
                <>
                  <div className="sheet-header-wrapper">
                    <span className="sheet-eyebrow">Enquiry</span>
                    <h2 className="sheet-title">Send Artshine a Note</h2>
                    <p className="sheet-subtitle">
                      Share your details and class interest. We’ll prepare an email for you to review and send.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="art-form-stack">
                      {/* Enquirer's Name */}
                      <div>
                        <label className="art-input-label" htmlFor="name">
                          <span>Name <span className="req">*</span></span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="art-text-input"
                        />
                      </div>

                      {/* Phone & Email Row */}
                      <div className="art-form-row-2col">
                        <div>
                          <label className="art-input-label" htmlFor="phone">
                            <span>Phone Number <span className="req">*</span></span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Contact phone or WhatsApp"
                            className="art-text-input"
                          />
                        </div>

                        <div>
                          <label className="art-input-label" htmlFor="email">
                            <span>Email Address <span className="req">*</span></span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@domain.com"
                            className="art-text-input"
                          />
                        </div>
                      </div>

                      {/* Course Dropdown (ONLY Artshine's official 9 courses) */}
                      <div>
                        <label className="art-input-label" htmlFor="course">
                          <span>Course <span className="req">*</span></span>
                        </label>
                        <select
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className="art-select-input"
                        >
                          <option value="Drawing & Colouring">Drawing & Colouring</option>
                          <option value="Pencil Shading">Pencil Shading</option>
                          <option value="Colour Pencil Sketching">Colour Pencil Sketching</option>
                          <option value="Oil Pastels">Oil Pastels</option>
                          <option value="Doodle Art">Doodle Art</option>
                          <option value="Mandala Art">Mandala Art</option>
                          <option value="Madhubani Art">Madhubani Art</option>
                          <option value="Water Colour Painting">Water Colour Painting</option>
                          <option value="Acrylic Painting">Acrylic Painting</option>
                        </select>
                      </div>

                      {/* Mode Dropdown (Online / Offline only) */}
                      <div>
                        <label className="art-input-label" htmlFor="mode">
                          <span>Mode <span className="req">*</span></span>
                        </label>
                        <select
                          id="mode"
                          name="mode"
                          value={formData.mode}
                          onChange={handleChange}
                          className="art-select-input"
                        >
                          <option value="Online">Online</option>
                          <option value="Offline">Offline</option>
                        </select>
                      </div>

                      <button type="submit" className="art-submit-btn">
                        Prepare Email Enquiry <Send size={15} />
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                /* Email handoff instructions */
                <div className="enquiry-success-box">
                  <div className="success-check-icon">
                    <Mail size={32} />
                  </div>
                  <h3 className="success-title">Continue in Your Email App</h3>
                  <p className="success-desc">
                    Your email application should open with your enquiry prefilled. Review it and press Send to submit. If it does not open, contact Artshine at{' '}
                    <a href={`mailto:${ARTSHINE_CONTACT.email}`}>{ARTSHINE_CONTACT.email}</a>.
                  </p>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        course: 'Drawing & Colouring',
                        mode: 'Online',
                      });
                    }}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
