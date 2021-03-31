import React from 'react';
import './Portfolio.css'
import getOutside from '../Images/hangman.jpg';
import gala from '../Images/gala.png';
import Rotary from '../Images/Rotary.png';
import planner from '../Images/planner.jpeg';
import weather from '../Images/rpc.jpg';
import quiz from '../Images/rpg.png';
import fairweather from '../Images/fairweather.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
const GithubIcon = <FontAwesomeIcon icon={faGithub} />


 
const Portfolio = () => {
    return (
        <div class="row row3 ">
              <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
/>
        <div class = "col-md-1 mobileHidden"></div>
        <div class="col-md-10 contentbox">
            <div class="row row2a">
                <div class="col-md-12 Portfoliobox">
                    <h2>Portfolio</h2>
                </div>
            </div>
            <div class="row row2b">
                <div class="col-md-6 picborder"> 
                
                    <div class="picbox">
                    <div class="picbanner">
                                <a class = "projectTitle" href="https://bmalkmus.github.io/getOutsideApp/" >Get Outside App </a>  
                                <a class="projectTitle github" href="https://github.com/bmalkmus/getOutsideApp" >{GithubIcon}</a>   
                            </div>
                            <img class="pic pic1" src={getOutside} alt="pic 1" />
                            <div class="picbanner2">
                                <a>Plan a day trip to a Seattle Park and Restaurant</a>
                                <br></br>
                                <a>Javascript, Seattle Parks API, Zomato API, Materialize CSS</a>
                            </div>
                    </div>
                </div>
                <div class="col-md-6 picborder">
                    <div class="picbox">
                        
                        <div class="picbanner"> 
                            <a class = "projectTitle" href=" https://bensonm3.github.io/hw6/" >Weather App </a> 
                            <a class="projectTitle github" href="https://github.com/Bensonm3/Weather-Dashboard" >{GithubIcon}</a>
                        </div>
                        <img class="pic pic2" src={weather} alt="pic 2" />
                        <div class="picbanner2">
                                <a>Weather App with current and searchable forecast data.</a>
                                <br></br>
                                <a>Javascript, HTML, CSS, jQuery, Open Weather API</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row2c">
                <div class="col-md-6 picborder">
                    <div class="picbox">
                            <div class="picbanner"> 
                                <a class = "projectTitle" href="https://bensonm3.github.io/hw4/quiz.html" >Code Quiz </a> 
                                <a class="projectTitle github" href="https://github.com/Bensonm3/Coding-Quiz-Game" >{GithubIcon}</a>
                            </div>
                            <img class="pic pic3" src={quiz} alt="pic 3" />
                            <div class="picbanner2">
                                <a>Coding Acroynm Quiz Game.</a>
                                <br></br>
                                <a>Javascript, HTML, CSS</a>
                            </div>
                        </div>
                </div>
                <div class="col-md-6 picborder">
                    <div class="picbox">
                            <div class="picbanner"> 
                            <a class = "projectTitle" href="https://bensonm3.github.io/Day-Planner/" >Day Planner </a>
                            <a class="projectTitle github"href="https://github.com/Bensonm3/Day-Planner" >{GithubIcon}</a>
                            <i class="projectTitle github fab fa-github-square"></i>
                                </div>
                                <img class="pic pic5" src={planner} alt="pic 5" />
                                <div class="picbanner2">
                                <a>Day Calendar with active time keeping.</a>
                                <br></br>
                                <a>jQuery, Javascript, Moment.js, HTML, CSS</a>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="row row2d">
                <div class="col-md-6 picborder">
                    <div class="picbox">
                            <div class="picbanner"> 
                                <a class = "projectTitle" href="max.cbo.io" >Maximize Life Gala </a>
                            </div>
                            <img class="pic pic5" src={gala} alt="pic 5" />
                            <div class="picbanner2">
                                <a>Gala auction website for the Max Foundation</a>
                                <br></br>
                                <a>Clickbid, Javascript, HTML, CSS</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 picborder">
                    <div class="picbox">
                            <div class="picbanner"> 
                                <a class = "projectTitle" href="https://fair-weather-hiking.herokuapp.com/" >Hiking App </a>
                                <a class="projectTitle github" href="https://github.com/doctorbebo/Fair_Weather_Hiking_App" >{GithubIcon}</a>
                            </div>
                            <img class="pic pic4" src={fairweather} alt="pic 4" />
                            <div class="picbanner2">
                                <a>Fitness App with hike search by weather conditions.</a>
                                <br></br>
                                <a>React, Javascript, MongoDB, Mongoose, Redux, Materialize CSS</a>
                            </div>
                    </div>
                </div>    
            </div>
            <div class="row row2d">
                <div class="col-md-6 picborder">
                    <div class="picbox">
                            <div class="picbanner"> 
                                <a class = "projectTitle" href="https://woodinvillerotary.ejoinme.org/MyEvents/AHandFullofFoodaHeartFullofHope/tabid/1207264/Default.aspx" >Rotary Auction </a>
                            </div>
                            <img class="pic pic6" src={Rotary} alt="pic 6" />
                            <div class="picbanner2">
                                <a>Auction Website for the Woodinville Rotary</a>
                                <br></br>
                                <a>Greater Giving, Javascript, HTML, CSS</a>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
            <div class="col-md-1 mobileHidden"></div>
        </div>
    );
}
export default Portfolio;
