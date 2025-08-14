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
    <div>
      <h3>Team!</h3>
    </div>
  )
}
