const IMG = '/PROFILE.png'

const skills = [
  { cat: 'Frontend',  items: ['React', 'TypeScript', 'CSS / Tailwind', 'Vite'] },
  { cat: 'Backend',   items: ['Node.js', 'PostgreSQL', 'REST', 'GraphQL'] },
  { cat: 'Tooling',   items: ['Git', 'Docker', 'Linux', 'CI/CD'] },
]

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="label">About</span>
          <h2>Who I am</h2>
        </div>

        <div className="about-grid">
          <div className="about-photo">
            <img src={IMG} alt="Anthony Ballestra" />
          </div>

          <div className="about-body">
            <p>
              I'm a full-stack developer focused on building clean, performant
              web applications — from architecture decisions down to the
              last pixel of typography.
            </p>
            <p>
              Currently finishing my BS in Information Technology at the University
              of the Cordilleras. When I'm not at the keyboard, I'm exploring
              Baguio's trails or obsessing over a side project.
            </p>
            <p>
              I leverage AI tools to ship faster while staying focused on
              the problems that actually matter — design, architecture, and user experience.
            </p>

            <div className="skills-grid">
              {skills.map(({ cat, items }) => (
                <div key={cat} className="skill-col">
                  <p className="skill-cat">{cat}</p>
                  <div className="skill-list">
                    {items.map(item => <span key={item}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
