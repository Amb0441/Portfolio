const ABOUT_IMG = '/PROFILE.png'

const skills = [
  { cat: 'Frontend', items: ['React', 'TypeScript', 'CSS', 'Vite'] },
  { cat: 'Backend', items: ['Node.js', 'PostgreSQL', 'REST', 'GraphQL'] },
  { cat: 'Tooling', items: ['Git', 'Docker', 'Linux', 'CI/CD'] },
]

function About() {
  return (
    <section id="about">
      <div className="about-inner">
        <p className="section-label">About</p>
        <h2 className="section-title">Who I am</h2>

        <div className="about-grid">
          <div className="about-image">
            <img src={ABOUT_IMG} alt="Anthony Ballestra" />
          </div>

          <div className="about-bio">
            <p>
              Full-stack developer based in Baguio, Philippines. I focus on building
              clean, performant web applications — from architecture decisions down
              to typography.
            </p>
            <p>
              When I'm not coding, I'm out in the mountains or working on
              side projects I can't leave alone.
            </p>
            <p>
              I use AI tools to accelerate my workflow — letting me focus on
              architecture, design, and the details that matter.
            </p>

            <div className="skills">
              {skills.map(({ cat, items }) => (
                <div key={cat} className="skill-group">
                  <p className="skill-cat">{cat}</p>
                  <div className="skill-tags">
                    {items.map(item => (
                      <span key={item} className="skill-tag">{item}</span>
                    ))}
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

export default About
