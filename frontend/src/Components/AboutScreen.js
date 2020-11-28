import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from "./Nav";

const AboutScreen = () => {
    const { desc } = useParams();
    const [info, setInfo] = React.useState({});
    async function fetchData() {
        const response = await fetch(desc);
        const data = await response.json();
        setInfo(data[0]);
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
                            <h2 id = "aboutme">About Me</h2>
                            <h2>Breed: {info.breed}</h2>
                            <h2>Status: {info.status}</h2>
                            <h2>Gender: {info.gender}</h2>
                            <h2>Age: {info.yearsOld}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "aboutpage2">
                <h2> {info.info}</h2>
                <Link to="/adopt">
                    <button>Adopt Me!</button>
                </Link>
            </div>
        </div>
    )
}

export default AboutScreen
