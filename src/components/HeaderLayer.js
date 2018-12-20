import React from 'react'
import propic from '../profilepic.jpg';

export default () => ([
    <header className="App-header">
        <h1 style={{
            "margin": "inherit 7px"
        }}>Clayton<br/>Chu</h1>
        <img src={propic} className="App-logo" alt="logo" />
        <a href="#home-content" className="btn home-btn">Home</a>
        <a href="#projects-content" className="btn projects-btn">Projects</a>
        <a href="#contact-content" className="btn contact-btn">Contact Me</a>
        <a href="#" className="btn resume-btn">Resume</a>
    </header>,
    <header className="App-header-sub">
        <h1 style={{
            "margin": "inherit 7px"
        }}>Clayton<br/>Chu</h1>
        {/* Substitute header that is not position absolute */}
    </header>
])