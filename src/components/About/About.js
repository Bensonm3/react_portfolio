import React from 'react';
import './About.css';
import Matt from '../Images/matt.jpg';

 
const About = () => {
    return (
        
  
        <div class="row border row2">
            <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
/>
        <div class="col-lg-8 border white contentbox">
            <div class="row row2a">
                <div class="col-lg-12 aboutme">
                    <h2>About Me</h2>
                </div>
            </div>
            <div class="row row2b">
                <div class="col-lg-4 mattbox">
                        <img class="matt" src={Matt} alt="Matt at Work" />
                </div>
                <div class="col-lg-8">
                    <p>
                        I was born and raised in the Pacific Northwest, and attained a bachelors degree in Political Science from Western Washington University. 
                        Upon graduating I got a job at Costco Travel, and then worked as a Tax Accountant for a few years before joining the International Buying Office in 2018. 
                        In the past year I have completed the Coding Boot Camp through the University of Washington Professional and Continuing Education Dept, and am now looking to apply these skills in a new career.
                        </p>
                        <br />
                        <p>
                            I like to spend most of my free time outside, usually either running or hiking. In the past couple of years I have gotten more into trail races, competing in several each year during the summer. 
                            The primary race distances I compete in are the 10K and half marathon. 
                            In the past few years I have gotten into rock climbing as well. 
                            I climbed the Tooth up at Snoqualmie pass this past summer, which required technical rock climbing skills and protective gear placements. 
                            I also enjoy traveling in my spare time, the most recent destinations being Costa Rica, Australia, and New Zealand.
                        </p>
                </div>
            </div>
            <div class="row row2c">
                <div class="col-lg-12">
                    <p>
                            In this portfolio you will find several of the projects I have worked on during my program. As I continue to work on personal projects, more will be added to this page and to my Github account.
                            
                            You will also find links to my LinkedIn, Resume, and Github portfolio, thank you for stopping by!
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default About;