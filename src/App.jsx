import { useState } from 'react';
import Contact from './Components/Contact/Contact.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
export default function App() {
  return <>
  <div className="glow1"></div>
  <div className="glow2"></div>
  <Navbar></Navbar>
  <span className="available"><a href="#contact">Available for Opportunites</a></span>
  <Hero></Hero>
  </>
}