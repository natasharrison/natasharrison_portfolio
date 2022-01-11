import React from 'react';
import headshot from '../../assets/headshot/headshot.JPG';

function About() {
  return (

    <section className="About" id="about">
      <h1 className="Title"> About </h1>
      <img 
        src={headshot}
        alt="profile of Natasha"
        style = {{ width:"15%"}}
        className="Headshot"
      />
    <div className="About-Content">
      <p>Natasha Harrison Murata holds a MBA from the University of Arizona, where she also earned her bachelor’s degrees in Marketing and Fine Arts. From 2010 until 2021, she has worked in the Athletics Department at that same university. During her time there, Natasha oversaw the department’s community outreach initiatives and has coordinated multiple special events.</p>
      <p>Natasha is now in the pursuit of a new career in Web Development.</p>
      <p> She lives in Phoenix, AZ with her husband, Dr. Joseph Murata, and their two (fat) cats, Cocoa and Louis. She runs on coffee, lives to travel, and enjoys quality time with family, friends and nature.</p>
    </div>
    </section>
  );
}

export default About;