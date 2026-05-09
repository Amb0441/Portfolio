import type { ExperienceEntry } from '../types'

const experiences: ExperienceEntry[] = [
  {
    id: '1',
    role: 'Software Developer',
    company: 'Company Name',
    period: '2024 - Present',
    description: 'Role description here.',
  },
]

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experiences.map((exp) => (
        <div key={exp.id}>
          <h3>{exp.role}</h3>
          <p>{exp.company} &middot; {exp.period}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Experience
