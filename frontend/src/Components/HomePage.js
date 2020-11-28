import React from 'react'
import Nav from "./Nav";

const HomePage = () => {
    return (
        <div>
            <Nav />
            <div className = "aboutpage">
                <img id = "homepageimg" src="https://happyshelterpets.files.wordpress.com/2015/08/cropped-dogs-cats-banner11.jpg" alt="Site Logo"></img>
                <h2 className = "homepageheader">Our Mission</h2>
                <div>Our mission is to provide a safe and loving home for every animal, and to provide families like you with the perfect companion. We treat our animals with extraordinary care, and we prepare you to do the same once you bring your pet home.</div>
                <h2 className = "homepageheader">Donations</h2>
                <div>We are always accepting donations! You can drop off a donation to our dropoff box, located at North Avenue NW 30332 in Atlanta, GA at anytime. If you would like to deliver donations in person, please check our adoption hours below.</div>
                <h2 className = "homepageheader">Adoption Hours</h2>
                <div>
                    <div>Monday: 9am - 5pm</div>
                    <div>Tuesday: 9am - 5pm</div>
                    <div>Wednesday: 9am - 2pm</div>
                    <div>Thursday: 9am - 5pm</div>
                    <div>Friday: 9am - 2pm</div>
                    <div>Saturday: 9am - 2pm</div>
                    <div>Sunday: Closed</div>
                </div>
                <h2 className = "homepageheader">Contact Information</h2>
                <div>
                    <div>Address: North Avenue NW, Atlanta, GA, 30332</div>
                    <div>Phone Number: (404) 894-2000</div>
                    <div>Email: bogadoptioncenter@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
