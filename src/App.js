import React, { Component } from "react";
import Home from "./component/Home";
import { Route, Switch } from "react-router-dom";
import Admin from "./component/Admin";
import { CudHack } from "./component/CudHack";
import NewHack from "./component/NewHack";


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={"/create/"} component={NewHack}/>
        <Route path={"/update/:id"} exact component={CudHack}/>
        <Route path={"/Admin"} component={Admin}/>
        <Route path={"/"} component={Home}/>
      </Switch>
    )
  }
}

export default App;
