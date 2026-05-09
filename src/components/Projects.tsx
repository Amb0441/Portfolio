const projects = [
  {
    id: '1',
    title: 'BANNED AJ1 1985',
    desc: 'Interactive digital archive exploring the history, marketing, and cultural impact of the 1985 "Banned" Air Jordan 1. Features custom cursor, cinematic hero, and scroll animations.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    repo: 'https://github.com/Amb0441/BANNED-AJ1-1985',
    live: 'https://banned-aj-1-1985.vercel.app',
  },
  {
    id: '2',
    title: 'Project Two',
    desc: 'Analytics dashboard powered by PostgreSQL and a GraphQL API with real-time data visualisation.',
    tags: ['Node.js', 'PostgreSQL', 'GraphQL', 'Recharts'],
    repo: '#',
  },
  {
    id: '3',
    title: 'Project Three',
    desc: 'CLI tool that automates scaffolding and enforces project conventions across a monorepo.',
    tags: ['TypeScript', 'CLI', 'Tooling'],
    repo: '#',
    live: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <span className="label">Work</span>
          <h2>Selected projects</h2>
        </div>

        <div className="project-grid">
          {projects.map(p => (
            <div key={p.id} className="p-card">
              <div className="p-card-top">
                <h3>{p.title}</h3>
                <div className="p-card-links">
                  {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">GitHub ↗</a>}
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>}
                </div>
              </div>
              <p>{p.desc}</p>
              <div className="p-card-tags">
                {p.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
