import { Route, Switch } from "react-router-dom";
import React from "react";
import { CudHack } from "../component/CudHack";
import { Admin } from "../component/Admin";
import { NewHack } from "../component/NewHack";

export class AdminRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={"/admin/update/:id"} exact component={CudHack} />
        <Route path={"/admin/create"} component={NewHack} />
        <Route path={"/admin/"} component={Admin} />
      </Switch>
    );
  }
}

AdminRoute.propTypes = {};

