import React from 'react'
import Nav from "./Nav";

const HomePage = () => {
    return (
        <div>
            <Nav />
            <div className = "aboutpage">
                <img id = "homepageimg" src="https://happyshelterpets.files.wordpress.com/2015/08/cropped-dogs-cats-banner11.jpg" alt="Site Logo"></img>
                <h1 className = "homepageheader">Our mission</h1>
                <h2>Our mission is to provide a safe and loving home for every animal, and to provide families like you with the perfect companion. We treat our animals with extraordinary care, and we prepare you to do the same once you bring your pet home.</h2>
                <h1 className = "homepageheader">Donations</h1>
                <h2>We are always accepting donations! You can drop off a donation to our dropoff box, located at North Avenue NW 30332 in Atlanta, GA at anytime. If you would like to deliver donations in person, please check our adoption hours below.</h2>
                <h1 className = "homepageheader">Adoption Hours</h1>
                <div class = "reducedlinespace">
                    <h2>Monday 9am - 5pm</h2>
                    <h2>Tuesday 9am - 5pm</h2>
                    <h2>Wednesday 10am - 4pm</h2>
                    <h2>Thursday 9am - 5pm</h2>
                    <h2>Friday 9am - 2pm</h2>
                </div>
                <h1 className = "homepageheader">Contact Information</h1>
                <div class = "reducedlinespace">
                    <h2>Address: North Avenue NW, Atlanta, GA, 30332</h2>
                    <h2>Phone Number: (404) 894-2000</h2>
                    <h2>Email: bogadoptioncenter@gmail.com</h2>
                </div>
            </div>
        </div>
    )
}

export default HomePage
