import React, { Component } from 'react'

class Contact extends Component {
    render(){
        return (
            <div id="contact-content">
                <div>
                    <h1>Contact Me</h1>
                    <div className="contact-links">
                        <a href="https://linkedin.com/in/claytonjc" target="_blank"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                        <a href="https://github.com/pacbac" target="_blank"><i class="fab fa-github-square"></i></a>
                        <a href="mailto:claytonchu99@gmail.com"><i class="fas fa-envelope-square"></i></a>
                        <a href="https://www.facebook.com/clayton.chu.7" target="_blank"><i class="fab fa-facebook-square"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact