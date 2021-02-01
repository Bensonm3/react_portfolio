import React,  { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faFile} from '@fortawesome/free-solid-svg-icons'
const GithubIcon = <FontAwesomeIcon icon={faGithub} />
const LinkedinIcon = <FontAwesomeIcon icon={faLinkedin} />
const ResumeIcon = <FontAwesomeIcon icon={faFile} />


class Footer extends Component {
    render() {
      return (      
        <BrowserRouter>
        <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
/>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"/>
          <div class="row row1">
            <div class="col-md-12 namecontainer">
                <div class="namebox">
                    <nav class="navbar navbar-expand-sm justify-content-center">
                        <div class="links">
                            <a class="linklines index" href="https://github.com/Bensonm3">{GithubIcon}{'          '}</a>
                            <a class="linklines portfolio" href="https://github.com/Bensonm3/Resume">{ResumeIcon}{'          '}</a>
                            <a class="linklines contact" href="https://www.linkedin.com/in/matt-benson-b7a24a91/">{LinkedinIcon}</a>
                        </div>
                    </nav>
                </div>
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }
  
  export default Footer;