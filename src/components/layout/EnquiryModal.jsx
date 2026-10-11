import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, MessageCircle, Mail } from 'lucide-react';
import { ARTSHINE_CONTACT, getCourseEmailUrl, getCourseWhatsAppUrl } from '../../config/artshineContact';

export const EnquiryModal = ({ isOpen, onClose, defaultCourse = '' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [course, setCourse] = useState('');

  useEffect(() => {
    setCourse(defaultCourse);
  }, [defaultCourse, isOpen]);

  if (!isOpen) return null;
  const whatsappUrl = getCourseWhatsAppUrl(defaultCourse);
  const emailUrl = getCourseEmailUrl(defaultCourse);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop open" role="dialog" aria-modal="true" aria-labelledby="enquiryModalTitle" onClick={handleClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close enquiry modal">
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="eyebrow-label">Batch Enquiries</span>
              <h3 id="enquiryModalTitle" style={{ fontFamily: 'var(--font-brush)', fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                Enquire for Classes
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Connect with Artshine mentors for upcoming offline & online batch details.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '0.85rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                  Parent / Student Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  style={{
                    width: '100%',
                    height: '42px',
                    border: '1.5px solid rgba(15, 32, 56, 0.15)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0 0.85rem',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <div style={{ marginBottom: '0.85rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                  Interested Discipline *
                </label>
                {defaultCourse ? (
                  <input
                    type="text"
                    name="course"
                    value={defaultCourse}
                    readOnly
                    required
                    style={{
                      width: '100%',
                      height: '42px',
                      border: '1.5px solid rgba(15, 32, 56, 0.15)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0 0.85rem',
                      fontFamily: 'inherit',
                      background: '#F7F8FA',
                      color: 'var(--text-primary)',
                    }}
                  />
                ) : (
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      height: '42px',
                      border: '1.5px solid rgba(15, 32, 56, 0.15)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0 0.85rem',
                      fontFamily: 'inherit',
                      background: '#FFF',
                    }}
                  >
                    <option value="">Select an interested discipline</option>
                    <option value="Drawing">Drawing & Line Discipline</option>
                    <option value="Painting">Painting & Color Harmonies</option>
                    <option value="Craft">Craft & Tactile Arts</option>
                    <option value="Creative Learning">Creative Learning & Visual Thinking</option>
                    <option value="Online Classes">Online Classes</option>
                    <option value="Offline Classes">Offline Classes</option>
                  </select>
                )}
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                  Phone / WhatsApp or Email *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contact details"
                  style={{
                    width: '100%',
                    height: '42px',
                    border: '1.5px solid rgba(15, 32, 56, 0.15)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0 0.85rem',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              {defaultCourse ? (
                <div style={{ display: 'grid', gap: '0.65rem' }}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    aria-label={`Enquire via WhatsApp about ${defaultCourse}`}
                  >
                    <MessageCircle size={17} /> Enquire via WhatsApp
                  </a>
                  {ARTSHINE_CONTACT.email ? (
                    <a
                      href={emailUrl}
                      className="btn btn-secondary"
                      style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                      <Mail size={17} /> Enquire via Email
                    </a>
                  ) : (
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                      <Mail size={15} /> Email enquiries coming soon
                    </span>
                  )}
                </div>
              ) : (
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Batch Enquiry
                </button>
              )}
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <CheckCircle2 size={48} color="#00A896" style={{ margin: '0 auto 0.75rem' }} />
            <h4 style={{ fontFamily: 'var(--font-brush)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
              Thank you for your interest
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Thank you for your interest in Artshine classes.
            </p>
            <button className="btn btn-secondary btn-sm" onClick={handleClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiryModal;
