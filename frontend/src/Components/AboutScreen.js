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
                            <h2>Breed: {info.breed}</h2>
                            <h2>Status: {info.status}</h2>
                            <h2>Gender: {info.gender}</h2>
                            <h2>Age: {info.yearsOld}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "aboutpage2">
                <h1 id = "aboutheader">A quick message from {info.name}:</h1>
                <h2>{info.info}</h2>
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
