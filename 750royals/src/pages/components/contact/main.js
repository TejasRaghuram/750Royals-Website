import './styles.css';
import React from "react";
import emailjs from 'emailjs-com';

function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        if(!(e.target.elements.from_email) && !(e.target.elements.from_name) && !(e.target.elements.message))
        {
            emailjs.sendForm('service_5rtgzmw', 'template_onovqgd', e.target, 'uglKAAh05rp_vIKtt')
                .then((result) => {
                window.location.reload()
                }, (error) => {
                console.log(error.text);
                });
            alert("Thank you for your inquiry. A team member will respond within 24 hours.");
        }
        else
        {
            alert("Please make sure to fill out all fields.");
        }
      }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="from_name" class="form_input" placeholder="NAME"/>
            <input type="email" name="from_email" class="form_input" style={{marginTop: "25px"}} placeholder="EMAIL"/>
            <textarea name="message" id="form_message" placeholder="MESSAGE"/>
            <input type="submit" id="form_submit" value="Send"/>
        </form>
    );
}

export default ContactUs;