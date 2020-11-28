import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <img src="https://image.freepik.com/free-vector/dog-cat-logo-template-veterinary_56473-127.jpg" alt="Site Logo" width="200" height="200"></img>
            <h1 id = "navheader">BOG's Animal Shelter</h1>
            <Link to="/">
                <button id = "push">About</button>
            </Link> 
            <Link to="/adopt">
                <button id = "push2">Adopt a pet!</button>
            </Link> 
        </nav>
    );
}
export default Nav;