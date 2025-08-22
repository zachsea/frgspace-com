import { Link } from '@tanstack/react-router'
import { Twitter, Linkedin, Github } from 'lucide-react'
import './Footer.css'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
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
              <Link to="/" onClick={scrollToTop}>Home</Link>
              <Link to="/team" onClick={scrollToTop}>Team</Link>
              <Link to="/contact" onClick={scrollToTop}>Contact</Link>
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
  )
}
