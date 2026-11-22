import './Navbar.css';
import { useState } from 'react';
export default function Navbar() {
    const [name, setName] = useState('Charles.dev');
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar" aria-label="Primary navigation">
            <h1 onMouseOver={()=>setName("Charles Addo")} onMouseLeave={()=>setName("Charles.dev")}>{name}</h1>
            <label className="portfolio-menu">
                Menu
                <input
                    className="portfolio-menu__input"
                    defaultChecked
                    type="checkbox"
                    aria-label="Toggle navigation menu"
                    onChange={(event) => setMenuOpen(!event.target.checked)}
                />
                <span className="portfolio-menu__bar" aria-hidden="true">
                    <span className="portfolio-menu__bar-list portfolio-menu__bar-list--top"></span>
                    <span className="portfolio-menu__bar-list portfolio-menu__bar-list--middle"></span>
                    <span className="portfolio-menu__bar-list portfolio-menu__bar-list--bottom"></span>
                </span>
                <span className="portfolio-menu__container">
                    <a className="portfolio-menu__list" href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a className="portfolio-menu__list" href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                    <a className="portfolio-menu__list" href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
                    <a className="portfolio-menu__list" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </span>
            </label>
        </nav>
    );
}