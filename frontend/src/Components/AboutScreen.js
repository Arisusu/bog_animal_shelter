import React from 'react';
import { useParams } from 'react-router-dom';

const AboutScreen = () => {
    const { desc } = useParams();

    return (
        <div>
            <h3>{desc}</h3>
        </div>
    )
}

export default AboutScreen
