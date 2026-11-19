import "./Experience.css";
import CertificateModal from "./CertificateModal";
import { useState } from "react";
export default function Experience() {
  const [selectedCert, setSelectedCert] = useState(null);
  const certificates = [{
    title: "Responsive Web Design",
    pdf: "/Certificates/Responsive-web-design.pdf"
  },
  {
    title: "Legacy Responsive Web Design",
    pdf: "/Certificates/Legacy-responsive-web-designCert.pdf"
  },
  {
    title: "JavaScript Certification",
    pdf: "/Certificates/JavascriptCert.pdf"
  },
  {
    title: "Python Certification",
    pdf: "/Certificates/PythonCert.pdf"
  },
  {
    title: "CodeAlpha Internship",
    pdf: "/Certificates/CodealphaInternship.pdf"
  },
  {
    title: "Letter of Recommendation",
    pdf: "/Certificates/LOR.pdf"
  }
  ];
  return <>
  <section id="experience" className="roadmap">
    <div className="section-title">
        <h2>My Learning Journey</h2>
        <p>From web foundations to modern frontend development</p>
    </div>

    <div className="milestone">
        <div className="rcard">
            <h3>🎨 Responsive Web Design</h3>
            <p>Built a strong foundation in HTML, CSS, layouts, accessibility, and responsive design.</p>
            <span className="badge">Completed ✅</span>
            <button onClick={() => setSelectedCert(certificates[0])}>🏅 View Certificate</button>
        </div>
        <div className="dot"></div>
    </div>

    <div className="milestone">
        <div className="rcard">
            <h3>📱 Legacy Responsive Web Design</h3>
            <p>Strengthened web design fundamentals through practical projects and layouts.</p>
            <span className="badge">Completed ✅</span>
            <button onClick={() => setSelectedCert(certificates[1])}>🏅 View Certificate</button>
        </div>
        <div className="dot"></div>
    </div>

    <div className="milestone">
        <div className="rcard">
            <h3>⚡ JavaScript Certification</h3>
            <p>Learned DOM manipulation, ES6+, events, and interactive web development.</p>
            <span className="badge">Completed ✅</span>
            <button onClick={()=> setSelectedCert(certificates[2])}>🏅 View Certificate</button>
        </div>
        <div className="dot"></div>
    </div>

    <div className="milestone">
        <div className="rcard">
            <h3>🐍 Python Certification</h3>
            <p>Developed programming, problem-solving, and automation skills using Python.</p>
            <span className="badge">Completed ✅</span>
            <button onClick={()=> setSelectedCert(certificates[3])}>🏅 View Certificate</button>
        </div>
        <div className="dot"></div>
    </div>

    <div className="milestone">
        <div className="rcard">
            <h3>💼 CodeAlpha Internship</h3>
            <p>Worked on practical projects and gained hands-on industry experience.</p>
            <span className="badge">Internship</span>
            <button onClick={()=> setSelectedCert(certificates[4])}>🏅 View Certificate</button>
        </div>
        <div className="dot"></div>
    </div>

    <div className="milestone">
        <div className="rcard">
            <h3>📄 Letter of Recommendation</h3>
            <p>Received recognition for contribution, commitment, and performance during the internship.</p>
            <span className="badge">Achievement 🏆</span>
            <button onClick={()=>setSelectedCert(certificates[5])}>📄 View Letter</button>
        </div>
        <div className="dot"></div>
    </div>

    <div className="milestone">
        <div className="rcard">
            <h3>⚛️ Learning React</h3>
            <p>Currently mastering components, hooks, state management, and modern frontend architecture.</p>
            <span className="badge">In Progress 🔄</span>
        </div>
        <div className="dot current"></div>
    </div>
    <CertificateModal
        isOpen={selectedCert !== null}
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
  </section>
  </>  
}