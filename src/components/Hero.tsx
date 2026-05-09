const IMG = '/PROFILE.png'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-badge">
            <span className="dot" />
            Available for work
          </span>

          <h1 className="hero-name">
            Anthony<br />Ballestra
          </h1>

          <p className="hero-role">
            Full-stack developer based in Baguio, Philippines.
            I build clean, performant web applications with sharp attention to detail.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-dark">View projects</a>
            <a href="#contact"  className="btn btn-light">Get in touch</a>
          </div>
        </div>

        <div className="hero-photo">
          <img src={IMG} alt="Anthony Ballestra" />
        </div>
      </div>
    </section>
  )
}
