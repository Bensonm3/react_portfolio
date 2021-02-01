import React,  { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './Navbar.css';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
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
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"/>
          <div class="row row1">
            <div class="col-md-12 namecontainer">
                <div class="namebox">
                    Matt Benson
                </div>
            </div>
          </div>
          <div class="row row2">
            <div class="col-md-5 namecontainer links">
              <nav class="navbar navbar-expand-sm justify-content-center">
              <div class="links">
                <a class="linklines index" href="https://github.com/Bensonm3">Github</a>
                <a class="linklines portfolio" href="https://github.com/Bensonm3/Resume">Resume</a>
                <a class="linklines contact" href="https://www.linkedin.com/in/matt-benson-b7a24a91/">LinkedIn</a>
                
              </div>
              </nav>
              </div>
              <div class ="col-md-2 namecontainer links mobileHidden"></div>
                    <div class=" col-md-5 directory namecontainer links">
                      <nav class="navbar navbar-expand-sm justify-content-center">
                          <NavLink activeClassName="linklines" className="linklines"to="/">About
                          </NavLink>
                          <NavLink activeClassName="linklines" className="linklines"to="/Contact">Contact
                          </NavLink>
                          <NavLink activeClassName="linklines" className="linklines"to="/Portfolio">Portfolio
                          </NavLink>
                      </nav>
                    </div>
                    
                    

            
        </div>
        <body style={{minHeight: "100vh"}}>
        <div class = "row">
        <Switch>
                        <Route className ="linklines" path="/" component= {  About  } exact/> 
                        <Route className ="linklines" path="/Contact" component= {  Contact  } />
                        <Route className ="linklines" path="/Portfolio" component= {  Portfolio  } />
                        <Route component={Error}/>
                        </Switch>
            
        </div>
        </body>
        
        </BrowserRouter>
      );
    }
  }
  
  export default Navbar;
 