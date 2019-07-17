import React, { Component } from 'react'

let Workplace = ({name}) => (
    <div className="workplace">[{name}]</div>
)

class Home extends Component {
    render(){
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
                            <Workplace name="Garrick Institute of Risk Sciences"/>
                            <Workplace name="US Census Bureau"/>
                            <Workplace name="Johns Hopkins University Applied Physics Laboratory"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home