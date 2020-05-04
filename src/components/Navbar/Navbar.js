import React,  { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Navbar.css';
import Background from '../Images/trees.png'
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Navigation from '../Navigation/Navigation';
import Error from '../Error/Error';


class Navbar extends Component {
    render() {
      return (      
        <BrowserRouter>
        <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
/>
          <div class="row row1">
            <div class="col-md-3 namecontainer">
                <div class="namebox">
                    Matt Benson
                </div>
            </div>
            <div class="col-md-4 d-md-block linkbox">  
                <nav class="navbar navbar-expand-sm bg-white justify-content-center">
                    <div class="links">
                        <a class="linklines index" href="https://github.com/Bensonm3">Github </a>
                        <a class="linklines portfolio" href="https://github.com/Bensonm3/Resume/blob/master/Matt_Benson_Resume.pdf">Resume</a>
                        <a class="linklines contact" href="https://www.linkedin.com/in/matt-benson-b7a24a91/"> LinkedIn</a>
                    </div>
                </nav>
            </div>
        </div>
        <div style={{backgroundImage: `url(${Background})`}} class = "row">
            <div class="col-md-12 linkbox">
                    <div class="directory">
                        <Navigation />
                        <Switch>
                        <Route path="/" component= {About} exact/> 
                        <Route path="/Contact" component= {Contact} />
                        <Route path="/Portfolio" component= {Portfolio} />
                        <Route component={Error}/>
                        </Switch>
                    </div>
            </div>
        </div>
        
        </BrowserRouter>
      );
    }
  }
  
  export default Navbar;
  