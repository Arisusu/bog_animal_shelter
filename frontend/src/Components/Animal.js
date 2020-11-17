import React from "react";
//import { Link } from "react-rou"
const Animal = props => (
    <div>
        <img src={props.imgSrc} alt="A really cute lil animal."/>
        <h2>{props.name}</h2>
        <h2>{props.breed}</h2>
        <h2>{props.status}</h2>
        <h2>{props.gender}</h2>
        <h2>{props.yearsOld}</h2>
        <button>Click for More Details!</button>
    </div>
);

export default Animal;