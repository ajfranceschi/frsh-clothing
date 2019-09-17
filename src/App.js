import React from "react";
import "./App.css";
import HomePage from "./Pages/Homepage/homepage.component";
import { Switch, Route } from 'react-router-dom';

// create a hats page component that represents another route
const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={"/"} component={HomePage}/>
          <Route path={"/hats"} component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
