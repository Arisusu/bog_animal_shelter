import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdoptScreen from './Components/AdoptScreen';
import "./App.css";
import AboutScreen from "./Components/AboutScreen";

const App = () => {
  const [info, setInfo] = React.useState({});
  
  
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <AdoptScreen 
          setInfo={setInfo}
          />
        </Route>
        <Route path="/:desc">
          <AboutScreen 
          info = {info}
          />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
