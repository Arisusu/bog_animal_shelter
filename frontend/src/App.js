import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdoptScreen from './Components/AdoptScreen';
import "./App.css";
import AboutScreen from "./Components/AboutScreen";

const App = () => {  
  
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/">
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
