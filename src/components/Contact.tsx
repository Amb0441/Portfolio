import { useState } from 'react'

const socials = [
  { label: 'GitHub',   href: 'https://github.com/Amb0441' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter',  href: 'https://twitter.com' },
]

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields(f => ({ ...f, [k]: e.target.value }))

  const submit = () => {
    if (fields.name && fields.email && fields.message) setSent(true)
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head">
          <span className="label">Contact</span>
          <h2>Get in touch</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              Open to freelance projects and full-time opportunities.
              Whether you have something specific in mind or just want to say hello —
              my inbox is open.
            </p>
            <div className="social-links">
              {socials.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  <span>{label}</span>
                  <span className="arr">↗</span>
                </a>
              ))}
            </div>
          </div>

          {sent ? (
            <p className="thanks">Thanks — I'll get back to you soon.</p>
          ) : (
            <div className="contact-form">
              <div className="form-row">
                <label>Name</label>
                <input placeholder="Your name" value={fields.name} onChange={set('name')} />
              </div>
              <div className="form-row">
                <label>Email</label>
                <input type="email" placeholder="you@email.com" value={fields.email} onChange={set('email')} />
              </div>
              <div className="form-row">
                <label>Message</label>
                <textarea placeholder="What's on your mind?" rows={5} value={fields.message} onChange={set('message')} />
              </div>
              <button className="btn btn-dark" onClick={submit} style={{ alignSelf: 'flex-start' }}>
                Send message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
