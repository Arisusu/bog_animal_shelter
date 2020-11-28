import React from "react";
import { Link } from "react-router-dom"
const Animal = props => (
    <div className = "animal">
        <img src={props.imgSrc} alt="A really cute lil animal."/>
        <h3 id = "animalName">{props.name}</h3>
        <h3>{props.breed}</h3>
        <h3>{props.status}</h3>
        <h3>{props.gender}</h3>
        <h3>{props.yearsOld} years old </h3>
        <Link to={
            {
                pathname: (props.name + '-' + props.species).toLocaleLowerCase(),
            }
        }>
            <button>Click for more details!</button>
        </Link>
    </div>
);

export default Animal;