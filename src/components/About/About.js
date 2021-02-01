import React from 'react';
import './About.css';
import Matt from '../Images/matt.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import pic1 from "../Images/matt.jpg"

 
const About = () => {
    return (
        
        <div class="row">
            <div class="row row3">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
                <div class="col-md-12 contentbox">
                    <img class="matt" src={Matt} alt="Matt at Work" />
                    
                    <div class = "headerBox">
                    <br /><br />
                        <p class= "header">Full Stack Web Developer & Web Designer based in Seattle, WA</p>
                        <p class = "header">Highly experienced in designing and developing custom websites and applications</p>
                        <br />
                    </div>
                </div>
            </div>
                <div class="row row4">
                    <div class="col-md-2 mobileHidden">
                    </div>
                    <div class="col-md-8 d-flex justify-content-center">
                        <br />
                        <p class = "content"><br />
                        I caught the coding bug.
                        <br /><br />A true PNW original raised in Lake Sammamish State Park (my Dad was a park ranger), I attended Western Washington University in 2008. Upon Graduating in 2012 with a Political Science degree I began working at local bulk goods purveyor Costco. Circulating between roles at Costco, I dabbled in Costco Travel, and then worked as a Tax Accountant for a few years before joining the International Buying Office in 2018. 
                        <br /><br />In 2019, I caught the coding bug, albeit a bit late. I knew I wanted to enter into the tech sphere and work in a fast-paced community where I could flex my creativity and leverage my project management skills. Once I ignited the spark and started learning my first coding language, I knew I was infected with a desire to become a front-end web developer.
                        <br /><br />I graduated from University of Washington’s Web Development Coding Boot Camp in the middle of the COVID-19 pandemic. Shifting from in-person learning to fully online classes developed my self- sufficiency and taught me how to effectively  collaborate with teams virtually.  Since graduating, I have grown my expertise by learning new languages and platforms through remote solo projects and as a volunteer with the Max Foundation, a global health non-profit. Supporting The Max Foundation’s fundraising and development team has trained me to work with external clients focused on driving revenue and increasing user experience. I am eager to keep learning and working with diverse organizations to deliver responsive design principles. 
                        <br /><br />Normally, I spend my free time outside, usually either running or hiking which has proven to be a major coping mechanism during the pandemic. Since graduating from Western, I have become a competitive trail runner (yes, I am one of those people who enjoys running uphill). Each year, I compete in several races, and look forward to hitting the trails with people again in 2021. When I’m not running, I am typically out climbing either on a rock or atop a mountain. My most recent achievement was climbing up the Tooth in Snoqualmie Pass in 2019 with my buddy Andrew. 
                        <br /><br />Like every millenial, I also enjoy traveling in my spare time and will be planning my next international trip as soon as life gets back to “normal”. My most recent trips were Costa Rica with my Dad, Australia where I learned to dive, and New Zealand where I pretended to be a hobbit which is pretty difficult as I am 6’5.
                        <br /><br />In this portfolio you will find several of the coding projects I worked on during my program. As I continue to work on personal projects, more will be added to this page and to my Github account. You will also find links to my LinkedIn, Resume, and Github portfolio, along with some photos of my most recent adventures. Thank you for stopping by!
                            
                        <br /><br />
                        </p> 
                    </div>
                            <div class ="row">
                                <div class="col-md-3 mobileHidden">
                                </div>
                                <div class="col-md-6">
                                    <div class="carousel">
                                        <Carousel>
                                            <div>
                                                <img src="https://raw.githubusercontent.com/Bensonm3/Portfolio-Photos/master/Crater-Lake.jpg"/>
                                                <p className="legend">Trail Running at Crater Lake National Park</p>
                                            </div>
                                            <div>
                                                <img src="https://raw.githubusercontent.com/Bensonm3/Portfolio-Photos/master/Olympics.jpg"/>
                                                <p className="legend">Hiking in the Royal Basin, Olympic National Park</p>
                                            </div>
                                            <div>
                                                <img src="https://raw.githubusercontent.com/Bensonm3/Portfolio-Photos/master/baker.jpeg"/>
                                                <p className="legend">Climbing Mt. Baker via the Easton Glacier</p>
                                            </div>
                                            <div>
                                                <img src="https://raw.githubusercontent.com/Bensonm3/Portfolio-Photos/master/puppy.jpeg"/>
                                                <p className="legend">Bernese Mountain Dog Puppies!</p>
                                            </div>
                                            <div>
                                                <img src="https://raw.githubusercontent.com/Bensonm3/Portfolio-Photos/master/Matt%2BKim.jpg"/>
                                                <p className="legend">Heybrook Lookout, Central Cascades</p>
                                            </div>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                    <div class="col-md-3 mobileHidden">
                    </div>
                </div>
        </div>
       

    );
}
 
export default About;