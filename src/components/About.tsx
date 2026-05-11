import { useInView } from '../hooks/useInView'

const IMG = '/PROFILE.png'

const skills = [
  { cat: 'Frontend', items: ['React', 'TypeScript', 'CSS / Tailwind', 'Vite'] },
  { cat: 'Backend',  items: ['Node.js', 'PostgreSQL', 'REST APIs', 'NoSQL'] },
  { cat: 'Tooling',  items: ['Git','Linux', 'Figma'] },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className={`reveal${inView ? ' in-view' : ''}`}>
      <div className="wrap">
        <div className="section-head">
          <span className="label">About</span>
          <h2>Who I am</h2>
        </div>

        <div className="about-grid">
          <div className="about-photo reveal-child" style={{ '--delay': '0s' } as React.CSSProperties}>
            <img src={IMG} alt="Anthony Ballestra" />
          </div>

          <div className="about-body">
             {(['I specialize in ERP systems, full-stack development, and database management — building practical, scalable solutions from the ground up.',
                'Currently finishing my BS in Information Technology at the University of the Cordilleras. Coursework includes software engineering and systems design.',
                'I leverage AI tools to ship faster while staying focused on what matters — architecture, performance, and user experience.',
             ] as string[]).map((text, i) => (
              <p key={i} className="reveal-child" style={{ '--delay': `${0.1 + i * 0.1}s` } as React.CSSProperties}>{text}</p>
            ))}

            <div className="skills-grid reveal-child" style={{ '--delay': '0.4s' } as React.CSSProperties}>
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
