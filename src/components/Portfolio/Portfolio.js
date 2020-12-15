import React from 'react';
import './Portfolio.css'
import getOutside from '../Images/hangman.jpg';
import oat from '../Images/OAT.jpeg';
import planner from '../Images/planner.jpeg';
import weather from '../Images/rpc.jpg';
import quiz from '../Images/rpg.png';
import fairweather from '../Images/fairweather.jpeg';

 
const Portfolio = () => {
    return (
        <div class="row row2 border">
              <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
/>
        <div class="col-md-8 border contentbox">
            <div class="row row2a">
                <div class="col-md-12 Portfoliobox">
                    <h2>Portfolio</h2>
                </div>
            </div>
            <div class="row row2b">
                <div class="col-md-6 picborder"> 
                
                    <div class="picbox">
                            <img class="pic pic1" src={getOutside} alt="pic 1" />
                            <div class="picbanner">
                                <a href="https://bmalkmus.github.io/getOutsideApp/" >Get Outside App </a>  
                                <a class="github" href="https://github.com/bmalkmus/getOutsideApp" >Github</a>   
                            </div>
                            <div class="picbanner2">
                                <a>Plan a day trip to a Seattle Park and restaurant</a>
                                <br></br>
                                <a>Javascript, Seattle Parks API, Zomato API, Materialize CSS</a>
                            </div>
                    </div>
                </div>
                <div class="col-md-6 picborder">
                    <div class="picbox">
                        <img class="pic pic2" src={weather} alt="pic 2" />
                        <div class="picbanner"> 
                            <a href=" https://bensonm3.github.io/hw6/" >Weather App </a> 
                            <a class="github" href="https://github.com/Bensonm3/Weather-Dashboard" >Github</a>
                        </div>
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
                            <img class="pic pic3" src={quiz} alt="pic 3" />
                            <div class="picbanner"> 
                                <a href="https://bensonm3.github.io/hw4/quiz.html" >Code Quiz </a> 
                                <a class="github" href="https://github.com/Bensonm3/Coding-Quiz-Game" >Github</a>
                            </div>
                            <div class="picbanner2">
                                <a>Coding Acroynm Quiz Game.</a>
                                <br></br>
                                <a>Javascript, HTML, CSS</a>
                            </div>
                        </div>
                </div>
                <div class="col-md-6 picborder">
                    <div class="picbox">
                            <img class="pic pic4" src={fairweather} alt="pic 4" />
                            <div class="picbanner"> 
                                <a class="fairWeather" href="https://fair-weather-hiking.herokuapp.com/" >Hiking App </a>
                                <a class="github" href="https://github.com/doctorbebo/Fair_Weather_Hiking_App" >Github</a>
                            </div>
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
                            <img class="pic pic5" src={oat} alt="pic 5" />
                            <div class="picbanner"> 
                                <a href="https://secret-wildwood-65776.herokuapp.com/" >OAT </a>
                                <a class="github" href="https://github.com/esteinmetzer/reborn-badass" >Github</a>
                            </div>
                            <div class="picbanner2">
                                <a>Order Allocation Tool for supply chain management.</a>
                                <br></br>
                                <a>SQL, Express.js, Javascript, HTML, CSS</a>
                            </div>
                        </div>
                    </div>
                <div class="col-md-6 picborder">
                    <div class="picbox">
                            <img class="pic pic5" src={planner} alt="pic 5" />
                            <div class="picbanner"> 
                            <a href="https://bensonm3.github.io/Day-Planner/" >Day Planner </a>
                            <a class="github"href="https://github.com/Bensonm3/Day-Planner" >Github</a>
                                </div>
                                <div class="picbanner2">
                                <a>Day Calendar with active time keeping.</a>
                                <br></br>
                                <a>jQuery, Javascript, Moment.js, HTML, CSS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Portfolio;