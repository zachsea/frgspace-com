import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/team/')({
  component: Team,
  head: () => ({
    title: 'Team',
    meta: [
      {
        name: 'description',
        content: 'Learn more about our team on this page.'
      }
    ]
  })
})

function Team() {
  return (
    <section className="content-section">
      <div className="content-container">
        <h1>Our Team</h1>
        <p>Placeholder</p>
      </div>
    </section>
  )
}
