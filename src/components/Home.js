import React, { Component } from 'react';
import girsLogo from '../resources/images/girs.png';
import censusLogo from '../resources/images/census.png';
import jhuaplLogo from '../resources/images/jhuapl.png';

const NAME_LOGO_MAP = {
    girs: {
        name: "Garrick Institute of Risk Sciences",
        logo: girsLogo,
        position: "Student Software Engineer",
        period: "Since Nov 2018",
        link: "https://risksciences.ucla.edu",
        width: 350,
    },
    census: {
        name: "US Census Bureau",
        logo: censusLogo,
        position: "Software Development Intern",
        period: "Summer 2018",
        link: "http://census.gov",
        width: 150,
    },
    jhuapl: {
        name: "Johns Hopkins University Applied Physics Laboratory",
        logo: jhuaplLogo,
        position: "High School ASPIRE Intern",
        period: "Summer 2015",
        link: "https://www.jhuapl.edu/",
        width: 180,
    },
};

const Workplace = ({
    name,
    logo,
    width,
    position,
    period,
    link,
}) => (
    <div className="workplace">
        <h4>{name}</h4>
        <p>{position} - {period}</p>
        <a href={link}><img className="workplace-logo" src={logo} width={width} /></a>
    </div>
);

class Home extends Component {
    render() {
        return (
            <div id="home-content">
                <div>
                    <div className="home-bio">
                        <h2>Hi! I'm Clayton Chu, a computer science student at UCLA 
                        and an aspiring software engineer.</h2> 
                        <p>My primary interests are in <strong>software engineering </strong> 
                        and <strong>mathematical modeling</strong>, with <strong>machine learning</strong> and 
                        other  <strong>pure and applied mathematical topics</strong> as secondary interests.</p>
                        <p>In my free time, I love to play the piano and Super Smash Brothers Melee (and the Smash series
                        in general) semi-competitively.</p>
                    </div>
                    <div className="home-work">
                        <h2>Where I've Worked</h2>
                        <div className="home-workplaces">
                            {Object.keys(NAME_LOGO_MAP).map(workplace => <Workplace {...NAME_LOGO_MAP[workplace]} />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home