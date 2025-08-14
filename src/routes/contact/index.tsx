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
    <div>
      <h3>Contact!</h3>
    </div>
  )
}
