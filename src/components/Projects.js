import React, { Component } from 'react'

class ProjectEntry extends Component {
    render(){
        return (
            <a href="#">
                <div className="project-entry">
                    <h1>{this.props.title}</h1>
                </div>
            </a>
        )
    }
}

class Projects extends Component {
    render(){
        return (
            <div id="projects-content">
                <div>
                    <h1>Some of my Personal Projects</h1>
                    <div className="projects-row">
                        <ProjectEntry title="Interdisciplinary Analysis of the Energy Profiles of Various States"/>
                        <ProjectEntry title="Cell Group Meeting Scheduler"/>
                    </div>
                    <div className="projects-row">
                        <ProjectEntry title="ViralSim"/>
                        <ProjectEntry title="Georadio"/>
                    </div>
                    <h3>More can be found at my [Github]!</h3>
                </div>
            </div>
        )
    }
}

export default Projects