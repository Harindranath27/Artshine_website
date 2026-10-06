import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  Mail,
  Send,
  CheckCircle2,
} from 'lucide-react';
import SectionReveal from '../components/common/SectionReveal';
import PaintStroke from '../components/common/PaintStroke';
import ArtDoodle from '../components/common/ArtDoodle';
import OrganicBlob from '../components/common/OrganicBlob';
import '../styles/contact.css';

/**
 * ARTSHINE — CONTACT PAGE
 *
 * Clean, warm, artistic communication experience.
 *
 * Exact 3-Part Architecture:
 * 1. HERO: Simple artistic intro ("Let's Talk Art", warm copy, 1 visual on right)
 * 2. DIRECT CONTACT: WhatsApp / Phone / Email (3 cards with exactly equal dimensions)
 * 3. SIMPLE ENQUIRY FORM: Parent Name, Phone, Email, Course, Mode
 *
 * Strict Terminology Rules:
 * - NO studio, in-studio, teachers, teaching team, curriculum, discipline, framework, etc.
 * - ONLY Artshine, students, children, classes, online classes, offline classes
 */
export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    course: 'Drawing & Colouring',
    mode: 'Online',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page-viewport">
      {/* =========================================================================
          1. HERO — SIMPLE ARTISTIC INTRO
          ========================================================================= */}
      <section className="contact-intro-section">
        <OrganicBlob color="#FFB703" size={300} opacity={0.12} blur={55} style={{ top: '-10%', right: '8%' }} />
        <OrganicBlob color="#E63956" size={240} opacity={0.08} blur={45} style={{ bottom: '-5%', left: '2%' }} />

        <div className="container">
          <div className="contact-intro-grid">
            {/* Left Column: Heading & Warm Copy */}
            <motion.div
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

            {/* Right Column: One Artistic Visual */}
            <motion.div
              className="contact-intro-artwork-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{ position: 'absolute', top: '-16px', right: '12px', zIndex: 12 }}>
                <ArtDoodle type="star" color="#FFB703" size={28} />
              </div>

              <div className="contact-intro-artwork-card">
                <div className="contact-washi-tape tape-coral" style={{ top: '-8px', left: '25%', width: '90px', transform: 'rotate(-2deg)' }} />

                <div className="contact-intro-img-frame">
                  <img
                    src="/images/art_sunflower.jpg"
                    alt="Artshine Botanical Artwork Study"
                    loading="eager"
                  />
                </div>

                <div className="contact-intro-art-caption">
                  <span>Botanical Study</span>
                  <span className="contact-intro-art-tag">Artshine</span>
                </div>
              </div>
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
                  href="https://wa.me/"
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
                    For speaking directly about classes and admissions.
                  </p>
                </div>
                <a
                  href="tel:"
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
                <a
                  href="mailto:hello@artshine.in"
                  className="channel-action-btn action-email"
                  aria-label="Email Artshine"
                >
                  <Mail size={15} /> hello@artshine.in
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* =========================================================================
          3. SIMPLE ENQUIRY FORM
          Only: Parent Name, Phone, Email, Course (exact list), Mode (Online/Offline)
          ========================================================================= */}
      <section className="contact-form-section" id="enquiry-form-section">
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
                      Share your details and class interest, and we will get back to you promptly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="art-form-stack">
                      {/* Parent / Guardian Name */}
                      <div>
                        <label className="art-input-label" htmlFor="parentName">
                          <span>Parent / Guardian Name <span className="req">*</span></span>
                        </label>
                        <input
                          id="parentName"
                          name="parentName"
                          type="text"
                          required
                          value={formData.parentName}
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
                        Send Enquiry <Send size={15} />
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                /* Success Confirmation State */
                <div className="enquiry-success-box">
                  <div className="success-check-icon">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="success-title">Enquiry Received!</h3>
                  <p className="success-desc">
                    Thank you for reaching out to Artshine. We have received your details and will get in touch with you shortly.
                  </p>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        parentName: '',
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
