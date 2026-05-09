import type { ExperienceEntry } from '../types'

const experiences: ExperienceEntry[] = [
  {
    id: '1',
    role: 'Software Developer',
    company: 'Company Name',
    period: '2024 — Present',
    description: 'Building full-stack features for a SaaS product. Led migration from REST to GraphQL.',
  },
  {
    id: '2',
    role: 'Junior Developer',
    company: 'Previous Company',
    period: '2022 — 2024',
    description: 'Internal tooling and client dashboards. Introduced TypeScript and improved build pipelines.',
  },
]

const education = [
  { id: 'e1', degree: 'BS Computer Science', school: 'University of the Philippines', year: '2022' },
]

function Experience() {
  return (
    <section id="experience">
      <div className="inner">
        <p className="section-label">Background</p>
        <h2 className="section-title">Experience</h2>

        <div className="exp-list">
          {experiences.map(exp => (
            <div key={exp.id} className="exp-row">
              <span className="period">{exp.period}</span>
              <div>
                <p className="role">{exp.role}</p>
                <p className="company">{exp.company}</p>
                <p className="desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="section-label">Education</p>
        <div className="edu-list">
          {education.map(edu => (
            <div key={edu.id} className="edu-row">
              <span className="year">{edu.year}</span>
              <div>
                <p className="degree">{edu.degree}</p>
                <p className="school">{edu.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
