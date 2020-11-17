import React, { Component } from "react";
import { render } from "react-dom";
import Animal from "./Components/Animal";

function App() {
  React.useEffect(() => {
    fetch('http://localhost:3001/animals')
      .then(data => console.log(data))
  }, [])
  return (
    <div className="App">
      <Animal 
      imgSrc="https://picsum.photos/350/200"
      name="dog"
      neutered={false}
      vaccinated={true}
      gender="Male"
      age="2"
      />
    </div>
  );
}

export default App;
