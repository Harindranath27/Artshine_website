import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Mail, ArrowUpRight } from 'lucide-react';

/* Inline Instagram icon — lucide-react in this project does not export Instagram */
const InstagramIcon = ({ size = 14 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, opacity: 0.8 }}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
import ArtDoodle from '../common/ArtDoodle';
import '../../styles/footer.css';

/**
 * ARTSHINE — SITE FOOTER
 *
 * Visual continuity: the footer flows from the page above it through an
 * organic SVG wave that matches the site's warm ivory → deep navy journey.
 *
 * Column 1: Artshine Logo + "Learn. Create. Sparkle."
 * Column 2: Pages (Home, Courses, Students & Achievements, Contact)
 * Column 3: Connect (Instagram, WhatsApp, Email)
 */
export const Footer = () => {
  const location = useLocation();
  const isIvoryAbove = location.pathname === '/contact';

  return (
    <>
      {/*
        =====================================================================
        WAVE BRIDGE — transitions from the page above into the footer below.
        When above section is warm ivory (e.g. Contact form), it renders
        an organic torn/wave transition into the footer.
        When above section is deep navy (Home, Courses, Students final CTAs),
        the footer seamlessly continues the dark artistic canvas.
        =====================================================================
      */}
      {isIvoryAbove && (
        <div className="footer-wave-bridge" aria-hidden="true">
          <svg
            viewBox="0 0 1440 72"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ display: 'block', width: '100%', height: 'clamp(36px, 4.5vw, 64px)' }}
          >
            {/* Subtle paper texture tear wave */}
            <path
              d="M0,72 L0,38 C120,14 240,52 360,32 C480,12 600,48 720,36 C840,24 960,50 1080,34 C1200,18 1320,46 1440,30 L1440,72 Z"
              fill="#0D1E35"
            />
            {/* Second organic layer for depth */}
            <path
              d="M0,72 L0,56 C160,44 320,68 480,54 C640,40 800,62 960,52 C1120,42 1280,60 1440,48 L1440,72 Z"
              fill="#07172C"
              opacity="0.6"
            />
            {/* Thin coral accent thread woven through the wave */}
            <path
              d="M0,40 C200,28 400,52 600,38 C800,24 1000,48 1200,36 L1440,32"
              stroke="#E63956"
              strokeWidth="1.5"
              fill="none"
              opacity="0.25"
            />
            {/* Yellow accent thread */}
            <path
              d="M0,54 C180,46 360,60 540,50 C720,40 900,58 1080,46 C1260,34 1360,52 1440,44"
              stroke="#FFB703"
              strokeWidth="1"
              fill="none"
              opacity="0.2"
            />
          </svg>
        </div>
      )}

      <footer className="site-footer" id="siteFooter">
        {/* Ambient coral glow — matches OrganicBlob language on all pages */}
        <div className="footer-ambient-coral" aria-hidden="true" />

        <div className="footer-container">
          <div className="footer-grid-3col">

            {/* ── Column 1: Brand ─────────────────────────────────────── */}
            <div className="footer-brand-col">
              <Link to="/" className="footer-logo-link" aria-label="Artshine Home">
                <img
                  src="/artshine-logo.png"
                  alt="Artshine Creative Art Learning Platform"
                  className="footer-logo-img"
                />
              </Link>

              <div className="footer-brand-tagline">
                Learn. Create. Sparkle.
              </div>

              <div className="footer-brand-tape" aria-hidden="true" />

              <p className="footer-brand-short">
                Nurturing creative confidence and artistic joy for young learners.
              </p>
            </div>

            {/* ── Column 2: Pages ─────────────────────────────────────── */}
            <div>
              <h4 className="footer-col-title">
                <span className="footer-col-dot" />
                Pages
              </h4>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="footer-nav-item">
                  <Link to="/courses">Courses</Link>
                </li>
                <li className="footer-nav-item">
                  <Link to="/students">Students &amp; Achievements</Link>
                </li>
                <li className="footer-nav-item">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* ── Column 3: Connect ───────────────────────────────────── */}
            <div>
              <h4 className="footer-col-title">
                <span className="footer-col-dot dot-teal" />
                Connect
              </h4>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  {/*
                    Instagram: link structure preserved.
                    Real handle to be added by client.
                  */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Artshine on Instagram"
                  >
                    <InstagramIcon size={14} />
                    Instagram
                    <ArrowUpRight size={13} className="footer-link-arrow" />
                  </a>
                </li>
                <li className="footer-nav-item">
                  {/*
                    WhatsApp: link structure preserved.
                    Real number to be added by client via https://wa.me/[number]
                  */}
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with Artshine on WhatsApp"
                  >
                    <MessageCircle size={14} style={{ flexShrink: 0, opacity: 0.8 }} />
                    WhatsApp
                    <ArrowUpRight size={13} className="footer-link-arrow" />
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a
                    href="mailto:hello@artshine.in"
                    aria-label="Email Artshine"
                  >
                    <Mail size={14} style={{ flexShrink: 0, opacity: 0.8 }} />
                    Email
                    <ArrowUpRight size={13} className="footer-link-arrow" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* ── Bottom Bar ──────────────────────────────────────────── */}
          <div className="footer-bottom-bar">
            <div className="footer-bottom-left">
              <ArtDoodle
                type="sparkle"
                color="#FFB703"
                size={13}
                animate={false}
                className="footer-sparkle-icon"
              />
              <span>&copy; {new Date().getFullYear()} Artshine. All rights reserved.</span>
            </div>
            <div>
              <span>Art classes for children — online &amp; offline</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
