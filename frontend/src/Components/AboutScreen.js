import React from 'react';
import { useParams, Link } from 'react-router-dom';

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
        <img src="https://picsum.photos/350/200" alt="A really cute lil animal."/>
        <h2>Name: {info.name}</h2>
        <h2>Breed: {info.breed}</h2>
        <h2>Status: {info.status}</h2>
        <h2>Gender: {info.gender}</h2>
        <h2>Age: {info.yearsOld}</h2>
        <Link to="/adopt">
            <button>Back to Adopt Page</button>
        </Link>
        </div>
    )
}

export default AboutScreen
