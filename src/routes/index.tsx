import { createFileRoute, Link } from '@tanstack/react-router'
import '../styles/home.css'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>FRG Space</h1>
          <p>
            The future of edge computing, delivered from above.
          </p>
          <div className="hero-cta">
            <a href="#about" className="hero-button primary">
              Learn More
            </a>
            <Link to="/contact" className="hero-button secondary" onClick={scrollToTop}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section" id="about">
        <div className="content-container">
          <h2 className="section-title">Our Mission</h2>
        </div>
      </section>

      <section className="cta-section">
        <div className="content-container">
          <h2 className="section-title">Ready?</h2>
          <Link to="/contact" className="hero-button primary" onClick={scrollToTop}>
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
