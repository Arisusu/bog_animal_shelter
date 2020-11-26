import React from "react";
import { Link } from "react-router-dom"
const Animal = props => (
    <div className="animal">
        <img src={props.imgSrc} alt="A really cute lil animal."/>
        <h2>Name: {props.name}</h2>
        <h2>Breed: {props.breed}</h2>
        <h2>Status: {props.status}</h2>
        <h2>Gender: {props.gender}</h2>
        <h2>Age: {props.yearsOld}</h2>
        <Link to={
            {
                pathname: (props.name + '-' + props.species),
            }
        }>Click for More Details!</Link>
    </div>
);

export default Animal;