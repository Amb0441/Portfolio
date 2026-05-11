import { useInView } from '../hooks/useInView'

const education = [
  {
    id: 'e1',
    year: '2022 — 2026',
    title: 'BS Information Technology',
    major: 'Major in Enterprise Resource Planning',
    sub: 'University of the Cordilleras — Baguio, PH',
    desc: 'ERP systems, full-stack development, and database management. Coursework includes software engineering.',
    status: 'Ongoing',
  },
]

const certs = [
  { label: 'CCNAv7: Introduction to Networks',              issuer: 'Cisco Networking Academy', year: '2025' },
  { label: 'CCNA: Switching, Routing, and Wireless Essentials', issuer: 'Cisco Networking Academy', year: '2026' },
]

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" ref={ref as React.RefObject<HTMLElement>} className={`reveal${inView ? ' in-view' : ''}`}>
      <div className="wrap">
        <div className="section-head">
          <span className="label">Background</span>
          <h2>Education</h2>
        </div>

        <div className="timeline">
          {education.map((e, i) => (
            <div key={e.id} className="tl-row reveal-child" style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}>
              <div className="tl-left">
                <span className="tl-year">{e.year}</span>
                {e.status && <span className="tl-status">{e.status}</span>}
              </div>
              <div className="tl-body">
                <p className="tl-title">{e.title}</p>
                <p className="tl-major">{e.major}</p>
                <p className="tl-sub">{e.sub}</p>
                {e.desc && <p className="tl-desc">{e.desc}</p>}
              </div>
            </div>
          ))}
        </div>

        {certs.length > 0 && (
          <div className="certs-block reveal-child" style={{ '--delay': '0.2s' } as React.CSSProperties}>
            <p className="certs-heading label">Certifications</p>
            <div className="certs-list">
              {certs.map(c => (
                <div key={c.label} className="cert-row">
                  <span className="cert-label">{c.label}</span>
                  <span className="cert-meta">{c.issuer} · {c.year}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
