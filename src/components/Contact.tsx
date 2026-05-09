import { useState } from 'react'

const socials = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
]

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <section id="contact">
      <div className="inner">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Get in touch</h2>

        <div className="contact-grid">
          <div>
            <p className="contact-text">
              Open to new opportunities. Whether you have a project in mind or just
              want to say hello, feel free to reach out.
            </p>
            <div className="socials">
              {socials.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  ↗ {label}
                </a>
              ))}
            </div>
          </div>

          {sent ? (
            <p className="thanks">Thanks — I'll be in touch.</p>
          ) : (
            <div className="contact-form">
              <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
              <textarea placeholder="Message" value={message} rows={5} onChange={e => setMessage(e.target.value)} />
              <button onClick={() => { if (name && email && message) setSent(true) }}>Send message</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
