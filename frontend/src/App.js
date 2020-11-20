import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdoptScreen from './Components/AdoptScreen';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/">
          <AdoptScreen />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
