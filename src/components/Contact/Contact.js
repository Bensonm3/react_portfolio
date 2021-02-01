import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />

 
const Contact = () => {
    return (
        <div class= "row row3">
            <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" data-auto-replace-svg="nest"></script>
            <div class="col-md-1"></div>
            <div class="col-md-8 containerbox">
                <div class ="row row2a">
                    <div class= "col-md-12">
                        <h2>Contact</h2>
                        <p class="mailText">Email: Rabenson6@msn.com   
                            <a class="mail" href="mailto:rabenson6@msn.com?subject=Please send me your resume!">{"   "}{envelopeIcon}
                            </a>
                        </p>
                        <p class="mailText">Phone: (425) 614-9155 </p>
                    </div>
                </div>
                
            </div>
            <div class="col-md-1"></div>
        </div>

        
    );
}
 
export default Contact;