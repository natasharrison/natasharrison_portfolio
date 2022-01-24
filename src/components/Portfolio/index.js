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

{/* Health Wealth */}
          <div class="col-sm-3 col-md-4">
            <Card style={{textAlign: "center"}} h-100>
              <Card.Img
                variant="top"
                src={healthwealth}
                alt="Health Wealth Application"
                className="Project-img"
              />
              <Card.Body>
                <Card.Title> Health Wealth </Card.Title>
                <p>
                  A web application that creates a community of well-being by
                  allowing the user to earn points as they create and share healthy habits and goals.
                </p>
                <p>
                  <b>Built using</b>: React, GraphQL, Node.js, Express.js, Bootstrap, MongoDB, Mongoose ODM, JW, Heroku
                </p>
                  <b>Creators</b>:{" "}
                  <Card.Link href="https://github.com/natasharrison"> @natasharrison </Card.Link>
                  <Card.Link href="https://github.com/Wsamuell"> @Wsamuell </Card.Link>
                  <Card.Link href="https://github.com/eliassaunders"> @eliassaunders </Card.Link>
                  <Card.Link href="https://github.com/EEzycade"> @EEzycade </Card.Link>
                </Card.Body>
                <Card.Footer>
                  <Card.Link href="https://healthwealth.herokuapp.com/">Deployed Site</Card.Link> 
                  <Card.Link href="https://github.com/Wsamuell/health-wealth">GitHub</Card.Link>
                </Card.Footer>
            </Card>
          </div>

{/* Generate A Date */}
          <div class="col-sm-3 col-md-4">
            <Card style={{textAlign: "center"}} h-100>
            <Card.Img
              variant="top"
              src={generatedate}
              alt="generate a date website"
            />
            <Card.Body>
              <Card.Title> Generate A Date </Card.Title>
            <p>
              A dinner date web application that randomly generates a dinner
              recipe and a cocktail recipe to help take the difficult
              decision-making out of date night.
            </p>
            <p>
              <b>Built using</b>: HTML, CSS, Skeleton, JavaScript,{" "}
              <a href="https://spoonacular.com/food-api"> spoonacular API</a>,{" "}
              <a href="https://www.thecocktaildb.com/api.php">The CocktailDB API</a>
            </p>
              <b>Creators</b>:{" "}
              <Card.Link href="https://github.com/natasharrison"> @natasharrison</Card.Link>
              <Card.Link href="https://github.com/Wsamuell"> @Wsamuell</Card.Link>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://natasharrison.github.io/generate-date/">Deployed Site</Card.Link>
              <Card.Link href="https://github.com/natasharrison/generate-date.git">GitHub</Card.Link>
            </Card.Footer>
            </Card>
          </div>

{/* SheCodes Weather */}
          <div class="col-sm-3 col-md-4">
            <Card style={{textAlign: "center"}} h-100>
              <Card.Img variant="top" src={weatherdashboard} alt="weather dashboard application"></Card.Img>
            <Card.Body>
              <Card.Title> Weather Dashboard </Card.Title>
            <p>
              A weather web application that implements an OpenWeather API to
              provide the user with the current weather and forecast for a
              particular city or current location.
            </p>
            <p>
              <b>Built using</b>: HTML, CSS, JavaScript, Bootstrap,{" "}
              <Card.Link href="https://openweathermap.org/api"> OpenWeather API</Card.Link>
            </p>
              <b>Creator</b>:{" "}
              <Card.Link href="https://github.com/natasharrison">@natasharrison</Card.Link>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://upbeat-goldberg-fb125c.netlify.app/"> Deployed Site (WIP)</Card.Link>
              <Card.Link href="https://github.com/natasharrison/shecodes-weather.git">GitHub</Card.Link>
            </Card.Footer>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Portfolio;
