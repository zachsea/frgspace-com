import { createFileRoute } from '@tanstack/react-router'
import '../../styles/team.css'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/team/')({
  component: Team,
  head: () => ({
    title: 'Team',
    meta: [
      {
        name: 'description',
        content: 'Meet the team behind FRG Space.'
      }
    ]
  })
})

interface TeamMemberProps {
  name: string
  role: string
  description: string
  skills: string[]
  imageUrl?: string
  initials: string
}

function TeamMember({ name, role, description, skills, imageUrl, initials }: TeamMemberProps) {
  return (
    <div className="team-member">
      <div className="team-member-image">
        {imageUrl ? (
          <img src={imageUrl} alt={name} />
        ) : (
          initials
        )}
      </div>
      <h3>{name}</h3>
      <div className="team-member-role">{role}</div>
      <div className="team-member-description">{description}</div>
      <div className="team-member-skills">
        <h4>Technical Skills</h4>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Team() {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Brandon Shippy",
      role: "Co-Founder",
      description: "Passionate about pioneering aerospace engineering and technology. Experience leading a team in ground control software development.",
      skills: ["C/C++", "CUDA", "Embedded Systems", "Golang", "Distributed Systems", "Machine Learning", "Agile Development"],
      initials: "BS",
      imageUrl: "/img/brandon.jpg"
    },
    {
      name: "Zach Mullen",
      role: "Co-Founder",
      description: "Full-stack engineer with a love for clean code and scalable architecture. Excited about operating system development and distributed systems.",
      skills: ["C/C++", "React", "Azure", "Linux", "RabbitMQ", "Compiler Design", "Distributed Systems", "Artificial Intelligence"],
      initials: "ZM"
    }
  ]

  return (
    <>
      <section className="content-section team-page">
        <div className="content-container team-container">
          <h1 className="section-title">Our Team</h1>
          <p className="section-subtitle">
            Meet the individuals behind FRG Space.
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
