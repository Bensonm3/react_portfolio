import React from 'react';
import './Contact.css'
 
const Contact = () => {
    return (
        <div class= "row row2">
            <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
/>
        <div class="col-md-8 containerbox">
            <div class ="row row2a">
                <div class= "col-md-12">
                    <h2>Contact </h2>
                </div>
            </div>
            <div class="row row2b">
                <div class="col-md-12">
                    <form action="action_page.php">
      
                            <label class="field" for="name">Name</label>
                            <br />
                            <input class="textbox" type="text" id="name" name="name" placeholder="John Smith" />
                              <br />
                            <label class="field" for="email">Email</label>
                            <br />
                            <input class="textbox" type="text" id="email" name="email" placeholder="example@gmail.com" />
                            <br />
                            <label class="field" for="message">Message</label>
                            <br />
                              <textarea class="messagebox" name="message" placeholder="" style="height:200px"></textarea>
                              <br />
                            <input class="submitbutton" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Contact;