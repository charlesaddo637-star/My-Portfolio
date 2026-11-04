import './Navbar.css';
import { useState } from 'react';
export default function Navbar() {
    const [name, setName] = useState('Charles.dev');
    return <>
    <div className="navbar">
            <h2 onMouseOver={()=>setName("Charles Kofi Addo")} onMouseLeave={()=>setName("Charles.dev")}>{name}</h2>
            <div className="navlinks">
            <a href="#about" aria-label>About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            </div>
        </div>
    </>
}