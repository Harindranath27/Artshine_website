import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export const EnquiryModal = ({ isOpen, onClose, defaultCourse = '' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [course, setCourse] = useState(defaultCourse || 'Drawing');

  if (!isOpen) return null;

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
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
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
                  <option value="Drawing">Drawing & Line Discipline</option>
                  <option value="Painting">Painting & Color Harmonies</option>
                  <option value="Craft">Craft & Tactile Arts</option>
                  <option value="Creative Learning">Creative Learning & Visual Thinking</option>
                  <option value="Online Classes">Online Classes</option>
                  <option value="Offline Classes">Offline Classes</option>
                </select>
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

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Batch Enquiry
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <CheckCircle2 size={48} color="#00A896" style={{ margin: '0 auto 0.75rem' }} />
            <h4 style={{ fontFamily: 'var(--font-brush)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
              Enquiry Received
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Thank you for connecting. Our team will get back to you with schedule and enrolment details.
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
