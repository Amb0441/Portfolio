import { useInView } from '../hooks/useInView'

const projects = [
  {
    id: '1',
    title: 'BANNED AJ1 1985',
    year: '2026',
    desc: 'Interactive digital archive exploring the history, marketing, and cultural impact of the 1985 "Banned" Air Jordan 1 — built with vanilla JS, custom cursor effects, a cinematic hero section, and scroll-driven animations.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    repo: 'https://github.com/Amb0441/BANNED-AJ1-1985',
    live: 'https://banned-aj-1-1985.vercel.app',
  },
  {
    id: '2',
    title: 'APEX FINANCE',
    year: '2026',
    desc: 'Gamified personal finance app that turns saving into a game with consistency streaks, savings goals, badge rewards, and a spending dashboard — designed to make financial discipline engaging and rewarding. (Still in development)',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    repo: 'https://github.com/Amb0441/APEX-FINANCE',
  },
]

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" ref={ref as React.RefObject<HTMLElement>} className={`reveal${inView ? ' in-view' : ''}`}>
      <div className="wrap">
        <div className="section-head">
          <span className="label">Work</span>
          <h2>Selected projects</h2>
        </div>

        <div className="project-grid">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="p-card reveal-child"
              style={{ '--delay': `${i * 0.12}s` } as React.CSSProperties}
            >
              <div className="p-card-top">
                <span className="p-card-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="p-card-links">
                  {p.repo && p.repo !== '#' && <a href={p.repo} target="_blank" rel="noreferrer">GitHub ↗</a>}
                  {p.live && p.live !== '#' && <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>}
                </div>
              </div>
              <div className="p-card-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
              <div className="p-card-footer">
                <div className="p-card-tags">
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                <span className="p-card-year">{p.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
