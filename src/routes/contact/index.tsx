import { createFileRoute } from '@tanstack/react-router'

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
  return (
    <section className="content-section">
      <div className="content-container">
        <h1>Contact Us</h1>
        <p>Placeholder</p>
      </div>
    </section>
  )
}
