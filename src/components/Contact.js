import React, { Component } from 'react'

class Contact extends Component {
    render(){
        return (
            <div id="contact-content">
                <h1>Contact Me</h1>
                <div className="contact-links">
                    <a href="https://linkedin.com/in/claytonjc"><i>Linkedin</i></a>
                    <a href="https://github.com/pacbac"><i>Github</i></a>
                    <a href="https://claytonchu99@gmail.com"><i>Email</i></a>
                    <a><i>Facebook?</i></a>
                </div>
            </div>
        )
    }
}

export default Contact