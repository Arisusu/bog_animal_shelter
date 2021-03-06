import React from "react";
import Nav from "./Nav";
import Animal from "./Animal";

const AdoptScreen = () => {
    const [dogs, setDogs] = React.useState([]);
    const [cats, setCats] = React.useState([]);
  async function fetchData() {
    const response = await fetch('/animals');
    const data = await response.json();
    setCats(data.find(group => group._id==="cat").pets);
    setDogs(data.find(group => group._id==="dog").pets);
  }
  React.useEffect(() => {
    fetchData();
    }, []);
    const catsArr = cats.map((info, idx) => (
        <Animal 
        imgSrc= {info.image}
        name={info.name}
        breed={info.breed}
        status={info.status}
        gender={info.gender}
        yearsOld={info.yearsOld}
        species={"cat"}
        />
    ));
    const dogsArr = dogs.map((info, idx) => (
        <Animal
        imgSrc= {info.image}
        name={info.name}
        breed={info.breed}
        status={info.status}
        gender={info.gender}
        yearsOld={info.yearsOld}
        species={"dog"}
        />
    ));
    return (
        <div>
        <Nav />
        <h1 id = "animalType">Dogs and puppies</h1>
        <div className="group">
            {dogsArr}
        </div>
        <h1 id = "animalType">Cats and kittens</h1>
        <div className="group">
            {catsArr}
        </div>
        </div>
    );
}
export default AdoptScreen;