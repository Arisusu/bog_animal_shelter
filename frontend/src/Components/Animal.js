import React from "react";
import { Link } from "react-router-dom"
const Animal = props => (
    <div className = "animal">
        <img src={props.imgSrc} alt="A really cute lil animal."/>
        <h2 id = "animalName">{props.name}</h2>
        <h2>{props.breed}</h2>
        <h2>{props.status}</h2>
        <h2>{props.gender}</h2>
        <h2>{props.yearsOld} years old </h2>
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