const education = [
  {
    id: 'e1',
    year: '2022 — 2026',
    title: 'BS Information Technology, major in ERP',
    sub: 'University of the Cordilleras — Baguio, PH',
    desc: 'Focused on enterprise systems, full-stack development, and database management.',
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <span className="label">Background</span>
          <h2>Education</h2>
        </div>

        <div className="timeline">
          {education.map(e => (
            <div key={e.id} className="tl-row">
              <span className="tl-year">{e.year}</span>
              <div className="tl-body">
                <p className="tl-title">{e.title}</p>
                <p className="tl-sub">{e.sub}</p>
                {e.desc && <p className="tl-desc">{e.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
