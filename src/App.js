import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { AdminRoute } from "./routes/AdminRoute";
import { Login } from "./component/Login";
import { Home } from "./component/Home";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={"/login"} component={Login} />
        <Route
          path={"/admin"}
          render={(props) => {
            console.log(localStorage.getItem("token") );
            if (!localStorage.getItem("token")) {
              return <Login {...props}/>;
            } else {
              return <AdminRoute />;
            }
          }}
        />
        <Route path={"/"} component={Home} />
      </Switch>
    );
  }
}

export default App;
