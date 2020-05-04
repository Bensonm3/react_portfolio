import React from 'react';
import './Portfolio.css'
import getOutside from '../Images/hangman.jpg';
import oat from '../Images/OAT.jpeg';
import planner from '../Images/planner.jpeg';
import weather from '../Images/rpc.jpg';
import quiz from '../Images/rpg.png';
import burger from '../Images/rutgers.jpg';

 
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
                                <a href="https://bmalkmus.github.io/getOutsideApp/" >Get Outside App</a>  
                                
                            </div>
                    </div>
                </div>
                <div class="col-md-6 picborder">
                    <div class="picbox">
                        <img class="pic pic2" src={weather} alt="pic 2" />
                        <div class="picbanner"> <a href=" https://bensonm3.github.io/hw6/" >Weather App</a> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row2c">
                <div class="col-md-6 picborder">
                    <div class="picbox">
                            <img class="pic pic3" src={quiz} alt="pic 3" />
                            <div class="picbanner"> <a href="https://bensonm3.github.io/hw4/quiz.html" >Code Quiz</a> 
                                </div>
                        </div>
                </div>
                <div class="col-md-6 picborder">
                    <div class="picbox">
                            <img class="pic pic4" src={burger} alt="pic 4" />
                            <div class="picbanner"> <a href="https://desolate-sea-53948.herokuapp.com/" >Eat da Burger!</a>
                            </div>
                    </div>
                </div>
            </div>
            <div class="row row2d">
                <div class="col-md-6 picborder">
                    <div class="picbox">
                            <img class="pic pic5" src={oat} alt="pic 5" />
                            <div class="picbanner"> <a href="https://secret-wildwood-65776.herokuapp.com/" >Order Allocation Tool</a>
                                </div>
                        </div>
                    </div>
                <div class="col-md-6 picborder">
                    <div class="picbox">
                            <img class="pic pic5" src={planner} alt="pic 5" />
                            <div class="picbanner"> <a href="https://bensonm3.github.io/Day-Planner/" >Day Planner</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Portfolio;