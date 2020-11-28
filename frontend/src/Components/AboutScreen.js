import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from "./Nav";


const AboutScreen = () => {
    const { desc } = useParams();
    const [info, setInfo] = React.useState({});
    const [isAdopted, setIsAdopted] = React.useState(false);
    async function fetchData() {
        const response = await fetch(desc);
        const data = await response.json();
        setInfo(data[0]);
    }
    function updateAdopted() {
        setIsAdopted(true);
    }
    React.useEffect(() => {
        fetchData();
        }, []);
    return (
        <div>
            <Nav />
            <div className="aboutpage">
                <h2 id = "aboutName">{info.name}</h2>
                <div className = "row">
                    <div className = "column">
                        <div className = "imgcolumn"> 
                            <img src= {info.image} alt= "animal pics" width = "100%" height= "auto"/>
                        </div>
                    </div>
                    <div className = "column">
                        <div className = "infocolumn">
                            <h1>About Me</h1>
                            <div>Breed: {info.breed}</div>
                            <div>Status: {info.status}</div>
                            <div>Gender: {info.gender}</div>
                            <div>Age: {info.yearsOld}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "aboutpage2">
                <h2 id = "aboutheader">A quick message from {info.name}:</h2>
                <h3>{info.info}</h3>
                <div>If you want to learn more about me, click on the "Adopt Me" button below! Then, check the About page for adoption hours, contact information, and the shelter's location.</div>
                <div className = {isAdopted? "" : "hidden"}>
                    We added you to a list of potential adopters for {info.name}! Please visit us at our shelter to discuss next steps.
                </div>
                <button id = "push" onClick = {updateAdopted}>Adopt Me!</button>
                <Link to="/adopt">
                    <button>Return to Adopt Page</button>
                </Link>
            </div>
        </div>
    )
}

export default AboutScreen
