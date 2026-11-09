import './Hero.css';
export default function Hero() {
    return <div className="hero">
        <div className="hero-text">
            <h1>Frontend <p id="dev">Developer</p></h1>
            <p>Developing modern web applications with a focus on user experience and performance.</p>
            <div className="hero-buttons">
                <button className="projects-button" onClick={() => {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}}>VIEW PROJECTS</button>
                <button className="contact-button" onClick={() => {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}}>CONTACT ME</button>
            </div>
            <div id="hero-bottom">
              <div><h2>20+</h2><p>Projects</p></div>
              <div><h2>1</h2><p>Internship</p></div>
              <div><h2>100%</h2><p>Passion</p></div>
            </div>
        </div>
        <div className="profile">
            <div className="card">
              <div className="orbit">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
                <div className="dot4"></div>
              </div>
                <div className="profile-image"><img loading="lazy" src="/Portfolio.webp" alt="Profile picture" /></div>
                <div className="ray"></div>
                <div className="text">Charles</div>
                <div>Frontend Developer</div>
                <div className="buttons">
                </div>
  </div>
        </div>
    </div>
}