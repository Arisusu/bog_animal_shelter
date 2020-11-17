import React, { Component } from "react";
import { render } from "react-dom";
import Animal from "./Components/Animal";

function App() {
  React.useEffect(() => {
    fetch('/animals')
      .then(data => console.log(data))
  }, [])
  return (
    <div className="App">
      <Animal 
      imgSrc="https://picsum.photos/350/200"
      name="dog"
      breed="Black Lab"
      status="Neutered and Vaccinated"
      gender="Male"
      yearsOld="2"
      />
    </div>
  );
}

export default App;
