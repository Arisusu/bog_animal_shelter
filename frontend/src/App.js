import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdoptScreen from './Components/AdoptScreen';
import "./App.css";
import AboutScreen from "./Components/AboutScreen";
import HomePage from "./Components/HomePage";

const App = () => {  
  
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="adopt">
          <AdoptScreen />
        </Route>
        <Route path="/:desc">
          <AboutScreen />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
