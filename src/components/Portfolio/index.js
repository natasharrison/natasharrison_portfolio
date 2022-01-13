import React from "react";
import Card from "react-bootstrap/Card";
import healthwealth from "../../assets/projects/health-wealth200x200.jpg";
import generatedate from "../../assets/projects/generatedate200x200.jpg";
import weatherdashboard from "../../assets/projects/weatherdashboard200x200.jpg";

function Portfolio() {
  return (
    <section className="Portfolio" id="portfolio">
      <div class="container">
        <h1>Portfolio</h1>
        <div class="row">

          <div class="col-md-4">
            <Card border="dark"style={{textAlign: "center"}}>
              <Card.Img
                variant="top"
                src={healthwealth}
                alt="Health Wealth Application"
              />
              <Card.Body>
                <Card.Title> Health Wealth </Card.Title>
                <p>
                  A web application that creates a community of well-being by
                  allowing the user to earn points when they create and/or share healthy habits and goals.
                </p>
                <p>
                  Built using: React, GraphQL with a Node.js and Express.js
                  Server, Bootstrap, MongoDB, Mongoose ODM, JW, Heroku
                </p>
                <p>
                  Creators: 
                  <a href="https://github.com/natasharrison"> @natasharrison</a>
                  <a href="https://github.com/Wsamuell"> @Wsamuell</a>
                  <a href="https://github.com/eliassaunders"> @eliassaunders</a>
                  <a href="https://github.com/EEzycade"> @EEzycade</a>
                </p>
                <p>
                  <a href="https://healthwealth.herokuapp.com/"> Deployed Site</a> | 
                  <a href="https://github.com/Wsamuell/health-wealth">GitHub</a>
                </p>
              </Card.Body>
            </Card>
          </div>

          <div class="col-md-4">
            <Card border="dark" style={{textAlign: "center"}}>
            <Card.Img
              variant="top" src={generatedate} alt="generate a date website"/>
            <Card.Body>
              <Card.Title> Generate A Date </Card.Title>
            <p>
              A dinner date web application that randomly generates a dinner
              recipe and a cocktail recipe to help take the difficult
              decision-making out of date night.
            </p>
            <p>
              Built using: HTML, CSS, CSS Framework Skeleton, JavaScript,
              <a href="https://spoonacular.com/food-api">
                spoonacular API
              </a>,
              <a href="https://www.thecocktaildb.com/api.php">
                The Cocktail DB API
              </a>
            </p>
            <p>
              Creators:
              <a href="https://github.com/natasharrison"> @natasharrison</a>
              <a href="https://github.com/Wsamuell"> @Wsamuell</a>
            </p>
            <p>
              <a href="https://natasharrison.github.io/generate-date/">
                Deployed Site
              </a> |  
              <a href="https://github.com/natasharrison/generate-date.git">GitHub
              </a>
            </p>
            </Card.Body>
            </Card>
          </div>

          <div class="col-md-4">
            <Card border="darker" style={{textAlign: "center"}}>
              <Card.Img variant="top" src={weatherdashboard} alt="weather dashboard application"></Card.Img>
            <Card.Body>
              <Card.Title> Weather Dashboard </Card.Title>
            <p>
              A weather web application that implements an OpenWeather API to
              provide the user with the current weather and forecast for a
              particular city or current location.
            </p>
            <p>
              Built using: HTML, CSS, JavaScript, Bootstrap
              <a href="https://openweathermap.org/api">OpenWeather API</a>
            </p>
            <p>
              Creator:
              <a href="https://github.com/natasharrison">@natasharrison</a>
            </p>
            <p>
              <a href="https://upbeat-goldberg-fb125c.netlify.app/">
                Deployed Site (WIP)
              </a>
              |
              <a href="https://github.com/natasharrison/shecodes-weather.git">
                GitHub
              </a>
            </p>
            </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
