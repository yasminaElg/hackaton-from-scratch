import React, { Component } from "react";
import Home from "./component/Home";
import { Route, Switch } from "react-router-dom";
import CreateHack from "./component/CreateHack";


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={"/createHack"} component={CreateHack}/>
        <Route path={"/"} component={Home}/>
      </Switch>
    )
  }
}

export default App;
