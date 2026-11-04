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
            
        </div>
        <div className="profile">
            <div className="dot"></div>
            <div className="card">
                <div className="profile-image"><img loading="lazy" src="/Portfolio.webp" alt="Profile picture" /></div>
                <div className="ray"></div>
                <div className="text">Charles</div>
                <div>Frontend Developer</div>
                <div className="line topl"></div>
                <div className="line leftl"></div>
                <div className="line bottoml"></div>
                <div className="line rightl"></div>
                <div className="buttons">
                </div>
  </div>
        </div>
    </div>
}