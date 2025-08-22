import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '../../components/Footer'
import { Mail, Copy, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import '../../styles/contact.css'

export const Route = createFileRoute('/contact/')({
  component: Contact,
  head: () => ({
    title: 'Contact',
    meta: [
      {
        name: 'description',
        content: 'Contact us for more information.'
      }
    ]
  })
})

function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'frgspace@frgspace.com'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = email
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleSendEmail = () => {
    window.location.href = `mailto:${email}?subject=Contact from FRG Space Website`
  }

  return (
    <>
      <section className="content-section contact-page">
        <div className="content-container">
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-subtitle">
            Send us a message and we'll respond as soon as possible.
          </p>

          <div className="contact-card">
            <div className="contact-email-section">
              <Mail size={48} className="contact-icon" />
              <h3>Email Us</h3>
              <p className="contact-email">{email}</p>
              <p>
                Reach out for any questions, collaborations, or just to say hello.
              </p>

              <div className="contact-buttons">
                <button
                  onClick={handleSendEmail}
                  className="hero-button primary contact-btn"
                >
                  <Mail size={18} />
                  Send Email
                </button>

                <button
                  onClick={handleCopyEmail}
                  className={`hero-button secondary contact-btn ${copied ? 'copied' : ''}`}
                >
                  {copied ? (
                    <>
                      <CheckCircle size={18} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      Copy Email
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
