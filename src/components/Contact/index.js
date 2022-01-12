import React from 'react';
import email from '../../assets/icons/email.jpg';
import github from '../../assets/icons/github.jpg';
import linkedin from '../../assets/icons/linkedin.jpg';
import location from '../../assets/icons/location.jpg';
import phone from '../../assets/icons/phone.jpg';
import twitter from '../../assets/icons/twitter.jpg';


function Contact() {
  return (
    <section className="Contact" id="contact">
      <h1>Contact Natasha</h1>
      <li><img src={location} width="5%" height="5%"></img>   Scottsdale, AZ</li>
      <li> <img src={phone} width="5%" height="5%"></img>   520.245.1509 </li>
      <li> <img src={email} width="5%" height="5%"></img>     
      <a href="mailto://natasharrison@gmail.com"> natasharrison@gmail.com </a></li>
      <li><a href="https://www.linkedin.com/in/natasharrison/">
        <img src={linkedin} width="5%" height="5%"></img>    Linkedin</a></li>
      <li><a href="https://github.com/natasharrison">
        <img src={github} width="5%" height="5%"></img>    GitHub</a></li>
      <li><a href="https://twitter.com/natasharrison">
        <img src={twitter} width="5%" height="5%"></img>    Twitter</a></li>
    </section>
  );
}

export default Contact;