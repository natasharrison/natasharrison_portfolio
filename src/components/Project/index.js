import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/projects/budget-tracker200x200.jpg";

function Project(props) {
    
    const currentProject = {
        name: "food-fest", 
        description: "pwas",
    };
    
    return (
        <section>
            <h1> {capitalizeFirstLetter(currentProject.name)} </h1>
            <p> {currentProject.description} </p>
            <div className="flex-row">
                <img 
                src={photo} 
                alt = "project screenshot"
                className = 'img-thumbnail mx-1'
                />
            </div>
        </section>
    );
}

export default Project; 