import React from 'react';

const SectionsBar = () => (
    <div className="sections-bar">
        <a href="#about-me-content">
            <div className="sections-content">
                About Me
            </div>
        </a>
        <a href="#workplaces-content">
            <div className="sections-content">
                Work Experience
            </div>
        </a>
        <a href="#projects-content">
            <div className="sections-content">
                Personal Projects
            </div>
        </a>
        <a href="#hobbies-content">
            <div className="sections-content">
                Other Interests
            </div>
        </a>
    </div>
);

SectionsBar.displayName = 'SectionsBar';

export default SectionsBar;