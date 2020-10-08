import React from 'react';

const classNameTitleMap = {
    'about-me': 'About Me',
    'workplaces': 'Work Experience',
    'projects': 'Personal Projects',
    'hobbies': 'Other Interests'
}

const SectionsBar = () => (
    <div className="sections-bar">
        {Object.entries(classNameTitleMap).map(([className, title]) => (
            <a href={`#${className}-content`}>
                <div className="sections-content">
                    {title}
                </div>
            </a>
        ))}
    </div>
);

SectionsBar.displayName = 'SectionsBar';

export default SectionsBar;