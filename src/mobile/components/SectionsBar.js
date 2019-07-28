import React from 'react';

const SectionsBar = () => (
    <div className="sections-bar-mobile">
        <a href="#about-me-content-mobile">
            <div className="sections-content-mobile">
                About
            </div>
        </a>
        <a href="#workplaces-content-mobile">
            <div className="sections-content-mobile">
                Work
            </div>
        </a>
        <a href="#projects-content-mobile">
            <div className="sections-content-mobile">
                Projects
            </div>
        </a>
        <a href="#hobbies-content-mobile">
            <div className="sections-content-mobile">
                Other
            </div>
        </a>
    </div>
);

SectionsBar.displayName = 'SectionsBar';

export default SectionsBar;