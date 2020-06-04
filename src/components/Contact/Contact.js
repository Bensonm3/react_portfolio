import React from 'react';
import './Contact.css'
import mailbox from '../Images/mailbox.png'

 
const Contact = () => {
    return (
        <div class= "row row2">
            <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" data-auto-replace-svg="nest"></script>
            <div class="col-md-8 containerbox">
                <div class ="row row2a">
                    <div class= "col-md-12">
                        <h2>Contact</h2>
                    </div>
                </div>
                <p>Please email me for my resume:   
                    <a> </a>
                    <a href="mailto:rabenson6@msn.com?subject=Please send me your resume!">
                         <img class="mail" alt="mail icon" src= {mailbox}/> 
                    </a>
                </p>
            </div>
        </div>

        
    );
}
 
export default Contact;