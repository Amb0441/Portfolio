const HERO_IMG = '/PROFILE.png'

function Hero() {
  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-available">&#x25cf;&nbsp; Available for work</p>
          <h1>ANTHONY<br />BALLESTRA</h1>
          <p className="hero-desc">
            Full-stack developer. I build clean, thoughtful web applications
            and care deeply about the details.
          </p>
          <div className="hero-links">
            <a href="#projects" className="btn-primary">View work</a>
            <a href="#contact" className="btn-ghost">Get in touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="img-wrap">
            <img src={HERO_IMG} alt="Anthony Ballestra" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
