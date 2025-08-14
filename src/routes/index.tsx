import { createFileRoute, Link } from '@tanstack/react-router'
import { Twitter, Linkedin, Github } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>FRG Space</h1>
          <p>
            Some sort of message statement will eventually go here probably, maybe more than one line or something it doesnt matter
          </p>
          <div className="hero-cta">
            <a href="#about" className="hero-button primary">
              Learn More
            </a>
            <Link to="/contact" className="hero-button secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section" id="about">
        <div className="content-container">
          <h2 className="section-title">The Problem</h2>
          <p>Talk about problem statement and other information, like will have images?</p>
        </div>
      </section>

      <section className="cta-section">
        <div className="content-container">
          <h2 className="section-title">Ready?</h2>
          <p>Let's work together (or something to that effect goes here)</p>
          <Link to="/contact" className="hero-button primary">
            Contact Us
          </Link>
        </div>
      </section>

      <footer className="footer">
        <div className="content-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>FRG Space</h3>
              <p>Building innovative solutions for tomorrow.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <div className="footer-links-list">
                <Link to="/">Home</Link>
                <Link to="/team">Team</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" aria-label="Twitter" className="social-link">
                  <Twitter size={18} fill="currentColor" />
                  <span>Twitter</span>
                </a>
                <a href="#" aria-label="LinkedIn" className="social-link">
                  <Linkedin size={18} fill="currentColor" />
                  <span>LinkedIn</span>
                </a>
                <a href="#" aria-label="GitHub" className="social-link">
                  <Github size={18} fill="currentColor" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <div className="footer-links-list">
                <span>frgspace@frgspace.com</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 FRG Space. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
